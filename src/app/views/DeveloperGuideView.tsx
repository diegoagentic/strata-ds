import { useState } from "react";
import {
  BookOpen,
  Compass,
  Layers,
  Zap,
  Code2,
  Wrench,
  HelpCircle,
  GitBranch,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";
import { copyToClipboard } from "@/utils/clipboard";
import { cn } from "@/utils/cn";

type SectionId =
  | "mental-model"
  | "glossary"
  | "first-5-min"
  | "request-flow"
  | "examples"
  | "troubleshooting"
  | "faq"
  | "architecture";

const SECTIONS: { id: SectionId; label: string; icon: React.ElementType }[] = [
  { id: "mental-model", label: "Mental model", icon: Compass },
  { id: "first-5-min", label: "Your first 5 minutes", icon: Zap },
  { id: "request-flow", label: "How a request flows", icon: GitBranch },
  { id: "examples", label: "Worked examples", icon: Code2 },
  { id: "troubleshooting", label: "Troubleshooting", icon: Wrench },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "architecture", label: "Architecture", icon: Layers },
  { id: "glossary", label: "Glossary", icon: BookOpen },
];

export function DeveloperGuideView() {
  const [active, setActive] = useState<SectionId>("mental-model");

  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wider text-status-ai mb-2">
          Developer Guide
        </p>
        <h1 className="text-4xl font-bold text-foreground mb-3">
          Strata DS — for the developer integrating it into their project
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A practical guide. What the MCP is, what the agent does, how to plug
          it in, and 5 worked examples — so your AI never invents patterns the
          DS already provides.
        </p>
      </header>

      {/* Section nav */}
      <nav className="bg-card border border-border rounded-xl p-3 flex flex-wrap gap-1">
        {SECTIONS.map((s) => {
          const Icon = s.icon;
          const isActive = active === s.id;
          return (
            <button
              key={s.id}
              onClick={() => {
                setActive(s.id);
                document.getElementById(`section-${s.id}`)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="size-3.5" />
              {s.label}
            </button>
          );
        })}
      </nav>

      <MentalModelSection />
      <GlossarySection />
      <First5MinutesSection />
      <RequestFlowSection />
      <ExamplesSection />
      <TroubleshootingSection />
      <FAQSection />
      <ArchitectureSection />

      <div className="bg-status-ai/5 border border-status-ai/20 rounded-xl p-5">
        <p className="text-sm text-foreground">
          <strong>Canonical doc</strong>: this guide mirrors{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
            GUIDE.md
          </code>{" "}
          at the DS root. GitHub renders it natively — share that link with
          anyone who needs the same content outside the dev app.
        </p>
      </div>
    </div>
  );
}

// ─── Sections ──────────────────────────────────────────────────────────

function SectionWrapper({
  id,
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  id: SectionId;
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={`section-${id}`} className="scroll-mt-6">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="size-5 text-status-ai" />
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-sm text-muted-foreground mb-5 max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function MentalModelSection() {
  return (
    <SectionWrapper
      id="mental-model"
      icon={Compass}
      title="Mental model"
      subtitle="Two analogies that make the rest of this guide click."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="text-xs font-semibold uppercase text-status-ai mb-2">
            Analogy 1
          </p>
          <h3 className="text-lg font-bold text-foreground mb-2">
            The DS is a person you can ask
          </h3>
          <p className="text-sm text-muted-foreground">
            The MCP server is the phone number; <code className="font-mono text-xs bg-muted px-1 rounded">plan_ui</code> is
            the conversation. Pick up the phone, describe what you need, and
            the DS tells you exactly which component to use, with what tokens.
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="text-xs font-semibold uppercase text-status-ai mb-2">
            Analogy 2
          </p>
          <h3 className="text-lg font-bold text-foreground mb-2">
            The agent is a co-pilot that places the call for you
          </h3>
          <p className="text-sm text-muted-foreground">
            Without it, the AI might forget to consult the DS. With it, every
            UI request triggers the consultation automatically — no manual
            step from you.
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="text-base font-bold text-foreground mb-2">
          The problem we solve
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          When you ask a generic AI to "build a navbar with tabs", it generates
          code based on its training data — thousands of navbars from the web,
          none of them yours. Result: hardcoded{" "}
          <code className="font-mono text-xs bg-muted px-1 rounded">
            bg-blue-500
          </code>
          , custom <code className="font-mono text-xs bg-muted px-1 rounded">
            &lt;button&gt;
          </code>{" "}
          markup, mismatched dark mode, drift from your DS.
        </p>
        <p className="text-sm text-muted-foreground">
          PR review catches it (best case) or production ships it (worst case).
          Either way, rework. The DS stack solves this by making the catalogue
          live and queryable through 5 enforcement layers.
        </p>
      </div>
    </SectionWrapper>
  );
}

const GLOSSARY = [
  {
    term: "MCP",
    def: "Model Context Protocol — a standard that lets AI tools call external tools/resources through a server.",
    example: "The Strata DS exposes its catalogue via an MCP server.",
  },
  {
    term: "MCP server",
    def: "The local Node.js process that responds to MCP tool calls.",
    example: "node src/mcp-server/index.mjs from the DS folder.",
  },
  {
    term: "MCP tool",
    def: "A named, callable function the AI can invoke through MCP.",
    example: "plan_ui('navbar with tabs') returns a blueprint.",
  },
  {
    term: "Subagent",
    def: "A specialized agent that runs inside Claude Code (or similar) for a specific job. Has a description, tools list, and system prompt.",
    example: "ds-architect is a subagent that fires on UI prompts.",
  },
  {
    term: "Slash command",
    def: "A user-invokable shortcut in Claude Code that runs a predefined task.",
    example: "/ds-plan navbar with tabs",
  },
  {
    term: "Hook",
    def: "A script that runs at a specific lifecycle event (e.g. before the AI processes a prompt).",
    example: "UserPromptSubmit.json injects context when UI keywords are detected.",
  },
  {
    term: "System prompt",
    def: "Instructions loaded into the AI's context at session start.",
    example: ".cursor/rules/strata-ds.md, CLAUDE.md",
  },
  {
    term: "Token",
    def: "A semantic CSS variable name.",
    example: "Use bg-primary not bg-blue-500.",
  },
  {
    term: "Anti-pattern",
    def: "A documented 'don't do this' rule.",
    example: "❌ Raw <table> elements → Use <Table> from DS",
  },
  {
    term: "Blueprint",
    def: "The structured response from plan_ui — component + tokens + rules + anti-patterns + snippet.",
    example: "What the agent returns BEFORE you write code.",
  },
  {
    term: "Tier",
    def: "Governance strictness level (1 = strict for shared components, 3 = loose for demos).",
    example: "The DS itself is Tier 1; demo apps are Tier 3.",
  },
];

function GlossarySection() {
  return (
    <SectionWrapper
      id="glossary"
      icon={BookOpen}
      title="Glossary"
      subtitle="Every term in this docs site, defined."
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="text-left p-3 font-semibold text-foreground">
                Term
              </th>
              <th className="text-left p-3 font-semibold text-foreground">
                Definition
              </th>
              <th className="text-left p-3 font-semibold text-foreground">
                Example
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {GLOSSARY.map((g) => (
              <tr key={g.term}>
                <td className="p-3 align-top">
                  <code className="font-mono text-xs font-bold text-status-ai">
                    {g.term}
                  </code>
                </td>
                <td className="p-3 align-top text-muted-foreground">{g.def}</td>
                <td className="p-3 align-top">
                  <code className="font-mono text-[11px] text-foreground bg-muted px-1.5 py-0.5 rounded">
                    {g.example}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}

interface QuickstartStep {
  n: number;
  title: string;
  detail: string;
  code?: string;
  tabs?: Record<string, string>;
}

const QUICKSTART_STEPS: QuickstartStep[] = [
  {
    n: 1,
    title: "Connect to the MCP server",
    detail: "Use the online server (no setup needed) or run your own local copy from the DS repo.",
    tabs: {
      "Online (recommended)": `# No setup needed — the server runs 24/7 on Railway.
# Verify it's up:
curl https://strata-ds-production.up.railway.app/health
# → {"status":"ok","governanceReady":true,"tools":11,...}`,
      "Local (self-hosted)": `# Clone the DS repo and start the server locally:
git clone https://github.com/diegoagentic/strata-ds
cd strata-ds
npm install
npm run server
# → Strata DS MCP HTTP Server — port 3001
# → Governance OK: true

# Verify in a separate terminal:
curl http://localhost:3001/health
# → {"status":"ok","governanceReady":true,...}`,
    },
  },
  {
    n: 2,
    title: "Configure your IDE",
    detail: "Pick one. Each maps the MCP server into your AI's tool list. Use the Online URL or localhost:3001 if running locally.",
    tabs: {
      Cursor: `// .cursor/mcp.json — Online:
{
  "mcpServers": {
    "strata-ds": {
      "url": "https://strata-ds-production.up.railway.app/mcp"
    }
  }
}

// Local (if running npm run server):
{
  "mcpServers": {
    "strata-ds": {
      "url": "http://localhost:3001/mcp"
    }
  }
}`,
      "Claude Code": `// .mcp.json (project root) — Online:
{
  "mcpServers": {
    "strata-ds": {
      "type": "http",
      "url": "https://strata-ds-production.up.railway.app/mcp"
    }
  }
}

// Local (if running npm run server):
{
  "mcpServers": {
    "strata-ds": {
      "type": "http",
      "url": "http://localhost:3001/mcp"
    }
  }
}`,
      "VS Code Copilot": `// .vscode/mcp.json — Online:
{
  "servers": {
    "strata-ds": {
      "type": "http",
      "url": "https://strata-ds-production.up.railway.app/mcp"
    }
  }
}

// Local (if running npm run server):
{
  "servers": {
    "strata-ds": {
      "type": "http",
      "url": "http://localhost:3001/mcp"
    }
  }
}`,
    },
  },
  {
    n: 3,
    title: "Install enforcement templates",
    detail: "Copy from the DS folder. Pick the kit that matches your IDE.",
    tabs: {
      Cursor: `mkdir -p .cursor/rules
cp "../design system/strata-ds/templates/cursor-rules-strata-ds.md" \\
   .cursor/rules/strata-ds.md`,
      "Claude Code (full kit)": `mkdir -p .claude/agents .claude/commands .claude/hooks
cp "../design system/strata-ds/.claude/agents/ds-architect.md"      .claude/agents/
cp "../design system/strata-ds/.claude/commands/ds-plan.md"         .claude/commands/
cp "../design system/strata-ds/templates/claude-code-hook-user-prompt-submit.json" \\
   .claude/hooks/UserPromptSubmit.json`,
      Antigravity: `# Open Antigravity → Agent settings → System Prompt
# Paste the content of:
cat "../design system/strata-ds/templates/antigravity-system-strata-ds.md"`,
    },
  },
  {
    n: 4,
    title: "Reload your IDE",
    detail: "So it picks up the MCP config + hooks/agents.",
    code: "# Restart Cursor / Claude Code / VS Code / Antigravity",
  },
  {
    n: 5,
    title: "Try it",
    detail: "In your AI chat, send a UI prompt and watch the agent fire.",
    code: `/ds-plan a sign-in screen with email, password, sign-in button, and forgot password link

# You should get a blueprint with:
# - Recommended components (Form, Field, Input, Button)
# - Required tokens
# - Anti-patterns to avoid
# - Starter snippet`,
  },
];

function First5MinutesSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const copy = async (k: string, v: string) => {
    if (await copyToClipboard(v)) {
      setCopiedKey(k);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <SectionWrapper
      id="first-5-min"
      icon={Zap}
      title="Your first 5 minutes"
      subtitle="Zero to using the DS with your AI. Total time: 5 minutes."
    >
      {QUICKSTART_STEPS.map((step) => (
        <div
          key={step.n}
          className="bg-card border border-border rounded-xl p-5 flex gap-4"
        >
          <div className="shrink-0 w-9 h-9 rounded-full bg-status-ai/15 text-status-ai flex items-center justify-center font-bold">
            {step.n}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              {step.detail}
            </p>
            {step.code && (
              <CodeBlock
                code={step.code}
                copyKey={`step-${step.n}`}
                copiedKey={copiedKey}
                onCopy={copy}
              />
            )}
            {step.tabs && (
              <CodeTabs
                tabs={step.tabs}
                copyKey={`step-${step.n}`}
                copiedKey={copiedKey}
                onCopy={copy}
              />
            )}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}

function CodeBlock({
  code,
  copyKey,
  copiedKey,
  onCopy,
}: {
  code: string;
  copyKey: string;
  copiedKey: string | null;
  onCopy: (k: string, v: string) => void;
}) {
  return (
    <div className="relative">
      <pre className="bg-background border border-border rounded-md p-3 text-[12px] font-mono text-foreground overflow-x-auto leading-relaxed">
        {code}
      </pre>
      <button
        onClick={() => onCopy(copyKey, code)}
        className="absolute top-2 right-2 inline-flex items-center gap-1 px-2 py-1 text-[11px] font-semibold rounded bg-card border border-border hover:bg-muted transition-colors"
      >
        {copiedKey === copyKey ? (
          <Check className="size-3 text-status-success" />
        ) : (
          <Copy className="size-3" />
        )}
      </button>
    </div>
  );
}

function CodeTabs({
  tabs,
  copyKey,
  copiedKey,
  onCopy,
}: {
  tabs: Record<string, string>;
  copyKey: string;
  copiedKey: string | null;
  onCopy: (k: string, v: string) => void;
}) {
  const names = Object.keys(tabs);
  const [active, setActive] = useState(names[0]);
  return (
    <div className="rounded-md border border-border overflow-hidden">
      <div className="flex border-b border-border bg-muted/30 overflow-x-auto">
        {names.map((n) => (
          <button
            key={n}
            onClick={() => setActive(n)}
            className={cn(
              "px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors",
              active === n
                ? "bg-background text-foreground border-b-2 border-foreground -mb-px"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {n}
          </button>
        ))}
      </div>
      <CodeBlock
        code={tabs[active]}
        copyKey={`${copyKey}-${active}`}
        copiedKey={copiedKey}
        onCopy={onCopy}
      />
    </div>
  );
}

function RequestFlowSection() {
  return (
    <SectionWrapper
      id="request-flow"
      icon={GitBranch}
      title="How a request flows"
      subtitle='Trace what happens when a developer writes an implicit prompt: "necesito una pantalla para que los usuarios firmen contratos"'
    >
      <div className="bg-card border border-border rounded-xl p-5">
        <pre className="font-mono text-[12px] text-foreground bg-background border border-border rounded p-4 overflow-x-auto leading-relaxed">{`─── Step 1 ─── Hook detects "pantalla" ───────────────────────────
  UserPromptSubmit.json regex matches → injects:
  "🎨 [Strata DS active] You MUST call plan_ui first."

─── Step 2 ─── System prompt reaffirms ─────────────────────────
  CLAUDE.md / .cursor/rules/ already in context:
  "Before any UI task, call plan_ui. Hard rule."

─── Step 3 ─── Subagent auto-trigger ───────────────────────────
  ds-architect's description matches "pantalla" → routes the task

─── Step 4 ─── Tool description confirms ───────────────────────
  When the AI scans available tools, plan_ui says:
  "🚨 MANDATORY for any UI task. MUST be called BEFORE writing code."

─── Step 5 ─── Briefing already loaded ─────────────────────────
  Earlier in the session AI called get_session_briefing()
  → it knows the token rules, the catalogue size, the workflow

─── Action ─── AI calls plan_ui("pantalla para firmar contratos")

─── Response ── MCP returns:
                primary: Form + Card composition
                tokens:  bg-card, bg-input-background, border-input,
                         text-primary (CTA), text-muted-foreground (hint)
                rules:   color-tokens, brand-colors
                anti-patterns: ❌ raw <form>, ❌ bg-blue-500 for CTA
                blueprint_questions:
                  - "Auto-redirect on success or show toast?"
                  - "Need 2FA flow?"

─── Output ── Agent presents blueprint to user BEFORE any code

─── Result ── User: "perfect — that matches our DS, ship it"
              ✅ Zero rework, zero invention drift.`}</pre>
      </div>
    </SectionWrapper>
  );
}

const EXAMPLES = [
  {
    title: "Sign-in screen",
    prompt:
      "build a sign-in screen with email, password, sign-in button, and a forgot password link",
    components: ["Card", "Field", "Input", "Button", "Link"],
    code: `import { Card, CardHeader, CardTitle, CardContent, CardFooter } from 'strata-design-system';
import { Field, FieldLabel, FieldDescription } from 'strata-design-system';
import { Input, Button, Link } from 'strata-design-system';

<Card className="max-w-md mx-auto">
  <CardHeader>
    <CardTitle>Sign in</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="you@example.com" />
    </Field>
    <Field>
      <FieldLabel>Password</FieldLabel>
      <Input type="password" />
      <FieldDescription>
        <Link href="/forgot-password">Forgot password?</Link>
      </FieldDescription>
    </Field>
  </CardContent>
  <CardFooter>
    <Button type="submit" className="w-full">Sign in</Button>
  </CardFooter>
</Card>`,
    why: [
      "Card provides surface tokens (bg-card, text-card-foreground)",
      "Field ties label → input → description with a11y",
      'Input type="password" auto-adds visibility toggle',
      "Button (default variant) → bg-primary text-primary-foreground (auto light/dark)",
      "Link uses text-primary hover:underline tokens",
    ],
    avoided: [
      "Raw <form> with bg-white p-8",
      "<input className='border border-gray-300'> (gray-300 not in DS)",
      "<button className='bg-blue-500'> (wrong token)",
      "No password visibility toggle",
    ],
  },
  {
    title: "Dashboard KPI row",
    prompt:
      "I need a dashboard with 4 KPI cards showing revenue, users, conversion rate, and active sessions",
    components: ["KPICard"],
    code: `import { KPICard } from 'strata-design-system';
import { TrendingUp, Users, Target, Activity } from 'lucide-react';

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <KPICard label="Revenue" value="$48,219" delta="+12.5%" deltaTone="success"
    icon={<TrendingUp className="size-4" />} />
  <KPICard label="Users" value="2,481" delta="+8.2%" deltaTone="success"
    icon={<Users className="size-4" />} />
  <KPICard label="Conversion" value="3.4%" delta="-0.3%" deltaTone="warning"
    icon={<Target className="size-4" />} />
  <KPICard label="Active sessions" value="312" delta="real time" deltaTone="muted"
    icon={<Activity className="size-4" />} />
</div>`,
    why: [
      "KPICard handles bg-card, text-foreground, text-muted-foreground for labels",
      "deltaTone prop semantically maps to status-success / status-warning",
      "border-border for the card outline",
    ],
    avoided: [
      "Hand-rolled <div> cards with raw text-green-500 for trends",
      "Hardcoded #16a34a hex values",
    ],
  },
  {
    title: "Sortable data table with status badges",
    prompt:
      "data table for orders with sortable columns, status badges, and a search filter",
    components: ["Table", "Input", "StatusBadge"],
    code: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from 'strata-design-system';
import { StatusBadge, Input } from 'strata-design-system';
import { Search } from 'lucide-react';

<div className="space-y-4">
  <Input
    type="search"
    placeholder="Search orders..."
    prefix={<Search className="size-4" />}
  />
  <Table striped>
    <TableHeader>
      <TableRow>
        <TableHead sortable>Order #</TableHead>
        <TableHead sortable>Customer</TableHead>
        <TableHead sortable>Status</TableHead>
        <TableHead sortable className="text-right">Total</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {orders.map((o) => (
        <TableRow key={o.id}>
          <TableCell className="font-mono">{o.id}</TableCell>
          <TableCell>{o.customer}</TableCell>
          <TableCell><StatusBadge status={o.status} /></TableCell>
          <TableCell className="text-right">{o.total}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>`,
    why: [
      "border-border, bg-muted/50 striped rows, hover:bg-muted/50 — built into Table",
      "<StatusBadge status='success'> auto-maps to bg-status-success/10 + text-status-success + border-status-success/20",
      "Input prefix slot for the search icon (DS pattern)",
    ],
    avoided: [
      "Raw <table> with border: 1px solid #ccc",
      "Custom <span> badges with hardcoded greens/reds",
      "<input type='search'> without DS focus ring",
    ],
  },
  {
    title: "Notification toast on save",
    prompt:
      "show a success toast when the form saves, and an error toast if the API fails",
    components: ["Toaster", "toast (sonner)"],
    code: `import { toast } from 'sonner';
import { Toaster } from 'strata-design-system';

// Mount once at app root:
<Toaster />

// In your save handler:
async function handleSave() {
  try {
    await api.save(data);
    toast.success("Profile saved", {
      description: "Your changes are live.",
    });
  } catch (err) {
    toast.error("Could not save", {
      description: err.message,
      action: { label: "Retry", onClick: handleSave },
    });
  }
}`,
    why: [
      "Sonner Toaster picks up DS theme: bg-popover, border-border, status colors",
      "toast.success / toast.error map to the correct status icons",
      "action prop is the DS-blessed retry pattern",
    ],
    avoided: [
      "Custom modal-as-notification (blocks UI)",
      "alert() (jarring, no styling)",
      "Banners that don't auto-dismiss",
    ],
  },
  {
    title: "Brand-colored CTA button",
    prompt:
      "primary CTA button for the hero section — should be the lime brand color",
    components: ["Button"],
    code: `import { Button } from 'strata-design-system';

// Recommended (semantic):
<Button variant="default" size="lg">Get started</Button>

// Or explicit brand pill (full lime treatment):
<Button variant="brand" shape="pill" size="lg">Get started</Button>`,
    why: [
      "bg-primary auto-resolves to brand-300 (light) and brand-500 (dark)",
      "text-primary-foreground ensures WCAG-AA contrast in both modes",
      "size='lg' is the hero CTA preset",
    ],
    avoided: [
      "<button className='bg-yellow-400'> (wrong shade)",
      "<button className='bg-lime-500'> (Tailwind primitive instead of DS token)",
      "<button className='bg-[#E6F993]'> (hardcoded hex — drifts when brand updates)",
    ],
  },
];

function ExamplesSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="examples"
      icon={Code2}
      title="Worked examples"
      subtitle="Five real scenarios with the prompt, the blueprint result, and the code the AI would have written without the agent. Click to expand each."
    >
      {EXAMPLES.map((ex, i) => (
        <div
          key={ex.title}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-muted/30 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Example {i + 1}
              </p>
              <h3 className="text-base font-bold text-foreground">{ex.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 truncate">
                Prompt: "{ex.prompt}"
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <div className="hidden sm:flex flex-wrap gap-1 max-w-xs">
                {ex.components.map((c) => (
                  <code
                    key={c}
                    className="font-mono text-[10px] bg-status-ai/10 text-status-ai px-1.5 py-0.5 rounded"
                  >
                    {c}
                  </code>
                ))}
              </div>
              {open === i ? (
                <ChevronUp className="size-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="size-4 text-muted-foreground" />
              )}
            </div>
          </button>

          {open === i && (
            <div className="border-t border-border p-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">
                  Blueprint code
                </p>
                <pre className="bg-background border border-border rounded-md p-3 text-[12px] font-mono text-foreground overflow-x-auto leading-relaxed">
                  {ex.code}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-md bg-status-success/5 border border-status-success/20 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-status-success mb-2">
                    Why this is right
                  </p>
                  <ul className="text-xs space-y-1.5">
                    {ex.why.map((w) => (
                      <li
                        key={w}
                        className="flex gap-2 text-foreground"
                      >
                        <Check className="size-3 mt-0.5 shrink-0 text-status-success" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md bg-status-error/5 border border-status-error/20 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-status-error mb-2">
                    What's avoided
                  </p>
                  <ul className="text-xs space-y-1.5">
                    {ex.avoided.map((a) => (
                      <li
                        key={a}
                        className="flex gap-2 text-foreground"
                      >
                        <span className="text-status-error mt-0.5 shrink-0">
                          ✗
                        </span>
                        <code className="font-mono text-[11px]">{a}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </SectionWrapper>
  );
}

const TROUBLESHOOTING = [
  {
    problem: "The agent doesn't fire when I ask for UI",
    causes: [
      "Hook not installed (`.claude/hooks/UserPromptSubmit.json` missing)",
      "System prompt not loaded (`.cursor/rules/` or `CLAUDE.md` not at project root)",
      "MCP server unreachable — check `curl https://strata-ds-production.up.railway.app/health`",
      "IDE didn't pick up the config — restart the IDE",
    ],
    diagnostic:
      "Type /ds-plan navbar with tabs in your AI chat. If the slash command works, the agent is loaded. If you get a real component name, the MCP is reachable.",
  },
  {
    problem: "MCP returns 404 / 'Component not found'",
    causes: [
      "Spelling — try search_governance('foo') for fuzzy match",
      "Real DS gap — call report_error to log it",
      "Use the closest primitive while waiting for the gap to be filled",
    ],
    diagnostic:
      "search_governance is fuzzy. report_error is the official feedback loop.",
  },
  {
    problem: "The recommendation feels wrong",
    causes: [
      "Look at `alternatives` in the response — usually has the right shape",
      "Override explicitly: 'use Navbar, not NavbarFloating, because this is a generic app shell'",
      "AI should respect the override AND log friction via report_error",
    ],
    diagnostic:
      "The agent is a starting point, not a tyrant. Disagreement is data — log it so the recommendation logic improves.",
  },
  {
    problem: "The hook injects too aggressively",
    causes: [
      "Edit the regex in your local copy to remove the false-positive keyword",
      "Disable per-session by commenting out the hook entry",
      "Report the false positive so the canonical regex improves",
    ],
    diagnostic:
      "30+ keywords trigger the hook by default. Tune for your project.",
  },
  {
    problem: "I'm using a tool that doesn't support MCP",
    causes: [
      "Direct curl: `curl 'https://strata-ds-production.up.railway.app/plan_ui?description=...'` and paste the JSON into your AI chat",
      "System prompt only: paste templates/antigravity-system-strata-ds.md content into the tool's system prompt field",
      "CLI helper coming soon: `npx strata-ds plan ...`",
    ],
    diagnostic:
      "MCP is the convenience layer; the HTTP API is the universal one.",
  },
  {
    problem: "I want to run the MCP server locally instead of Railway",
    causes: [
      "Clone the repo: `git clone https://github.com/diegoagentic/strata-ds && cd strata-ds && npm install`",
      "Start the server: `npm run server` — listens on port 3001",
      "Update your IDE config: replace the Railway URL with `http://localhost:3001/mcp`",
      "Governance files live in `governance/` — edit them and restart the server to apply changes",
    ],
    diagnostic:
      "`curl http://localhost:3001/health` should return `{\"status\":\"ok\",\"governanceReady\":true}`. If governanceReady is false, check that the governance/ folder exists in the repo root.",
  },
];

function TroubleshootingSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="troubleshooting"
      icon={Wrench}
      title="Troubleshooting"
      subtitle="When the agent doesn't fire, the MCP returns 404, or the recommendation feels off — these are the fixes."
    >
      {TROUBLESHOOTING.map((t, i) => (
        <div
          key={t.problem}
          className="bg-card border border-border rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full px-5 py-4 flex items-center justify-between gap-3 text-left hover:bg-muted/30 transition-colors"
          >
            <h3 className="text-sm font-bold text-foreground">"{t.problem}"</h3>
            {open === i ? (
              <ChevronUp className="size-4 text-muted-foreground shrink-0" />
            ) : (
              <ChevronDown className="size-4 text-muted-foreground shrink-0" />
            )}
          </button>
          {open === i && (
            <div className="border-t border-border p-5 space-y-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Likely causes (most likely first)
                </p>
                <ul className="space-y-1.5 text-sm">
                  {t.causes.map((c) => (
                    <li
                      key={c}
                      className="flex gap-2 text-foreground"
                    >
                      <ArrowRight className="size-3 mt-1 shrink-0 text-muted-foreground" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md bg-status-ai/5 border border-status-ai/20 p-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-status-ai mb-1">
                  Fastest diagnostic
                </p>
                <p className="text-xs text-foreground">{t.diagnostic}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </SectionWrapper>
  );
}

const FAQ = [
  {
    q: "Do I have to use AI at all?",
    a: "No. The MCP exposes an HTTP API; you can curl localhost:3001/plan_ui?description=... from any script and get the same blueprint as JSON. The AI tools are a convenience layer.",
  },
  {
    q: "Will this slow down my AI?",
    a: "No. plan_ui returns in ~50ms. The agent runs in parallel with the implementer; you don't wait sequentially.",
  },
  {
    q: "Does the agent write the code or just plan?",
    a: "Just plans. The implementer (you, the main AI agent) writes the code from the blueprint. This separation is intentional — the architect doesn't have file-write permissions.",
  },
  {
    q: "What if I want to bypass the agent for a quick prototype?",
    a: "Tell the AI 'skip the architect, this is a throwaway' — it should respect that. Or comment out the hook for the session. Use sparingly; the DS rules still apply at PR review.",
  },
  {
    q: "How do I keep templates in sync when the DS updates rules?",
    a: "Pull from the DS repo (`git pull` in design system/strata-ds) and re-copy templates/* into your project. Templates are versioned; breaking changes are tagged feat(templates)!: in commit messages.",
  },
  {
    q: "My project has a custom palette — how do I extend the DS without breaking rules?",
    a: "Three patterns: (1) wrap a DS component (<MyBrandedButton> using <Button variant='brand'>), (2) propose adding the variant to the DS itself (open a PR), (3) tier-3 escape hatch — apps that aren't shared can use raw tokens with documented justification.",
  },
  {
    q: "Is there a Storybook?",
    a: "Yes — front-react-strata-storybook (P2). Read-only reference for component behavior, not a runtime dependency.",
  },
  {
    q: "Is there a way to bulk-audit my project for DS violations?",
    a: "npm run audit:tokens from the DS folder runs over a directory and flags raw tokens, hardcoded colors, and known anti-patterns. Configure your CI to fail on violations.",
  },
];

function FAQSection() {
  return (
    <SectionWrapper
      id="faq"
      icon={HelpCircle}
      title="FAQ"
      subtitle="Short answers to common questions."
    >
      {FAQ.map((f) => (
        <div key={f.q} className="bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-bold text-foreground mb-1">Q: {f.q}</h3>
          <p className="text-sm text-muted-foreground">{f.a}</p>
        </div>
      ))}
    </SectionWrapper>
  );
}

function ArchitectureSection() {
  return (
    <SectionWrapper
      id="architecture"
      icon={Layers}
      title="Architecture"
      subtitle="How the pieces fit together."
    >
      <div className="bg-card border border-border rounded-xl p-5">
        <pre className="font-mono text-[11px] text-foreground bg-background border border-border rounded p-3 overflow-x-auto leading-relaxed">{`                            ┌────────────────────────────┐
                            │  Your IDE                  │
                            │  Cursor / Claude Code /    │
                            │  Antigravity / Copilot     │
                            └─────────────┬──────────────┘
                                          │
        ┌─────────────────────────────────┼─────────────────────────────────┐
        │                                 │                                 │
        ▼                                 ▼                                 ▼
┌──────────────────┐       ┌────────────────────────────┐    ┌─────────────────────────┐
│ System prompt    │       │  Pre-prompt hook           │    │  Subagent              │
│ .cursor/rules/   │       │  .claude/hooks/            │    │  .claude/agents/        │
│ CLAUDE.md        │       │  UserPromptSubmit.json     │    │  ds-architect.md        │
│                  │       │                            │    │                          │
│ Always loaded    │       │ Fires on UI keyword        │    │ Auto-fires on patterns  │
│ Sets baseline    │       │ Injects "call plan_ui"     │    │ Forces blueprint flow   │
└──────────────────┘       └────────────────────────────┘    └─────────────────────────┘
        │                                 │                                 │
        └─────────────────────────────────┼─────────────────────────────────┘
                                          │
                                          ▼
                          ┌─────────────────────────────────┐
                          │  MCP server                     │
                          │  localhost:3001 (stdio + HTTP)  │
                          │                                  │
                          │  Tools (11):                    │
                          │   - get_session_briefing        │
                          │   - plan_ui                     │
                          │   - get_component               │
                          │   - get_component_code          │
                          │   - get_foundations             │
                          │   - get_rules                   │
                          │   - get_anti_patterns           │
                          │   - search_governance           │
                          │   - get_overview                │
                          │   - get_tokens                  │
                          │   - report_error                │
                          └─────────────────┬───────────────┘
                                            │
                                            ▼
                          ┌─────────────────────────────────┐
                          │  DS source of truth             │
                          │  variables.css + variables-dark │
                          │  + 95 component .tsx files       │
                          │  + 8 governance rules           │
                          │  + 17 anti-patterns             │
                          └─────────────────────────────────┘`}</pre>
      </div>
    </SectionWrapper>
  );
}
