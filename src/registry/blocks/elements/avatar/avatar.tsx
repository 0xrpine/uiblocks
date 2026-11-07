"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva("relative flex shrink-0 overflow-hidden rounded-full", {
  variants: {
    size: {
      sm: "size-8",
      md: "size-10",
      lg: "size-12",
      xl: "size-16",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback: string;
}

export function Avatar({ className, size, src, alt, fallback, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root className={avatarVariants({ size, className })} {...props}>
      {src ? <AvatarPrimitive.Image src={src} alt={alt ?? fallback} className="aspect-square size-full object-cover" /> : null}
      <AvatarPrimitive.Fallback className="flex size-full items-center justify-center bg-muted text-muted-foreground">
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

export function AvatarGroup({
  children,
  className,
  max = 3,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const items = React.Children.toArray(children);
  const visible = items.slice(0, max);
  const rest = items.length - visible.length;
  return (
    <div className={`flex -space-x-2 ${className ?? ""}`}>
      {visible}
      {rest > 0 ? (
        <span className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-muted text-xs font-medium text-muted-foreground">
          +{rest}
        </span>
      ) : null}
    </div>
  );
}

export { avatarVariants };
