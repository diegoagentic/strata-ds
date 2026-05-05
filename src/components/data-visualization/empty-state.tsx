import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

export function EmptyState({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            {...props}
            className={clsx(
                className,
                'flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-border p-12 text-center'
            )}
        >
            <div className="mx-auto max-w-sm">{children}</div>
        </div>
    )
}

export function EmptyStateIcon({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={clsx(className, 'mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted')}>
            {props.children}
        </div>
    )
}

export function EmptyStateTitle({ className, ...props }: ComponentPropsWithoutRef<'h3'>) {
    return (
        <h3
            {...props}
            className={clsx(className, 'mt-2 text-sm font-semibold text-foreground')}
        />
    )
}

export function EmptyStateDescription({ className, ...props }: ComponentPropsWithoutRef<'p'>) {
    return (
        <p
            {...props}
            className={clsx(className, 'mt-1 text-sm text-muted-foreground')}
        />
    )
}

export function EmptyStateActions({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return <div className={clsx(className, 'mt-6')} {...props} />
}
