"use client";

import { Progress } from "./progress";

export function ProgressDemo() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <Progress value={25} />
      <Progress value={60} showValue label="Uploading files" />
      <Progress value={90} label="Installing updates" />
    </div>
  );
}
