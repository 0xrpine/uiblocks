"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Avatar } from "./avatar";

const controls: PlaygroundControl[] = [
  { type: "select", key: "size", label: "Size", options: [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "xl", label: "Extra large" },
  ], default: "md" },
  { type: "text", key: "fallback", label: "Initials", default: "RK", maxChars: 2, uppercase: true },
];

export function AvatarPlayground() {
  return (
    <Playground
      controls={controls}
      render={(values) => (
        <Avatar size={values.size as React.ComponentProps<typeof Avatar>["size"]} fallback={String(values.fallback)} />
      )}
    />
  );
}
