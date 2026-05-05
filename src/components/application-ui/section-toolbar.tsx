import * as React from 'react'
import { Search } from 'lucide-react'

import { Button, type ButtonProps } from './button'
import { Input } from '../forms/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../forms/select'
import { Toggle } from './toggle'
import { cn } from '@/utils';
export interface SectionToolbarSelectOption {
  value: string
  label: string
}

export interface SectionToolbarSelectControl {
  value: string
  onValueChange: (value: string) => void
  options: SectionToolbarSelectOption[]
  placeholder?: string
  ariaLabel?: string
  icon?: React.ReactNode
  testId?: string
  triggerClassName?: string
}

export interface SectionToolbarSearchControl {
  value: string
  onSearchChange: (value: string) => void
  placeholder?: string
  ariaLabel?: string
  inputClassName?: string
}

export interface SectionToolbarPrimaryAction {
  label: string
  onClick: () => void
  icon?: React.ReactNode
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  testId?: string
}

export interface SectionToolbarAction {
  icon: React.ReactNode
  onClick: () => void
  ariaLabel: string
  /** When provided, button shows icon + label (e.g. "Filters"); otherwise icon-only. */
  label?: string
  title?: string
  disabled?: boolean
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  testId?: string
}

export interface SectionToolbarViewModeOption {
  value: string
  icon: React.ReactNode
  ariaLabel: string
  title?: string
  disabled?: boolean
  testId?: string
}

export interface SectionToolbarViewModeControl {
  value: string
  onValueChange: (value: string) => void
  options: SectionToolbarViewModeOption[]
}

export interface SectionToolbarProps extends React.ComponentProps<'div'> {
  search?: SectionToolbarSearchControl
  filters?: SectionToolbarSelectControl
  sort?: SectionToolbarSelectControl
  viewMode?: SectionToolbarViewModeControl
  primaryAction?: SectionToolbarPrimaryAction
  actions?: SectionToolbarAction[]
  children?: React.ReactNode
  dataTestId?: string
  searchTestId?: string
  filterClassName?: string
  actionClassName?: string
  primaryActionClassName?: string
}

const toolbarRootClass = 'flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full min-w-0'
const searchWrapperClass = 'relative w-full min-w-0 sm:flex-1 sm:max-w-lg'
const selectTriggerDefaultClass = 'min-w-0 w-full md:w-[180px] cursor-pointer bg-card dark:bg-card transition-colors duration-200'

function renderSelectControl(control: SectionToolbarSelectControl) {
  return (
    <Select value={control.value} onValueChange={control.onValueChange}>
      <SelectTrigger
        className={cn(selectTriggerDefaultClass, control.triggerClassName)}
        aria-label={control.ariaLabel}
        data-testid={control.testId}
      >
        {control.icon}
        <SelectValue placeholder={control.placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-card">
        {control.options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export function SectionToolbar({
  search,
  filters,
  sort,
  viewMode,
  primaryAction,
  actions,
  children,
  className,
  dataTestId,
  searchTestId,
  filterClassName = 'ml-auto',
  ...props
}: SectionToolbarProps) {
  return (
    <div
      data-slot="section-toolbar"
      data-testid={dataTestId}
      className={cn(toolbarRootClass, className)}
      {...props}
    >
      {search ? (
        <div className={searchWrapperClass} data-testid={searchTestId}>
          <Input
            type="search"
            role="searchbox"
            aria-label={search.ariaLabel ?? 'Search'}
            placeholder={search.placeholder ?? 'Search...'}
            value={search.value}
            onChange={(e) => search.onSearchChange(e.target.value)}
            prefix={<Search className="size-4 shrink-0" aria-hidden />}
            className={cn('min-w-0', search.inputClassName)}
          />
        </div>
      ) : null}

      <div className={cn("flex flex-col md:flex-row gap-3 md:gap-4 min-w-0 w-full md:w-auto", filterClassName)}>
        {filters ? renderSelectControl(filters) : null}

        {children}

        {sort ? renderSelectControl(sort) : null}
      </div>

      {(viewMode || actions || primaryAction) && (
        <div className="flex items-center gap-3">
          {viewMode ? (
            <div className="flex bg-muted/50 p-1 rounded-lg gap-1 w-fit">
              {viewMode.options.map((option) => (
                <Toggle
                  key={option.value}
                  variant="pill"
                  size="sm"
                  pressed={viewMode.value === option.value}
                  onPressedChange={(pressed: boolean) => pressed && viewMode.onValueChange(option.value)}
                  aria-label={option.ariaLabel}
                  disabled={option.disabled}
                  data-testid={option.testId}
                >
                  {option.icon}
                </Toggle>
              ))}
            </div>
          ) : null}

          {actions?.map((action, index) => (
            <Button
              key={`${action.ariaLabel}-${index}`}
              type="button"
              variant={action.variant ?? 'ghost'}
              size={action.size ?? (action.label != null ? undefined : 'icon')}
              aria-label={action.ariaLabel}
              title={action.title ?? action.ariaLabel}
              disabled={action.disabled}
              onClick={action.onClick}
              data-testid={action.testId}
              className={props.actionClassName}
            >
              {action.icon}
              {action.label != null ? action.label : null}
            </Button>
          ))}

          {primaryAction ? (
            <Button
              type="button"
              variant={primaryAction.variant ?? 'default'}
              size={primaryAction.size ?? undefined}
              onClick={primaryAction.onClick}
              data-testid={primaryAction.testId}
              className={props.primaryActionClassName}
            >
              {primaryAction.icon}
              {primaryAction.label}
            </Button>
          ) : null}
        </div>
      )}
    </div>
  )
}

export {
  toolbarRootClass,
  searchWrapperClass,
  selectTriggerDefaultClass,
}
