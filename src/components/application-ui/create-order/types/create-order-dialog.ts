import type { ApprovedQuote } from './approved-quote';
import type { ImportOrderAnalysisResult } from './import-analysis';
import type { ManualOrderCustomerOption } from './manual-order';
import type { ManualOrderFormData } from './manual-order';
import type { OrderTemplate } from './order-template';

export type CreateOrderStep =
  | 'initial'
  | 'import-file'
  | 'import-processing'
  | 'import-analysis'
  | 'select-quote'
  | 'select-template'
  | 'processing'
  | 'draft'
  | 'manual-creation';

/** How the user reached the manual order form; drives the dialog title. */
export type CreateOrderManualCreationEntry = 'new-order' | 'from-template' | 'manual';

export interface CreateOrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Called when user confirms creating order from selected quote; parent should add order to list. */
  onConfirmCreate?: (quote: ApprovedQuote) => void;
  /** Called when user confirms creating order from manual form; parent should add order to list. */
  onConfirmManualCreate?: (data: ManualOrderFormData) => void;
  /** Approved quotes for "From Quote" flow. */
  approvedQuotes: ApprovedQuote[];
  /** Single analysis result for import flow (shown after processing step). */
  importOrderAnalysis: ImportOrderAnalysisResult;
  /** Order templates for "From Template" flow. */
  orderTemplates: OrderTemplate[];
  /** Customer options for manual creation form dropdown. */
  manualOrderCustomers: ManualOrderCustomerOption[];
}
