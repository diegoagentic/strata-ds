import * as React from 'react'
import { X } from 'lucide-react'

import { Button } from './button'
import { cn } from '@/utils';
export type InfoBannerTone = 'info' | 'success' | 'warning' | 'danger' | 'neutral'

export interface InfoBannerProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  tone?: InfoBannerTone
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
}

export const infoBannerToneClassMap: Record<InfoBannerTone, string> = {
  info: 'border-[var(--color-info-border)] bg-[var(--color-info)] text-[var(--color-info-foreground)]',
  success:
    'border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400',
  warning:
    'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-400',
  danger:
    'border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400',
  neutral:
    'border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300',
}

export function InfoBanner({
  tone = 'neutral',
  icon,
  title,
  description,
  dismissible = false,
  onDismiss,
  children,
  className,
  ...props
}: InfoBannerProps) {
  return (
    <div
      data-slot="info-banner"
      role="status"
      className={cn(
        'flex items-start gap-3 rounded-lg border p-4',
        infoBannerToneClassMap[tone],
        className
      )}
      {...props}
    >
      {icon ? <div data-slot="info-banner-icon">{icon}</div> : null}

      <div className="min-w-0 flex-1">
        {title ? <div data-slot="info-banner-title" className="font-semibold">{title}</div> : null}
        {description ? (
          <div data-slot="info-banner-description" className="text-sm/6 opacity-90">
            {description}
          </div>
        ) : null}
        {children}
      </div>

      {dismissible ? (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Dismiss banner"
          onClick={onDismiss}
        >
          <X className="size-4" aria-hidden />
        </Button>
      ) : null}
    </div>
  )
}

