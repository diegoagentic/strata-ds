import { cn } from "@/utils/cn";
import { type ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl" | "full";
}

const maxWidthMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
};

export function PageLayout({
  children,
  className,
  maxWidth = "7xl",
}: PageLayoutProps) {
  return (
    <main
      className={cn(
        "pt-24 px-4 mx-auto space-y-6",
        maxWidthMap[maxWidth],
        className
      )}
    >
      {children}
    </main>
  );
}
