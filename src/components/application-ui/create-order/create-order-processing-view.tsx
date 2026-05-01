import { Button } from '../button';
import { DialogDescription, DialogHeader, DialogTitle } from '../../overlays/dialog';
import { ArrowLeft, Loader2 } from 'lucide-react';

const DEFAULT_TITLE = 'Processing Quote...';
const DEFAULT_SUBTITLE = 'Validating quote details and checking stock levels.';

export interface CreateOrderProcessingViewProps {
  onBack?: () => void;
  /** When provided, shown instead of default "Processing Quote...". */
  title?: string;
  /** When provided, shown instead of default quote validation text. */
  subtitle?: string;
}

export function CreateOrderProcessingView({
  onBack,
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
}: CreateOrderProcessingViewProps): React.ReactElement {
  return (
    <>
      <DialogHeader>
        <DialogTitle>
          <div className="flex items-center gap-2">
            {onBack && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="shrink-0 cursor-pointer text-foreground"
                onClick={onBack}
                aria-label="Back"
              >
                <ArrowLeft className="size-4" />
              </Button>
            )}
            <span className="text-foreground">{title}</span>
          </div>
        </DialogTitle>
        <DialogDescription>{subtitle}</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col items-center justify-center gap-4 py-8">
        <Loader2 className="size-10 animate-spin text-muted-foreground" />
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </>
  );
}
