import { cn } from "@/utils/cn";
import { type ReactNode } from "react";

interface NavbarFloatingProps {
  children: ReactNode;
  className?: string;
}

export function NavbarFloating({ children, className }: NavbarFloatingProps) {
  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 min-w-[60vw]",
        "bg-card/80 backdrop-blur-xl border border-border rounded-full shadow-lg",
        "flex items-center gap-2 px-4 py-2",
        className
      )}
    >
      {children}
    </nav>
  );
}
