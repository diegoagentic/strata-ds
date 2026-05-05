import { useEffect, useState } from "react";
import { Copy, Check, RefreshCw, Server, Wrench, Sparkles, Send } from "lucide-react";
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

const HEALTH_URL = "http://localhost:3001/health";

const TOOLS = [
  { name: "plan_ui", description: "BLUEPRINT BEFORE CODE. Given a description like 'navbar with tabs', returns the recommended component, tokens, rules, and anti-patterns. Call this FIRST.", isNew: true },
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
            command: "node",
            args: ["./design system/strata-ds/src/mcp-server/index.mjs"],
          },
        },
      },
      null,
      2,
    ),
  },
  "claude-code": {
    path: ".claude/settings.json",
    json: JSON.stringify(
      {
        mcpServers: {
          "strata-ds": {
            command: "node",
            args: ["../design system/strata-ds/src/mcp-server/index.mjs"],
          },
        },
      },
      null,
      2,
    ),
    note: "Path is relative to your project root. Adjust if your project layout differs.",
  },
  "vscode-copilot": {
    path: ".vscode/mcp.json",
    json: JSON.stringify(
      {
        servers: {
          "strata-ds": {
            type: "stdio",
            command: "node",
            args: ["./design system/strata-ds/src/mcp-server/index.mjs"],
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
            command: "node",
            args: ["/absolute/path/to/strata-ds/src/mcp-server/index.mjs"],
          },
        },
      },
      null,
      2,
    ),
    note: "Generic stdio MCP config. Use the absolute path to index.mjs.",
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

  const startCommand = "node src/mcp-server/index.mjs";

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
            <p className="text-sm font-semibold text-foreground mb-2">Start the server with:</p>
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
              Run from <code className="font-mono">design system/strata-ds/</code>. The server runs on stdio for IDEs and exposes a health endpoint on port 3001 for this dashboard.
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
      const url = `http://localhost:3001/plan_ui?description=${encodeURIComponent(text)}`;
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
