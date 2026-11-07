import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex max-w-full items-center justify-center gap-1 whitespace-nowrap rounded-full font-medium",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground",
        soft: "bg-muted text-foreground",
        outline: "border border-input bg-transparent text-foreground",
      },
      size: {
        sm: "h-5 px-2 text-[11px]",
        md: "h-6 px-2.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "soft",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, children, ...props }: BadgeProps) {
  return (
    <span className={badgeVariants({ variant, size, className })} {...props}>
      <span className="truncate">{children}</span>
    </span>
  );
}

export { badgeVariants };
