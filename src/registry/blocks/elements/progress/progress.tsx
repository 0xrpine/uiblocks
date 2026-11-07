"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value: number;
  max?: number;
  showValue?: boolean;
  label?: string;
}

export function Progress({ value, max = 100, showValue = false, label, className, ...props }: ProgressProps) {
  const clamped = Math.min(Math.max(value, 0), max);
  const percent = Math.round((clamped / max) * 100);

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label || showValue ? (
        <div className="flex items-center justify-between text-sm">
          {label ? <span className="text-foreground">{label}</span> : <span />}
          {showValue ? (
            <span className="font-medium tabular-nums text-foreground" aria-hidden="true">
              {percent}%
            </span>
          ) : null}
        </div>
      ) : null}
      <ProgressPrimitive.Root
        value={clamped}
        max={max}
        aria-label={label ?? `Progress: ${percent}%`}
        className={`relative h-2 w-full overflow-hidden rounded-full bg-muted ${className ?? ""}`}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="size-full flex-1 bg-primary transition-transform duration-300"
          style={{ transform: `translateX(-${100 - percent}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
}
