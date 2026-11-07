"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Input } from "./input";

const controls: PlaygroundControl[] = [
  { type: "select", key: "size", label: "Size", options: [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
  ], default: "md" },
  { type: "boolean", key: "hasLabel", label: "Label", default: true },
  { type: "boolean", key: "required", label: "Required", default: false },
  { type: "boolean", key: "hasHint", label: "Hint", default: true },
  { type: "boolean", key: "hasError", label: "Error", default: false },
  { type: "boolean", key: "disabled", label: "Disabled", default: false },
  { type: "text", key: "placeholder", label: "Placeholder", default: "olivia@example.com" },
];

export function InputPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Input
          size={values.size as React.ComponentProps<typeof Input>["size"]}
          label={Boolean(values.hasLabel) ? "Email" : undefined}
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
