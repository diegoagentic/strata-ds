import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '@/utils';
const filterPanelVariants = cva("flex flex-col gap-6", {
  variants: {
    mode: {
      sidebar: "w-60 shrink-0",
      sheet: "w-full",
    },
  },
  defaultVariants: {
    mode: "sidebar",
  },
});

export interface FilterPanelProps
  extends React.ComponentProps<"div">,
  VariantProps<typeof filterPanelVariants> { }

function FilterPanel({ className, mode, ...props }: FilterPanelProps) {
  return (
    <div
      data-slot="filter-panel"
      className={cn(filterPanelVariants({ mode, className }))}
      {...props}
    />
  );
}

function FilterPanelHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="filter-panel-header"
      className={cn("flex items-center justify-between gap-4", className)}
      {...props}
    />
  );
}

function FilterPanelHeaderTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="filter-panel-header-title"
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function FilterPanelSection({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="filter-panel-section"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function FilterPanelSectionTrigger({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="filter-panel-section-trigger"
      className={cn(
        "flex w-full items-center justify-between py-2 text-sm font-medium text-foreground transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    />
  );
}

function FilterPanelSectionContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="filter-panel-section-content"
      className={cn("mt-1 flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function FilterPanelOption({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="filter-panel-option"
      className={cn("flex cursor-pointer items-center gap-2 py-1", className)}
      {...props}
    />
  );
}

export {
  FilterPanel,
  FilterPanelHeader,
  FilterPanelHeaderTitle,
  FilterPanelSection,
  FilterPanelSectionTrigger,
  FilterPanelSectionContent,
  FilterPanelOption,
};
