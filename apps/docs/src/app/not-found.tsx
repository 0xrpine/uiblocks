export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-32 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      {/* Full reload on purpose: a client-side Link leaves the not-found subtree
          in the DOM after soft navigation. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        className="rounded-md border border-input px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        Browse blocks
      </a>
    </div>
  );
}
