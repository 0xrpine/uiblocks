import fs from "node:fs";
import path from "node:path";

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

const BLOCKS_DIR = path.join(process.cwd(), "..", "..", "src", "registry", "blocks");

export function listBlocks(): BlockMeta[] {
  const metas: BlockMeta[] = [];
  const categories = fs.readdirSync(BLOCKS_DIR);
  for (const category of categories) {
    const categoryPath = path.join(BLOCKS_DIR, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;
    for (const name of fs.readdirSync(categoryPath)) {
      const metaPath = path.join(categoryPath, name, "block.json");
      if (!fs.existsSync(metaPath)) continue;
      const raw = JSON.parse(fs.readFileSync(metaPath, "utf8")) as Omit<BlockMeta, "category">;
      metas.push({ category, ...raw });
    }
  }
  return metas.sort((a, b) => (a.category + a.name).localeCompare(b.category + b.name));
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
