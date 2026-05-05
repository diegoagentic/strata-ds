import React from 'react';
import { Button } from '@/components/application-ui/button';
import { Input } from '@/components/forms/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/forms/select';
import { ArrowUpDown, Filter, Search } from 'lucide-react';

export interface ListToolbarSelectOption {
  value: string;
  label: string;
}

export interface ListToolbarPrimaryAction {
  label: string;
  onClick: () => void;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ListToolbarProps {
  search?: {
    value: string;
    onSearchChange: (v: string) => void;
    placeholder?: string;
    ariaLabel?: string;
  };
  filter?: {
    options: ListToolbarSelectOption[];
    value: string;
    onValueChange: (v: string) => void;
    ariaLabel?: string;
  };
  sort?: {
    options: ListToolbarSelectOption[];
    value: string;
    onValueChange: (v: string) => void;
    ariaLabel?: string;
  };
  primaryAction?: ListToolbarPrimaryAction;
  children?: React.ReactNode;
  /** Optional data-testid for the root container */
  dataTestId?: string;
  /** Optional data-testid for the search input */
  searchTestId?: string;
  /** Optional data-testid for the filter select trigger */
  filterTestId?: string;
  /** Optional data-testid for the sort select trigger */
  sortTestId?: string;
  /** Optional data-testid for the primary action button */
  primaryActionTestId?: string;
}

/**
 * Reusable list/catalog toolbar with optional search, filter, sort, primary action, and children slot.
 */
export function ListToolbar({
  search,
  filter,
  sort,
  primaryAction,
  children,
  dataTestId = 'list-toolbar',
  searchTestId,
  filterTestId,
  sortTestId,
  primaryActionTestId,
}: ListToolbarProps): React.ReactElement {
  return (
    <div
      className="flex w-full flex-wrap items-center gap-3 lg:flex-nowrap"
      data-testid={dataTestId}
    >
      {search && (
        <div className="w-full min-w-0 lg:ml-auto lg:max-w-[400px] lg:flex-1">
          <Input
            type="search"
            role="searchbox"
            aria-label={search.ariaLabel ?? 'Search'}
            placeholder={search.placeholder ?? 'Search...'}
            value={search.value}
            onChange={(e) => search.onSearchChange(e.target.value)}
            prefix={<Search className="size-4 shrink-0" aria-hidden />}
            className="min-w-0 transition-colors duration-200"
            data-testid={searchTestId}
          />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 lg:flex-none lg:flex-shrink-0">
        {filter && (
          <Select value={filter.value} onValueChange={filter.onValueChange}>
            <SelectTrigger
              className="w-[120px] bg-muted transition-colors duration-200"
              aria-label={filter.ariaLabel ?? 'Filter'}
              data-testid={filterTestId}
            >
              <Filter className="size-4 shrink-0" aria-hidden />
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent className="bg-muted">
              {filter.options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {children}
        {sort && (
          <Select value={sort.value} onValueChange={sort.onValueChange}>
            <SelectTrigger
              className="w-[140px] bg-muted transition-colors duration-200"
              aria-label={sort.ariaLabel ?? 'Sort by'}
              data-testid={sortTestId}
            >
              <ArrowUpDown className="size-4 shrink-0" aria-hidden />
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent className="bg-muted">
              {sort.options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        {primaryAction && (
          <Button
            type="button"
            onClick={primaryAction.onClick}
            variant="default"
            className="transition-colors duration-200"
            data-testid={primaryActionTestId}
          >
            {primaryAction.icon ? (
              <primaryAction.icon className="size-4" aria-hidden />
            ) : null}
            {primaryAction.label}
          </Button>
        )}
      </div>
    </div>
  );
}
