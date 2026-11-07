import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-32 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="rounded-md border border-input px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        Browse blocks
      </Link>
    </div>
  );
}
