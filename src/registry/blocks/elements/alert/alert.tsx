import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "grid w-full grid-cols-[auto_1fr] items-start gap-x-3 rounded-lg border px-4 py-3 text-sm [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      tone: {
        default: "border-border bg-card text-card-foreground",
        destructive: "border-destructive/30 bg-destructive/10 text-foreground [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
}

export function Alert({ className, tone, icon, children, ...props }: AlertProps) {
  return (
    <div role="alert" className={alertVariants({ tone, className })} {...props}>
      {icon}
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className="font-medium leading-none" {...props} />;
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className="text-muted-foreground [&_p]:leading-relaxed" {...props} />;
}

export { alertVariants };
