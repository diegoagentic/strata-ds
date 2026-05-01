import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '@/utils';
const sectionCardVariants = cva(
  "flex flex-col rounded-2xl border border-border text-card-foreground shadow-sm transition-all animate-in fade-in slide-in-from-bottom-4 duration-500",
  {
    variants: {
      surface: {
        default: "bg-card",
        muted: "bg-muted/30",
        elevated: "bg-card shadow-md",
        glass: "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10",
      },
      density: {
        compact: "p-4 gap-3",
        default: "p-6 gap-4",
        comfortable: "p-8 gap-6",
      },
      interactive: {
        none: "",
        hover: "hover:shadow-md",
        clickable: "cursor-pointer hover:shadow-md hover:border-primary/40",
      },
    },
    defaultVariants: {
      surface: "default",
      density: "default",
      interactive: "none",
    },
  }
);

export interface SectionCardProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof sectionCardVariants> { }

function SectionCard({
  className,
  surface,
  density,
  interactive,
  ...props
}: SectionCardProps) {
  return (
    <div
      data-slot="section-card"
      className={cn(sectionCardVariants({ surface, density, interactive, className }))}
      {...props}
    />
  );
}

export interface SectionCardHeaderProps extends React.ComponentProps<"div"> {
  divider?: "bottom";
}

function SectionCardHeader({
  className,
  divider,
  ...props
}: SectionCardHeaderProps) {
  return (
    <div
      data-slot="section-card-header"
      className={cn(
        "flex items-start justify-between gap-4",
        divider === "bottom" && "pb-4 border-b border-border",
        className
      )}
      {...props}
    />
  );
}

export interface SectionCardBodyProps extends React.ComponentProps<"div"> {
  scrollable?: boolean;
}

function SectionCardBody({
  className,
  scrollable,
  ...props
}: SectionCardBodyProps) {
  return (
    <div
      data-slot="section-card-body"
      className={cn(
        "min-w-0",
        scrollable && "overflow-auto scrollbar-minimal",
        className
      )}
      {...props}
    />
  );
}

export interface SectionCardFooterProps extends React.ComponentProps<"div"> {
  divider?: "top";
}

function SectionCardFooter({
  className,
  divider,
  ...props
}: SectionCardFooterProps) {
  return (
    <div
      data-slot="section-card-footer"
      className={cn(
        "flex items-center gap-2",
        divider === "top" && "pt-4 border-t border-border",
        className
      )}
      {...props}
    />
  );
}

export { SectionCard, SectionCardHeader, SectionCardBody, SectionCardFooter };
