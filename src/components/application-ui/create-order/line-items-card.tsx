import { Button } from '../button';
import { Card, CardContent } from '../card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../table';
import { Plus } from 'lucide-react';
import type { ManualOrderLineItem } from './types';
import { formatCurrency } from './utils';

export interface LineItemsCardProps {
  value: ManualOrderLineItem[];
  onChange: (items: ManualOrderLineItem[]) => void;
}

const DEFAULT_LINE_ITEM: ManualOrderLineItem = { description: '', qty: 0, unitPrice: 0 };
const TAX_RATE = 0.0825;

const cellInputClass =
  'w-full min-w-0 border-0 bg-transparent p-0 text-inherit shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0';

export function LineItemsCard({
  value,
  onChange,
}: LineItemsCardProps): React.ReactElement {
  function handleAddItem(): void {
    onChange([...value, { ...DEFAULT_LINE_ITEM }]);
  }

  function updateItem(index: number, patch: Partial<ManualOrderLineItem>): void {
    const next = value.slice();
    next[index] = { ...next[index], ...patch };
    if (patch.qty !== undefined && patch.qty < 0) next[index].qty = 0;
    if (patch.unitPrice !== undefined && patch.unitPrice < 0) next[index].unitPrice = 0;
    onChange(next);
  }

  const subtotal = value.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <Card className="border-border bg-card">
      <CardContent className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-medium text-foreground">Line Items</h3>
          <Button type="button" variant="outline" size="sm" className="cursor-pointer border-0" onClick={handleAddItem}>
            <Plus className="size-4" />
            Add item
          </Button>
        </div>
        <div className="overflow-hidden rounded-t-xl">
          <Table>
            <TableHeader className="bg-foreground/15">
              <TableRow>
                <TableHead className="uppercase text-foreground">ITEM DESCRIPTION</TableHead>
                <TableHead className="uppercase text-foreground">QTY</TableHead>
                <TableHead className="uppercase text-foreground">UNIT PRICE</TableHead>
                <TableHead className="w-[100px] text-right uppercase text-foreground"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {value.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="py-6 text-center">
                    <p className="text-sm italic text-muted-foreground">
                      No items added yet. Click &quot;Add Item&quot; to start.
                    </p>
                  </TableCell>
                </TableRow>
              ) : (
                value.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="py-2 !text-foreground">
                      <input
                        type="text"
                        className={cellInputClass}
                        value={item.description}
                        onChange={(e) => updateItem(index, { description: e.target.value })}
                        placeholder="Item Name / SKU"
                        aria-label="Item description"
                      />
                    </TableCell>
                    <TableCell className="py-2 !text-foreground">
                      <input
                        type="number"
                        min={0}
                        className={cellInputClass}
                        value={item.qty}
                        onChange={(e) => updateItem(index, { qty: Number(e.target.value) || 0 })}
                        aria-label="Quantity"
                      />
                    </TableCell>
                    <TableCell className="py-2 flex items-center justify-start gap-2 !text-foreground">
                      <span className="text-foreground">$</span>
                      <input
                        type="number"
                        min={0}
                        step={0.01}
                        className={cellInputClass}
                        value={item.unitPrice === 0 ? '' : item.unitPrice}
                        onChange={(e) =>
                          updateItem(index, { unitPrice: Math.max(0, parseFloat(e.target.value) || 0) })
                        }
                        placeholder="0.00"
                        aria-label="Unit price"
                      />
                    </TableCell>
                    <TableCell className="py-2 text-right !text-foreground">
                      {formatCurrency(item.qty * item.unitPrice)}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
        <div
          className={`mt-4 ml-auto rounded-lg border border-muted-foreground bg-white/10 dark:bg-black/10 p-4 max-w-[240px] w-full`}
        >
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-muted-foreground">Subtotal:</span>
            <span className="text-foreground">{formatCurrency(subtotal)}</span>
          </div>
          <div className="mt-1 flex justify-between gap-4 text-sm">
            <span className="text-muted-foreground">Tax (8.25%):</span>
            <span className="text-foreground">{formatCurrency(tax)}</span>
          </div>
          <div className="mt-1 flex justify-between gap-4 border-t border-muted-foreground pt-2 text-sm font-medium">
            <span className="text-muted-foreground">Total:</span>
            <span className="text-foreground">{formatCurrency(total)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
