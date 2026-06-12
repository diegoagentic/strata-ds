/**
 * Example: ACK Reconciliation multi-step modal
 *
 * Composed pattern based on UI-Dealer/src/components/AckReconciliationModal.tsx
 * (deployed as demo-strata.vercel.app). Re-implemented using only semantic DS
 * tokens. Reference for any wizard/workflow with discrete steps.
 *
 * Combines: Dialog + Stepper + Form + Table + Badge.
 */

import { useState } from 'react';
import { Button } from '@/components/application-ui/button';
import { Badge } from '@/components/application-ui/badge';
import { Input } from '@/components/forms/input';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/application-ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/overlays/dialog';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const STEPS = [
  { id: 1, label: 'Review discrepancies' },
  { id: 2, label: 'Annotate items' },
  { id: 3, label: 'Confirm resolution' },
];

interface DiscrepancyLine {
  id: string;
  sku: string;
  description: string;
  expected: number;
  received: number;
  resolution: 'accept' | 'reject' | 'pending';
}

const DISCREPANCIES: DiscrepancyLine[] = [
  { id: 'd1', sku: 'CHR-001', description: 'Aero Chair',    expected: 12, received: 10, resolution: 'pending' },
  { id: 'd2', sku: 'DSK-014', description: 'Studio Desk',   expected: 4,  received: 4,  resolution: 'accept' },
  { id: 'd3', sku: 'LMP-002', description: 'Task Lamp Mk2', expected: 8,  received: 6,  resolution: 'pending' },
];

const RESOLUTION_BADGE = {
  accept:  { color: 'green' as const, label: 'Accepted' },
  reject:  { color: 'red' as const,   label: 'Rejected' },
  pending: { color: 'amber' as const, label: 'Pending' },
};

export default function AckReconciliationModalExample() {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);
  const [notes, setNotes] = useState('');

  return (
    <div className="space-y-4 p-6">
      <header className="space-y-1">
        <h1 className="font-brand text-xl text-foreground">ACK Reconciliation Modal</h1>
        <p className="text-sm text-muted-foreground">
          Composed pattern — Dialog + Stepper + Form + Table. Based on
          UI-Dealer/src/components/AckReconciliationModal.tsx.
        </p>
        <Button
          onClick={() => {
            setOpen(true);
            setStep(0);
          }}
        >
          Re-open modal
        </Button>
      </header>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Reconcile order ORD-23913</DialogTitle>
            <DialogDescription>
              Resolve 3 discrepancies between the ACK and the original order.
            </DialogDescription>
          </DialogHeader>

          {/* Stepper */}
          <div className="my-2 flex items-center gap-2 rounded-lg border border-border bg-muted p-3">
            {STEPS.map((s, i) => {
              const active = i === step;
              const done = i < step;
              return (
                <div key={s.id} className="flex flex-1 items-center gap-2">
                  <span
                    className={
                      active
                        ? 'flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold'
                        : done
                          ? 'flex h-7 w-7 items-center justify-center rounded-full bg-success text-success-foreground'
                          : 'flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-xs text-muted-foreground'
                    }
                  >
                    {done ? <CheckCircleIcon className="h-4 w-4" /> : s.id}
                  </span>
                  <span
                    className={
                      active || done
                        ? 'text-sm font-medium text-foreground'
                        : 'text-sm text-muted-foreground'
                    }
                  >
                    {s.label}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span
                      className={
                        done ? 'mx-1 h-px flex-1 bg-success' : 'mx-1 h-px flex-1 bg-border'
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step content */}
          {step === 0 && (
            <div className="overflow-hidden rounded-lg border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>SKU</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Expected</TableHead>
                    <TableHead className="text-right">Received</TableHead>
                    <TableHead>Resolution</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {DISCREPANCIES.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell className="font-mono text-xs">{d.sku}</TableCell>
                      <TableCell>{d.description}</TableCell>
                      <TableCell className="text-right">{d.expected}</TableCell>
                      <TableCell className="text-right">
                        <span
                          className={
                            d.expected === d.received ? 'text-foreground' : 'text-destructive'
                          }
                        >
                          {d.received}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="soft" color={RESOLUTION_BADGE[d.resolution].color}>
                          {RESOLUTION_BADGE[d.resolution].label}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-3">
              <label className="block text-sm font-medium text-foreground">
                Resolution notes
                <Input
                  value={notes}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNotes(e.target.value)}
                  placeholder="E.g. Supplier confirmed shortage of 2 units, will ship next week."
                  className="mt-1"
                />
              </label>
              <p className="rounded-md bg-info/5 px-3 py-2 text-xs text-info">
                Notes will be included in the acknowledgement sent to the supplier.
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3 rounded-lg border border-success/40 bg-success/5 p-4 text-sm">
              <div className="flex items-center gap-2 text-success">
                <CheckCircleIcon className="h-5 w-5" />
                <span className="font-semibold">Ready to confirm</span>
              </div>
              <ul className="list-inside list-disc text-foreground">
                <li>3 discrepancies reviewed</li>
                <li>Notes: {notes || '(no notes)'}</li>
                <li>ACK will be sent to the supplier on confirm</li>
              </ul>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            {step > 0 && (
              <Button variant="outline" onClick={() => setStep((s) => s - 1)}>
                Back
              </Button>
            )}
            {step < STEPS.length - 1 ? (
              <Button onClick={() => setStep((s) => s + 1)}>Next</Button>
            ) : (
              <Button onClick={() => setOpen(false)}>Confirm resolution</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
