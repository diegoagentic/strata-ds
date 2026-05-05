import * as React from 'react';
import { Button } from './button';

export interface TableEmptyStateProps {
  message: string;
  onClearFilters: () => void;
}

export function TableEmptyState({
  message,
  onClearFilters,
}: TableEmptyStateProps): React.ReactElement {
  return (
    <section
      data-testid="table-empty-state"
      className="flex flex-col items-center justify-center py-16"
    >
      <p className="text-muted-foreground">{message}</p>
      <Button
        variant="outline"
        size="sm"
        onClick={onClearFilters}
        data-testid="table-empty-state-clear"
        className="mt-4"
      >
        Clear filters
      </Button>
    </section>
  );
}
