"use client";

import type * as React from "react";
import { Playground, type PlaygroundControl } from "@/components/playground";
import { Input } from "./input";

const controls: PlaygroundControl[] = [
  { type: "select", key: "size", label: "Size", options: [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
  ], default: "md" },
  { type: "boolean", key: "hasLabel", label: "Label", default: true },
  { type: "boolean", key: "hasIcon", label: "Leading icon", default: false },
  { type: "boolean", key: "required", label: "Required", default: false },
  { type: "boolean", key: "hasHint", label: "Hint", default: true },
  { type: "boolean", key: "hasError", label: "Error", default: false },
  { type: "boolean", key: "disabled", label: "Disabled", default: false },
  { type: "text", key: "placeholder", label: "Placeholder", default: "olivia@example.com", maxChars: 40 },
];

const mailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export function InputPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Input
          className="max-w-sm"
          size={values.size as React.ComponentProps<typeof Input>["size"]}
          label={Boolean(values.hasLabel) ? "Email" : undefined}
          aria-label={Boolean(values.hasLabel) ? undefined : "Email"}
          leadingIcon={Boolean(values.hasIcon) ? mailIcon : undefined}
          required={Boolean(values.required)}
          placeholder={String(values.placeholder)}
          hint={Boolean(values.hasHint) && !values.hasError ? "We will never share your email." : undefined}
          error={Boolean(values.hasError) ? "Please enter a valid email address." : undefined}
          disabled={Boolean(values.disabled)}
        />
      )}
    />
  );
}
