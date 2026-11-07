"use client";

import { useState, type ReactNode } from "react";

export type PlaygroundSelectOption = { value: string; label: string };

export type PlaygroundControl =
  | { type: "select"; key: string; label: string; options: PlaygroundSelectOption[]; default: string }
  | { type: "boolean"; key: string; label: string; default: boolean }
  | { type: "text"; key: string; label: string; default: string; maxChars?: number; uppercase?: boolean }
  | { type: "range"; key: string; label: string; min: number; max: number; step?: number; default: number };

export type PlaygroundValues = Record<string, string | number | boolean>;

function optionText(option: PlaygroundSelectOption): string {
  return typeof option === "string" ? option : (option.label ?? option.value);
}

function valuesFrom(controls: PlaygroundControl[]): PlaygroundValues {
  return Object.fromEntries(controls.map((c) => [c.key, c.default]));
}

export function Playground({
  controls,
  render,
}: {
  controls: PlaygroundControl[];
  render: (values: PlaygroundValues) => ReactNode;
}) {
  const [values, setValues] = useState<PlaygroundValues>(() => valuesFrom(controls));

  const set = (key: string, value: string | number | boolean) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex min-h-48 items-center justify-center bg-background p-10">
        {render(values)}
      </div>
      <div className="grid gap-x-6 gap-y-3 border-t border-border bg-card p-4 sm:grid-cols-2 lg:grid-cols-3">
        {controls.map((control) => {
          const value = values[control.key];
          return (
            <label key={control.key} className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">{control.label}</span>
              {control.type === "select" ? (
                <select
                  value={String(value)}
                  onChange={(e) => set(control.key, e.target.value)}
                  className="h-8 rounded-md border border-input bg-background px-2 text-foreground"
                >
                  {control.options.map((option) => (
                    <option key={optionText(option)} value={typeof option === "string" ? option : option.value}>
                      {optionText(option)}
                    </option>
                  ))}
                </select>
              ) : control.type === "boolean" ? (
                <button
                  type="button"
                  role="switch"
                  aria-checked={Boolean(value)}
                  onClick={() => set(control.key, !value)}
                  className={`relative h-5 w-9 rounded-full transition-colors ${value ? "bg-primary" : "bg-input"}`}
                >
                  <span
                    className={`absolute top-0.5 size-4 rounded-full bg-background transition-all ${value ? "left-4.5" : "left-0.5"}`}
                  />
                </button>
              ) : control.type === "text" ? (
                <input
                  type="text"
                  value={String(value)}
                  maxLength={control.maxChars}
                  onChange={(e) => {
                    let next = e.target.value;
                    if (control.uppercase) next = next.toUpperCase();
                    set(control.key, next);
                  }}
                  className="h-8 w-32 rounded-md border border-input bg-background px-2 text-foreground"
                />
              ) : (
                <input
                  type="range"
                  min={control.min}
                  max={control.max}
                  step={control.step ?? 1}
                  value={Number(value)}
                  onChange={(e) => set(control.key, Number(e.target.value))}
                  className="w-28 accent-[var(--primary)]"
                />
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
}
