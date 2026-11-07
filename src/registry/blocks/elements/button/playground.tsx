"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Button } from "./button";

const controls: PlaygroundControl[] = [
  { type: "select", key: "variant", label: "Variant", options: ["solid", "soft", "outline", "ghost", "destructive"], default: "solid" },
  { type: "select", key: "size", label: "Size", options: ["sm", "md", "lg"], default: "md" },
  { type: "boolean", key: "disabled", label: "Disabled", default: false },
  { type: "text", key: "label", label: "Label", default: "Get started" },
];

export function ButtonPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Button
          variant={values.variant as React.ComponentProps<typeof Button>["variant"]}
          size={values.size as React.ComponentProps<typeof Button>["size"]}
          disabled={Boolean(values.disabled)}
        >
          {String(values.label)}
        </Button>
      )}
    />
  );
}
