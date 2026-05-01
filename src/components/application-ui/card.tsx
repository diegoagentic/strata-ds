import * as React from "react";
import { GripVerticalIcon } from "lucide-react";

import { cn } from "@/utils";

interface CardProps extends React.ComponentProps<"div"> {
  variant?: 'default' | 'flat' | 'glass' | 'brand'
}

function Card({ className, variant = 'default', ...props }: CardProps) {
  const variants = {
    default: "bg-card shadow-sm",
    flat: "bg-muted shadow-none",
    glass: "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-lg border border-white/20 dark:border-white/10",
    brand: "bg-brand-50 shadow-sm"
  }

  return (
    <div
      data-slot="card"
      className={cn(
        "text-foreground flex flex-col gap-6 rounded-2xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-4 duration-500",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

interface CardHeaderProps extends React.ComponentProps<"div"> {
  draggable?: boolean;
}

function CardHeader({ className, draggable, children, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    >
      {children}
      {draggable && (
        <CardAction>
          <GripVerticalIcon className="text-muted-foreground opacity-40 hover:opacity-70 cursor-grab active:cursor-grabbing size-4" />
        </CardAction>
      )}
    </div>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      data-slot="card-title"
      className={cn("leading-none", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
