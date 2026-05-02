import { Sparkles, Component as ComponentIcon, Layers, Palette } from "lucide-react";

export function OverviewView() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-sm font-semibold text-status-ai uppercase tracking-wider mb-2">
          Strata Design System · v1.0
        </p>
        <h1 className="text-4xl font-bold text-foreground mb-3">
          The single source of truth for the Strata product surface
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          93 production components, 17 governance rules, and an MCP server that delivers
          the design system directly into Cursor, Claude Code, GitHub Copilot, and other
          AI development tools.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={ComponentIcon} label="Components" value="93" hint="React + TypeScript" />
        <StatCard icon={Layers} label="Token Categories" value="5" hint="status · semantic · brand · primitives · foundations" />
        <StatCard icon={Palette} label="Governance Rules" value="8" hint="17 documented anti-patterns" />
        <StatCard icon={Sparkles} label="MCP Tools" value="9" hint="Available to AI tools via stdio" />
      </section>

      <section className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-status-ai/10 shrink-0">
            <Sparkles className="w-5 h-5 text-status-ai" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground mb-1">
              Connect your IDE to the MCP server
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              The Model Context Protocol server makes Strata governance, components, tokens,
              and code examples available to AI tools as live, queryable data.
            </p>
            <a
              href="#mcp"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("strata:navigate", { detail: "mcp" }));
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-brand-300 dark:bg-brand-500 text-foreground hover:bg-brand-400 transition-colors"
            >
              Open MCP setup →
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ArchCard
            tier="P1"
            title="strata-ds"
            description="This project. Component library + dev app + MCP server. Tier 1 strict governance."
          />
          <ArchCard
            tier="P2"
            title="front-react-strata-storybook"
            description="Storybook documentation site that uses P1 as a library. Tier 2 governance."
          />
          <ArchCard
            tier="P3+"
            title="Demo & simulation projects"
            description="Consumers like demo-2026-strata-v2 import from P1. Tier 3 governance."
          />
        </div>
      </section>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-center gap-2 text-muted-foreground mb-2">
        <Icon className="w-4 h-4" />
        <span className="text-xs uppercase tracking-wider font-semibold">{label}</span>
      </div>
      <div className="text-3xl font-bold text-foreground">{value}</div>
      <p className="text-xs text-muted-foreground mt-1">{hint}</p>
    </div>
  );
}

function ArchCard({ tier, title, description }: { tier: string; title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <span className="inline-block text-xs font-mono font-semibold text-status-ai bg-status-ai/10 px-2 py-0.5 rounded mb-3">
        {tier}
      </span>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
