import type { ManualOrderLineItem } from './manual-order';

/** Order template for "From Template" flow. Pre-fill fields match ManualOrderFormData. */
export interface OrderTemplate {
  id: string;
  name: string;
  category: string;
  itemCount: number;
  lastUsed: string;
  totalValue: number;
  projectReference: string;
  shippingAddress: string;
  customerId: string;
  lineItems: ManualOrderLineItem[];
}
