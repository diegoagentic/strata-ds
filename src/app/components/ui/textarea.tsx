import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none border-zinc-200 dark:border-zinc-800 placeholder:text-zinc-500 text-zinc-900 dark:text-zinc-50 focus-visible:border-brand-500 dark:focus-visible:border-brand-400 focus-visible:ring-brand-500/20 dark:focus-visible:ring-brand-400/20 aria-invalid:ring-error/20 dark:aria-invalid:ring-error/20 aria-invalid:border-error/50 dark:aria-invalid:border-error/50 dark:bg-zinc-900/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-white transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
