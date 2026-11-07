"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Alert, AlertDescription, AlertTitle } from "./alert";

const controls: PlaygroundControl[] = [
  { type: "select", key: "tone", label: "Tone", options: [
    { value: "default", label: "Default" },
    { value: "destructive", label: "Destructive" },
  ], default: "default" },
  { type: "boolean", key: "hasIcon", label: "Icon", default: true },
  { type: "boolean", key: "hasDescription", label: "Description", default: true },
  { type: "text", key: "title", label: "Title", default: "Heads up" },
];

export function AlertPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Alert
          tone={values.tone as React.ComponentProps<typeof Alert>["tone"]}
          icon={
            Boolean(values.hasIcon) ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            ) : undefined
          }
        >
          <AlertTitle>{String(values.title)}</AlertTitle>
          {Boolean(values.hasDescription) ? (
            <AlertDescription>You can add supporting text to the alert here.</AlertDescription>
          ) : null}
        </Alert>
      )}
    />
  );
}
