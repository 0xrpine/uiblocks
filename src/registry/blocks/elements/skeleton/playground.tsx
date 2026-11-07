"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Skeleton } from "./skeleton";

const controls: PlaygroundControl[] = [
  { type: "select", key: "radius", label: "Radius", options: [
    { value: "rounded-sm", label: "Small" },
    { value: "rounded-md", label: "Medium" },
    { value: "rounded-lg", label: "Large" },
    { value: "rounded-full", label: "Fully rounded" },
  ], default: "rounded-md" },
  { type: "boolean", key: "animate", label: "Animate", default: true },
];

export function SkeletonPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
          <div className="flex items-center gap-3">
            <Skeleton className={`size-10 rounded-full ${Boolean(values.animate) ? "animate-pulse" : ""}`} />
            <div className="flex flex-col gap-2">
              <Skeleton className={`${values.radius} h-4 w-32 ${Boolean(values.animate) ? "animate-pulse" : ""}`} />
              <Skeleton className={`${values.radius} h-3 w-24 ${Boolean(values.animate) ? "animate-pulse" : ""}`} />
            </div>
          </div>
          <Skeleton className={`${values.radius} h-4 w-full ${Boolean(values.animate) ? "animate-pulse" : ""}`} />
          <Skeleton className={`${values.radius} h-4 w-4/5 ${Boolean(values.animate) ? "animate-pulse" : ""}`} />
          <Skeleton className={`${values.radius} h-4 w-2/3 ${Boolean(values.animate) ? "animate-pulse" : ""}`} />
        </div>
      )}
    />
  );
}
