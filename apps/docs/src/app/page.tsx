export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-center gap-7 bg-neutral-950 px-6 text-center">
      <span className="rounded-full border border-neutral-800 px-3.5 py-1.5 text-xs font-medium tracking-wide text-neutral-400">
        In development
      </span>
      <h1 className="text-5xl font-semibold tracking-tight text-neutral-50 sm:text-6xl">
        UIblocks
      </h1>
      <p className="max-w-md text-lg leading-relaxed text-neutral-400">
        Open source UI blocks for React. Every block free under MIT and ships as
        source you own.
      </p>
      <a
        href="https://github.com/0xrpine/uiblocks"
        className="rounded-full bg-neutral-50 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-opacity hover:opacity-90"
      >
        View on GitHub
      </a>
      <p className="text-sm text-neutral-600">
        First batch of 20 blocks on the way.
      </p>
    </main>
  );
}
