"use client";

import type * as React from "react";
import { Playground, type PlaygroundControl } from "@/components/playground";
import { Button } from "./button";

const controls: PlaygroundControl[] = [
  { type: "select", key: "variant", label: "Variant", options: [
    { value: "solid", label: "Solid" },
    { value: "soft", label: "Soft" },
    { value: "outline", label: "Outline" },
    { value: "ghost", label: "Ghost" },
    { value: "destructive", label: "Destructive" },
  ], default: "solid" },
  { type: "select", key: "size", label: "Size", options: [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
  ], default: "md" },
  { type: "boolean", key: "loading", label: "Loading", default: false },
  { type: "boolean", key: "disabled", label: "Disabled", default: false },
  { type: "text", key: "label", label: "Label", default: "Get started", maxChars: 40 },
];

export function ButtonPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Button
          variant={values.variant as React.ComponentProps<typeof Button>["variant"]}
          size={values.size as React.ComponentProps<typeof Button>["size"]}
          loading={Boolean(values.loading)}
          disabled={Boolean(values.disabled)}
        >
          {String(values.label)}
        </Button>
      )}
    />
  );
}
