import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Table Component - Token-Based Design
 * 
 * Data table with token-based styling.
 */

const tableVariants = cva(
    'w-full caption-bottom text-sm'
);

const tableHeaderVariants = cva(
    '[&_tr]:border-b border-[var(--table-border)]'
);

const tableBodyVariants = cva(
    '[&_tr:last-child]:border-0'
);

const tableRowVariants = cva(
    [
        'border-b border-[var(--table-border)]',
        'transition-colors',
        'hover:bg-[var(--table-row-hover-background)]',
        'data-[state=selected]:bg-[var(--table-row-hover-background)]',
    ].join(' ')
);

const tableHeadVariants = cva(
    [
        'h-12 px-[var(--table-cell-padding-x)] text-left align-middle',
        'font-medium',
        'text-[var(--table-header-text)]',
        '[&:has([role=checkbox])]:pr-0',
    ].join(' ')
);

const tableCellVariants = cva(
    [
        'p-[var(--table-cell-padding-y)] align-middle',
        '[&:has([role=checkbox])]:pr-0',
    ].join(' ')
);

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> { }

const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className, ...props }, ref) => (
        <div className="relative w-full overflow-auto">
            <table
                ref={ref}
                className={cn(tableVariants(), className)}
                {...props}
            />
        </div>
    )
);

Table.displayName = 'Table';

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead ref={ref} className={cn(tableHeaderVariants(), className)} {...props} />
));

TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody
        ref={ref}
        className={cn(tableBodyVariants(), className)}
        {...props}
    />
));

TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tfoot
        ref={ref}
        className={cn(
            'border-t border-[var(--table-border)] bg-[var(--table-row-hover-background)] font-medium [&>tr]:last:border-b-0',
            className
        )}
        {...props}
    />
));

TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr
        ref={ref}
        className={cn(tableRowVariants(), className)}
        {...props}
    />
));

TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(tableHeadVariants(), className)}
        {...props}
    />
));

TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td
        ref={ref}
        className={cn(tableCellVariants(), className)}
        {...props}
    />
));

TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
    <caption
        ref={ref}
        className={cn('mt-4 text-sm text-[var(--color-text-secondary)]', className)}
        {...props}
    />
));

TableCaption.displayName = 'TableCaption';

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
};
