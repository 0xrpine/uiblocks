"use client";

import { useEffect, useRef, useState } from "react";

export function CodeBlock({ code, filename }: { code: string; filename?: string }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const flash = (state: "copied" | "failed") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCopied(state === "copied");
    setFailed(state === "failed");
    timerRef.current = setTimeout(() => {
      setCopied(false);
      setFailed(false);
    }, 2000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      flash("copied");
    } catch {
      // execCommand("copy") is deprecated and on the removal path, but it is
      // the only fallback left for non-secure contexts and blocked permissions.
      try {
        const range = document.createRange();
        range.selectNodeContents(preRef.current ?? document.body);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        const ok = document.execCommand("copy");
        selection?.removeAllRanges();
        flash(ok ? "copied" : "failed");
      } catch {
        flash("failed");
      }
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2">
        <span className="font-mono text-xs text-muted-foreground">{filename ?? "source"}</span>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy code"
          className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span aria-hidden="true">{copied ? "Copied" : failed ? "Copy failed" : "Copy"}</span>
        </button>
      </div>
      <span role="status" className="sr-only">
        {copied ? "Code copied to clipboard" : failed ? "Failed to copy code" : ""}
      </span>
      <pre
        ref={preRef}
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
