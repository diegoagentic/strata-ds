export interface ManualOrderLineItem {
  description: string;
  qty: number;
  unitPrice: number;
}

/** Payload when creating an order from the Manual Creation form. */
export interface ManualOrderFormData {
  customerId: string;
  projectReference: string;
  poNumber: string;
  requestedDeliveryDate: string;
  shippingAddress: string;
  lineItems: ManualOrderLineItem[];
  internalNotes?: string;
}

export interface ManualOrderCustomerOption {
  value: string;
  label: string;
}
