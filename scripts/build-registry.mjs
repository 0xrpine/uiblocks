import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const blocksDir = path.join(root, "src", "registry", "blocks");
const outDir = path.join(root, "apps", "docs", "public", "r");

const index = [];

for (const category of fs.readdirSync(blocksDir)) {
  const categoryPath = path.join(blocksDir, category);
  if (!fs.statSync(categoryPath).isDirectory()) continue;

  for (const name of fs.readdirSync(categoryPath)) {
    const dir = path.join(categoryPath, name);
    const metaPath = path.join(dir, "block.json");
    if (!fs.existsSync(metaPath)) continue;

    const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));

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
        content: fs.readFileSync(path.join(dir, file), "utf8"),
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
console.log(`registry: wrote ${index.length} manifest(s) to apps/docs/public/r/`);
