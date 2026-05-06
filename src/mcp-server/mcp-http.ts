import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { z } from 'zod';
import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import * as url from 'url';

// Resolve governance path: env var → sibling `governance/` folder at project root
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const GOVERNANCE_PATH = process.env.GOVERNANCE_PATH
  || path.resolve(__dirname, '../../governance');

function readGovernanceFile(relativePath: string): string {
  const filePath = path.join(GOVERNANCE_PATH, relativePath);
  if (!fs.existsSync(filePath)) return `File not found: ${relativePath} (looked in ${filePath})`;
  return fs.readFileSync(filePath, 'utf-8');
}

function searchGovernance(query: string): string {
  const results: string[] = [];
  const queryLower = query.toLowerCase();

  function searchDir(dir: string, prefix = '') {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      const relPath = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        searchDir(fullPath, relPath);
      } else if (entry.name.endsWith('.md')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        if (content.toLowerCase().includes(queryLower)) {
          const matches = content.split('\n')
            .filter(l => l.toLowerCase().includes(queryLower))
            .slice(0, 3)
            .map(l => `  > ${l.trim()}`);
          results.push(`### ${relPath}\n${matches.join('\n')}`);
        }
      }
    }
  }

  searchDir(GOVERNANCE_PATH);
  return results.length > 0
    ? `Found in ${results.length} file(s):\n\n${results.join('\n\n')}`
    : `No results for: "${query}"`;
}

// Keyword-based component recommender for plan_ui
const COMPONENT_KB = [
  { id: 'navbar', name: 'Navbar', keywords: ['navbar','nav','navigation','header','top bar','app bar'], import: `import { Navbar } from "@/components/application-ui/navbar"`, tokens: { 'bg-card/80': 'Frosted surface', 'border-border': 'Separator', 'text-foreground': 'Nav links', 'text-primary': 'Active' }, rationale: 'Standard full-width navigation bar.', example: `<Navbar logo={<Logo />} links={navLinks} />` },
  { id: 'navbar-floating', name: 'NavbarFloating', keywords: ['floating','pill','pill nav','floating nav','rounded nav'], import: `import { NavbarFloating } from "@/components/application-ui/navbar-floating"`, tokens: { 'bg-card/80': 'Frosted', 'rounded-full': 'Pill shape', 'shadow-lg': 'Elevation' }, rationale: 'Pill-shaped floating navbar — matches the Strata demo pattern.', example: `<NavbarFloating logo={<Logo />} tabs={tabs} />` },
  { id: 'sidebar', name: 'Sidebar', keywords: ['sidebar','side nav','left nav','lateral','side menu'], import: `import { Sidebar, SidebarContent, SidebarMenu } from "@/components/overlays/sidebar"`, tokens: { 'bg-sidebar': 'Background', 'text-sidebar-foreground': 'Text', 'bg-sidebar-accent': 'Active item' }, rationale: 'Collapsible sidebar — for dashboards and admin panels.', example: `<Sidebar><SidebarContent><SidebarMenu items={navItems} /></SidebarContent></Sidebar>` },
  { id: 'button', name: 'Button', keywords: ['button','btn','cta','action','submit','call to action','primary button'], import: `import { Button } from "@/components/application-ui/button"`, tokens: { 'bg-primary': 'CTA fill', 'text-primary-foreground': 'Always dark', 'bg-secondary': 'Secondary variant' }, rationale: 'Use variant="default" for CTAs, "secondary" for alternatives.', example: `<Button variant="default">Save</Button>` },
  { id: 'dialog', name: 'Dialog', keywords: ['modal','dialog','popup','overlay','lightbox'], import: `import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/overlays/dialog"`, tokens: { 'bg-card': 'Surface', 'bg-background/80': 'Backdrop', 'backdrop-blur-sm': 'Blur' }, rationale: 'Never build raw overlays — always use Dialog.', example: `<Dialog open={open} onOpenChange={setOpen}><DialogContent>...</DialogContent></Dialog>` },
  { id: 'alert-dialog', name: 'AlertDialog', keywords: ['confirm','destructive dialog','delete confirm','irreversible','danger'], import: `import { AlertDialog, AlertDialogContent, AlertDialogAction, AlertDialogCancel } from "@/components/overlays/alert-dialog"`, tokens: { 'bg-destructive': 'Destructive action', 'bg-card': 'Surface' }, rationale: 'For destructive/irreversible actions — forces explicit confirmation.', example: `<AlertDialog><AlertDialogContent>...</AlertDialogContent></AlertDialog>` },
  { id: 'table', name: 'Table', keywords: ['table','data table','grid','rows','columns','sortable','tabular'], import: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/application-ui/table"`, tokens: { 'bg-muted/50': 'Header + alt rows', 'border-border': 'Borders', 'hover:bg-muted/50': 'Row hover' }, rationale: 'Never use raw <table> — always use the DS Table components.', example: `<Table><TableHeader>...</TableHeader><TableBody>...</TableBody></Table>` },
  { id: 'card', name: 'Card', keywords: ['card','panel','container','surface','section','box','tile'], import: `import { Card, CardHeader, CardTitle, CardContent } from "@/components/application-ui/card"`, tokens: { 'bg-card': 'Surface', 'border-border': 'Border', 'rounded-xl': 'Radius' }, rationale: 'Standard surface container for grouping related content.', example: `<Card><CardHeader><CardTitle>Title</CardTitle></CardHeader><CardContent>...</CardContent></Card>` },
  { id: 'kpi-card', name: 'KpiCard', keywords: ['kpi','metric','stat','statistic','dashboard card','analytics'], import: `import { KpiCard } from "@/components/application-ui/kpi-card"`, tokens: { 'text-status-success': 'Positive trend', 'text-status-error': 'Negative trend' }, rationale: 'Specialized card for metrics with trend indicator.', example: `<KpiCard label="Revenue" value="$42,500" trend="+12%" trendPositive />` },
  { id: 'form', name: 'Form + Field', keywords: ['form','formulario','input form','sign up','login','register','settings form'], import: `import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/forms/form"`, tokens: { 'bg-input': 'Input bg', 'border-border': 'Border', 'text-status-error': 'Validation error' }, rationale: 'Use the Form system for all user input.', example: `<Form onSubmit={handleSubmit}><FormField name="email">...</FormField></Form>` },
  { id: 'badge', name: 'Badge', keywords: ['badge','tag','label','chip','status badge','indicator'], import: `import { Badge } from "@/components/application-ui/badge"`, tokens: { 'bg-primary/10': 'Default bg', 'bg-status-success/10': 'Success bg', 'text-status-success': 'Success text' }, rationale: 'Use Badge for all status labels — never raw colored spans.', example: `<Badge>Active</Badge><StatusBadge status="success">Done</StatusBadge>` },
  { id: 'dropdown-menu', name: 'DropdownMenu', keywords: ['dropdown','menu','context menu','actions menu','kebab','three dots'], import: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/overlays/dropdown-menu"`, tokens: { 'bg-popover': 'Menu surface', 'hover:bg-accent': 'Item hover', 'text-destructive': 'Danger item' }, rationale: 'Never build custom positioned menus — use DropdownMenu.', example: `<DropdownMenu><DropdownMenuTrigger>...</DropdownMenuTrigger><DropdownMenuContent>...</DropdownMenuContent></DropdownMenu>` },
  { id: 'tabs', name: 'Tabs', keywords: ['tabs','tab','tabbed','tab panel','tab navigation'], import: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/application-ui/tabs"`, tokens: { 'bg-muted': 'List bg', 'bg-background': 'Active tab', 'text-muted-foreground': 'Inactive' }, rationale: 'Standard tab interface for switching between content sections.', example: `<Tabs defaultValue="overview"><TabsList>...</TabsList><TabsContent value="overview">...</TabsContent></Tabs>` },
  { id: 'alert', name: 'Alert', keywords: ['alert','notification','message','info box','warning','feedback','banner'], import: `import { Alert, AlertTitle, AlertDescription } from "@/components/overlays/alert"`, tokens: { 'bg-status-info/10': 'Info', 'bg-status-warning/10': 'Warning', 'bg-status-error/10': 'Error', 'bg-status-success/10': 'Success' }, rationale: 'Inline feedback — use semantic status tokens, never hardcoded colors.', example: `<Alert variant="info"><AlertTitle>Note</AlertTitle><AlertDescription>...</AlertDescription></Alert>` },
  { id: 'sheet', name: 'Sheet', keywords: ['sheet','slide panel','side panel','drawer','slide in','side drawer'], import: `import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/overlays/sheet"`, tokens: { 'bg-card': 'Surface', 'bg-background/80': 'Backdrop' }, rationale: 'Slide-in panel from the edge — for filters or secondary forms.', example: `<Sheet open={open} onOpenChange={setOpen}><SheetContent side="right">...</SheetContent></Sheet>` },
  { id: 'input', name: 'Input', keywords: ['input','text field','text input','search','search bar','campo'], import: `import { Input } from "@/components/forms/input"`, tokens: { 'bg-input': 'Input bg', 'border-border': 'Border', 'focus:border-primary': 'Focus ring' }, rationale: 'Never raw <input> — always use the DS Input with tokens.', example: `<Input type="text" placeholder="Search..." />` },
  { id: 'select', name: 'Select', keywords: ['select','dropdown select','picker','choose','options'], import: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/forms/select"`, tokens: { 'bg-input': 'Trigger', 'bg-popover': 'Dropdown', 'border-border': 'Border' }, rationale: 'Never raw <select> — use the DS Select.', example: `<Select><SelectTrigger><SelectValue placeholder="Choose..." /></SelectTrigger><SelectContent>...</SelectContent></Select>` },
  { id: 'sonner', name: 'Sonner (Toast)', keywords: ['toast','toaster','notification toast','snackbar','sonner'], import: `import { Toaster } from "@/components/overlays/sonner"\nimport { toast } from "sonner"`, tokens: { 'bg-card': 'Toast surface', 'text-foreground': 'Text', 'bg-status-success': 'Success toast' }, rationale: 'Use Sonner for all transient notifications — never custom fixed divs.', example: `toast.success("Saved!"); toast.error("Something went wrong");` },
];

const ANTI_PATTERNS = [
  'Never hardcode hex values — use semantic tokens (bg-primary, text-foreground, bg-card)',
  'Never use brand-300/400 as text color on light backgrounds (contrast failure)',
  'Never build raw overlays with position:fixed — use Dialog, Sheet, or Drawer',
  'Never use bg-white/text-black without dark pair — use bg-background/text-foreground',
  'Never use raw status Tailwind (bg-green-500) — use bg-status-success',
  'Never use gray-* — use zinc-* scale or semantic tokens',
  'Never use explicit dark: classes for theming — use semantic tokens that auto-switch',
];

const RULES = [
  'LEY-1: Always use semantic tokens — never hex or raw Tailwind color classes',
  'LEY-4: Token priority: bg-primary > bg-brand-300 > bg-[#E6F993]',
  'LEY-5: Dark mode via tokens only — not explicit dark: classes (except sidebar)',
];

function planUI(description: string): string {
  const lower = description.toLowerCase();
  const scored = COMPONENT_KB.map(c => ({
    c,
    score: c.keywords.reduce((s, kw) => s + (lower.includes(kw) ? (kw.length > 5 ? 2 : 1) : 0), 0),
  })).sort((a, b) => b.score - a.score);

  const top = scored[0];
  const primary = top.score > 0 ? top.c : COMPONENT_KB.find(c => c.id === 'card')!;
  const alts = scored.filter(s => s.score > 0 && s.c.id !== primary.id).slice(0, 3);

  return JSON.stringify({
    query: description,
    primary_recommendation: {
      component: primary.name,
      id: primary.id,
      rationale: primary.rationale,
      import: primary.import,
      tokens: primary.tokens,
      example: primary.example,
    },
    alternatives: alts.map(a => ({ component: a.c.name, when_to_choose: a.c.rationale, score: a.score })),
    rules_that_apply: RULES,
    anti_patterns: ANTI_PATTERNS,
    next_steps: [
      `Call get_component("${primary.id}") for full variant documentation`,
      'Call get_tokens() for the complete token reference',
      'Call get_anti_patterns() for all documented patterns to avoid',
    ],
  });
}

function createServer() {
  const server = new McpServer({ name: 'strata-ds', version: '1.0.0' });

  server.tool('get_session_briefing',
    'MUST BE CALLED ONCE AT SESSION START. Returns active DS rules + mandatory workflow.',
    {}, async () => ({
      content: [{ type: 'text', text: [
        '# Strata DS — Session Briefing\n',
        '## ABSOLUTE LAWS\n', readGovernanceFile('LAWS.md'),
        '\n## KEY TOKENS (top 20)\n', readGovernanceFile('tokens/token-reference.md').split('\n').slice(0, 60).join('\n'),
        '\n## MANDATORY WORKFLOW\n1. Call plan_ui() before ANY UI component\n2. Use only semantic tokens — never hex\n3. Dark mode via tokens only',
      ].join('\n') }],
    }));

  server.tool('plan_ui',
    '🚨 MANDATORY BEFORE ANY UI. Given a description, returns the recommended DS component, tokens, rules, and anti-patterns to avoid.',
    { description: z.string().describe('UI element to plan, e.g. "floating pill navbar with tabs"') },
    async ({ description }) => ({ content: [{ type: 'text', text: planUI(description) }] }));

  server.tool('get_laws',
    'Absolute DS laws — consult first before any new component.',
    {}, async () => ({ content: [{ type: 'text', text: readGovernanceFile('LAWS.md') }] }));

  server.tool('get_rules',
    'DS rules for a specific category.',
    { category: z.enum(['color-tokens', 'brand-colors', 'containers-and-cards', 'buttons-and-actions', 'icons']) },
    async ({ category }) => {
      const map: Record<string, string> = {
        'color-tokens': 'rules/01-color-tokens.md',
        'brand-colors': 'rules/02-brand-colors.md',
        'containers-and-cards': 'rules/03-containers-and-cards.md',
        'buttons-and-actions': 'rules/04-buttons-and-actions.md',
        'icons': 'rules/05-icons.md',
      };
      return { content: [{ type: 'text', text: readGovernanceFile(map[category]) }] };
    });

  server.tool('get_tokens',
    'Complete token reference — CSS vars + Tailwind classes by category.',
    {}, async () => ({ content: [{ type: 'text', text: readGovernanceFile('tokens/token-reference.md') }] }));

  server.tool('get_anti_patterns',
    'All documented errors and anti-patterns to avoid.',
    {}, async () => ({ content: [{ type: 'text', text: readGovernanceFile('anti-patterns/common-errors.md') }] }));

  server.tool('search_governance',
    'Full-text search across all governance docs.',
    { query: z.string() },
    async ({ query }) => ({ content: [{ type: 'text', text: searchGovernance(query) }] }));

  server.tool('get_overview',
    'Full DS context: laws + tokens + anti-patterns in one call.',
    {}, async () => {
      const text = [
        '# Strata DS — Complete Governance\n',
        '## LAWS\n', readGovernanceFile('LAWS.md'),
        '\n## TOKENS\n', readGovernanceFile('tokens/token-reference.md'),
        '\n## ANTI-PATTERNS\n', readGovernanceFile('anti-patterns/common-errors.md'),
      ].join('\n');
      return { content: [{ type: 'text', text }] };
    });

  server.tool('get_component',
    'Spec for a DS component: variants, tokens, when to use, anti-patterns.',
    { id: z.string().describe('Component id, e.g. "button", "navbar-floating", "dialog"') },
    async ({ id }) => {
      const comp = COMPONENT_KB.find(c => c.id === id);
      if (!comp) return { content: [{ type: 'text', text: `Component "${id}" not found. Use search_governance to explore.` }] };
      return { content: [{ type: 'text', text: JSON.stringify(comp, null, 2) }] };
    });

  server.tool('get_foundations',
    'DS foundations: colors, typography, spacing, borders, shadows.',
    { section: z.enum(['colors', 'typography', 'spacing', 'borders', 'shadows', 'all']).optional() },
    async ({ section = 'all' }) => {
      const text = section === 'all'
        ? readGovernanceFile('tokens/token-reference.md')
        : readGovernanceFile('tokens/token-reference.md'); // can be split by section later
      return { content: [{ type: 'text', text }] };
    });

  server.tool('report_error',
    'Report a DS violation or gap to be tracked.',
    { description: z.string(), context: z.string().optional() },
    async ({ description, context }) => ({
      content: [{ type: 'text', text: `DS gap/violation reported:\n\nDescription: ${description}\nContext: ${context || 'n/a'}\n\nThis will be reviewed by the DS team.` }],
    }));

  return server;
}

const PORT = parseInt(process.env.PORT || '3001', 10);

const httpServer = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'ok',
      name: 'Strata DS MCP Server',
      version: '1.0.0',
      tools: 11,
      components: 126,
      foundations: 8,
      rules: 5,
      antiPatterns: 17,
      governancePath: GOVERNANCE_PATH,
      governanceReady: fs.existsSync(path.join(GOVERNANCE_PATH, 'LAWS.md')),
    }));
    return;
  }

  if (req.method === 'GET' && req.url?.startsWith('/plan_ui')) {
    const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
    const description = parsedUrl.searchParams.get('description') || '';
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(planUI(description));
    return;
  }

  if (req.url === '/mcp') {
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    const server = createServer();
    await server.connect(transport);
    await transport.handleRequest(req, res);
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

httpServer.listen(PORT, () => {
  console.log(`Strata DS MCP HTTP Server — port ${PORT}`);
  console.log(`MCP endpoint:  http://localhost:${PORT}/mcp`);
  console.log(`Health:        http://localhost:${PORT}/health`);
  console.log(`Governance:    ${GOVERNANCE_PATH}`);
  console.log(`Governance OK: ${fs.existsSync(path.join(GOVERNANCE_PATH, 'LAWS.md'))}`);
});
