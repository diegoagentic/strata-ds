import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { ChevronDown } from 'lucide-react';

/**
 * Accordion Component - Token-Based Design
 * 
 * Collapsible content sections.
 */

const accordionItemVariants = cva(
    'border-b border-[var(--color-border-default)]'
);

const accordionTriggerVariants = cva(
    [
        'flex flex-1 items-center justify-between',
        'py-4 font-medium',
        'transition-all',
        'hover:underline',
        '[&[data-state=open]>svg]:rotate-180',
    ].join(' ')
);

const accordionContentVariants = cva(
    [
        'overflow-hidden text-sm',
        'transition-all',
        'data-[state=closed]:animate-accordion-up',
        'data-[state=open]:animate-accordion-down',
    ].join(' ')
);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: 'single' | 'multiple';
    defaultValue?: string | string[];
    value?: string | string[];
    onValueChange?: (value: string | string[]) => void;
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> { }

const AccordionContext = React.createContext<{
    value?: string | string[];
    onValueChange?: (value: string) => void;
    type?: 'single' | 'multiple';
}>({});

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
    ({ className, type = 'single', defaultValue, value, onValueChange, children, ...props }, ref) => {
        const [internalValue, setInternalValue] = React.useState<string | string[]>(
            defaultValue || (type === 'multiple' ? [] : '')
        );
        const currentValue = value ?? internalValue;

        const handleValueChange = (itemValue: string) => {
            let newValue: string | string[];

            if (type === 'multiple') {
                const currentArray = Array.isArray(currentValue) ? currentValue : [];
                newValue = currentArray.includes(itemValue)
                    ? currentArray.filter(v => v !== itemValue)
                    : [...currentArray, itemValue];
            } else {
                newValue = currentValue === itemValue ? '' : itemValue;
            }

            setInternalValue(newValue);
            onValueChange?.(newValue);
        };

        return (
            <AccordionContext.Provider value={{ value: currentValue, onValueChange: handleValueChange, type }}>
                <div ref={ref} className={cn('', className)} {...props}>
                    {children}
                </div>
            </AccordionContext.Provider>
        );
    }
);

Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ className, value, ...props }, ref) => (
        <div
            ref={ref}
            data-value={value}
            className={cn(accordionItemVariants(), className)}
            {...props}
        />
    )
);

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ className, children, ...props }, ref) => {
        const context = React.useContext(AccordionContext);
        const itemElement = React.useContext(AccordionItemContext);

        const isOpen = context.type === 'multiple'
            ? Array.isArray(context.value) && context.value.includes(itemElement.value)
            : context.value === itemElement.value;

        return (
            <button
                ref={ref}
                type="button"
                data-state={isOpen ? 'open' : 'closed'}
                className={cn(accordionTriggerVariants(), className)}
                onClick={() => context.onValueChange?.(itemElement.value)}
                {...props}
            >
                {children}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        );
    }
);

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionItemContext = React.createContext<{ value: string }>({ value: '' });

const AccordionItemProvider: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => (
    <AccordionItemContext.Provider value={{ value }}>
        {children}
    </AccordionItemContext.Provider>
);

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ className, children, ...props }, ref) => {
        const context = React.useContext(AccordionContext);
        const itemElement = React.useContext(AccordionItemContext);

        const isOpen = context.type === 'multiple'
            ? Array.isArray(context.value) && context.value.includes(itemElement.value)
            : context.value === itemElement.value;

        return (
            <div
                ref={ref}
                data-state={isOpen ? 'open' : 'closed'}
                className={cn(accordionContentVariants(), className)}
                style={{ display: isOpen ? 'block' : 'none' }}
                {...props}
            >
                <div className="pb-4 pt-0">{children}</div>
            </div>
        );
    }
);

AccordionContent.displayName = 'AccordionContent';

// Wrapper to provide item context
const AccordionItemWrapper = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ value, children, ...props }, ref) => (
        <AccordionItemProvider value={value}>
            <AccordionItem ref={ref} value={value} {...props}>
                {children}
            </AccordionItem>
        </AccordionItemProvider>
    )
);

AccordionItemWrapper.displayName = 'AccordionItem';

export {
    Accordion,
    AccordionItemWrapper as AccordionItem,
    AccordionTrigger,
    AccordionContent,
};
