import * as React from "react";

/** Decorative loading placeholder: hidden from assistive tech, visible to the eye. */
export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={`bg-skeleton animate-pulse ${className ?? "rounded-md"}`}
      {...props}
    />
  );
}
