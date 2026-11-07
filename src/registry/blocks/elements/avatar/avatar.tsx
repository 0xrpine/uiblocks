"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const avatarSizeClasses = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-12 text-base",
  xl: "size-16 text-lg",
} as const;

const avatarVariants = cva("relative flex shrink-0 overflow-hidden rounded-full", {
  variants: {
    size: avatarSizeClasses,
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
      <AvatarPrimitive.Fallback className="flex size-full items-center justify-center border border-border bg-muted text-foreground">
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  max?: number;
  size?: NonNullable<AvatarProps["size"]>;
}

export function AvatarGroup({ children, className, max = 3, size = "md", ...props }: AvatarGroupProps) {
  const items = React.Children.toArray(children);
  const safeMax = Math.max(0, max);
  const visible = items.slice(0, safeMax);
  const rest = items.length - visible.length;
  return (
    <div className={`flex -space-x-2 ${className ?? ""}`} {...props}>
      {visible}
      {rest > 0 ? (
        <span
          className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-muted font-medium text-foreground ${avatarSizeClasses[size]}`}
        >
          +{rest}
        </span>
      ) : null}
    </div>
  );
}

export { avatarVariants };
