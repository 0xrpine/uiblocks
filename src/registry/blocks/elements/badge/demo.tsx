"use client";

import { Badge } from "./badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="soft">Soft</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="soft" size="sm">
        Small
      </Badge>
    </div>
  );
}
