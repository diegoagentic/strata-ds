import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-white text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50 border-zinc-200 dark:border-zinc-800",
        destructive:
          "border-error/50/50 text-error dark:border-error/50 [&>svg]:text-error dark:border-error/30/50 dark:text-error dark:dark:border-error/30 dark:text-error bg-error-light dark:bg-error/5",
        success:
          "border-success/50 text-success dark:border-success/50 [&>svg]:text-success dark:text-success bg-success-light dark:bg-success/5",
        warning:
          "border-warning/50 text-warning dark:border-warning [&>svg]:text-warning dark:text-warning bg-warning-light dark:bg-warning/10",
        info:
          "border-info/50/50 text-info dark:border-info/50 [&>svg]:text-info dark:text-info bg-info-light dark:bg-info/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-zinc-500 dark:text-zinc-400 col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
