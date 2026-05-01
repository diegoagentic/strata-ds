import { cn } from '@/utils';
import type { ReactElement, ReactNode } from 'react';

export interface ActivityTimelineStageRowProps {
    /** Icon rendered inside the stage circle (e.g. lucide `Check`). */
    icon: ReactNode;
    /** Tailwind classes for the circular stage background and icon color (e.g. `bg-brand-500 text-primary-foreground`). */
    circleBackgroundClassName: string;
    /** Tailwind classes for the vertical connector between stages (e.g. `bg-brand-500`). */
    separatorClassName: string;
    /** When true, the connector line after this row is omitted. */
    isLast: boolean;
    /** Main column: title row, description, optional sub-cards, actions, comments. */
    children: ReactNode;
}

export function ActivityTimelineStageRow({
    icon,
    circleBackgroundClassName,
    separatorClassName,
    isLast,
    children,
}: ActivityTimelineStageRowProps): ReactElement {
    return (
        <div className={cn('flex items-stretch gap-3')}>
            <div className={cn('flex flex-col items-center')}>
                <div
                    className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full [&>svg]:size-4',
                        circleBackgroundClassName,
                    )}
                >
                    {icon}
                </div>
                {!isLast ? (
                    <div className={cn('min-h-[2px] w-px flex-1', separatorClassName)} aria-hidden />
                ) : null}
            </div>
            <div className={cn('min-w-0 flex-1 pb-4')}>{children}</div>
        </div>
    );
}

/** Required fields for each row; intersect with `TExtra` for domain data (e.g. `Activity`). */
export type ActivityTimelineItem<TExtra = Record<string, never>> = {
    id: string;
    icon: ReactNode;
    circleBackgroundClassName: string;
    separatorClassName: string;
    /** Right column: title, description, actions, nested UI. */
    content: ReactNode;
} & TExtra;

export interface ActivityTimelineProps<TExtra = Record<string, never>> {
    items: ActivityTimelineItem<TExtra>[];
    className?: string;
}

export function ActivityTimeline<TExtra = Record<string, never>>({
    items,
    className,
}: ActivityTimelineProps<TExtra>): ReactElement {
    return (
        <div className={cn(className)}>
            {items.map((item, index) => (
                <ActivityTimelineStageRow
                    key={item.id}
                    icon={item.icon}
                    circleBackgroundClassName={item.circleBackgroundClassName}
                    separatorClassName={item.separatorClassName}
                    isLast={index === items.length - 1}
                >
                    {item.content}
                </ActivityTimelineStageRow>
            ))}
        </div>
    );
}
