import { Badge } from '../badge';
import { Button } from '../button';
import { DialogDescription, DialogHeader, DialogTitle } from '../../overlays/dialog';
import { Input } from '../../forms/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../table';
import { TableEmptyState } from '../table-empty-state';
import { ArrowLeft, FileText, Search } from 'lucide-react';
import type { ApprovedQuote } from './types';
import { formatCurrency } from './utils';

export interface CreateOrderSelectQuoteViewProps {
  quoteSearch: string;
  onQuoteSearchChange: (value: string) => void;
  filteredQuotes: ApprovedQuote[];
  onBack: () => void;
  onConvertToOrder: (quote: ApprovedQuote) => void;
}

export function CreateOrderSelectQuoteView({
  quoteSearch,
  onQuoteSearchChange,
  filteredQuotes,
  onBack,
  onConvertToOrder,
}: CreateOrderSelectQuoteViewProps): React.ReactElement {
  return (
    <>
      <DialogHeader>
        <DialogTitle>
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
            <span className="text-foreground">Select Approved Quote</span>
          </div>
        </DialogTitle>
        <DialogDescription>Choose an approved quote to convert into a purchase order.</DialogDescription>
      </DialogHeader>
      <Input
        placeholder="Search by Quote ID, Customer, or Project"
        prefix={
          <span className="relative top-[7px] size-4 shrink-0">
            <Search className="size-4 shrink-0" aria-hidden />
          </span>
        }
        value={quoteSearch}
        onChange={(e) => onQuoteSearchChange(e.target.value)}
        className="mt-4 w-full"
      />
      <div className="mt-4 rounded-lg border border-border overflow-hidden">
        {filteredQuotes.length === 0 ? (
          <TableEmptyState
            message="No quotes match your filters"
            onClearFilters={() => onQuoteSearchChange('')}
          />
        ) : (
          <div className="max-h-[16rem] overflow-y-auto scrollbar-none">
            <Table className="bg-card">
              <TableHeader className={`bg-white/10 dark:bg-black/10 text-foreground`}>
                <TableRow>
                  <TableHead className="font-medium">QUOTE DETAILS</TableHead>
                  <TableHead className="font-medium">CUSTOMER & PROJECT</TableHead>
                  <TableHead className="font-medium">VALUE</TableHead>
                  <TableHead className="font-medium">STATUS</TableHead>
                  <TableHead className="w-[140px]" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuotes.map((q) => (
                  <TableRow key={q.quoteId}>
                    <TableCell className="font-medium text-foreground dark:text-foreground">
                      <div className="font-medium text-foreground">{q.quoteId}</div>
                      <div className="text-sm text-muted-foreground">{q.date}</div>
                    </TableCell>
                    <TableCell className="font-medium text-foreground dark:text-foreground">
                      <div className="font-medium text-foreground">{q.customer}</div>
                      <div className="text-sm text-muted-foreground">{q.project}</div>
                    </TableCell>
                    <TableCell className="font-medium text-foreground dark:text-foreground">
                      {formatCurrency(q.value)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="solid" color="green" className="bg-green-900 text-white rounded-xl">
                        {q.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="cursor-pointer gap-1.5"
                        onClick={() => onConvertToOrder(q)}
                      >
                        <FileText className="size-4" />
                        Convert to Order
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
}
