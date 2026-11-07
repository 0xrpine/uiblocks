"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Skeleton } from "./skeleton";

const controls: PlaygroundControl[] = [
  { type: "range", key: "width", label: "Width %", min: 20, max: 100, default: 100 },
  { type: "range", key: "height", label: "Height px", min: 8, max: 64, default: 16 },
  { type: "select", key: "shape", label: "Shape", options: ["rounded-md", "rounded-full", "rounded-none"], default: "rounded-md" },
];

export function SkeletonPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Skeleton
          className={`${values.shape} h-6`}
          style={{ width: `${values.width}%`, height: `${Number(values.height)}px` }}
        />
      )}
    />
  );
}
