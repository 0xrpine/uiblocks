import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full font-medium",
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

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={badgeVariants({ variant, size, className })} {...props} />;
}

export { badgeVariants };
