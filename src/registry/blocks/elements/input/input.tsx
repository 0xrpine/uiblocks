"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const inputVariants = cva(
  "w-full rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground transition-colors outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive-text/25",
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-11 px-3.5 text-sm",
      },
      hasLeadingIcon: {
        true: "pl-9",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      hasLeadingIcon: false,
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  leadingIcon?: React.ReactNode;
}

export function Input({
  className,
  size,
  hasLeadingIcon,
  label,
  hint,
  error,
  required,
  leadingIcon,
  id,
  ...props
}: InputProps) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium text-foreground">
          {label}
          {required ? (
            <span aria-hidden="true" className="text-muted-foreground">
              {" "}
              *
            </span>
          ) : null}
        </label>
      ) : null}
      <div className="relative">
        {leadingIcon ? (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground [&>svg]:size-4">
            {leadingIcon}
          </span>
        ) : null}
        <input
          id={inputId}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={inputVariants({ size, hasLeadingIcon: Boolean(leadingIcon), className })}
          {...props}
        />
      </div>
      {error ? (
        <p id={describedBy} className="text-sm text-destructive-text">
          {error}
        </p>
      ) : hint ? (
        <p id={describedBy} className="text-sm text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export { inputVariants };
