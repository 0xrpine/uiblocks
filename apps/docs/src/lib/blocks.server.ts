import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export interface BlockMeta {
  name: string;
  title: string;
  description: string;
  category: string;
  framework?: string;
  dependencies: string[];
  files: string[];
  usage?: string;
}

const BLOCKS_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
  "..",
  "..",
  "src",
  "registry",
  "blocks",
);

let cache: BlockMeta[] | null = null;

export function listBlocks(): BlockMeta[] {
  if (cache) return cache;
  const metas: BlockMeta[] = [];
  const categories = fs.readdirSync(BLOCKS_DIR);
  for (const category of categories) {
    const categoryPath = path.join(BLOCKS_DIR, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;
    for (const name of fs.readdirSync(categoryPath)) {
      const metaPath = path.join(categoryPath, name, "block.json");
      if (!fs.existsSync(metaPath)) continue;
      const raw = fs.readFileSync(metaPath, "utf8");
      let parsed: Omit<BlockMeta, "category">;
      try {
        parsed = JSON.parse(raw) as Omit<BlockMeta, "category">;
      } catch (error) {
        throw new Error(`Invalid block.json at ${metaPath}: ${(error as Error).message}`);
      }
      metas.push({ category, ...parsed });
    }
  }
  cache = metas.sort((a, b) => (a.category + a.name).localeCompare(b.category + b.name));
  return cache;
}

export function getBlock(name: string): BlockMeta | undefined {
  return listBlocks().find((block) => block.name === name);
}

export function readBlockFile(name: string, file: string): string {
  const block = getBlock(name);
  if (!block) throw new Error(`Unknown block: ${name}`);
  const filePath = path.join(BLOCKS_DIR, block.category, name, file);
  return fs.readFileSync(filePath, "utf8");
}
