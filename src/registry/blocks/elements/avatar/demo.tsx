"use client";

import { Avatar, AvatarGroup } from "./avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-4">
        <Avatar size="sm" fallback="AK" />
        <Avatar size="md" fallback="MJ" />
        <Avatar size="lg" fallback="SO" />
        <Avatar size="xl" fallback="TL" />
      </div>
      <AvatarGroup size="md">
        <Avatar size="md" className="ring-2 ring-background" fallback="OA" />
        <Avatar size="md" className="ring-2 ring-background" fallback="RK" />
        <Avatar size="md" className="ring-2 ring-background" fallback="LM" />
        <Avatar size="md" className="ring-2 ring-background" fallback="JT" />
        <Avatar size="md" className="ring-2 ring-background" fallback="PS" />
      </AvatarGroup>
    </div>
  );
}
