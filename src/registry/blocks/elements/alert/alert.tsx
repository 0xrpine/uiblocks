import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const alertVariants = cva(
  "grid w-full grid-cols-[auto_1fr] items-start gap-x-3 rounded-lg border px-4 py-3 text-sm [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground",
        destructive:
          "border-destructive/30 bg-destructive/10 text-foreground [&>svg]:text-destructive [&_[data-alert-description]]:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
}

export function Alert({ className, variant, icon, children, ...props }: AlertProps) {
  return (
    <div role="alert" className={alertVariants({ variant, className })} {...props}>
      {icon}
      <div className="flex min-w-0 flex-col gap-1 break-words">{children}</div>
    </div>
  );
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`font-medium leading-none ${className ?? ""}`} {...props} />;
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-alert-description="true"
      className={`text-muted-foreground [&_p]:leading-relaxed ${className ?? ""}`}
      {...props}
    />
  );
}

export { alertVariants };
