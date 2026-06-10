/**
 * ExamplesView — surface the composed pattern catalog from src/examples/.
 *
 * Each example is a real-world composition (extracted from production
 * UI-Dealer code, re-implemented LAWS-compliant) demonstrating how to combine
 * multiple DS atoms/molecules into a functional layout.
 */

import { useState } from 'react';
import {
  TransactionsListWithFiltersExample,
  DashboardKpiGridExample,
  AckReconciliationModalExample,
  SifGeneratorExample,
} from '@/examples';

interface ExampleEntry {
  id: string;
  title: string;
  description: string;
  combines: string[];
  source: string;
  Component: () => JSX.Element;
}

const EXAMPLES: ExampleEntry[] = [
  {
    id: 'transactions-list',
    title: 'Transactions list with filters',
    description:
      'Table with status pills, search, multi-select, bulk actions, and pagination. The canonical "data list" pattern across operational views.',
    combines: ['Table', 'Badge', 'Input', 'Checkbox', 'Button'],
    source: 'UI-Dealer/src/Transactions.tsx',
    Component: TransactionsListWithFiltersExample,
  },
  {
    id: 'dashboard-kpi',
    title: 'Dashboard KPI grid',
    description:
      'Responsive 4-column KPI grid with trend deltas (Card + status icon container + brand numbers + Badge for recent activity).',
    combines: ['Card', 'Badge', 'Button'],
    source: 'UI-Dealer/src/Dashboard.tsx',
    Component: DashboardKpiGridExample,
  },
  {
    id: 'ack-reconciliation',
    title: 'ACK Reconciliation modal',
    description:
      'Multi-step modal (Dialog + Stepper + Table + Form). Reference for any wizard or workflow with discrete progress states.',
    combines: ['Dialog', 'Button', 'Table', 'Input', 'Badge'],
    source: 'UI-Dealer/src/components/AckReconciliationModal.tsx',
    Component: AckReconciliationModalExample,
  },
  {
    id: 'sif-generator',
    title: 'SIF Generator (Quote Converter)',
    description:
      'Full document-processing view: status filter pills, search toolbar, document table, multi-step upload modal, and document review modal with field sections. Promoted from inbound-outbound F26.A primitives.',
    combines: [
      'FilterPills',
      'FileUploadModal',
      'DocumentReviewModal',
      'FieldSection',
      'ConfidenceIndicator',
      'Badge',
      'Input',
      'Button',
    ],
    source: 'inbound-outbound/src/QuoteConverter.tsx',
    Component: SifGeneratorExample,
  },
];

export function ExamplesView() {
  const [activeId, setActiveId] = useState<string>(EXAMPLES[0].id);
  const active = EXAMPLES.find((e) => e.id === activeId) ?? EXAMPLES[0];

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-status-ai">
          Composed patterns · LAWS-compliant
        </p>
        <h1 className="font-brand text-4xl font-bold text-foreground">Examples</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Real-world layout patterns extracted from production projects and re-implemented
          using only semantic DS tokens. Use them as references when composing similar
          screens — they pass quality and accessibility checks.
        </p>
      </header>

      {/* Tab selector */}
      <nav
        className="bg-card border border-border rounded-xl p-2 flex flex-wrap gap-1 shadow-sm"
        role="tablist"
        aria-label="Example patterns"
      >
        {EXAMPLES.map((example) => {
          const isActive = example.id === activeId;
          return (
            <button
              key={example.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(example.id)}
              className={
                isActive
                  ? 'rounded-lg px-3 py-1.5 text-sm font-medium bg-primary text-primary-foreground transition-colors'
                  : 'rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors'
              }
            >
              {example.title}
            </button>
          );
        })}
      </nav>

      {/* Metadata */}
      <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <article className="rounded-lg border border-border bg-card p-4">
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Pattern
          </h2>
          <p className="text-sm text-foreground">{active.title}</p>
        </article>
        <article className="rounded-lg border border-border bg-card p-4">
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Combines
          </h2>
          <div className="flex flex-wrap gap-1">
            {active.combines.map((c) => (
              <code
                key={c}
                className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground"
              >
                {c}
              </code>
            ))}
          </div>
        </article>
        <article className="rounded-lg border border-border bg-card p-4">
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Source
          </h2>
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">
            {active.source}
          </code>
        </article>
      </section>

      <p className="text-sm text-muted-foreground">{active.description}</p>

      {/* Live preview */}
      <article
        className="overflow-hidden rounded-xl border border-border bg-background shadow-sm"
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
      >
        <active.Component />
      </article>

      {/* Footer */}
      <footer className="bg-muted rounded-lg px-4 py-3 text-xs text-muted-foreground">
        Source code:{' '}
        <code className="font-mono bg-card px-1.5 py-0.5 rounded text-foreground">
          src/examples/
        </code>{' '}
        — copy any file as a starting point for your own composition.
      </footer>
    </div>
  );
}
