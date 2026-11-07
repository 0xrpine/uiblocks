"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Badge } from "./badge";

const controls: PlaygroundControl[] = [
  { type: "select", key: "tone", label: "Tone", options: [
    { value: "solid", label: "Solid" },
    { value: "soft", label: "Soft" },
    { value: "outline", label: "Outline" },
  ], default: "soft" },
  { type: "select", key: "size", label: "Size", options: [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
  ], default: "md" },
  { type: "text", key: "label", label: "Label", default: "Label" },
];

export function BadgePlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Badge tone={values.tone as React.ComponentProps<typeof Badge>["tone"]} size={values.size as React.ComponentProps<typeof Badge>["size"]}>
          {String(values.label)}
        </Badge>
      )}
    />
  );
}
