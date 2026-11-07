"use client";

import { Skeleton } from "./skeleton";

export function SkeletonDemo() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 animate-pulse rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-32 animate-pulse rounded-md" />
          <Skeleton className="h-3 w-24 animate-pulse rounded-md" />
        </div>
      </div>
      <Skeleton className="h-4 w-full animate-pulse rounded-md" />
      <Skeleton className="h-4 w-4/5 animate-pulse rounded-md" />
      <Skeleton className="h-4 w-2/3 animate-pulse rounded-md" />
    </div>
  );
}
