export interface ApprovedQuoteItem {
  description: string;
  qty: number;
  price: number;
  total: number;
}

export interface ApprovedQuote {
  quoteId: string;
  date: string;
  customer: string;
  project: string;
  value: number;
  status: string;
  requestedDate?: string;
  deliveryType?: string;
  items?: ApprovedQuoteItem[];
}
