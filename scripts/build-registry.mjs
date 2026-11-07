import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const blocksDir = path.join(root, "src", "registry", "blocks");
const outDir = path.join(root, "apps", "docs", "public", "r");

const BUILTIN_MODULES = new Set(["react", "react-dom"]);
const index = [];

for (const category of fs.readdirSync(blocksDir)) {
  const categoryPath = path.join(blocksDir, category);
  if (!fs.statSync(categoryPath).isDirectory()) continue;

  for (const name of fs.readdirSync(categoryPath)) {
    const dir = path.join(categoryPath, name);
    const metaPath = path.join(dir, "block.json");
    if (!fs.existsSync(metaPath)) continue;

    const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));

    const fileContents = new Map(
      (meta.files ?? []).map((file) => [file, fs.readFileSync(path.join(dir, file), "utf8")]),
    );

    // Guard: every non-relative external import used by shipped files must be
    // declared in dependencies, or the published manifest installs broken code.
    const declared = new Set([...(meta.dependencies ?? []), ...BUILTIN_MODULES]);
    const undeclared = new Set();
    for (const content of fileContents.values()) {
      const imports = content.matchAll(/from\s+["']([^"']+)["']/g);
      for (const match of imports) {
        const source = match[1];
        if (source.startsWith(".") || source.startsWith("@/")) continue;
        const pkg = source.startsWith("@") ? source.split("/").slice(0, 2).join("/") : source.split("/")[0];
        if (!declared.has(pkg)) undeclared.add(pkg);
      }
    }
    if (undeclared.size > 0) {
      throw new Error(
        `block "${name}": imports not declared in block.json dependencies: ${[...undeclared].join(", ")}`,
      );
    }

    const item = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      name: meta.name,
      type: "registry:component",
      title: meta.title,
      description: meta.description,
      dependencies: meta.dependencies ?? [],
      files: (meta.files ?? []).map((file) => ({
        path: path.posix.join("components", "uiblocks", file),
        type: "registry:component",
        content: fileContents.get(file),
      })),
    };

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, `${meta.name}.json`), JSON.stringify(item, null, 2) + "\n");

    index.push({
      name: meta.name,
      title: meta.title,
      description: meta.description,
      category,
      dependencies: item.dependencies,
    });
  }
}

fs.writeFileSync(path.join(outDir, "index.json"), JSON.stringify(index, null, 2) + "\n");

// Root registry manifest (shadcn registry format) so registry-based CLIs can
// resolve the whole catalog from /r/registry.json.
const registryManifest = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "uiblocks",
  homepage: "https://uiblocks.cloud",
  items: index.map((block) => ({
    name: block.name,
    type: "registry:component",
    title: block.title,
    description: block.description,
    dependencies: block.dependencies,
    files: [{ path: `${block.name}.json`, type: "registry:component" }],
  })),
};
fs.writeFileSync(path.join(outDir, "registry.json"), JSON.stringify(registryManifest, null, 2) + "\n");

console.log(`registry: wrote ${index.length} manifest(s) + registry.json to apps/docs/public/r/`);
