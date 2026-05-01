import * as React from 'react'
import { cn } from '@/utils';
export type PriorityBadgePriority = 'low' | 'medium' | 'high' | 'critical'

const priorityClassMap: Record<PriorityBadgePriority, string> = {
  low: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/10',
  medium: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/10',
  high: 'text-amber-600 bg-amber-600/20 border border-amber-600',
  critical: 'text-red-600 bg-red-600/20 border border-red-600',
}

const priorityLabelMap: Record<PriorityBadgePriority, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  critical: 'Critical',
}

const prioritySizeClassMap: Record<'default' | 'nano', string> = {
  default: '',
  nano: 'px-2 py-0.5 text-[10px]',
}

const priorityShapeClassMap: Record<'default' | 'pill', string> = {
  default: '',
  pill: 'rounded-full',
}

export interface PriorityBadgeProps extends Omit<React.ComponentProps<'span'>, 'prefix'> {
  priority: PriorityBadgePriority
  size?: 'default' | 'nano'
  shape?: 'default' | 'pill'
  prefix?: React.ReactNode
}

export function PriorityBadge({
  priority,
  size = 'default',
  shape = 'default',
  prefix,
  className,
  children,
  ...props
}: PriorityBadgeProps) {
  return (
    <span
      data-slot="priority-badge"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
        priorityClassMap[priority],
        prioritySizeClassMap[size],
        priorityShapeClassMap[shape],
        className
      )}
      {...props}
    >
      {prefix ? <span className="inline-flex items-center">{prefix}</span> : null}
      {children ?? priorityLabelMap[priority]}
    </span>
  )
}

export { priorityClassMap as priorityBadgeClassMap }
