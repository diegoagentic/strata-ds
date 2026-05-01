import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Dialog, DialogContent } from '../../overlays/dialog';
import { useFeedbackToast } from '../../overlays/feedback-toast';
import { cn } from '@/utils';
import type {
  ApprovedQuote,
  CreateOrderDialogProps,
  CreateOrderManualCreationEntry,
  CreateOrderStep,
} from './types';
import type { ManualOrderFormData } from './types';
import { CreateOrderImportAnalysisView } from './create-order-import-analysis-view';
import { CreateOrderImportFileView } from './create-order-import-file-view';
import { CreateOrderInitialView } from './create-order-initial-view';
import { CreateOrderManualCreationView } from './create-order-manual-creation-view';
import { CreateOrderProcessingView } from './create-order-processing-view';
import { CreateOrderSelectQuoteView } from './create-order-select-quote-view';
import { CreateOrderSelectTemplateView } from './create-order-select-template-view';
import { CreateOrderDraftView } from './create-order-draft-view';

export type {
  CreateOrderDialogProps,
  CreateOrderManualCreationEntry,
  CreateOrderStep,
} from './types';

function manualCreationEntryFromPreviousStep(
  previousStep: CreateOrderStep,
): CreateOrderManualCreationEntry {
  if (previousStep === 'select-template') return 'from-template';
  if (previousStep === 'initial') return 'manual';
  /* import-analysis, select-quote, or any other path that opens the shared “new order” form */
  return 'new-order';
}

/**
 * Create New Order dialog. Opened from Order Management toolbar "New Order".
 * Content steps are rendered by dedicated view components.
 * Mock data (approvedQuotes, importOrderAnalysis, orderTemplates) and theme are passed as props.
 */
export function CreateOrderDialog({
  open,
  onOpenChange,
  onConfirmCreate,
  onConfirmManualCreate,
  approvedQuotes,
  importOrderAnalysis,
  orderTemplates,
  manualOrderCustomers,
}: CreateOrderDialogProps): React.ReactElement {
  const [step, setStep] = useState<CreateOrderStep>('initial');
  const [previousStepBeforeManual, setPreviousStepBeforeManual] = useState<CreateOrderStep>('initial');
  const [quoteSearch, setQuoteSearch] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<ApprovedQuote | null>(null);
  const [templatePreFill, setTemplatePreFill] = useState<Partial<ManualOrderFormData> | null>(null);
  const [importFile, setImportFile] = useState<File | null>(null);
  const { show: showToast } = useFeedbackToast();

  const filteredQuotes = useMemo(() => {
    const q = quoteSearch.trim().toLowerCase();
    if (!q) return approvedQuotes;
    return approvedQuotes.filter(
      (quote) =>
        quote.quoteId.toLowerCase().includes(q) ||
        quote.customer.toLowerCase().includes(q) ||
        quote.project.toLowerCase().includes(q),
    );
  }, [quoteSearch, approvedQuotes]);

  function handleOpenChange(next: boolean): void {
    if (!next) {
      setStep('initial');
      setPreviousStepBeforeManual('initial');
      setSelectedQuote(null);
      setQuoteSearch('');
      setTemplatePreFill(null);
      setImportFile(null);
    }
    onOpenChange(next);
  }

  function handleConvertToOrder(quote: ApprovedQuote): void {
    setSelectedQuote(quote);
    setStep('processing');
  }

  useEffect(() => {
    if (step !== 'processing') return;
    const t = window.setTimeout(() => setStep('draft'), 2000);
    return () => window.clearTimeout(t);
  }, [step]);

  useEffect(() => {
    if (step !== 'import-processing') return;
    const t = window.setTimeout(() => setStep('import-analysis'), 2000);
    return () => window.clearTimeout(t);
  }, [step]);

  function handleReviewAdapt(): void {
    handleOpenChange(false);
  }

  function handleConfirmCreate(): void {
    if (selectedQuote) {
      onConfirmCreate?.(selectedQuote);
      showToast({
        variant: 'success',
        message: 'Order was created successfully',
      });
    }
    handleOpenChange(false);
  }

  function renderStepContent(): ReactNode {
    switch (step) {
      case 'import-file':
        return (
          <CreateOrderImportFileView
            onBack={() => setStep('initial')}
            onContinue={(file) => {
              setImportFile(file);
              setStep('import-processing');
            }}
          />
        );
      case 'import-processing':
        return (
          <CreateOrderProcessingView
            title="Analyzing Document..."
            subtitle="Identifying customer data, extracting line items, and validating SKUs."
            onBack={() => setStep('import-file')}
          />
        );
      case 'import-analysis':
        return (
          <CreateOrderImportAnalysisView
            analysis={importOrderAnalysis}
            onBack={() => {
              setImportFile(null);
              setStep('import-file');
            }}
            onClose={() => handleOpenChange(false)}
            onTryDifferentFile={() => {
              setImportFile(null);
              setStep('import-file');
            }}
            onContinueToOrderCreation={() => {
              setTemplatePreFill({
                customerId: importOrderAnalysis.customerId,
                projectReference: importOrderAnalysis.projectReference,
                poNumber: importOrderAnalysis.poNumber,
                requestedDeliveryDate: importOrderAnalysis.requestedDate,
                shippingAddress: importOrderAnalysis.address,
                lineItems: importOrderAnalysis.lineItems.map((item) => ({
                  description: item.description,
                  qty: item.qty,
                  unitPrice: item.price,
                })),
                internalNotes: `Imported from "${importFile?.name ?? importOrderAnalysis.fileName}"`,
              });
              setPreviousStepBeforeManual('import-analysis');
              setStep('manual-creation');
            }}
          />
        );
      case 'processing':
        return <CreateOrderProcessingView onBack={() => setStep('select-quote')} />;
      case 'draft':
        return selectedQuote ? (
          <CreateOrderDraftView
            selectedQuote={selectedQuote}
            onReviewAdapt={handleReviewAdapt}
            onConfirmCreate={handleConfirmCreate}
            onBack={() => setStep('select-quote')}
          />
        ) : (
          <CreateOrderInitialView
            onSelectQuote={() => setStep('select-quote')}
            onSelectTemplate={() => setStep('select-template')}
            onSelectManualCreation={() => {
              setPreviousStepBeforeManual('initial');
              setStep('manual-creation');
            }}
            onSelectImportFile={() => setStep('import-file')}
          />
        );
      case 'manual-creation':
        return (
          <CreateOrderManualCreationView
            manualCreationEntry={manualCreationEntryFromPreviousStep(previousStepBeforeManual)}
            manualOrderCustomers={manualOrderCustomers}
            initialData={templatePreFill ?? undefined}
            onBack={() => {
              setTemplatePreFill(null);
              if (previousStepBeforeManual === 'import-analysis') {
                setImportFile(null);
                setStep('import-file');
              } else {
                setStep(previousStepBeforeManual);
              }
            }}
            onClose={() => handleOpenChange(false)}
            onCreateOrder={(data) => {
              showToast({ variant: 'success', message: 'Order was created successfully' });
              onConfirmManualCreate?.(data);
              handleOpenChange(false);
            }}
          />
        );
      case 'select-quote':
        return (
          <CreateOrderSelectQuoteView
            quoteSearch={quoteSearch}
            onQuoteSearchChange={setQuoteSearch}
            filteredQuotes={filteredQuotes}
            onBack={() => setStep('initial')}
            onConvertToOrder={handleConvertToOrder}
          />
        );
      case 'select-template':
        return (
          <CreateOrderSelectTemplateView
            templates={orderTemplates}
            onBack={() => setStep('initial')}
            onClose={() => handleOpenChange(false)}
            onSelectTemplate={(template) => {
              setPreviousStepBeforeManual('select-template');
              setTemplatePreFill({
                projectReference: template.name,
                shippingAddress: template.shippingAddress,
                customerId: template.customerId,
                lineItems: template.lineItems,
              });
              setStep('manual-creation');
            }}
          />
        );
      default:
        return (
          <CreateOrderInitialView
            onSelectQuote={() => setStep('select-quote')}
            onSelectTemplate={() => setStep('select-template')}
            onSelectManualCreation={() => {
              setPreviousStepBeforeManual('initial');
              setStep('manual-creation');
            }}
            onSelectImportFile={() => setStep('import-file')}
          />
        );
    }
  }

  const stepContent = renderStepContent();

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          'max-w-4xl !bg-white dark:!bg-zinc-950',
        )}
      >
        {stepContent}
      </DialogContent>
    </Dialog>
  );
}
