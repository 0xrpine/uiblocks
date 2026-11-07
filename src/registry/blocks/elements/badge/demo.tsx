"use client";

import { Badge } from "./badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge tone="solid">Solid</Badge>
      <Badge tone="soft">Soft</Badge>
      <Badge tone="outline">Outline</Badge>
      <Badge tone="soft" size="sm">
        Small
      </Badge>
    </div>
  );
}
