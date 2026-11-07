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
  const percent = max > 0 ? Math.round((clamped / max) * 100) : 0;

  return (
    <div className={`flex w-full min-w-0 flex-col gap-1.5 ${className ?? ""}`}>
      {label || showValue ? (
        <div className="flex items-center justify-between gap-3 text-sm">
          {label ? (
            <span className="min-w-0 break-words text-foreground">{label}</span>
          ) : (
            <span />
          )}
          {showValue ? (
            <span className="flex-none font-medium tabular-nums text-foreground" aria-hidden="true">
              {percent}%
            </span>
          ) : null}
        </div>
      ) : null}
      <ProgressPrimitive.Root
        value={clamped}
        max={max}
        aria-label={label ?? "Progress"}
        className="relative h-2 w-full overflow-hidden rounded-full bg-muted"
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
