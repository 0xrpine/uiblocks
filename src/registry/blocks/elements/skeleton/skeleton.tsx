import * as React from "react";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`animate-pulse bg-muted ${className ?? "rounded-md"}`} {...props} />;
}
