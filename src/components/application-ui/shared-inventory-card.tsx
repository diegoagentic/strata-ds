import * as React from 'react';
import { MapPin, EllipsisVertical } from 'lucide-react';
import { Checkbox } from '../forms/checkbox';
import { cn } from '@/utils';

export type SharedInventoryCardStatusVariant = 'blue' | 'green' | 'orange' | 'zinc';
export type SharedInventoryCardPriorityVariant = 'green' | 'yellow' | 'muted';

export interface SharedInventoryCardProps {
  /** Optional main image URL */
  imageUrl?: string;
  /** Icon for no-image state */
  imageFallbackIcon?: React.ComponentType<{ className?: string }>;
  /** Text for no-image state */
  imageFallbackLabel?: string;
  /** Primary heading */
  title: string;
  /** Second line, usually category/type */
  subtitle: string;
  /** Location text with MapPin icon */
  location: string;
  /** Label for bottom-left value */
  valueLabel: string;
  /** Value text */
  value: string;
  /** Bottom-right image overlay status */
  statusBadge?: {
    label: string;
    variant?: SharedInventoryCardStatusVariant;
  };
  /** Bottom-right content footer priority */
  priorityBadge?: {
    label: string;
    variant?: SharedInventoryCardPriorityVariant;
    emoji?: string;
  };
  /** Toggle top-left checkbox visibility */
  showCheckbox?: boolean;
  /** Checkbox change handler */
  onCheckboxChange?: (checked: boolean) => void;
  /** Checkbox checked state */
  checked?: boolean;
  /** Toggle top-right three-dots button visibility */
  showActionButton?: boolean;
  /** Action button click handler */
  onActionClick?: (e: React.MouseEvent) => void;
  /** Card level click handler */
  onClick?: () => void;
}

const STATUS_VARIANTS: Record<SharedInventoryCardStatusVariant, string> = {
  blue: 'bg-info-light text-info',
  green: 'bg-success-light text-success',
  orange: 'bg-orange-light text-orange',
  zinc: 'bg-muted text-muted-foreground',
};

function StatusBadge({
  label,
  variant = 'zinc',
}: {
  label: string;
  variant?: SharedInventoryCardStatusVariant;
}) {
  return (
    <span
      className={cn(
        'px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-sm backdrop-blur-md border border-border/40',
        STATUS_VARIANTS[variant],
      )}
    >
      {label}
    </span>
  );
}

const PRIORITY_VARIANTS: Record<SharedInventoryCardPriorityVariant, string> = {
  green: 'text-success bg-success-light/60',
  yellow: 'text-warning bg-warning-light/60',
  muted: 'text-muted-foreground bg-muted/30',
};

function PriorityBadge({
  label,
  variant = 'muted',
  emoji,
}: {
  label: string;
  variant?: SharedInventoryCardPriorityVariant;
  emoji?: string;
}) {
  return (
    <span
      className={cn(
        'px-2 py-1 rounded text-[10px] font-medium border border-transparent',
        PRIORITY_VARIANTS[variant],
      )}
    >
      {emoji && (
        <span role="img" aria-label={label} className="mr-1">
          {emoji}
        </span>
      )}
      {label}
    </span>
  );
}

/**
 * Shared inventory-style card component.
 * Replicates the ui-dealer inventory card design for use across the monorepo.
 */
export function SharedInventoryCard({
  imageUrl,
  imageFallbackIcon: FallbackIcon,
  imageFallbackLabel,
  title,
  subtitle,
  location,
  valueLabel,
  value,
  statusBadge,
  priorityBadge,
  showCheckbox = false,
  onCheckboxChange,
  checked = false,
  showActionButton = false,
  onActionClick,
  onClick,
}: SharedInventoryCardProps) {
  return (
    <div
      className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all cursor-pointer relative overflow-hidden flex flex-col h-[340px] hover:border-primary/50"
      onClick={onClick}
    >
      <div className="h-44 w-full relative bg-muted overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/60">
            {FallbackIcon && <FallbackIcon className="w-12 h-12 mb-2" />}
            {imageFallbackLabel && <span className="text-xs font-medium">{imageFallbackLabel}</span>}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {showCheckbox && (
          <div className="absolute top-3 left-3 z-10" onClick={(e) => e.stopPropagation()}>
            <Checkbox
              checked={checked}
              onCheckedChange={(val) => onCheckboxChange?.(!!val)}
              className="rounded border-border focus:ring-ring shadow-sm w-5 h-5 cursor-pointer"
              aria-label={`Select ${title}`}
            />
          </div>
        )}

        {showActionButton && (
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              type="button"
              className="p-1.5 bg-background/90 backdrop-blur rounded-lg text-foreground hover:bg-background shadow-sm cursor-pointer"
              aria-label="More actions"
              onClick={(e) => {
                e.stopPropagation();
                onActionClick?.(e);
              }}
            >
              <EllipsisVertical className="w-5 h-5" aria-hidden />
            </button>
          </div>
        )}

        {statusBadge && (
          <div className="absolute bottom-3 right-3 z-10">
            <StatusBadge label={statusBadge.label} variant={statusBadge.variant} />
          </div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-foreground truncate text-base" title={title}>
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mb-3 truncate">{subtitle}</p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
            <span className="truncate">{location}</span>
          </div>
        </div>
        <div className="pt-3 border-t border-border/60 flex justify-between items-end">
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium mb-0.5">
              {valueLabel}
            </p>
            <p className="text-sm font-bold text-foreground">{value}</p>
          </div>
          {priorityBadge && (
            <PriorityBadge
              label={priorityBadge.label}
              variant={priorityBadge.variant}
              emoji={priorityBadge.emoji}
            />
          )}
        </div>
      </div>
    </div>
  );
}
