import { useEffect, useState } from "react";
import { Copy, Check, RefreshCw, Server, Wrench } from "lucide-react";
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
  { name: "get_overview", description: "Full DS overview, stack, and architecture." },
  { name: "get_component", description: "Detailed spec for a component (variants, tokens, anti-patterns)." },
  { name: "get_component_code", description: "React, HTML, CSS, and AI Prompt code blocks for a component." },
  { name: "get_tokens", description: "CSS tokens by category — status, semantic, brand, primitives, foundations." },
  { name: "get_foundations", description: "Colors, typography, spacing, borders, shadows data." },
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

      {/* Available tools */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-1">Available tools</h2>
        <p className="text-sm text-muted-foreground mb-4">
          These tools become callable inside your AI assistant once the server is connected.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TOOLS.map((tool) => (
            <div key={tool.name} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <Wrench className="w-3.5 h-3.5 text-status-ai" />
                <code className="font-mono text-sm font-semibold text-foreground">
                  {tool.name}
                </code>
              </div>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
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
