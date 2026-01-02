import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

/**
 * Tabs Component - Token-Based Design
 * 
 * Tabbed interface for organizing content.
 */

const tabsListVariants = cva(
    [
        'inline-flex h-10 items-center justify-center',
        'rounded-[var(--borderRadius-md)]',
        'bg-[var(--color-background-secondary)]',
        'p-1 text-[var(--color-text-secondary)]',
    ].join(' ')
);

const tabsTriggerVariants = cva(
    [
        'inline-flex items-center justify-center whitespace-nowrap',
        'rounded-sm px-3 py-1.5',
        'text-sm font-medium',
        'ring-offset-[var(--color-background-primary)]',
        'transition-all',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[var(--color-border-focus)] focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'data-[state=active]:bg-[var(--color-background-primary)]',
        'data-[state=active]:text-[var(--color-text-primary)]',
        'data-[state=active]:shadow-sm',
    ].join(' ')
);

const tabsContentVariants = cva(
    [
        'mt-2',
        'ring-offset-[var(--color-background-primary)]',
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[var(--color-border-focus)] focus-visible:ring-offset-2',
    ].join(' ')
);

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> { }

export interface TabsTriggerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}

const TabsContext = React.createContext<{
    value?: string;
    onValueChange?: (value: string) => void;
}>({});

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
    ({ className, defaultValue, value, onValueChange, children, ...props }, ref) => {
        const [internalValue, setInternalValue] = React.useState(defaultValue);
        const currentValue = value ?? internalValue;

        const handleValueChange = (newValue: string) => {
            setInternalValue(newValue);
            onValueChange?.(newValue);
        };

        return (
            <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
                <div ref={ref} className={cn('w-full', className)} {...props}>
                    {children}
                </div>
            </TabsContext.Provider>
        );
    }
);

Tabs.displayName = 'Tabs';

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(tabsListVariants(), className)}
            role="tablist"
            {...props}
        />
    )
);

TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
    ({ className, value, onClick, ...props }, ref) => {
        const context = React.useContext(TabsContext);
        const isActive = context.value === value;

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            onClick?.(e);
            context.onValueChange?.(value);
        };

        return (
            <button
                ref={ref}
                role="tab"
                aria-selected={isActive}
                data-state={isActive ? 'active' : 'inactive'}
                className={cn(tabsTriggerVariants(), className)}
                onClick={handleClick}
                {...props}
            />
        );
    }
);

TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
    ({ className, value, ...props }, ref) => {
        const context = React.useContext(TabsContext);
        const isActive = context.value === value;

        if (!isActive) return null;

        return (
            <div
                ref={ref}
                role="tabpanel"
                className={cn(tabsContentVariants(), className)}
                {...props}
            />
        );
    }
);

TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants };
