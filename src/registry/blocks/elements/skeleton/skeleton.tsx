import * as React from "react";

/** Decorative loading placeholder: hidden from assistive tech, visible to the eye. */
export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={`bg-skeleton ${className ?? "animate-pulse rounded-md"}`}
      {...props}
    />
  );
}
