/**
 * Example: SIF Generator — composed pattern using F26.A primitives.
 *
 * Demonstrates how FilterPills + FileUploadModal + DocumentReviewModal
 * combine into the canonical Quote Converter / SIF Generator layout that
 * production apps (smart-comparator, inbound-outbound, quote-converter)
 * each duplicate.
 *
 * Source pattern: inbound-outbound/src/QuoteConverter.tsx (1,287 LOC).
 * Re-implemented with DS primitives + semantic tokens.
 */

import { useMemo, useState } from 'react';
import {
  Upload,
  FileText,
  Package,
  ExternalLink,
  Settings,
  Search,
  List,
  LayoutGrid,
  ScanText,
  Bell,
  Moon,
  Box,
} from 'lucide-react';
import { FilterPills } from '@/components/application-ui/filter-pills';
import {
  DataListToolbar,
} from '@/components/application-ui/data-list-toolbar';
import { ViewToggle } from '@/components/application-ui/view-toggle';
import {
  StrataTopBar,
  TenantChip,
  ModePill,
} from '@/components/application-ui/strata-top-bar';
import {
  FileUploadModal,
  type FileUploadStep,
} from '@/components/overlays/file-upload-modal';
import {
  DocumentReviewModal,
  FieldSection,
  FieldValueRow,
  ConfidenceIndicator,
} from '@/components/overlays/document-review-modal';
import { Button } from '@/components/application-ui/button';
import { Badge } from '@/components/application-ui/badge';
import { Input } from '@/components/forms/input';

type StatusKey = 'all' | 'running' | 'ready' | 'completed' | 'unprocessed';

const STATUS_PILLS: { key: StatusKey; label: string; count: number }[] = [
  { key: 'all', label: 'All', count: 21 },
  { key: 'running', label: 'OCR Running', count: 0 },
  { key: 'ready', label: 'Ready to Review', count: 21 },
  { key: 'completed', label: 'Completed', count: 0 },
  { key: 'unprocessed', label: 'Not Processed', count: 22 },
];

interface DemoDoc {
  id: string;
  ref: string;
  vendor: string;
  type: 'Quote' | 'Purchase Order';
  status: 'Ready to Review' | 'Reviewed' | 'Pending';
  date: string;
  lineItems: number;
}

const DOCS: DemoDoc[] = [
  {
    id: '1',
    ref: 'S-QUO017792',
    vendor: 'AmTab',
    type: 'Quote',
    status: 'Reviewed',
    date: 'May 18, 2026',
    lineItems: 5,
  },
  {
    id: '2',
    ref: 'QT007508',
    vendor: 'Magnuson Group, Inc.',
    type: 'Quote',
    status: 'Reviewed',
    date: 'May 18, 2026',
    lineItems: 2,
  },
  {
    id: '3',
    ref: '330357 - 1',
    vendor: 'ergotron',
    type: 'Quote',
    status: 'Pending',
    date: 'May 18, 2026',
    lineItems: 3,
  },
  {
    id: '4',
    ref: '1448',
    vendor: 'Dubois Custom Carpentry',
    type: 'Quote',
    status: 'Pending',
    date: 'May 18, 2026',
    lineItems: 1,
  },
];

export default function SifGeneratorExample() {
  const [filter, setFilter] = useState<StatusKey>('all');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [uploadStep, setUploadStep] = useState<FileUploadStep | null>(null);
  const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  const [reviewDoc, setReviewDoc] = useState<DemoDoc | null>(null);
  const [reviewTab, setReviewTab] = useState<'header' | 'lines'>('header');

  const visible = useMemo(
    () =>
      DOCS.filter((d) =>
        search
          ? `${d.ref} ${d.vendor}`.toLowerCase().includes(search.toLowerCase())
          : true,
      ),
    [search],
  );

  return (
    <div className="space-y-4 p-6">
      {/* StrataTopBar — branded application top bar */}
      <StrataTopBar
        leading={
          <>
            <span className="h-9 w-9 rounded-full bg-foreground text-background flex items-center justify-center">
              <Box className="h-5 w-5" aria-hidden="true" />
            </span>
            <TenantChip label="TENANT" name="SPECIAL T" />
          </>
        }
        center={<ModePill icon={ScanText} label="OCR" active />}
        trailing={
          <>
            <button
              type="button"
              aria-label="Toggle theme"
              className="h-9 w-9 inline-flex items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <Moon className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Notifications"
              className="h-9 w-9 inline-flex items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <Bell className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 h-9 pl-1 pr-3 rounded-full text-sm font-medium hover:bg-muted transition-colors"
            >
              <span className="h-7 w-7 rounded-full bg-ai text-primary-foreground text-xs font-bold flex items-center justify-center">
                DZ
              </span>
              <span className="leading-tight text-left">
                <span className="block text-sm font-semibold text-foreground">
                  Diego Zuluaga
                </span>
                <span className="block text-[10px] text-muted-foreground">Expert</span>
              </span>
            </button>
          </>
        }
      />

      <header className="space-y-1 pt-2">
        <p className="text-xs font-mono text-muted-foreground">
          SIF Generator · OCR Tracking
        </p>
        <h1 className="font-brand text-xl text-foreground">SIF Generator</h1>
        <p className="text-sm text-muted-foreground">
          Composed pattern — StrataTopBar + FilterPills + DataListToolbar +
          ViewToggle + FileUploadModal + DocumentReviewModal. Source:
          inbound-outbound/src/QuoteConverter.tsx.
        </p>
      </header>

      <div className="rounded-2xl border border-border bg-card shadow-sm p-5 space-y-4">
        {/* Filter pills */}
        <FilterPills
          options={STATUS_PILLS}
          activeKey={filter}
          onChange={setFilter}
          ariaLabel="Document status filter"
        />

        {/* Toolbar (search + view toggle + actions) */}
        <DataListToolbar
          search={
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
                placeholder="Search documents..."
                className="pl-8"
              />
            </div>
          }
          viewToggle={
            <ViewToggle
              value={viewMode}
              onChange={setViewMode}
              options={[
                { value: 'list', icon: List, label: 'List view' },
                { value: 'grid', icon: LayoutGrid, label: 'Grid view' },
              ]}
            />
          }
          actions={
            <Button
              onClick={() => {
                setUploadFiles([]);
                setUploadStep('select');
              }}
              className="gap-2"
            >
              <Upload className="h-4 w-4" /> Upload Document
            </Button>
          }
        />

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr className="text-left text-[10px] uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-2.5 font-semibold">Document</th>
                <th className="px-4 py-2.5 font-semibold">Vendor</th>
                <th className="px-4 py-2.5 font-semibold">Status</th>
                <th className="px-4 py-2.5 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visible.map((d) => (
                <tr
                  key={d.id}
                  onClick={() => {
                    setReviewDoc(d);
                    setReviewTab('header');
                  }}
                  className="cursor-pointer transition-colors hover:bg-muted/30"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-foreground">{d.ref}</div>
                        <div className="text-xs text-muted-foreground">
                          {d.lineItems} line items
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <div className="text-foreground">{d.vendor}</div>
                      <Badge variant="soft" color="zinc" className="mt-1">
                        {d.type}
                      </Badge>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      variant="soft"
                      color={
                        d.status === 'Reviewed'
                          ? 'green'
                          : d.status === 'Ready to Review'
                            ? 'blue'
                            : 'amber'
                      }
                    >
                      {d.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Modal */}
      <FileUploadModal
        open={uploadStep !== null}
        step={uploadStep ?? 'select'}
        files={uploadFiles}
        validate={(f) =>
          f.size > 10 * 1024 * 1024 ? 'PDF file size must be less than 10MB' : null
        }
        itemNoun="Document"
        onClose={() => setUploadStep(null)}
        onAddFiles={(files) => {
          setUploadFiles((prev) => [...prev, ...files]);
          setUploadStep('selected');
        }}
        onRemoveFile={(i) =>
          setUploadFiles((prev) => prev.filter((_, idx) => idx !== i))
        }
        onStartUpload={() => {
          setUploadStep('uploading');
          window.setTimeout(() => setUploadStep('complete'), 1200);
        }}
        onFinish={() => {
          setUploadStep(null);
          setUploadFiles([]);
        }}
        onUploadMore={() => {
          setUploadStep('select');
          setUploadFiles([]);
        }}
      />

      {/* Review Modal */}
      <DocumentReviewModal
        open={reviewDoc !== null}
        onClose={() => setReviewDoc(null)}
        title="Document Review"
        subtitle={
          reviewDoc ? `${reviewDoc.vendor} · ${reviewDoc.ref}` : undefined
        }
        headerActions={
          <Button variant="outline" className="gap-1.5">
            <ExternalLink className="h-3.5 w-3.5" />
            View Original PDF
          </Button>
        }
        status={
          reviewDoc && (
            <Badge
              variant="soft"
              color={reviewDoc.status === 'Reviewed' ? 'green' : 'amber'}
            >
              {reviewDoc.status === 'Reviewed' ? 'Reviewed' : 'Pending For Review'}
            </Badge>
          )
        }
        tabs={[
          { key: 'header', label: 'Header Fields' },
          { key: 'lines', label: 'Line Items', count: reviewDoc?.lineItems ?? 0 },
        ]}
        activeTab={reviewTab}
        onTabChange={setReviewTab}
        footer={
          <>
            <ConfidenceIndicator value={64} className="mr-auto" />
            <Button variant="outline" onClick={() => setReviewDoc(null)}>
              Cancel
            </Button>
            <Button onClick={() => setReviewDoc(null)}>Save</Button>
          </>
        }
      >
        {reviewTab === 'header' ? (
          <div className="p-6 space-y-4 max-w-3xl">
            <FieldSection icon={<Package className="h-3.5 w-3.5" />} label="Quote Info">
              <FieldValueRow field="Quote Number" value={reviewDoc?.ref} />
              <FieldValueRow field="Quote Date" value={reviewDoc?.date} />
            </FieldSection>
            <FieldSection icon={<Package className="h-3.5 w-3.5" />} label="Vendor">
              <FieldValueRow field="Vendor Name" value={reviewDoc?.vendor} />
            </FieldSection>
            <FieldSection icon={<Settings className="h-3.5 w-3.5" />} label="Dealer">
              <FieldValueRow field="Dealer Name" value="" />
            </FieldSection>
          </div>
        ) : (
          <div className="p-6 text-sm text-muted-foreground">
            Line items table would render here. Use the EditableLineTable
            primitive (F26.B candidate) for the full canonical layout with
            add row, drag handles, totals row, and per-row edit/delete
            actions.
          </div>
        )}
      </DocumentReviewModal>
    </div>
  );
}
