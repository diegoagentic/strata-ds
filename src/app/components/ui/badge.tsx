import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        solid: "border-transparent",
        soft: "border-transparent",
        outline: "bg-transparent",
      },
      color: {
        zinc: "",
        red: "",
        emerald: "",
        amber: "",
        blue: "",
      },
    },
    compoundVariants: [
      // Solid
      { variant: "solid", color: "zinc", class: "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200" },
      { variant: "solid", color: "red", class: "bg-red-600 text-white hover:bg-red-700" },
      { variant: "solid", color: "emerald", class: "bg-emerald-600 text-white hover:bg-emerald-700" },
      { variant: "solid", color: "amber", class: "bg-amber-500 text-white hover:bg-amber-600" },
      { variant: "solid", color: "blue", class: "bg-blue-600 text-white hover:bg-blue-700" },

      // Soft
      { variant: "soft", color: "zinc", class: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700" },
      { variant: "soft", color: "red", class: "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/70" },
      { variant: "soft", color: "emerald", class: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-950/70" },
      { variant: "soft", color: "amber", class: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-950/70" },
      { variant: "soft", color: "blue", class: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-950/70" },

      // Outline
      { variant: "outline", color: "zinc", class: "text-zinc-950 dark:text-zinc-50 border-zinc-200 dark:border-zinc-800" },
      { variant: "outline", color: "red", class: "text-red-700 dark:text-red-400 border-red-200 dark:border-red-800" },
      { variant: "outline", color: "emerald", class: "text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800" },
      { variant: "outline", color: "amber", class: "text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800" },
      { variant: "outline", color: "blue", class: "text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800" },
    ],
    defaultVariants: {
      variant: "solid",
      color: "zinc",
    },
  },
);

function Badge({
  className,
  variant,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, color }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
