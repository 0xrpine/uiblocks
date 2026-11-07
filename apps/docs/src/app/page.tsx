import Link from "next/link";
import { listBlocks } from "@/lib/blocks.server";

export default function Home() {
  const blocks = listBlocks();

  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="flex flex-col items-center gap-6 py-24 text-center">
        <span className="rounded-full border border-border px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
          Open source &middot; MIT
        </span>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">UIblocks</h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Copy-paste UI blocks for React. Every block free under MIT and ships as source
          you own.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="#blocks"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Browse blocks
          </Link>
          <a
            href="https://github.com/0xrpine/uiblocks"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            GitHub
          </a>
        </div>
      </section>

      <section id="blocks" className="scroll-mt-20 pb-24">
        <h2 className="mb-6 text-xl font-semibold tracking-tight">Blocks</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <Link
              key={block.name}
              href={`/blocks/${block.name}`}
              className="group rounded-lg border border-border p-5 transition-colors hover:bg-muted/50"
            >
              <div className="mb-2 flex items-center gap-2">
                <h3 className="font-medium">{block.title}</h3>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                  {block.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{block.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
