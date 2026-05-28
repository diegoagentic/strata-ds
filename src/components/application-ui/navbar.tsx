import * as React from "react"
import { cn } from '@/utils';
export function Navbar({ className, ...props }: React.ComponentPropsWithoutRef<"nav">) {
    return (
        <nav
            {...props}
            className={cn("flex items-center gap-4 bg-card border-b border-border px-4 py-3", className)}
        />
    )
}

export function NavbarSection({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    return <div {...props} className={cn("flex items-center gap-2", className)} />
}

export function NavbarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    return <div {...props} className={cn("flex-1", className)} />
}

interface NavbarItemProps extends React.ComponentPropsWithoutRef<"button"> {
    current?: boolean
}

export function NavbarItem({ current, className, children, ...props }: NavbarItemProps) {
    return (
        <button
            {...props}
            className={cn(
                "relative flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium transition-colors",
                current
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-50",
                className
            )}
        >
            {children}
        </button>
    )
}
