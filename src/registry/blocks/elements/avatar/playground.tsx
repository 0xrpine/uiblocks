"use client";

import { Playground, type PlaygroundControl } from "@/components/playground";
import { Avatar } from "./avatar";

const controls: PlaygroundControl[] = [
  { type: "select", key: "size", label: "Size", options: ["sm", "md", "lg", "xl"], default: "md" },
  { type: "text", key: "fallback", label: "Initials", default: "RK" },
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
