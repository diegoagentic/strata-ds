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

      {/* Two ways to plug in */}
      <TwoWaysSection />

      {/* End-to-end flow diagram */}
      <FlowDiagramSection />

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

      {/* Use cases — with vs without */}
      <UseCasesSection />

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

// ─── Flow Diagram ─────────────────────────────────────────────────────────

function FlowDiagramSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-1">
        How a request flows
      </h2>
      <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
        Side-by-side: what happens when a developer asks for "build me a
        navbar with tabs" — with the agent vs without.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* WITH the agent */}
        <div className="bg-card border border-status-success/30 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-status-success" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-status-success">
              With ds-architect
            </h3>
          </div>

          <ol className="space-y-3">
            <FlowStep
              number={1}
              title='User: "build a navbar with tabs"'
              detail="Prompt enters Claude Code"
            />
            <FlowStep
              number={2}
              title="ds-architect fires automatically"
              detail="The orchestrator detects 'build a [UI]' and routes to the agent BEFORE the implementer"
            />
            <FlowStep
              number={3}
              title={
                <>
                  Calls{" "}
                  <code className="font-mono text-xs bg-muted px-1 rounded">
                    plan_ui()
                  </code>{" "}
                  on the MCP
                </>
              }
              detail="MCP returns: NavbarFloating + tokens + rules + anti-patterns"
            />
            <FlowStep
              number={4}
              title="Renders blueprint markdown"
              detail="Component to use, exact tokens, anti-patterns to AVOID, starter snippet"
            />
            <FlowStep
              number={5}
              title="Implementer codes the blueprint"
              detail="Copy snippet, adapt — DS-compliant by construction"
              done
            />
          </ol>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-status-success font-semibold flex items-center gap-2">
              <Check className="w-4 h-4" />
              PR review: ships first time
            </p>
          </div>
        </div>

        {/* WITHOUT the agent */}
        <div className="bg-card border border-status-error/30 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <X className="w-4 h-4 text-status-error" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-status-error">
              Without ds-architect
            </h3>
          </div>

          <ol className="space-y-3">
            <FlowStep
              number={1}
              title='User: "build a navbar with tabs"'
              detail="Prompt enters Claude Code"
            />
            <FlowStep
              number={2}
              title="LLM guesses based on training"
              detail="No DS lookup — picks a generic full-width navbar pattern"
              warn
            />
            <FlowStep
              number={3}
              title="Generates raw HTML/CSS"
              detail={
                <>
                  Uses <code className="font-mono text-xs">bg-zinc-900</code>,
                  flat full-width, hardcoded colors
                </>
              }
              warn
            />
            <FlowStep
              number={4}
              title="PR review fails"
              detail="Reviewer: 'this isn't the DS pattern. We have NavbarFloating.'"
              bad
            />
            <FlowStep
              number={5}
              title="Rework"
              detail="Re-read DS docs, swap to NavbarFloating, re-test"
              bad
            />
          </ol>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-status-error font-semibold flex items-center gap-2">
              <X className="w-4 h-4" />
              ~30 min lost · invents drift
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStep({
  number,
  title,
  detail,
  done,
  warn,
  bad,
}: {
  number: number;
  title: React.ReactNode;
  detail?: React.ReactNode;
  done?: boolean;
  warn?: boolean;
  bad?: boolean;
}) {
  return (
    <li className="flex gap-3">
      <span
        className={cn(
          "shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
          done && "bg-status-success/15 text-status-success",
          warn && "bg-status-warning/15 text-status-warning",
          bad && "bg-status-error/15 text-status-error",
          !done && !warn && !bad && "bg-muted text-muted-foreground",
        )}
      >
        {number}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {detail && (
          <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>
        )}
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
