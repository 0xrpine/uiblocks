"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Textarea } from "./textarea";

const controls: PlaygroundControl[] = [
  { type: "select", key: "rowsHeight", label: "Size", options: [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
  ], default: "md" },
  { type: "boolean", key: "hasLabel", label: "Label", default: true },
  { type: "boolean", key: "required", label: "Required", default: false },
  { type: "boolean", key: "hasHint", label: "Hint", default: true },
  { type: "boolean", key: "hasError", label: "Error", default: false },
  { type: "text", key: "placeholder", label: "Placeholder", default: "Write your message..." },
];

export function TextareaPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Textarea
          rowsHeight={values.rowsHeight as React.ComponentProps<typeof Textarea>["rowsHeight"]}
          label={Boolean(values.hasLabel) ? "Message" : undefined}
          required={Boolean(values.required)}
          maxLength={500}
          placeholder={String(values.placeholder)}
          hint={Boolean(values.hasHint) && !values.hasError ? "Up to 500 characters." : undefined}
          error={Boolean(values.hasError) ? "This field cannot be empty." : undefined}
        />
      )}
    />
  );
}
