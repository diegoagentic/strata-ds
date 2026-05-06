import { useEffect, useState } from "react";
import {
  Copy,
  Check,
  RefreshCw,
  Server,
  Wrench,
  Sparkles,
  Send,
  Plug,
  Bot,
  ArrowRight,
  Zap,
  X,
  Shield,
} from "lucide-react";
import { copyToClipboard } from "@/utils/clipboard";
import { cn } from "@/utils/cn";

type Status = "checking" | "online" | "offline";

interface HealthData {
  status: string;
  name: string;
  version: string;
  tools: number;
  components: number;
  foundations: number;
  rules: number;
  antiPatterns: number;
}

const HEALTH_URL = "https://strata-ds-production.up.railway.app/health";
const MCP_HTTP_URL = "https://strata-ds-production.up.railway.app/mcp";

const TOOLS = [
  { name: "get_session_briefing", description: "MUST BE CALLED ONCE AT SESSION START. Returns active rules + mandatory workflow. Equivalent to reading CLAUDE.md but live.", isNew: true },
  { name: "plan_ui", description: "🚨 MANDATORY BEFORE ANY UI. Given a description like 'navbar with tabs', returns the recommended component, tokens, rules, and anti-patterns.", isNew: true },
  { name: "get_overview", description: "Full DS overview, stack, and architecture." },
  { name: "get_component", description: "Detailed spec for a component (variants, tokens, anti-patterns)." },
  { name: "get_component_code", description: "React, HTML, CSS, and AI Prompt code blocks for a component." },
  { name: "get_tokens", description: "CSS tokens by category — status, semantic, brand, primitives, foundations." },
  { name: "get_foundations", description: "Colors, typography, spacing, borders, shadows, branding, transparency, grid-containers." },
  { name: "get_rules", description: "Governance rules by category (color-tokens, buttons, icons, etc.)." },
  { name: "get_anti_patterns", description: "All 17 documented anti-patterns to avoid." },
  { name: "search_governance", description: "Full-text search across components, rules, tokens, foundations." },
  { name: "report_error", description: "Report a DS violation to REFINEMENT_PROPOSALS.md." },
];

const CONFIGS: Record<string, { path: string; json: string; note?: string }> = {
  cursor: {
    path: ".cursor/mcp.json",
    json: JSON.stringify(
      {
        mcpServers: {
          "strata-ds": {
            url: "https://strata-ds-production.up.railway.app/mcp",
          },
        },
      },
      null,
      2,
    ),
  },
  "claude-code": {
    path: ".mcp.json",
    json: JSON.stringify(
      {
        mcpServers: {
          "strata-ds": {
            type: "http",
            url: "https://strata-ds-production.up.railway.app/mcp",
          },
        },
      },
      null,
      2,
    ),
    note: "Place this file at your project root. The server is always online — no local setup needed.",
  },
  "vscode-copilot": {
    path: ".vscode/mcp.json",
    json: JSON.stringify(
      {
        servers: {
          "strata-ds": {
            type: "http",
            url: "https://strata-ds-production.up.railway.app/mcp",
          },
        },
      },
      null,
      2,
    ),
    note: "Requires GitHub Copilot MCP support (preview / 2025+).",
  },
  other: {
    path: "your-tool-config.json",
    json: JSON.stringify(
      {
        mcpServers: {
          "strata-ds": {
            type: "http",
            url: "https://strata-ds-production.up.railway.app/mcp",
          },
        },
      },
      null,
      2,
    ),
    note: "Generic HTTP MCP config. Works with any MCP-compatible tool that supports HTTP transport.",
  },
};

export function MCPView() {
  const [status, setStatus] = useState<Status>("checking");
  const [health, setHealth] = useState<HealthData | null>(null);
  const [activeTab, setActiveTab] = useState<keyof typeof CONFIGS>("cursor");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const checkHealth = async () => {
    setStatus("checking");
    try {
      const res = await fetch(HEALTH_URL, { cache: "no-store" });
      if (!res.ok) throw new Error("not ok");
      const data = (await res.json()) as HealthData;
      setHealth(data);
      setStatus("online");
    } catch {
      setHealth(null);
      setStatus("offline");
    }
  };

  useEffect(() => {
    checkHealth();
    const id = setInterval(checkHealth, 5000);
    return () => clearInterval(id);
  }, []);

  const copy = async (key: string, value: string) => {
    const ok = await copyToClipboard(value);
    if (ok) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const startCommand = "https://strata-ds-production.up.railway.app/mcp";

  return (
    <div className="space-y-10">
      <header>
        <p className="text-sm font-semibold text-status-ai uppercase tracking-wider mb-2">
          Model Context Protocol
        </p>
        <h1 className="text-4xl font-bold text-foreground mb-3">
          Connect to the Strata DS MCP server
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          The MCP server exposes governance, components, tokens, and foundations to
          AI development tools — so they always generate DS-compliant code.
        </p>
      </header>

      {/* Server status */}
      <section className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <StatusBadge status={status} />
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {status === "online"
                  ? "Server is running"
                  : status === "offline"
                  ? "Server is not running"
                  : "Checking..."}
              </h2>
              <p className="text-sm text-muted-foreground">
                Health endpoint: <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">{HEALTH_URL}</code>
              </p>
            </div>
          </div>
          <button
            onClick={checkHealth}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-md border border-border hover:bg-muted transition-colors"
          >
            <RefreshCw className={cn("w-4 h-4", status === "checking" && "animate-spin")} />
            Test Connection
          </button>
        </div>

        {status === "online" && health && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6 pt-6 border-t border-border">
            <Stat label="Tools" value={health.tools} />
            <Stat label="Components" value={health.components} />
            <Stat label="Foundations" value={health.foundations} />
            <Stat label="Rules" value={health.rules} />
            <Stat label="Anti-patterns" value={health.antiPatterns} />
          </div>
        )}

        {status === "offline" && (
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm font-semibold text-foreground mb-2">MCP endpoint:</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 font-mono text-sm bg-muted text-foreground px-3 py-2 rounded-md">
                {startCommand}
              </code>
              <button
                onClick={() => copy("start", startCommand)}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md border border-border hover:bg-muted transition-colors"
              >
                {copiedKey === "start" ? (
                  <Check className="w-4 h-4 text-status-success" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              The server runs on Railway — no local setup needed. If this shows offline, check Railway status.
            </p>
          </div>
        )}
      </section>

      {/* Connect your IDE */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-1">Connect your IDE</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Pick your tool, copy the config, paste it into the indicated path.
        </p>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="flex border-b border-border overflow-x-auto">
            {(Object.keys(CONFIGS) as (keyof typeof CONFIGS)[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "px-5 py-3 text-sm font-semibold whitespace-nowrap transition-colors",
                  activeTab === key
                    ? "bg-background text-foreground border-b-2 border-foreground -mb-px"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                {labelFor(key)}
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <code className="font-mono text-sm text-muted-foreground">
                {CONFIGS[activeTab].path}
              </code>
              <button
                onClick={() => copy(activeTab, CONFIGS[activeTab].json)}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-md bg-muted hover:bg-muted/70 transition-colors"
              >
                {copiedKey === activeTab ? (
                  <>
                    <Check className="w-4 h-4 text-status-success" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy JSON
                  </>
                )}
              </button>
            </div>

            <pre className="bg-background border border-border rounded-md p-4 text-sm font-mono text-foreground overflow-x-auto">
              {CONFIGS[activeTab].json}
            </pre>

            {CONFIGS[activeTab].note && (
              <p className="text-xs text-muted-foreground mt-3">
                <strong className="text-foreground">Note:</strong> {CONFIGS[activeTab].note}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* DS Architect — featured agent */}
      <DSArchitectSection />

      {/* Aggressive enforcement — 5-layer strategy */}
      <EnforcementLayersSection />

      {/* Available tools */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-1">Available tools</h2>
        <p className="text-sm text-muted-foreground mb-4">
          These tools become callable inside your AI assistant once the server is connected.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className={cn(
                "bg-card border rounded-lg p-4",
                tool.isNew ? "border-status-ai/40 bg-status-ai/5" : "border-border",
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                <Wrench className="w-3.5 h-3.5 text-status-ai" />
                <code className="font-mono text-sm font-semibold text-foreground">
                  {tool.name}
                </code>
                {tool.isNew && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-status-ai/15 text-status-ai">
                    NEW
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Docs at the bottom ─────────────────────────────────────────── */}
      <div className="pt-4 border-t border-border space-y-10">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Background reading
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            Understanding the workflow
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
            For devs integrating the DS into a new project — what the agent
            unlocks, how to plug it in, and what changes for your day-to-day.
          </p>
        </header>

        {/* Two ways to plug in */}
        <TwoWaysSection />

        {/* What the agent does — generic capabilities */}
        <FlowDiagramSection />

        {/* Use cases — with vs without */}
        <UseCasesSection />
      </div>
    </div>
  );
}

// ─── DS Architect Section ──────────────────────────────────────────────────

interface PlanResponse {
  query?: string;
  primary_recommendation?: {
    component: string;
    id: string;
    rationale: string;
    import: string;
    tokens: Record<string, string>;
    example: string | null;
  };
  alternatives?: Array<{ component: string; when_to_choose: string; score: number }>;
  rules_that_apply?: string[];
  anti_patterns?: string[];
  next_steps?: string[];
  error?: string;
}

const SAMPLE_QUERIES = [
  "floating pill navbar with logo, tabs and theme toggle",
  "kanban board for orders with drag and drop",
  "primary brand button for main CTA",
  "data table with sortable columns and filter chips",
  "modal dialog with form and destructive cancel button",
];

function DSArchitectSection() {
  const [query, setQuery] = useState(SAMPLE_QUERIES[0]);
  const [result, setResult] = useState<PlanResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runPlan = async (text: string) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const url = `https://strata-ds-production.up.railway.app/plan_ui?description=${encodeURIComponent(text)}`;
      const res = await fetch(url);
      const data = (await res.json()) as PlanResponse;
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (e) {
      setError(`Could not reach the MCP server. ${(e as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="flex items-center gap-2 mb-1">
        <Sparkles className="w-5 h-5 text-status-ai" />
        <h2 className="text-2xl font-bold text-foreground">
          DS Architect — blueprint before code
        </h2>
        <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-status-ai/15 text-status-ai">
          NEW
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
        A subagent that consults the MCP <strong>before</strong> any UI is
        written. Returns the recommended component, exact tokens, applicable
        rules, anti-patterns to avoid, and a starter snippet — so your AI
        assistant doesn't invent patterns the DS already provides.
      </p>

      {/* Live demo */}
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">
            Live demo (try a description)
          </p>
          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runPlan(query)}
              placeholder="e.g. navbar with tabs and avatar"
              className="flex-1 h-10 px-3 rounded-md bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary outline-none"
            />
            <button
              onClick={() => runPlan(query)}
              disabled={loading || !query.trim()}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-primary text-primary-foreground text-sm font-semibold disabled:opacity-50 hover:opacity-90 transition-opacity"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              Plan
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {SAMPLE_QUERIES.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setQuery(s);
                  runPlan(s);
                }}
                className="text-[11px] text-muted-foreground hover:text-foreground bg-muted px-2 py-1 rounded transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="rounded-md bg-destructive/10 border border-destructive/30 p-3 text-sm">
            <p className="font-semibold text-destructive">Plan failed</p>
            <p className="text-muted-foreground mt-1">{error}</p>
          </div>
        )}

        {result?.primary_recommendation && (
          <div className="space-y-3 bg-background border border-border rounded-md p-4">
            <div>
              <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                Use:
              </p>
              <p className="text-lg font-bold text-foreground">
                {result.primary_recommendation.component}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {result.primary_recommendation.rationale}
              </p>
              <pre className="font-mono text-xs bg-muted px-3 py-2 rounded mt-2 text-foreground overflow-x-auto">
                {result.primary_recommendation.import}
              </pre>
            </div>

            {Object.keys(result.primary_recommendation.tokens || {}).length >
              0 && (
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                  Required tokens
                </p>
                <ul className="space-y-1">
                  {Object.entries(result.primary_recommendation.tokens).map(
                    ([token, use]) => (
                      <li key={token} className="text-xs">
                        <code className="font-mono text-foreground bg-muted px-1.5 py-0.5 rounded mr-2">
                          {token}
                        </code>
                        <span className="text-muted-foreground">{use}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {result.anti_patterns && result.anti_patterns.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                  Anti-patterns to avoid
                </p>
                <ul className="space-y-1">
                  {result.anti_patterns.map((ap, i) => (
                    <li
                      key={i}
                      className="text-xs text-foreground bg-status-error/5 border border-status-error/20 rounded px-2 py-1"
                    >
                      {ap}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.alternatives && result.alternatives.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                  Alternatives ranked
                </p>
                <ul className="space-y-1">
                  {result.alternatives.slice(0, 3).map((alt) => (
                    <li key={alt.component} className="text-xs">
                      <code className="font-mono text-foreground">
                        {alt.component}
                      </code>{" "}
                      <span className="text-muted-foreground">
                        — {alt.when_to_choose}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.rules_that_apply && result.rules_that_apply.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                  Rules that apply
                </p>
                <div className="flex flex-wrap gap-1">
                  {result.rules_that_apply.map((r) => (
                    <code
                      key={r}
                      className="font-mono text-[10px] bg-status-ai/10 text-status-ai px-1.5 py-0.5 rounded"
                    >
                      {r}
                    </code>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Install the agent */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-bold text-foreground mb-2">
            1. Install the subagent
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Copy <code className="font-mono">.claude/agents/ds-architect.md</code>{" "}
            from the DS repo to your project.
          </p>
          <pre className="font-mono text-[11px] bg-background border border-border rounded p-2 text-foreground overflow-x-auto">
            {`mkdir -p .claude/agents .claude/commands
cp "../design system/strata-ds/.claude/agents/ds-architect.md" \\
   .claude/agents/
cp "../design system/strata-ds/.claude/commands/ds-plan.md" \\
   .claude/commands/`}
          </pre>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-bold text-foreground mb-2">
            2. Use it in your IDE
          </h3>
          <p className="text-xs text-muted-foreground mb-3">
            Two ways:
          </p>
          <ul className="text-xs space-y-2 text-foreground">
            <li>
              <strong>Slash command:</strong>{" "}
              <code className="font-mono bg-muted px-1.5 py-0.5 rounded">
                /ds-plan navbar with tabs
              </code>
            </li>
            <li>
              <strong>Auto-trigger:</strong> the agent fires on any "build/add/create
              a [UI thing]" prompt before code is written.
            </li>
            <li>
              <strong>Direct MCP call:</strong>{" "}
              <code className="font-mono bg-muted px-1.5 py-0.5 rounded">
                plan_ui(description)
              </code>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const config = {
    online: { label: "Connected", color: "bg-status-success", ring: "ring-status-success/30" },
    offline: { label: "Offline", color: "bg-status-error", ring: "ring-status-error/30" },
    checking: { label: "Checking", color: "bg-muted-foreground", ring: "ring-muted/30" },
  }[status];

  return (
    <div className="flex items-center gap-2">
      <span className={cn("relative flex w-3 h-3")}>
        <span
          className={cn(
            "absolute inline-flex h-full w-full rounded-full opacity-75",
            status === "online" && "animate-ping",
            config.color,
          )}
        />
        <span className={cn("relative inline-flex rounded-full w-3 h-3", config.color)} />
      </span>
      <Server className="w-4 h-4 text-muted-foreground" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
    </div>
  );
}

const LABELS: Record<keyof typeof CONFIGS, string> = {
  cursor: "Cursor",
  "claude-code": "Claude Code",
  "vscode-copilot": "VS Code · Copilot",
  other: "Other",
};

function labelFor(key: keyof typeof CONFIGS): string {
  return LABELS[key];
}

// ─── Two Ways Section ─────────────────────────────────────────────────────

function TwoWaysSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-1">
        Two ways to plug in
      </h2>
      <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
        The MCP and the ds-architect agent are independent layers — use one,
        the other, or both. They reinforce each other.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Layer A — MCP only */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Plug className="w-5 h-5 text-status-ai" />
            <h3 className="text-lg font-bold text-foreground">A · MCP server</h3>
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
              Any IDE
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Configure your IDE's MCP client to point at the Strata server.
            Your AI assistant gets <strong>10 callable tools</strong> available.
          </p>

          <ul className="text-sm space-y-1.5 mb-4">
            <Bullet good>Works in Cursor, Claude Code, VS Code Copilot, and any MCP-aware tool</Bullet>
            <Bullet good>10 tools instantly: <code className="font-mono text-xs bg-muted px-1 rounded">plan_ui</code>, <code className="font-mono text-xs bg-muted px-1 rounded">get_component</code>, <code className="font-mono text-xs bg-muted px-1 rounded">get_foundations</code>, etc.</Bullet>
            <Bullet good>One config file, every project benefits</Bullet>
            <Bullet warn>The AI <em>can</em> still skip the lookup if it forgets</Bullet>
          </ul>

          <div className="text-xs text-muted-foreground">
            <strong className="text-foreground">Files:</strong>{" "}
            <code className="font-mono bg-muted px-1.5 py-0.5 rounded">.cursor/mcp.json</code>
            {" or "}
            <code className="font-mono bg-muted px-1.5 py-0.5 rounded">.claude/settings.json</code>
            {" or "}
            <code className="font-mono bg-muted px-1.5 py-0.5 rounded">.vscode/mcp.json</code>
          </div>
        </div>

        {/* Layer B — Subagent */}
        <div className="bg-card border border-border rounded-xl p-5 ring-2 ring-status-ai/30">
          <div className="flex items-center gap-2 mb-3">
            <Bot className="w-5 h-5 text-status-ai" />
            <h3 className="text-lg font-bold text-foreground">
              B · ds-architect agent
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-status-ai/15 text-status-ai">
              Recommended
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            A subagent that fires <strong>automatically</strong> on UI prompts
            and forces a deterministic workflow:{" "}
            <code className="font-mono text-xs bg-muted px-1 rounded">plan_ui</code>{" "}
            → <code className="font-mono text-xs bg-muted px-1 rounded">get_component</code>{" "}
            → blueprint.
          </p>

          <ul className="text-sm space-y-1.5 mb-4">
            <Bullet good>Auto-trigger on "build / add / create a [UI]" prompts</Bullet>
            <Bullet good>Slash command <code className="font-mono text-xs bg-muted px-1 rounded">/ds-plan</code> for explicit invocation</Bullet>
            <Bullet good>Hard rule: never invent tokens; raise DS gaps explicitly</Bullet>
            <Bullet warn>Currently Claude Code-specific (Cursor mimic via <code className="font-mono text-xs bg-muted px-1 rounded">.cursor/rules/</code>)</Bullet>
          </ul>

          <div className="text-xs text-muted-foreground">
            <strong className="text-foreground">Files:</strong>{" "}
            <code className="font-mono bg-muted px-1.5 py-0.5 rounded">.claude/agents/ds-architect.md</code>
            {" + "}
            <code className="font-mono bg-muted px-1.5 py-0.5 rounded">.claude/commands/ds-plan.md</code>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-status-ai/5 border border-status-ai/20 p-3 text-sm">
        <p className="text-foreground">
          <strong>Pro tip:</strong> install both. A gives the tools, B forces
          their use. New devs onboard faster, mistakes drop.
        </p>
      </div>
    </section>
  );
}

function Bullet({
  children,
  good,
  warn,
  bad,
}: {
  children: React.ReactNode;
  good?: boolean;
  warn?: boolean;
  bad?: boolean;
}) {
  return (
    <li className="flex items-start gap-2 text-foreground">
      <span
        className={cn(
          "mt-0.5 shrink-0",
          good && "text-status-success",
          warn && "text-status-warning",
          bad && "text-status-error",
        )}
      >
        {good ? "✓" : warn ? "△" : "✗"}
      </span>
      <span className="flex-1">{children}</span>
    </li>
  );
}

// ─── What the agent does (generic capabilities) ──────────────────────────

const WITH_CAPABILITIES = [
  {
    title: "Auto-plans every UI request",
    detail:
      "Triggers on any 'build / add / create / make a [UI]' prompt — your AI never starts coding without a DS lookup first.",
  },
  {
    title: "Returns the canonical component",
    detail:
      "Maps your description to the correct component from the 95-component catalogue (NavbarFloating, Card, Dialog, Table, etc.), with the exact import statement.",
  },
  {
    title: "Pulls verified tokens",
    detail:
      "Tokens come straight from the MCP foundations — never hex-coded, never approximated. Same source of truth across all your projects.",
  },
  {
    title: "Surfaces anti-patterns up front",
    detail:
      "The blueprint includes 'don't do this' rules (raw zinc, custom modals, hardcoded greens) before code is written, not after PR review.",
  },
  {
    title: "Provides starter snippets",
    detail:
      "Code blocks compile against the DS source. Copy, adapt to your data, ship.",
  },
  {
    title: "Flags real DS gaps",
    detail:
      "If no good match exists, the agent says so explicitly and recommends opening a gap ticket — instead of silently hallucinating.",
  },
];

const WITHOUT_GAPS = [
  {
    title: "AI guesses from training data",
    detail:
      "The model has seen thousands of navbars/cards/forms — none of them yours. It picks an average that drifts from your DS.",
  },
  {
    title: "Tokens are invented or approximated",
    detail:
      "bg-zinc-900, bg-blue-500, #84cc16 instead of bg-card, bg-primary, brand-500. Looks fine, fails token audit.",
  },
  {
    title: "Custom code instead of DS components",
    detail:
      "Raw <table>, custom <dialog>, hand-rolled dropdowns. Each one diverges from the DS in subtle ways (focus rings, dark mode, a11y).",
  },
  {
    title: "Drift discovered late",
    detail:
      "PR review (best case) or production (worst case). Each finding triggers a rework cycle that the team pays for.",
  },
  {
    title: "Onboarding is slow",
    detail:
      "Each new dev re-discovers the rules by trial and error. The DS docs are static — no live consultant in the IDE.",
  },
  {
    title: "DS gaps stay invisible",
    detail:
      "When something is missing, devs build local workarounds. The DS team doesn't hear about it because there's no feedback channel.",
  },
];

function FlowDiagramSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-1">
        What changes when you adopt the agent
      </h2>
      <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
        Two columns — capabilities the agent unlocks for any project that
        consumes the DS, vs the gaps you live with if you skip it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* WITH */}
        <div className="bg-card border border-status-success/30 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-status-success" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-status-success">
              What the agent unlocks
            </h3>
          </div>

          <ul className="space-y-3">
            {WITH_CAPABILITIES.map((item) => (
              <CapabilityItem
                key={item.title}
                title={item.title}
                detail={item.detail}
                positive
              />
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-status-success font-semibold flex items-center gap-2">
              <Check className="w-4 h-4" />
              DS-compliant by construction · zero invention drift
            </p>
          </div>
        </div>

        {/* WITHOUT */}
        <div className="bg-card border border-status-error/30 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <X className="w-4 h-4 text-status-error" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-status-error">
              What you live with otherwise
            </h3>
          </div>

          <ul className="space-y-3">
            {WITHOUT_GAPS.map((item) => (
              <CapabilityItem
                key={item.title}
                title={item.title}
                detail={item.detail}
              />
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-status-error font-semibold flex items-center gap-2">
              <X className="w-4 h-4" />
              Drift compounds · rework cycles · slow onboarding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Enforcement Layers ──────────────────────────────────────────────────

const ENFORCEMENT_LAYERS = [
  {
    n: 1,
    name: "System prompt (always loaded)",
    file: ".cursor/rules/strata-ds.md  /  CLAUDE.md",
    detail:
      "Rules become part of the AI's base context every conversation. Cursor auto-loads .cursor/rules/, Claude Code auto-loads CLAUDE.md, Antigravity uses an equivalent system-prompt field.",
    template: "templates/cursor-rules-strata-ds.md",
  },
  {
    n: 2,
    name: "Session briefing tool",
    file: "MCP get_session_briefing()",
    detail:
      "AI calls this once at session start and receives a fresh rules dump from the DS source. Equivalent to reading CLAUDE.md but live and always current. The MCP tool description tells the AI to call it.",
    template: null,
  },
  {
    n: 3,
    name: "Assertive tool descriptions",
    file: "MCP plan_ui — '🚨 MANDATORY for any UI task'",
    detail:
      "The MCP exposes 11 tools, and plan_ui's description literally says 'MUST be called BEFORE writing any UI code'. AI clients scan tool descriptions when deciding what to call — this nudges aggressively.",
    template: null,
  },
  {
    n: 4,
    name: "Pre-prompt hook (Claude Code)",
    file: ".claude/hooks/UserPromptSubmit.json",
    detail:
      "Fires BEFORE the AI processes the user's prompt. Detects 30+ UI keywords via regex and auto-injects '[Strata DS active] Call plan_ui first' into the AI's context. Doesn't depend on the AI deciding to consult.",
    template: "templates/claude-code-hook-user-prompt-submit.json",
  },
  {
    n: 5,
    name: "Subagent (Claude Code)",
    file: ".claude/agents/ds-architect.md",
    detail:
      "Specialized subagent that fires automatically on 'build / add / create a [UI]' patterns. Runs the deterministic blueprint workflow: plan_ui → get_component → markdown blueprint. Hard rule: never invent tokens.",
    template: ".claude/agents/ds-architect.md (canonical, copy as-is)",
  },
];

function EnforcementLayersSection() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-1">
        <Shield className="w-5 h-5 text-status-ai" />
        <h2 className="text-2xl font-bold text-foreground">
          Aggressive enforcement — 5-layer strategy
        </h2>
      </div>
      <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
        Even with the MCP connected, an AI <em>can</em> still skip the lookup
        if the user's prompt is implicit. These 5 layers stack so the rules
        reach the AI through multiple channels — combine them all for zero-skip
        enforcement.
      </p>

      <div className="space-y-3">
        {ENFORCEMENT_LAYERS.map((layer) => (
          <div
            key={layer.n}
            className="bg-card border border-border rounded-xl p-4 flex gap-4"
          >
            <div className="shrink-0 w-9 h-9 rounded-full bg-status-ai/15 text-status-ai flex items-center justify-center font-bold text-sm">
              {layer.n}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-bold text-foreground">
                  {layer.name}
                </h3>
                <code className="font-mono text-[11px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                  {layer.file}
                </code>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {layer.detail}
              </p>
              {layer.template && (
                <p className="text-[11px] text-status-ai mt-1">
                  Template:{" "}
                  <code className="font-mono">{layer.template}</code>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg bg-status-success/5 border border-status-success/20 p-4">
        <p className="text-sm text-foreground">
          <strong>Quick install:</strong> copy{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
            templates/
          </code>{" "}
          from the DS repo into your project. The folder ships with
          ready-to-use Cursor rules, Claude Code hook, and an Antigravity
          system-prompt template. See{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
            templates/README.md
          </code>{" "}
          for the install commands.
        </p>
      </div>

      {/* Trace example */}
      <div className="mt-4 bg-card border border-border rounded-xl p-5">
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-3">
          Trace: what happens when a dev writes an implicit prompt
        </p>
        <pre className="font-mono text-[11px] text-foreground bg-background border border-border rounded p-3 overflow-x-auto leading-relaxed">{`Dev: "necesito una pantalla para que los usuarios firmen contratos"
       │
       ▼
[Layer 4 · Hook] regex detects "pantalla" → injects:
   🎨 [Strata DS active] You MUST call plan_ui first.
       │
       ▼
[Layer 1 · System prompt] reaffirms: "before any UI, plan_ui"
       │
       ▼
[Layer 5 · ds-architect subagent] fires on the auto-trigger keywords
       │
       ▼
[Layer 3 · plan_ui description] confirms: "MANDATORY for UI"
       │
       ▼
Agent calls plan_ui("pantalla para firmar contratos")
       │
       ▼
[Layer 2 · briefing already loaded] AI knows the token rules
       │
       ▼
MCP returns: Form + Card + Dialog + Button (signature flow)
       + tokens (bg-card, bg-primary, etc.)
       + anti-patterns (no raw <form>, no bg-blue-500)
       │
       ▼
Blueprint shown to dev BEFORE any code is written
       │
       ▼
Dev: "perfect — that matches our DS, ship it"`}</pre>
      </div>
    </section>
  );
}

function CapabilityItem({
  title,
  detail,
  positive,
}: {
  title: string;
  detail: string;
  positive?: boolean;
}) {
  return (
    <li className="flex gap-3">
      <span
        className={cn(
          "shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
          positive
            ? "bg-status-success/15 text-status-success"
            : "bg-status-error/15 text-status-error",
        )}
      >
        {positive ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>
      </div>
    </li>
  );
}

// ─── Use Cases ────────────────────────────────────────────────────────────

const USE_CASES = [
  {
    prompt: "build a navbar with tabs",
    without: {
      title: "Generic full-width navbar",
      detail: "bg-zinc-900, flat, hardcoded colors — drifts from DS",
    },
    with: {
      title: "NavbarFloating",
      detail:
        "bg-card/80 backdrop-blur-xl rounded-full shadow-lg dark:shadow-glow-md — matches the DS demo pattern",
    },
  },
  {
    prompt: "add a primary CTA button",
    without: {
      title: '<button className="bg-blue-500">',
      detail: "Raw element with non-DS color — fails token audit",
    },
    with: {
      title: '<Button variant="default">',
      detail:
        "Resolves to bg-primary text-primary-foreground (auto brand-300/500 light/dark)",
    },
  },
  {
    prompt: "create a status badge for 'success'",
    without: {
      title: '<span className="bg-green-100 text-green-700">',
      detail: "Wrong green shade, no dark-mode pair, breaks WCAG",
    },
    with: {
      title: '<Badge> with status tokens',
      detail:
        "bg-status-success/10 + text-status-success + border-status-success/20 (governance soft pattern)",
    },
  },
  {
    prompt: "data table with sortable cols",
    without: {
      title: "Raw <table> + custom CSS",
      detail: "Inconsistent borders, no row hover, no dark-mode pair",
    },
    with: {
      title: "<Table> + TableHeader + sort icons",
      detail:
        "border-border, bg-muted/50 alt rows, hover:bg-muted/50, fully tokenized",
    },
  },
];

function UseCasesSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-1">
        Concrete use cases
      </h2>
      <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
        Real examples showing what the agent prevents — same prompt, two
        outcomes.
      </p>

      <div className="space-y-3">
        {USE_CASES.map((uc) => (
          <div
            key={uc.prompt}
            className="bg-card border border-border rounded-xl p-5"
          >
            <p className="text-xs font-semibold uppercase text-muted-foreground mb-3">
              Prompt: <span className="font-mono normal-case text-foreground">"{uc.prompt}"</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-md bg-status-error/5 border border-status-error/20 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <X className="w-3.5 h-3.5 text-status-error" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-status-error">
                    Without architect
                  </span>
                </div>
                <p className="font-mono text-xs text-foreground mb-1">
                  {uc.without.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {uc.without.detail}
                </p>
              </div>

              <div className="rounded-md bg-status-success/5 border border-status-success/20 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-3.5 h-3.5 text-status-success" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-status-success">
                    With architect
                  </span>
                </div>
                <p className="font-mono text-xs text-foreground mb-1">
                  {uc.with.title}
                </p>
                <p className="text-xs text-muted-foreground">{uc.with.detail}</p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-[10px] text-muted-foreground">
              <ArrowRight className="w-3 h-3" />
              <span>
                The agent calls{" "}
                <code className="font-mono bg-muted px-1.5 py-0.5 rounded">
                  plan_ui("{uc.prompt}")
                </code>{" "}
                and surfaces the right answer in seconds.
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
