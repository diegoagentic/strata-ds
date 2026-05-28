/**
 * Example: Transactions list with filters + pagination + bulk actions
 *
 * Composed pattern based on UI-Dealer/src/Transactions.tsx (deployed as
 * demo-strata.vercel.app). Re-implemented here using only semantic DS tokens
 * so it doubles as a LAWS-compliant reference for similar list views.
 *
 * Combines: Table + Badge + Input + Checkbox + Button + Pagination affordance.
 */

import { useState } from 'react';
import { Button } from '@/components/application-ui/button';
import { Badge } from '@/components/application-ui/badge';
import { Input } from '@/components/forms/input';
import { Checkbox } from '@/components/forms/checkbox';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/application-ui/table';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowDownTrayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

type Status = 'DRAFT' | 'FINALIZED' | 'PROCESSING' | 'ERROR';

interface Order {
  id: string;
  ref: string;
  customer: string;
  total: string;
  status: Status;
}

const ORDERS: Order[] = [
  { id: '1', ref: 'ORD-23910', customer: 'Aero Workspaces',  total: '$ 4,219.00', status: 'FINALIZED' },
  { id: '2', ref: 'ORD-23911', customer: 'Studio Hollin',     total: '$ 1,840.00', status: 'PROCESSING' },
  { id: '3', ref: 'ORD-23912', customer: 'Officeworks LLC',   total: '$  912.50',  status: 'DRAFT' },
  { id: '4', ref: 'ORD-23913', customer: 'Continua Co',       total: '$ 7,344.10', status: 'ERROR' },
  { id: '5', ref: 'ORD-23914', customer: 'Dupler Architects', total: '$ 2,201.00', status: 'FINALIZED' },
];

const STATUS_BADGE: Record<Status, { color: 'green' | 'amber' | 'red' | 'zinc'; label: string }> = {
  FINALIZED:  { color: 'green', label: 'Finalized' },
  PROCESSING: { color: 'amber', label: 'Processing' },
  DRAFT:      { color: 'zinc',  label: 'Draft' },
  ERROR:      { color: 'red',   label: 'Error' },
};

const STATUS_FILTERS: Array<Status | 'ALL'> = ['ALL', 'DRAFT', 'PROCESSING', 'FINALIZED', 'ERROR'];

export default function TransactionsListWithFiltersExample() {
  const [statusFilter, setStatusFilter] = useState<Status | 'ALL'>('ALL');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const visible = ORDERS.filter((o) => {
    if (statusFilter !== 'ALL' && o.status !== statusFilter) return false;
    if (
      query &&
      !o.customer.toLowerCase().includes(query.toLowerCase()) &&
      !o.ref.toLowerCase().includes(query.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const allChecked = visible.length > 0 && visible.every((o) => selected.has(o.id));
  function toggleAll() {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allChecked) for (const o of visible) next.delete(o.id);
      else for (const o of visible) next.add(o.id);
      return next;
    });
  }
  function toggleOne(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="space-y-4 p-6">
      <header className="space-y-1">
        <h1 className="font-brand text-xl text-foreground">Transactions</h1>
        <p className="text-sm text-muted-foreground">
          Composed pattern — based on UI-Dealer/src/Transactions.tsx. Uses only semantic DS tokens.
        </p>
      </header>

      {/* Toolbar: search + status filter pills + bulk actions */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-sm">
        <div className="relative">
          <MagnifyingGlassIcon className="pointer-events-none absolute left-2.5 top-2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="Search by reference or customer"
            className="w-64 pl-8"
          />
        </div>

        <div className="flex items-center gap-1 rounded-md border border-border bg-background p-0.5">
          {STATUS_FILTERS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatusFilter(s)}
              className={
                statusFilter === s
                  ? 'rounded px-2.5 py-1 text-xs font-medium bg-primary text-primary-foreground transition-colors'
                  : 'rounded px-2.5 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors'
              }
            >
              {s === 'ALL' ? 'All' : STATUS_BADGE[s].label}
            </button>
          ))}
        </div>

        <Button variant="outline" className="ml-auto gap-2">
          <FunnelIcon className="h-4 w-4" /> More filters
        </Button>
        <Button variant="outline" className="gap-2">
          <ArrowDownTrayIcon className="h-4 w-4" /> Export
        </Button>
      </div>

      {/* Bulk action bar — appears only when items selected */}
      {selected.size > 0 && (
        <div className="flex items-center justify-between rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-sm">
          <span className="text-foreground">
            <strong className="font-semibold">{selected.size}</strong> selected
          </span>
          <div className="flex gap-2">
            <Button variant="outline">Bulk approve</Button>
            <Button variant="destructive">Discard</Button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox checked={allChecked} onCheckedChange={toggleAll} aria-label="Select all" />
              </TableHead>
              <TableHead>Reference</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visible.map((o) => {
              const badge = STATUS_BADGE[o.status];
              return (
                <TableRow key={o.id} className="cursor-pointer">
                  <TableCell className="w-10">
                    <Checkbox
                      checked={selected.has(o.id)}
                      onCheckedChange={() => toggleOne(o.id)}
                      aria-label={`Select ${o.ref}`}
                    />
                  </TableCell>
                  <TableCell className="font-mono text-xs">{o.ref}</TableCell>
                  <TableCell>{o.customer}</TableCell>
                  <TableCell className="text-right font-mono">{o.total}</TableCell>
                  <TableCell>
                    <Badge variant="soft" color={badge.color}>
                      {badge.label}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {visible.length === 0 && (
          <div className="border-t border-border bg-muted px-4 py-6 text-center text-sm text-muted-foreground">
            No transactions match the current filters.
          </div>
        )}
      </div>

      {/* Pagination */}
      <footer className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Showing {visible.length} of {ORDERS.length} transactions
        </span>
        <div className="flex items-center gap-1">
          <Button variant="outline" className="size-8 p-0">
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <span className="px-2 font-mono text-xs">1 / 1</span>
          <Button variant="outline" className="size-8 p-0">
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
