"use client";

import { Avatar, AvatarGroup } from "./avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-4">
        <Avatar size="sm" fallback="SM" />
        <Avatar size="md" fallback="MD" />
        <Avatar size="lg" fallback="LG" />
        <Avatar size="xl" fallback="XL" />
      </div>
      <AvatarGroup>
        <Avatar size="md" fallback="OA" />
        <Avatar size="md" fallback="RK" />
        <Avatar size="md" fallback="LM" />
        <Avatar size="md" fallback="JT" />
        <Avatar size="md" fallback="PS" />
      </AvatarGroup>
    </div>
  );
}
