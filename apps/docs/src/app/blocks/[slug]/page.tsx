import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOCK_UI } from "@/components/block-registry";
import { CodeBlock } from "@/components/code-block";
import { getBlock, listBlocks, readBlockFile } from "@/lib/blocks.server";

export function generateStaticParams() {
  return listBlocks().map((block) => ({ slug: block.name }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const block = getBlock(slug);
  return { title: block ? `${block.title} · UIblocks` : "UIblocks" };
}

export default async function BlockPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const block = getBlock(slug);
  if (!block) notFound();

  const ui = BLOCK_UI[slug];
  const source = readBlockFile(slug, block.files[0]);
  const sourceName = block.files[0];
  const installShadcn = `npx shadcn@latest add "https://uiblocks.cloud/r/${block.name}.json"`;
  const installJsrepo = `npx jsrepo@latest add https://uiblocks.cloud/r/${block.name}`;
  const installDeps = block.dependencies.length
    ? `npm install ${block.dependencies.join(" ")}`
    : null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        &larr; All blocks
      </Link>

      <header className="mt-6 mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{block.title}</h1>
          <span className="rounded-full border border-border px-2.5 py-0.5 text-xs uppercase tracking-wide text-muted-foreground">
            {block.category}
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-muted-foreground">{block.description}</p>
      </header>

      {ui ? (
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Playground</h2>
          <ui.Playground />
        </section>
      ) : null}

      {ui ? (
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Examples</h2>
          <div className="rounded-lg border border-border">
            <div className="flex min-h-48 items-center justify-center bg-background p-10">
              <ui.Demo />
            </div>
          </div>
        </section>
      ) : null}

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold">Source</h2>
        <CodeBlock code={source} filename={sourceName} />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold">Install</h2>
        <div className="flex flex-col gap-4">
          <CodeBlock code={installShadcn} filename="shadcn CLI" />
          <CodeBlock code={installJsrepo} filename="jsrepo" />
          {installDeps ? <CodeBlock code={installDeps} filename="dependencies" /> : null}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Or copy the source above straight into your project: it is plain React and Tailwind,
          MIT licensed, yours to edit.
        </p>
      </section>
    </div>
  );
}
