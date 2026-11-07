"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Badge } from "./badge";

const controls: PlaygroundControl[] = [
  { type: "select", key: "tone", label: "Tone", options: ["solid", "soft", "outline"], default: "soft" },
  { type: "select", key: "size", label: "Size", options: ["sm", "md"], default: "md" },
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
