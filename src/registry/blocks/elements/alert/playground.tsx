"use client";

import type * as React from "react";
import { Playground, type PlaygroundControl } from "@/components/playground";
import { Alert, AlertDescription, AlertTitle } from "./alert";

const controls: PlaygroundControl[] = [
  { type: "select", key: "variant", label: "Variant", options: [
    { value: "default", label: "Default" },
    { value: "destructive", label: "Destructive" },
  ], default: "default" },
  { type: "boolean", key: "hasIcon", label: "Show icon", default: true },
  { type: "boolean", key: "hasDescription", label: "Show description", default: true },
  { type: "text", key: "title", label: "Title", default: "Heads up", maxChars: 60 },
  { type: "text", key: "description", label: "Description", default: "You can add supporting text to the alert here.", maxChars: 120 },
];

export function AlertPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Alert
          variant={values.variant as React.ComponentProps<typeof Alert>["variant"]}
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
            <AlertDescription>{String(values.description)}</AlertDescription>
          ) : null}
        </Alert>
      )}
    />
  );
}
