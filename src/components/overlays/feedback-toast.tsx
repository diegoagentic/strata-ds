import * as React from 'react';
import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';
import { cn } from './utils';

const DEFAULT_DURATION_MS = 3000;

export type FeedbackToastVariant = 'success' | 'error' | 'warning';

export interface FeedbackToastOptions {
  variant: FeedbackToastVariant;
  message: string;
  duration?: number;
}

interface FeedbackToastContextValue {
  show: (options: FeedbackToastOptions) => void;
  hide: () => void;
}

const FeedbackToastContext = createContext<FeedbackToastContextValue | null>(null);

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- no-op implementation
function noopShow(_opts: FeedbackToastOptions) {
  /* default context no-op */
}
function noopHide() {
  /* default context no-op */
}
const defaultContextValue: FeedbackToastContextValue = { show: noopShow, hide: noopHide };

const feedbackToastVariants = cva(
  'relative flex max-w-[393px] items-start gap-3 rounded-lg px-4 py-3 text-sm text-white shadow-lg border-l-4',
  {
    variants: {
      variant: {
        success:
          'bg-[#1e6e22] border-l-emerald-400 dark:bg-emerald-900 dark:border-l-emerald-400',
        error:
          'bg-red-800 border-l-red-400 dark:bg-red-900 dark:border-l-red-400',
        warning:
          'bg-amber-700 border-l-amber-400 dark:bg-amber-800 dark:border-l-amber-400',
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  },
);

export interface FeedbackToastProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof feedbackToastVariants> {
  message: string;
  onClose: () => void;
}

function FeedbackToast({
  variant = 'success',
  message,
  onClose,
  className,
  ...props
}: FeedbackToastProps) {
  const Icon =
    variant === 'success'
      ? CheckCircle
      : variant === 'error'
        ? XCircle
        : AlertCircle;

  return (
    <div
      role="alert"
      className={cn(feedbackToastVariants({ variant }), className)}
      {...props}
    >
      <Icon
        className="size-5 shrink-0 text-white"
        aria-hidden
      />
      <p className="flex-1 pt-0.5 text-white">{message}</p>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="shrink-0 rounded p-0.5 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <X className="size-4" aria-hidden />
      </button>
    </div>
  );
}

function FeedbackToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<FeedbackToastOptions | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const autoDismissRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hide = useCallback(() => {
    if (autoDismissRef.current) {
      clearTimeout(autoDismissRef.current);
      autoDismissRef.current = null;
    }
    if (leaveRef.current) {
      clearTimeout(leaveRef.current);
      leaveRef.current = null;
    }
    setIsVisible(false);
    leaveRef.current = setTimeout(() => {
      setToast(null);
      leaveRef.current = null;
    }, 200);
  }, []);

  const show = useCallback(
    (options: FeedbackToastOptions) => {
      if (autoDismissRef.current) {
        clearTimeout(autoDismissRef.current);
        autoDismissRef.current = null;
      }
      if (leaveRef.current) {
        clearTimeout(leaveRef.current);
        leaveRef.current = null;
      }
      const duration = options.duration ?? DEFAULT_DURATION_MS;
      setToast(options);
      setIsVisible(true);
      autoDismissRef.current = setTimeout(hide, duration);
    },
    [hide],
  );

  const value = React.useMemo(() => ({ show, hide }), [show, hide]);

  return (
    <FeedbackToastContext.Provider value={value}>
      {children}
      <div
        className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2"
        aria-live="polite"
      >
        {toast && (
          <div
            data-state={isVisible ? 'open' : 'closed'}
            className={cn(
              'duration-200',
              'data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-right-5',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-right-5',
            )}
          >
            <FeedbackToast
              variant={toast.variant}
              message={toast.message}
              onClose={hide}
            />
          </div>
        )}
      </div>
    </FeedbackToastContext.Provider>
  );
}

function useFeedbackToast(): FeedbackToastContextValue {
  const ctx = useContext(FeedbackToastContext);
  return ctx ?? defaultContextValue;
}

export { FeedbackToast, FeedbackToastProvider, feedbackToastVariants, useFeedbackToast };
