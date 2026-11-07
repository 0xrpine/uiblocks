import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const textareaVariants = cva(
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive-text/25",
  {
    variants: {
      rowsHeight: {
        sm: "min-h-16",
        md: "min-h-24",
        lg: "min-h-32",
      },
    },
    defaultVariants: {
      rowsHeight: "md",
    },
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

export function Textarea({
  className,
  rowsHeight,
  label,
  hint,
  error,
  required,
  id,
  ...props
}: TextareaProps) {
  const autoId = React.useId();
  const inputId = id ?? props.name ?? autoId;
  const describedBy = error ? `${inputId ?? "textarea"}-error` : hint ? `${inputId ?? "textarea"}-hint` : undefined;

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
      <textarea
        id={inputId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={textareaVariants({ rowsHeight, className })}
        {...props}
      />
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

export { textareaVariants };
