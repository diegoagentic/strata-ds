"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { cn } from '@/utils';
function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border bg-background/30 data-[state=checked]:bg-brand-500 data-[state=checked]:text-zinc-900 dark:data-[state=checked]:bg-brand-500 dark:data-[state=checked]:text-zinc-900 data-[state=checked]:border-brand-200 dark:data-[state=checked]:border-brand-500 focus-visible:border-brand-500 dark:focus-visible:border-brand-500 focus-visible:ring-brand-500/20 dark:focus-visible:ring-brand-500/20 aria-invalid:ring-red-600/20 dark:aria-invalid:ring-red-500/20 aria-invalid:border-red-600 dark:aria-invalid:border-red-500 size-4 shrink-0 rounded-[4px] border-zinc-300 dark:border-zinc-700 shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5 text-white dark:text-zinc-900" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
