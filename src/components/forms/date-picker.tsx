"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { cn } from '@/utils';
import { Button } from '../application-ui/button';
import { Calendar } from '../application-ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../overlays/popover';

function formatDateForInput(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function parseDateFromValue(value: string): Date | undefined {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;
  const d = new Date(value + "T12:00:00");
  return isNaN(d.getTime()) ? undefined : d;
}

function formatDisplayDate(date: Date): string {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export interface DatePickerProps {
  /** Value in YYYY-MM-DD format (HTML date input compatible). */
  value?: string;
  /** Called with YYYY-MM-DD when user selects a date. */
  onChange?: (value: string) => void;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  /** Accessible label for the trigger (e.g. "Requested delivery date"). */
  "aria-label"?: string;
  /** ID of element that describes the trigger (e.g. error message). */
  "aria-describedby"?: string;
}

/**
 * Date picker using design-system Calendar in a Popover.
 * Use for any date field; do not use a plain text Input with a date placeholder.
 */
function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  id,
  disabled,
  className,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,
}: DatePickerProps): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const selectedDate = value ? parseDateFromValue(value) : undefined;

  const handleSelect = React.useCallback(
    (date: Date | undefined) => {
      if (!date) return;
      onChange?.(formatDateForInput(date));
      setOpen(false);
    },
    [onChange],
  );

  const displayValue = selectedDate ? formatDisplayDate(selectedDate) : "";

  const triggerInputStyles = cn(
    "relative flex h-9 w-full min-w-0 justify-start text-left font-normal rounded-lg border border-zinc-300 bg-input-background/30 py-2 pl-10 pr-4 text-sm text-foreground shadow-sm outline-none transition-all dark:border-zinc-700",
    "focus:border-primary focus:ring-2 focus:ring-primary",
    "disabled:pointer-events-none disabled:opacity-50",
    !displayValue && "text-muted-foreground",
    className,
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          data-slot="date-picker-trigger"
          type="button"
          variant="ghost"
          className={triggerInputStyles}
          disabled={disabled}
          id={id}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          aria-expanded={open}
        >
          <span
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-foreground [&_svg]:size-4"
            aria-hidden
          >
            <CalendarIcon className="size-4" />
          </span>
          {displayValue || placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker };
