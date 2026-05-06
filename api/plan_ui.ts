// Strata DS — plan_ui Vercel serverless function
// Keyword-based component recommender using embedded DS knowledge

const COMPONENTS: Array<{
  id: string;
  name: string;
  keywords: string[];
  import: string;
  tokens: Record<string, string>;
  rationale: string;
  example: string;
  alternatives?: string[];
}> = [
  {
    id: 'navbar',
    name: 'Navbar',
    keywords: ['navbar', 'nav', 'navigation', 'header', 'menu', 'top bar', 'app bar'],
    import: `import { Navbar } from "@/components/application-ui/navbar"`,
    tokens: { 'bg-card/80': 'Frosted glass surface', 'border-border': 'Bottom separator', 'text-foreground': 'Nav links', 'text-primary': 'Active link' },
    rationale: 'Standard full-width navigation bar for app headers.',
    example: `<Navbar logo={<Logo />} links={navLinks} actions={<ThemeToggle />} />`,
    alternatives: ['navbar-floating', 'sidebar'],
  },
  {
    id: 'navbar-floating',
    name: 'NavbarFloating',
    keywords: ['floating', 'pill', 'pill nav', 'floating nav', 'rounded nav', 'floating pill'],
    import: `import { NavbarFloating } from "@/components/application-ui/navbar-floating"`,
    tokens: { 'bg-card/80': 'Frosted glass', 'backdrop-blur-xl': 'Blur effect', 'rounded-full': 'Pill shape', 'shadow-lg': 'Elevation' },
    rationale: 'Pill-shaped floating navbar — matches the Strata demo pattern for modern layouts.',
    example: `<NavbarFloating logo={<Logo />} tabs={tabs} actions={<ThemeToggle />} />`,
    alternatives: ['navbar'],
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    keywords: ['sidebar', 'side nav', 'left nav', 'drawer nav', 'side menu', 'lateral'],
    import: `import { Sidebar, SidebarContent, SidebarMenu } from "@/components/overlays/sidebar"`,
    tokens: { 'bg-sidebar': 'Sidebar background', 'text-sidebar-foreground': 'Nav text', 'bg-sidebar-accent': 'Active item', 'text-sidebar-primary': 'Brand accent' },
    rationale: 'Collapsible sidebar navigation — ideal for dashboards and admin panels.',
    example: `<Sidebar><SidebarContent><SidebarMenu items={navItems} /></SidebarContent></Sidebar>`,
    alternatives: ['navbar', 'navigation-menu'],
  },
  {
    id: 'button',
    name: 'Button',
    keywords: ['button', 'btn', 'cta', 'action', 'submit', 'click', 'primary button', 'secondary button', 'call to action'],
    import: `import { Button } from "@/components/application-ui/button"`,
    tokens: { 'bg-primary': 'Primary fill (brand lime)', 'text-primary-foreground': 'Always dark on primary', 'bg-secondary': 'Muted surface for secondary', 'hover:opacity-90': 'Hover state' },
    rationale: 'Primary interactive element. Use variant="default" for CTAs, "secondary" for non-primary actions.',
    example: `<Button variant="default">Save changes</Button>\n<Button variant="secondary">Cancel</Button>\n<Button variant="destructive">Delete</Button>`,
    alternatives: ['link'],
  },
  {
    id: 'dialog',
    name: 'Dialog',
    keywords: ['modal', 'dialog', 'popup', 'overlay', 'confirmation', 'lightbox', 'modal dialog'],
    import: `import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/overlays/dialog"`,
    tokens: { 'bg-card': 'Dialog surface', 'border-border': 'Dialog border', 'bg-background/80': 'Backdrop', 'backdrop-blur-sm': 'Backdrop blur' },
    rationale: 'Use Dialog for all modal interactions — never build raw overlays with fixed positioning.',
    example: `<Dialog open={open} onOpenChange={setOpen}>\n  <DialogContent>\n    <DialogHeader><DialogTitle>Confirm action</DialogTitle></DialogHeader>\n    <p className="text-muted-foreground">Are you sure?</p>\n    <Button onClick={handleConfirm}>Confirm</Button>\n  </DialogContent>\n</Dialog>`,
    alternatives: ['alert-dialog', 'sheet', 'drawer'],
  },
  {
    id: 'alert-dialog',
    name: 'AlertDialog',
    keywords: ['confirm', 'alert dialog', 'destructive dialog', 'delete confirm', 'irreversible', 'danger'],
    import: `import { AlertDialog, AlertDialogContent, AlertDialogAction, AlertDialogCancel } from "@/components/overlays/alert-dialog"`,
    tokens: { 'bg-destructive': 'Destructive action button', 'bg-card': 'Dialog surface', 'border-border': 'Dialog border' },
    rationale: 'For destructive or irreversible actions — forces user to explicitly confirm.',
    example: `<AlertDialog>\n  <AlertDialogContent>\n    <AlertDialogHeader>Delete record?</AlertDialogHeader>\n    <AlertDialogCancel>Cancel</AlertDialogCancel>\n    <AlertDialogAction className="bg-destructive">Delete</AlertDialogAction>\n  </AlertDialogContent>\n</AlertDialog>`,
    alternatives: ['dialog'],
  },
  {
    id: 'table',
    name: 'Table',
    keywords: ['table', 'data table', 'grid', 'list', 'rows', 'columns', 'sortable', 'sort', 'tabular'],
    import: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/application-ui/table"`,
    tokens: { 'bg-muted/50': 'Alt rows + header', 'border-border': 'Table borders', 'hover:bg-muted/50': 'Row hover', 'text-muted-foreground': 'Header labels' },
    rationale: 'Use Table for all structured data — never build raw <table> elements.',
    example: `<Table>\n  <TableHeader>\n    <TableRow><TableHead>Name</TableHead><TableHead>Status</TableHead></TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow><TableCell>Item</TableCell><TableCell><Badge>Active</Badge></TableCell></TableRow>\n  </TableBody>\n</Table>`,
    alternatives: ['stacked-list', 'description-list'],
  },
  {
    id: 'card',
    name: 'Card',
    keywords: ['card', 'panel', 'container', 'surface', 'section', 'box', 'tile'],
    import: `import { Card, CardHeader, CardTitle, CardContent } from "@/components/application-ui/card"`,
    tokens: { 'bg-card': 'Card surface', 'border-border': 'Card border', 'text-card-foreground': 'Card text', 'rounded-xl': 'Border radius' },
    rationale: 'Standard surface container — use for grouping related content.',
    example: `<Card>\n  <CardHeader><CardTitle>Section title</CardTitle></CardHeader>\n  <CardContent>Content here</CardContent>\n</Card>`,
    alternatives: ['section-card', 'kpi-card'],
  },
  {
    id: 'kpi-card',
    name: 'KpiCard',
    keywords: ['kpi', 'metric', 'stat', 'statistic', 'number', 'count', 'dashboard card', 'analytics card'],
    import: `import { KpiCard } from "@/components/application-ui/kpi-card"`,
    tokens: { 'bg-card': 'Card surface', 'text-foreground': 'Metric value', 'text-muted-foreground': 'Label', 'text-status-success': 'Positive trend', 'text-status-error': 'Negative trend' },
    rationale: 'Specialized card for metrics — includes trend indicator and proper token usage for status.',
    example: `<KpiCard label="Revenue" value="$42,500" trend="+12%" trendPositive />`,
    alternatives: ['card', 'description-list'],
  },
  {
    id: 'form',
    name: 'Form + Field',
    keywords: ['form', 'formulario', 'input form', 'form layout', 'sign up', 'login', 'register', 'settings form'],
    import: `import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/forms/form"\nimport { Input } from "@/components/forms/input"`,
    tokens: { 'bg-input': 'Input background', 'border-border': 'Input border', 'text-foreground': 'Input text', 'text-muted-foreground': 'Placeholder', 'text-status-error': 'Validation error' },
    rationale: 'Use the Form system for all user input — never build raw form controls.',
    example: `<Form onSubmit={handleSubmit}>\n  <FormField name="email">\n    <FormItem>\n      <FormLabel>Email</FormLabel>\n      <FormControl><Input type="email" placeholder="you@example.com" /></FormControl>\n    </FormItem>\n  </FormField>\n  <Button type="submit">Submit</Button>\n</Form>`,
    alternatives: ['input', 'field', 'select'],
  },
  {
    id: 'badge',
    name: 'Badge',
    keywords: ['badge', 'tag', 'label', 'chip', 'status badge', 'pill badge', 'indicator'],
    import: `import { Badge } from "@/components/application-ui/badge"`,
    tokens: { 'bg-primary/10': 'Default badge bg', 'text-primary': 'Default badge text', 'bg-status-success/10': 'Success variant', 'text-status-success': 'Success text' },
    rationale: 'Use Badge for all status labels and tags — never use raw colored spans.',
    example: `<Badge>Default</Badge>\n<StatusBadge status="success">Active</StatusBadge>\n<PriorityBadge priority="high" />`,
    alternatives: ['status-badge', 'priority-badge'],
  },
  {
    id: 'dropdown-menu',
    name: 'DropdownMenu',
    keywords: ['dropdown', 'menu', 'context menu', 'actions menu', 'kebab menu', 'three dots', 'options menu'],
    import: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/overlays/dropdown-menu"`,
    tokens: { 'bg-popover': 'Menu surface', 'border-border': 'Menu border', 'hover:bg-accent': 'Item hover', 'text-destructive': 'Destructive item' },
    rationale: 'Use DropdownMenu for contextual action menus — never build custom positioned divs.',
    example: `<DropdownMenu>\n  <DropdownMenuTrigger><Button variant="ghost" size="icon"><MoreVertical /></Button></DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>Edit</DropdownMenuItem>\n    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`,
    alternatives: ['context-menu', 'popover'],
  },
  {
    id: 'tabs',
    name: 'Tabs',
    keywords: ['tabs', 'tab', 'tabbed', 'tab panel', 'tab navigation', 'tab view'],
    import: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/application-ui/tabs"`,
    tokens: { 'bg-muted': 'TabsList bg', 'bg-background': 'Active tab', 'text-foreground': 'Active tab text', 'text-muted-foreground': 'Inactive tab' },
    rationale: 'Standard tab interface — use for switching between content sections.',
    example: `<Tabs defaultValue="overview">\n  <TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="details">Details</TabsTrigger></TabsList>\n  <TabsContent value="overview">Overview content</TabsContent>\n  <TabsContent value="details">Details content</TabsContent>\n</Tabs>`,
    alternatives: ['navigation-menu', 'sidebar'],
  },
  {
    id: 'alert',
    name: 'Alert',
    keywords: ['alert', 'notification', 'message', 'info box', 'warning box', 'error box', 'success message', 'feedback'],
    import: `import { Alert, AlertTitle, AlertDescription } from "@/components/overlays/alert"`,
    tokens: { 'bg-status-info/10': 'Info variant', 'bg-status-warning/10': 'Warning variant', 'bg-status-error/10': 'Error variant', 'bg-status-success/10': 'Success variant', 'border-status-info/30': 'Info border' },
    rationale: 'Inline feedback messages — use semantic status tokens, never hardcoded colors.',
    example: `<Alert variant="info">\n  <AlertTitle>Heads up</AlertTitle>\n  <AlertDescription>This action will affect all users.</AlertDescription>\n</Alert>`,
    alternatives: ['sonner', 'feedback-toast'],
  },
  {
    id: 'page-header',
    name: 'PageHeader',
    keywords: ['page header', 'page title', 'heading', 'page top', 'page intro', 'page layout header'],
    import: `import { PageHeader } from "@/components/application-ui/page-header"`,
    tokens: { 'text-foreground': 'Page title', 'text-muted-foreground': 'Subtitle/description', 'bg-background': 'Page background' },
    rationale: 'Standard page-level header — consistent title + subtitle + actions pattern.',
    example: `<PageHeader title="Dashboard" description="Overview of your account" actions={<Button>New item</Button>} />`,
    alternatives: ['heading'],
  },
  {
    id: 'sheet',
    name: 'Sheet',
    keywords: ['sheet', 'slide panel', 'slide over', 'side panel', 'drawer', 'side drawer', 'slide in'],
    import: `import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/overlays/sheet"`,
    tokens: { 'bg-card': 'Sheet surface', 'border-border': 'Sheet border', 'bg-background/80': 'Backdrop' },
    rationale: 'Slide-in panel from the edge — for secondary content, filters, or forms.',
    example: `<Sheet open={open} onOpenChange={setOpen}>\n  <SheetContent side="right">\n    <SheetHeader><SheetTitle>Filters</SheetTitle></SheetHeader>\n    {/* filter controls */}\n  </SheetContent>\n</Sheet>`,
    alternatives: ['dialog', 'drawer'],
  },
  {
    id: 'input',
    name: 'Input',
    keywords: ['input', 'text field', 'text input', 'search', 'search bar', 'campo'],
    import: `import { Input } from "@/components/forms/input"`,
    tokens: { 'bg-input': 'Input background', 'border-border': 'Input border', 'text-foreground': 'Input text', 'focus:border-primary': 'Focus ring' },
    rationale: 'Use Input for all text entry — never raw <input> elements without DS tokens.',
    example: `<Input type="text" placeholder="Search..." />\n<Input type="email" placeholder="you@example.com" />`,
    alternatives: ['textarea', 'combobox', 'select'],
  },
  {
    id: 'select',
    name: 'Select',
    keywords: ['select', 'dropdown select', 'picker', 'choose', 'options', 'combobox simple'],
    import: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/forms/select"`,
    tokens: { 'bg-input': 'Trigger background', 'bg-popover': 'Dropdown surface', 'border-border': 'Trigger border', 'text-foreground': 'Selected value' },
    rationale: 'Standard select/picker — never use raw <select> elements.',
    example: `<Select onValueChange={setValue}>\n  <SelectTrigger><SelectValue placeholder="Choose..." /></SelectTrigger>\n  <SelectContent>\n    <SelectItem value="a">Option A</SelectItem>\n    <SelectItem value="b">Option B</SelectItem>\n  </SelectContent>\n</Select>`,
    alternatives: ['combobox', 'searchable-multi-select'],
  },
];

const COMMON_ANTI_PATTERNS = [
  'Never hardcode hex values — use semantic tokens (bg-primary, text-foreground, bg-card)',
  'Never use brand-300/400 as text color on light backgrounds (contrast ratio failure)',
  'Never build raw overlays with position:fixed — use Dialog, Sheet, or Drawer',
  'Never use bg-white / text-black without dark mode pair — use bg-background / text-foreground',
  'Never use status colors as raw Tailwind (bg-green-500) — use bg-status-success',
  'Never use gray-* classes — use zinc-* scale or semantic tokens',
];

const COMMON_RULES = [
  'LEY-1: Always use semantic tokens — never hex or raw Tailwind color classes',
  'LEY-5: Dark mode via tokens only — not explicit dark: classes (except sidebar inversion)',
  'LEY-4: Semantic tokens first (bg-primary > bg-brand-300 > bg-[#E6F993])',
];

function scoreComponent(comp: typeof COMPONENTS[0], description: string): number {
  const lower = description.toLowerCase();
  return comp.keywords.reduce((score, kw) => score + (lower.includes(kw) ? (kw.length > 5 ? 2 : 1) : 0), 0);
}

export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const description = (req.query?.description as string) || '';
  if (!description.trim()) {
    res.status(400).json({ error: 'Missing description query parameter' });
    return;
  }

  const scored = COMPONENTS
    .map(c => ({ comp: c, score: scoreComponent(c, description) }))
    .sort((a, b) => b.score - a.score);

  const top = scored[0];

  if (top.score === 0) {
    res.status(200).json({
      query: description,
      error: null,
      primary_recommendation: {
        component: 'Card',
        id: 'card',
        rationale: `No exact DS component matched "${description}". Card is the default surface container — combine with other components as needed.`,
        import: `import { Card, CardContent } from "@/components/application-ui/card"`,
        tokens: { 'bg-card': 'Surface', 'border-border': 'Border', 'text-foreground': 'Content text' },
        example: null,
      },
      alternatives: scored.slice(1, 4).map(s => ({ component: s.comp.name, when_to_choose: s.comp.rationale, score: s.score })),
      rules_that_apply: COMMON_RULES,
      anti_patterns: COMMON_ANTI_PATTERNS.slice(0, 3),
      next_steps: ['Call get_component for detailed spec', 'Check get_anti_patterns for full list'],
    });
    return;
  }

  const primary = top.comp;
  const alternatives = scored
    .filter(s => s.score > 0 && s.comp.id !== primary.id)
    .slice(0, 3)
    .map(s => ({ component: s.comp.name, when_to_choose: s.comp.rationale, score: s.score }));

  // Add alternatives from the component's own list
  const compAlts = (primary.alternatives || [])
    .filter(id => !alternatives.find(a => a.component.toLowerCase().includes(id)))
    .slice(0, 2)
    .map(id => {
      const found = COMPONENTS.find(c => c.id === id);
      return found ? { component: found.name, when_to_choose: found.rationale, score: 0 } : null;
    })
    .filter(Boolean) as Array<{ component: string; when_to_choose: string; score: number }>;

  res.status(200).json({
    query: description,
    primary_recommendation: {
      component: primary.name,
      id: primary.id,
      rationale: primary.rationale,
      import: primary.import,
      tokens: primary.tokens,
      example: primary.example,
    },
    alternatives: [...alternatives, ...compAlts].slice(0, 3),
    rules_that_apply: COMMON_RULES,
    anti_patterns: COMMON_ANTI_PATTERNS,
    next_steps: [
      `Call get_component("${primary.id}") for full variant and prop documentation`,
      'Call get_tokens() for the complete token reference',
      'Call get_anti_patterns() for all 17 documented patterns to avoid',
    ],
  });
}
