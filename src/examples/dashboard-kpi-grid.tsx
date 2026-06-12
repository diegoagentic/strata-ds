/**
 * Example: Dashboard KPI grid with metrics + trend deltas
 *
 * Composed pattern based on UI-Dealer/src/Dashboard.tsx (deployed as
 * demo-strata.vercel.app). Re-implemented using only semantic DS tokens.
 *
 * Combines: Card + Badge + Button + heroicons for trend indicators.
 */

import { Card } from '@/components/application-ui/card';
import { Badge } from '@/components/application-ui/badge';
import { Button } from '@/components/application-ui/button';
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

interface KpiDatum {
  label: string;
  value: string;
  delta: number;
  icon: typeof ShoppingCartIcon;
  tone: 'success' | 'info' | 'warning' | 'destructive';
}

const KPIS: KpiDatum[] = [
  { label: 'Orders this week', value: '128', delta: 12,  icon: ShoppingCartIcon,         tone: 'success' },
  { label: 'Open quotes',       value: '34',  delta: -5,  icon: DocumentTextIcon,         tone: 'info' },
  { label: 'Pending ACKs',      value: '12',  delta: 0,   icon: CheckBadgeIcon,           tone: 'warning' },
  { label: 'Discrepancies',     value: '4',   delta: -25, icon: ExclamationTriangleIcon,  tone: 'destructive' },
];

function deltaIcon(delta: number) {
  return delta >= 0 ? ArrowTrendingUpIcon : ArrowTrendingDownIcon;
}

function deltaTone(delta: number) {
  if (delta === 0) return 'text-muted-foreground';
  return delta > 0 ? 'text-success' : 'text-destructive';
}

const TONE_STYLES = {
  success:     { iconBg: 'bg-success/10',     iconText: 'text-success' },
  info:        { iconBg: 'bg-info/10',        iconText: 'text-info' },
  warning:     { iconBg: 'bg-warning/10',     iconText: 'text-warning' },
  destructive: { iconBg: 'bg-destructive/10', iconText: 'text-destructive' },
};

export default function DashboardKpiGridExample() {
  return (
    <div className="space-y-6 p-6">
      <header className="flex items-end justify-between gap-3">
        <div className="space-y-1">
          <h1 className="font-brand text-xl text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Composed pattern — KPI grid + trend deltas. Based on UI-Dealer/src/Dashboard.tsx.
          </p>
        </div>
        <Button variant="outline">Last 7 days</Button>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {KPIS.map((kpi) => {
          const Icon = kpi.icon;
          const DeltaIcon = deltaIcon(kpi.delta);
          const tone = TONE_STYLES[kpi.tone];
          return (
            <Card key={kpi.label} className="flex flex-col gap-3 p-4">
              <header className="flex items-start justify-between gap-2">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                  {kpi.label}
                </span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${tone.iconBg}`}
                >
                  <Icon className={`h-4 w-4 ${tone.iconText}`} />
                </span>
              </header>
              <div className="flex items-baseline gap-2">
                <span className="font-brand text-3xl text-foreground">{kpi.value}</span>
              </div>
              <footer className="flex items-center gap-1.5 text-xs">
                <DeltaIcon className={`h-3.5 w-3.5 ${deltaTone(kpi.delta)}`} />
                <span className={`font-medium ${deltaTone(kpi.delta)}`}>
                  {kpi.delta > 0 ? '+' : ''}
                  {kpi.delta}%
                </span>
                <span className="text-muted-foreground">vs last week</span>
              </footer>
            </Card>
          );
        })}
      </div>

      {/* Secondary section — recent activity */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Card className="col-span-1 p-4 lg:col-span-2">
          <header className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">Recent orders</h2>
            <Button variant="ghost" className="h-7 text-xs">
              View all
            </Button>
          </header>
          <div className="space-y-2">
            {[
              { ref: 'ORD-23914', label: 'Aero Workspaces',  status: 'Finalized', tone: 'green' as const },
              { ref: 'ORD-23913', label: 'Continua Co',       status: 'Processing', tone: 'amber' as const },
              { ref: 'ORD-23912', label: 'Officeworks LLC',   status: 'Draft', tone: 'zinc' as const },
            ].map((r) => (
              <div
                key={r.ref}
                className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">{r.ref}</span>
                  <span className="text-foreground">{r.label}</span>
                </div>
                <Badge variant="soft" color={r.tone}>
                  {r.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col gap-2 p-4">
          <h2 className="text-sm font-semibold text-foreground">Action needed</h2>
          <p className="text-xs text-muted-foreground">
            4 discrepancies waiting for reconciliation.
          </p>
          <Button className="mt-auto">Open reconciliation</Button>
        </Card>
      </div>
    </div>
  );
}
