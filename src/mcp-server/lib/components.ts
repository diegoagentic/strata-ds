/**
 * components.ts — grouped DS component catalog for the `list_components`
 * MCP tool.
 *
 * Sources from the same `components-data.ts` that the DS app uses to drive
 * the ComponentDetailView at :5173. Grouping mirrors the sidebar groups in
 * `src/app/App.tsx`.
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { getGovernancePath } from './source.js';

// We can't reach into the React app's TypeScript at runtime; instead we
// read the component IDs from a precomputed JSON if available, else fall
// back to a hand-maintained map. Keep both paths working so the tool stays
// usable in bundled (offline) mode.

interface CatalogEntry {
  id: string;
  name: string;
  category: string;
  import: string;
  description?: string;
}

// Hand-maintained baseline. Kept compact; covers the major categories so
// list_components is useful even without the JSON sidecar.
const BASELINE: CatalogEntry[] = [
  // ── Strata Components (F26-F28 promoted) ─────────────────────────
  { id: 'strata-top-bar', name: 'StrataTopBar', category: 'Strata Components', import: `import { StrataTopBar } from "strata-design-system"` },
  { id: 'data-list-toolbar', name: 'DataListToolbar', category: 'Strata Components', import: `import { DataListToolbar } from "strata-design-system"` },
  { id: 'view-toggle', name: 'ViewToggle', category: 'Strata Components', import: `import { ViewToggle } from "strata-design-system"` },
  { id: 'filter-pills', name: 'FilterPills', category: 'Strata Components', import: `import { FilterPills } from "strata-design-system"` },
  { id: 'data-list-table', name: 'DataListTable', category: 'Strata Components', import: `import { DataListTable } from "strata-design-system"` },
  { id: 'data-list-card', name: 'DataListCard', category: 'Strata Components', import: `import { DataListCard } from "strata-design-system"` },
  { id: 'data-list-card-grid', name: 'DataListCardGrid', category: 'Strata Components', import: `import { DataListCardGrid } from "strata-design-system"` },
  { id: 'bulk-action-bar', name: 'BulkActionBar', category: 'Strata Components', import: `import { BulkActionBar } from "strata-design-system"` },
  { id: 'funnel-stepper', name: 'FunnelStepper', category: 'Strata Components', import: `import { FunnelStepper } from "strata-design-system"` },
  { id: 'kanban-funnel', name: 'KanbanFunnel', category: 'Strata Components', import: `import { KanbanFunnel } from "strata-design-system"` },
  { id: 'file-upload-modal', name: 'FileUploadModal', category: 'Strata Components', import: `import { FileUploadModal } from "strata-design-system"` },
  { id: 'editable-line-table', name: 'EditableLineTable', category: 'Strata Components', import: `import { EditableLineTable } from "strata-design-system"` },
  { id: 'document-review-modal', name: 'DocumentReviewModal', category: 'Strata Components', import: `import { DocumentReviewModal } from "strata-design-system"` },
  { id: 'field-section', name: 'FieldSection', category: 'Strata Components', import: `import { FieldSection } from "strata-design-system"` },
  { id: 'field-value-row', name: 'FieldValueRow', category: 'Strata Components', import: `import { FieldValueRow } from "strata-design-system"` },
  { id: 'confidence-indicator', name: 'ConfidenceIndicator', category: 'Strata Components', import: `import { ConfidenceIndicator } from "strata-design-system"` },
  { id: 'split-pane-review-modal', name: 'SplitPaneReviewModal', category: 'Strata Components', import: `import { SplitPaneReviewModal } from "strata-design-system"` },
  { id: 'discrepancy-row', name: 'DiscrepancyRow', category: 'Strata Components', import: `import { DiscrepancyRow } from "strata-design-system"` },
  { id: 'discrepancy-comparison-block', name: 'DiscrepancyComparisonBlock', category: 'Strata Components', import: `import { DiscrepancyComparisonBlock } from "strata-design-system"` },

  // ── Application UI (selected — full list lives in components-data.ts)
  { id: 'button', name: 'Button', category: 'Application UI', import: `import { Button } from "strata-design-system"` },
  { id: 'badge', name: 'Badge', category: 'Application UI', import: `import { Badge } from "strata-design-system"` },
  { id: 'card', name: 'Card', category: 'Application UI', import: `import { Card } from "strata-design-system"` },
  { id: 'table', name: 'Table', category: 'Application UI', import: `import { Table } from "strata-design-system"` },
  { id: 'navbar', name: 'Navbar', category: 'Application UI', import: `import { Navbar } from "strata-design-system"` },
  { id: 'tabs', name: 'Tabs', category: 'Application UI', import: `import { Tabs } from "strata-design-system"` },
  { id: 'kpi-card', name: 'KPICard', category: 'Application UI', import: `import { KPICard } from "strata-design-system"` },
  { id: 'page-layout', name: 'PageLayout', category: 'Application UI', import: `import { PageLayout } from "strata-design-system"` },

  // ── Forms ─────────────────────────────────────────────────────────
  { id: 'field', name: 'Field', category: 'Forms', import: `import { Field, FieldLabel, FieldDescription, FieldError } from "strata-design-system"` },
  { id: 'input', name: 'Input', category: 'Forms', import: `import { Input } from "strata-design-system"` },
  { id: 'select', name: 'Select', category: 'Forms', import: `import { Select, SelectTrigger, SelectContent, SelectItem } from "strata-design-system"` },
  { id: 'checkbox', name: 'Checkbox', category: 'Forms', import: `import { Checkbox } from "strata-design-system"` },
  { id: 'date-picker', name: 'DatePicker', category: 'Forms', import: `import { DatePicker } from "strata-design-system"` },
  { id: 'textarea', name: 'Textarea', category: 'Forms', import: `import { Textarea } from "strata-design-system"` },

  // ── Overlays ──────────────────────────────────────────────────────
  { id: 'dialog', name: 'Dialog', category: 'Overlays', import: `import { Dialog, DialogContent, DialogHeader, DialogTitle } from "strata-design-system"` },
  { id: 'tooltip', name: 'Tooltip', category: 'Overlays', import: `import { Tooltip, TooltipTrigger, TooltipContent } from "strata-design-system"` },
  { id: 'popover', name: 'Popover', category: 'Overlays', import: `import { Popover, PopoverTrigger, PopoverContent } from "strata-design-system"` },
  { id: 'sheet', name: 'Sheet', category: 'Overlays', import: `import { Sheet, SheetTrigger, SheetContent } from "strata-design-system"` },
  { id: 'drawer', name: 'Drawer', category: 'Overlays', import: `import { Drawer } from "strata-design-system"` },
  { id: 'sonner', name: 'Sonner / Toaster', category: 'Overlays', import: `import { Toaster, toast } from "strata-design-system"` },
];

/**
 * Look for a precomputed catalog JSON sidecar alongside the governance
 * folder (built by the DS app if it ever publishes one). For now this is
 * always null in practice and we use the BASELINE map.
 */
function loadCatalogSidecar(): CatalogEntry[] | null {
  try {
    const root = getGovernancePath();
    const sidecar = resolve(root, '..', 'components-catalog.json');
    if (existsSync(sidecar)) {
      const raw = readFileSync(sidecar, 'utf8');
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) return arr as CatalogEntry[];
    }
  } catch {
    /* fall through */
  }
  return null;
}

export function listComponents(): CatalogEntry[] {
  return loadCatalogSidecar() ?? BASELINE;
}

export function formatComponentList(entries: CatalogEntry[]): string {
  const lines: string[] = [];
  lines.push('# Strata DS — Component catalog');
  lines.push('');
  lines.push(`${entries.length} components grouped by category.`);
  lines.push('');
  const groups = new Map<string, CatalogEntry[]>();
  for (const e of entries) {
    if (!groups.has(e.category)) groups.set(e.category, []);
    groups.get(e.category)!.push(e);
  }
  for (const [cat, items] of groups) {
    lines.push(`## ${cat} (${items.length})`);
    lines.push('');
    for (const e of items) {
      lines.push(`- **${e.name}** — \`${e.id}\``);
      lines.push(`  \`\`\`${e.import}\`\`\``);
    }
    lines.push('');
  }
  return lines.join('\n');
}
