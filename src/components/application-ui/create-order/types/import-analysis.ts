export interface ImportOrderAnalysisLineItem {
  description: string;
  qty: number;
  price: number;
  total: number;
}

/** Result of analyzing an uploaded order file (PDF/CSV/Excel). Used by Import Order From File flow. */
export interface ImportOrderAnalysisResult {
  fileName: string;
  customerName: string;
  customerId: string;
  address: string;
  projectReference: string;
  poNumber: string;
  requestedDate: string;
  lineItems: ImportOrderAnalysisLineItem[];
  itemCount: number;
  confidence: string;
}
