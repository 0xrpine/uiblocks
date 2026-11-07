"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Progress } from "./progress";

const controls: PlaygroundControl[] = [
  { type: "range", key: "value", label: "Value %", min: 0, max: 100, default: 60 },
  { type: "boolean", key: "showValue", label: "Show %", default: true },
  { type: "text", key: "label", label: "Label", default: "Uploading files" },
];

export function ProgressPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Progress
          className="mx-auto max-w-sm"
          value={Number(values.value)}
          showValue={Boolean(values.showValue)}
          label={String(values.label || "") || undefined}
        />
      )}
    />
  );
}
