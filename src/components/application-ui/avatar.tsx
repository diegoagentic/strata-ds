"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from '@/utils';
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "size-6 text-xs",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-12 text-base",
        xl: "size-16 text-lg",
        "2xl": "size-24 text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function Avatar({
  className,
  size,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

const avatarFallbackVariants = cva(
  "font-semibold flex size-full items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        default: "bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-500",
        muted: "bg-muted text-foreground",
        gradient: "bg-gradient-to-br from-blue-500 to-purple-600 text-white",
        indigo:
          "bg-indigo-500/20 text-indigo-400 dark:bg-indigo-500/20 dark:text-indigo-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function AvatarFallback({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> & VariantProps<typeof avatarFallbackVariants>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(avatarFallbackVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
