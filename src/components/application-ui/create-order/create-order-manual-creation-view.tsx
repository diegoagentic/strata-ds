import {
  Button } from '../button';
import { Card, CardContent } from '../card';
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../overlays/dialog';
import { Input } from '../../forms/input';
import { Label } from '../label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../forms/select';
import { Textarea } from '../../forms/textarea';
import { ArrowLeft, CalendarIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import type {
  CreateOrderManualCreationEntry,
  ManualOrderCustomerOption,
  ManualOrderFormData,
  ManualOrderLineItem,
} from './types';
import { LineItemsCard } from './line-items-card';
import { cn } from '@/utils';

const MANUAL_CREATION_TITLE_BY_ENTRY: Record<CreateOrderManualCreationEntry, string> = {
  'new-order': 'New Order',
  'from-template': 'New Order From Template',
  manual: 'Manual Creation',
};

export interface CreateOrderManualCreationViewProps {
  /** Which flow opened this form (Import File / From Quote → new-order; From Template → from-template; blank form → manual). */
  manualCreationEntry: CreateOrderManualCreationEntry;
  /** Called when user clicks Back; parent (e.g. dialog) returns to the step the user came from. */
  onBack: () => void;
  onClose: () => void;
  /** Optional pre-fill data (e.g. from template); when provided, form state is initialized from it. */
  initialData?: Partial<ManualOrderFormData>;
  /** Called when user clicks Create Order with form data (dialog should show toast, add to list, then close). */
  onCreateOrder?: (data: ManualOrderFormData) => void;
  /** Customer options for the Customer dropdown. */
  manualOrderCustomers: ManualOrderCustomerOption[];
  theme?: 'light' | 'dark';
}

export function CreateOrderManualCreationView({
  manualCreationEntry,
  onBack,
  onClose,
  initialData,
  onCreateOrder,
  manualOrderCustomers,
}: CreateOrderManualCreationViewProps): React.ReactElement {
  const [selectedCustomer, setSelectedCustomer] = useState<string>(initialData?.customerId ?? '');
  const [projectReference, setProjectReference] = useState<string>(initialData?.projectReference ?? '');
  const [poNumber, setPoNumber] = useState<string>(initialData?.poNumber ?? '');
  const [requestedDeliveryDate, setRequestedDeliveryDate] = useState<string>(
    initialData?.requestedDeliveryDate ?? '',
  );
  const [shippingAddress, setShippingAddress] = useState<string>(initialData?.shippingAddress ?? '');
  const [lineItems, setLineItems] = useState<ManualOrderLineItem[]>(
    initialData?.lineItems?.length ? [...initialData.lineItems] : [],
  );
  const [internalNotes, setInternalNotes] = useState<string>(initialData?.internalNotes ?? '');

  const manualDeliveryDateInputRef = useRef<HTMLInputElement>(null);

  const inputClass = 'bg-transparent h-[44px]';

  const isFormValid =
    selectedCustomer.trim() !== '' &&
    projectReference.trim() !== '' &&
    poNumber.trim() !== '' &&
    requestedDeliveryDate.trim() !== '' &&
    shippingAddress.trim() !== '' &&
    lineItems.length >= 1;

  return (
    <>
      <DialogHeader>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="shrink-0 cursor-pointer"
              onClick={onBack}
              aria-label="Back"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <DialogTitle>{MANUAL_CREATION_TITLE_BY_ENTRY[manualCreationEntry]}</DialogTitle>
          </div>
        </div>
        <DialogDescription>Fill in the details below to create a new order.</DialogDescription>
      </DialogHeader>

      <div className="mt-4 space-y-4 max-h-[600px] overflow-y-auto scrollbar-none">
        {/* Customer Information */}
        <Card className="border-border bg-card">
          <CardContent className="p-4">
            <h3 className="mb-4 text-sm font-medium text-foreground">Customer Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="manual-customer">Customer</Label>
                <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
                  <SelectTrigger
                    id="manual-customer"
                    className={cn(inputClass, 'w-full rounded-md border-border !h-[44px]')}
                  >
                    <SelectValue placeholder="Select a customer..." />
                  </SelectTrigger>
                  <SelectContent className="rounded-md border-border bg-card">
                    {manualOrderCustomers.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value} className="cursor-pointer">
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="manual-po">PO Number</Label>
                <Input
                  id="manual-po"
                  placeholder="e.g. PO-2024-001"
                  className={cn(inputClass, 'w-full')}
                  value={poNumber}
                  onChange={(e) => setPoNumber(e.target.value)}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="manual-project-ref">Project Reference</Label>
                <Input
                  id="manual-project-ref"
                  placeholder="e.g. PO-2024-001"
                  className={cn(inputClass, 'w-full')}
                  value={projectReference}
                  onChange={(e) => setProjectReference(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logistics & Delivery */}
        <Card className="border-border bg-card">
          <CardContent className="p-4">
            <h3 className="mb-4 text-sm font-medium text-foreground">Logistics & Delivery</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="manual-delivery-date">Requested Delivery Date</Label>
                <Input
                  ref={manualDeliveryDateInputRef}
                  id="manual-delivery-date"
                  type="date"
                  value={requestedDeliveryDate}
                  onClick={() => manualDeliveryDateInputRef.current?.showPicker?.()}
                  onChange={(e) => setRequestedDeliveryDate(e.target.value)}
                  suffix={
                    <CalendarIcon
                      className="h-4 w-4 shrink-0 text-muted-foreground !cursor-pointer"
                      aria-hidden
                    />
                  }
                  className={cn(inputClass, 'min-h-[44px] [&::-webkit-calendar-picker-indicator]:opacity-0 w-full')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="manual-shipping">Shipping Address</Label>
                <Input
                  id="manual-shipping"
                  placeholder="e.g. PO-2024-001"
                  className={cn(inputClass, 'w-full')}
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Line Items */}
        <LineItemsCard value={lineItems} onChange={setLineItems} />

        {/* Internal Notes */}
        <Card className="border-border bg-card">
          <CardContent className="p-4">
            <h3 className="mb-4 text-sm font-medium text-foreground">Internal Notes</h3>
            <Textarea
              id="manual-notes"
              placeholder="Please deliver to Loading Dock B."
              className="min-h-[80px] w-full bg-transparent"
              value={internalNotes}
              onChange={(e) => setInternalNotes(e.target.value)}
            />
          </CardContent>
        </Card>
      </div>

      <DialogFooter className="mt-6">
        <Button
          type="button"
          variant="ghost"
          className="text-black dark:text-brand-400 border-brand-400 bg-brand-400/10 cursor-pointer"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          type="button"
          className="cursor-pointer"
          disabled={!isFormValid}
          onClick={() =>
            onCreateOrder?.({
              customerId: selectedCustomer,
              projectReference,
              poNumber,
              requestedDeliveryDate,
              shippingAddress,
              lineItems,
              internalNotes: internalNotes || undefined,
            })
          }
        >
          Create Order
        </Button>
      </DialogFooter>
    </>
  );
}
