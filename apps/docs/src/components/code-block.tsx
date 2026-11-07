"use client";

import { useState } from "react";

export function CodeBlock({ code, filename }: { code: string; filename?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2">
        <span className="font-mono text-xs text-muted-foreground">{filename ?? "source"}</span>
        <button
          type="button"
          onClick={copy}
          className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre
        role="region"
        aria-label={filename ? `Code sample: ${filename}` : "Code sample"}
        tabIndex={0}
        className="overflow-x-auto bg-muted/40 p-4 font-mono text-xs leading-relaxed text-foreground"
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
