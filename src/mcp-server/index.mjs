#!/usr/bin/env node
/**
 * Strata DS — MCP Server
 * Native MCP server exposing Design System governance, components, and tokens
 * to Claude Code via stdio transport.
 *
 * Tools: get_overview, get_component, get_tokens, get_rules,
 *        get_anti_patterns, search_governance, report_error
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { writeFileSync, readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DS_ROOT = join(__dirname, "../..");

// ─── DATA ─────────────────────────────────────────────────────────────────────

const OVERVIEW = `
# Strata Design System — P1 (strata-ds)

**Stack:** React 19 · TypeScript 5 · Tailwind CSS v4 · CVA · Radix UI · Vite · Storybook 8.6

## Architecture
- **P1** (strata-ds) = unified source of truth — components, tokens, stories
- **P2** (front-react-strata-storybook) = 109 migrated components now living in P1
- MCP replaces all Figma integration

## Token System (3 levels)
1. **Primitives** — raw palette values (colors, spacing, shadows, typography)
2. **Semantic** — role-based aliases (background, foreground, primary, border, status-*)
3. **Component** — component-specific tokens (card-bg, button-ring, etc.)

Total tokens: ~207+ semantic tokens after Phase 2

## Status Tokens (CRITICAL — 60% of ecosystem violations)
| Token | Tailwind | Light | Dark |
|-------|---------|-------|------|
| --color-status-success | bg-status-success | #16a34a | #4ade80 |
| --color-status-warning | bg-status-warning | #b45309 | #fbbf24 |
| --color-status-error | bg-status-error | #C11736 | #ED5F74 |
| --color-status-info | bg-status-info | #2563eb | #60a5fa |
| --color-status-ai | bg-status-ai | #8b5cf6 | #a78bfa |

## Governance Tiers
- **Tier 1** (production): hex blocked, only official variants, pre-commit enforced
- **Tier 2** (demos): hex blocked, Tailwind tokens OK, custom variants with warning
- **Tier 3** (simulations): hex with @ds-ignore allowed

## Key Components (109 migrated from P2)
Application UI: Button, Badge, Card, Avatar, Table, Navbar, NavbarFloating, PageLayout,
Layout, Heading, Text, Tabs, Pagination, BreadCrumb, Separator, Divider, Progress,
StatusBadge, PriorityBadge, KpiCard, SectionCard, Tracking, ActivityTimeline, Banner,
InfoBanner, HeroSection, FeatureSection, Pricing, ActionCenter, FilterPanel, ListToolbar,
SectionToolbar, Toggle, ToggleGroup, HoverCard, SharedOrderCard, SharedCatalogCard,
SharedInventoryCard, StageProgress, ShoppingCart, ProductList, ProductOverview,
CompanyGreeting, CreateOrderDialog, ExperiencesNavbar, PageHeader, Link, Label, Skeleton,
Carousel, Chart, Calendar, Command, Menubar, NavigationMenu, TableEmptyState, ...

Forms: Input, Textarea, Select, Combobox, Checkbox, RadioGroup, Switch, Slider, DatePicker,
Form, Field, Fieldset, InputOTP, Listbox, SearchableMultiSelect, ...

Overlays: Dialog, AlertDialog, Alert, Sheet, Drawer, Popover, Tooltip, DropdownMenu,
ContextMenu, ConfirmDialog, FeedbackToast, Sonner, Sidebar, SlideOver, ScrollArea,
Resizable, ...

Data Viz: Accordion, Disclosure, DescriptionList, StackedList, EmptyState, ...
`;

const COMPONENTS = {
  button: {
    name: "Button",
    import: `import { Button } from '@strata-ds/components';`,
    description: "Primary interactive control built with CVA and Radix Slot.",
    variants: {
      variant: ["default", "destructive", "outline", "secondary", "ghost", "link", "brand", "accent"],
      size: ["default (h-9)", "sm (h-8)", "lg (h-10)", "icon (9×9)"],
      shape: ["default (rounded-md)", "pill (rounded-full)"],
    },
    props: ["variant", "size", "shape", "asChild", "disabled", "children"],
    tokens: {
      "bg-brand-300": "default/brand fill (light)",
      "bg-brand-500": "default/brand fill (dark)",
      "border-border": "outline variant border",
      "text-foreground": "outline/ghost text",
      "bg-accent": "ghost hover",
      "ring-ring/50": "focus ring",
      "border-destructive": "aria-invalid border",
    },
    whenToUse: [
      "default/brand — primary CTA, one per screen section",
      "outline — secondary action alongside primary",
      "ghost — icon triggers in toolbars, table rows",
      "destructive — irreversible actions (delete, revoke)",
      "link — inline navigational action in text",
      "accent — indigo highlight for feature promotion",
    ],
    antiPatterns: [
      "❌ <button className='px-4 py-2 bg-[#E6F993]'> — raw button without DS styles",
      "❌ Using default variant for destructive actions",
      "❌ Adding onClick to navigation — use asChild with <Link>",
    ],
    example: `// ✅ Primary CTA
<Button variant="default">Save Changes</Button>

// ✅ Destructive
<Button variant="destructive" onClick={handleDelete}>Delete</Button>

// ✅ asChild with router link
<Button asChild variant="ghost">
  <Link to="/settings">Settings</Link>
</Button>

// ✅ Brand pill (common CTA style)
<Button variant="brand" shape="pill" size="lg">Get Started</Button>`,
  },

  badge: {
    name: "Badge",
    import: `import { Badge } from '@strata-ds/components';`,
    description: "Small status or label chip built with CVA.",
    variants: {
      variant: ["solid", "soft", "outline"],
      color: ["zinc", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "brand"],
    },
    tokens: {
      "bg-status-success": "PREFERRED for success states (use instead of bg-green-600)",
      "bg-status-warning": "PREFERRED for warning states",
      "bg-status-error": "PREFERRED for error states",
      "bg-status-info": "PREFERRED for info states",
      "bg-status-ai": "PREFERRED for AI-generated content indicators",
    },
    whenToUse: [
      "Label states on records: Activo, Pendiente, Vencido",
      "Category tags in lists or tables",
      "Count indicators (unread, errors)",
      "Status chips next to headings",
    ],
    antiPatterns: [
      "❌ <Badge className='bg-[#098400]'> — hex hardcoded (Tier 1+2 blocker)",
      "❌ <Badge className='bg-green-600'> — Tailwind raw semantic instead of DS status token",
      "✅ <Badge className='bg-status-success text-white'> — correct pattern",
    ],
    example: `// ✅ Status tokens (governance-compliant)
<Badge className="bg-status-success text-white">Activo</Badge>
<Badge className="bg-status-warning text-white">Pendiente</Badge>
<Badge className="bg-status-error text-white">Error</Badge>
<Badge className="bg-status-ai text-white">IA</Badge>

// ✅ Soft variant with opacity
<Badge className="bg-status-success/10 text-status-success">Activo</Badge>

// ✅ CVA built-in colors
<Badge variant="soft" color="brand">Premium</Badge>
<Badge variant="outline" color="red">Error</Badge>`,
  },

  card: {
    name: "Card",
    import: `import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from '@strata-ds/components';`,
    description: "Container for grouped content with composable sub-components.",
    variants: {
      variant: ["default", "flat", "glass", "brand"],
    },
    tokens: {
      "bg-card": "default variant background",
      "border-border": "card border",
      "shadow-sm": "default elevation",
      "bg-muted": "flat variant background",
      "bg-card/80 + backdrop-blur": "glass variant",
      "text-card-foreground": "card text",
    },
    whenToUse: [
      "Grouping related fields, stats, or content blocks",
      "Dashboard KPI panels (flat or default)",
      "Floating sidebars over images (glass)",
      "Onboarding / promotional blocks (brand)",
    ],
    antiPatterns: [
      "❌ <div className='bg-white border rounded-lg p-4 shadow'> — raw div, no dark mode, no animation",
      "❌ Nesting Card inside Card more than 1 level deep",
    ],
    example: `<Card variant="default">
  <CardHeader>
    <CardTitle>Order Summary</CardTitle>
    <CardDescription>Review before submitting</CardDescription>
    <CardAction>
      <Button size="icon" variant="ghost"><MoreHorizontal /></Button>
    </CardAction>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter className="justify-end gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>`,
  },

  input: {
    name: "Input",
    import: `import { Input } from '@strata-ds/components';`,
    description: "Styled text input with label, prefix/suffix slots, and auto password toggle.",
    props: ["label", "prefix", "suffix", "type", "placeholder", "disabled", "aria-invalid"],
    tokens: {
      "border-input": "default border",
      "bg-background": "input background",
      "text-foreground": "input text",
      "text-muted-foreground": "placeholder",
      "ring-ring/50": "focus ring",
      "border-destructive + ring-destructive/20": "aria-invalid state",
    },
    whenToUse: [
      "Single-line text: names, emails, URLs, numbers",
      "Search boxes with prefix icon",
      "Password fields (auto-adds toggle)",
      "Always wrap with <Field> in real forms for a11y",
    ],
    antiPatterns: [
      "❌ <input className='border rounded px-3 py-2'> — raw input without DS tokens",
      "❌ Not setting aria-invalid when validation fails",
    ],
    example: `// Search input
<Input
  placeholder="Search..."
  prefix={<MagnifyingGlassIcon className="size-4" />}
  type="search"
/>

// Email with validation
<Input
  label="Email"
  type="email"
  aria-invalid={hasError}
  placeholder="you@example.com"
/>

// Password (auto-adds show/hide toggle)
<Input label="Password" type="password" />`,
  },

  alert: {
    name: "Alert",
    import: `import { Alert, AlertTitle, AlertDescription } from '@strata-ds/components';`,
    description: "Inline feedback message for success, error, warning, info, or brand.",
    variants: {
      variant: ["default", "destructive", "success", "warning", "info", "brand"],
    },
    tokens: {
      "border-border + bg-white/bg-zinc-900": "default variant",
      "bg-red-50/red-900/10 + border-red-500": "destructive",
      "bg-emerald-50/emerald-900/10 + border-emerald-500": "success",
      "bg-amber-50/amber-900/10 + border-amber-500": "warning",
      "bg-blue-50/blue-900/10 + border-blue-500": "info",
    },
    whenToUse: [
      "success — operation completed, saved, upload done",
      "destructive — error occurred, permission denied",
      "warning — pending action needed, quota approaching",
      "info — neutral context, feature tip",
      "brand — onboarding callouts, promotional content",
    ],
    antiPatterns: [
      "❌ Using Alert for transient toasts — use Sonner instead",
      "❌ Using Alert inside a modal — use AlertDialog",
      "❌ Stacking more than 2 alerts vertically",
      "❌ Coloring via className hex instead of variant prop",
    ],
    example: `// With icon
<Alert variant="success">
  <CheckCircle className="size-4" />
  <AlertTitle>Saved</AlertTitle>
  <AlertDescription>Your changes were saved successfully.</AlertDescription>
</Alert>

// Without icon
<Alert variant="warning">
  <AlertTitle>Storage almost full</AlertTitle>
  <AlertDescription>90% of 5GB used.</AlertDescription>
</Alert>`,
  },

  dialog: {
    name: "Dialog",
    import: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@strata-ds/components';`,
    description: "Modal overlay built on Radix UI Dialog.",
    tokens: {
      "bg-background": "dialog panel bg",
      "border-border": "dialog border",
      "bg-black/50": "backdrop overlay",
      "shadow-lg": "dialog elevation",
      "text-muted-foreground": "description text",
    },
    whenToUse: [
      "Multi-field forms that don't warrant a page (create order, invite user)",
      "Detailed view of a record",
      "Simple confirmations with 2 actions",
    ],
    antiPatterns: [
      "❌ Destructive confirmations — use AlertDialog for better a11y",
      "❌ Long forms > 10 fields — use Sheet instead",
      "❌ Notifications — use Sonner (toast)",
    ],
    example: `<Dialog>
  <DialogTrigger asChild>
    <Button>Create Order</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>New Order</DialogTitle>
      <DialogDescription>Fill in order details below.</DialogDescription>
    </DialogHeader>
    {/* form fields */}
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Create</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  },

  avatar: {
    name: "Avatar",
    import: `import { Avatar, AvatarImage, AvatarFallback } from '@strata-ds/components';`,
    description: "User profile image with auto fallback to initials.",
    variants: {
      size: ["xs (24px)", "sm (32px)", "md (40px)", "lg (48px)", "xl (64px)", "2xl (96px)"],
      fallbackVariant: ["default", "muted", "gradient"],
    },
    tokens: {
      "bg-primary": "default fallback bg",
      "text-primary-foreground": "default fallback text",
      "bg-muted": "muted fallback bg",
      "rounded-full": "circular crop",
    },
    example: `// With image + fallback
<Avatar size="md">
  <AvatarImage src={user.avatarUrl} alt={user.name} />
  <AvatarFallback>{user.initials}</AvatarFallback>
</Avatar>

// Fallback variants
<Avatar size="lg">
  <AvatarFallback variant="gradient">AB</AvatarFallback>
</Avatar>`,
  },

  table: {
    name: "Table",
    import: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@strata-ds/components';`,
    description: "Composable data table with striped and dense variants.",
    props: ["striped", "dense"],
    tokens: {
      "border-border": "table/cell borders",
      "bg-muted/50": "striped alternate rows",
      "hover:bg-muted/50": "row hover",
      "text-muted-foreground": "header text",
    },
    whenToUse: [
      "Structured records with 3+ columns (invoices, orders, users)",
      "striped — dense numeric data for readability",
      "dense — sidebar panels, dashboards with limited space",
    ],
    antiPatterns: [
      "❌ For 1-2 column data — use DescriptionList",
      "❌ Raw <table> without DS components — no dark mode",
    ],
    example: `<Table striped>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {rows.map(row => (
      <TableRow key={row.id}>
        <TableCell className="font-medium">{row.id}</TableCell>
        <TableCell>
          <Badge className="bg-status-success/10 text-status-success">{row.status}</Badge>
        </TableCell>
        <TableCell className="text-right">{row.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
  },

  "navbar-floating": {
    name: "NavbarFloating",
    import: `import { NavbarFloating } from '@strata-ds/components';`,
    description: "Floating pill navbar fixed at top of viewport. P1-native, not in P2.",
    tokens: {
      "bg-card/80": "translucent glass bg",
      "backdrop-blur-xl": "blur effect",
      "border-border": "pill border",
      "rounded-full": "pill shape",
      "shadow-lg": "floating elevation",
      "z-50": "stacking order",
    },
    whenToUse: [
      "Landing pages and demo screens",
      "Floating navigation over hero images",
      "demo-2026-strata-v2 header pattern",
    ],
    antiPatterns: [
      "❌ Production app shells — use Layout (Navbar + PageHeader)",
      "❌ When you need full nav with tabs/dropdowns — use Navbar",
    ],
    example: `<NavbarFloating>
  <Button variant="ghost" size="icon" asChild>
    <Link to="/"><Home className="size-4" /></Link>
  </Button>
  <span className="font-semibold text-foreground px-2">Strata DS</span>
  <div className="flex-1" />
  <Button variant="default" shape="pill" size="sm">Get Started</Button>
</NavbarFloating>`,
  },
};

const TOKENS = {
  status: {
    description: "Semantic status tokens — use these instead of raw Tailwind colors for all status states.",
    tokens: [
      { name: "--color-status-success", tailwind: "bg-status-success / text-status-success", light: "#16a34a", dark: "#4ade80", use: "Active, completed, match, success" },
      { name: "--color-status-warning", tailwind: "bg-status-warning / text-status-warning", light: "#b45309", dark: "#fbbf24", use: "Warning, pending, review" },
      { name: "--color-status-error", tailwind: "bg-status-error / text-status-error", light: "#C11736", dark: "#ED5F74", use: "Error, critical, failure, rejected" },
      { name: "--color-status-info", tailwind: "bg-status-info / text-status-info", light: "#2563eb", dark: "#60a5fa", use: "Info, neutral, in-progress" },
      { name: "--color-status-ai", tailwind: "bg-status-ai / text-status-ai", light: "#8b5cf6", dark: "#a78bfa", use: "AI-generated, automation, Claude" },
      { name: "--color-status-success-foreground", tailwind: "text-status-success-foreground", light: "#ffffff", dark: "#000000", use: "Text on status-success background" },
    ],
  },
  semantic: {
    description: "Core semantic tokens used throughout the design system.",
    tokens: [
      { name: "--color-background", tailwind: "bg-background", use: "Page and app background" },
      { name: "--color-foreground", tailwind: "text-foreground", use: "Primary text color" },
      { name: "--color-card", tailwind: "bg-card", use: "Card surface background" },
      { name: "--color-card-foreground", tailwind: "text-card-foreground", use: "Card text color" },
      { name: "--color-primary", tailwind: "bg-primary", use: "Primary brand color (fallback backgrounds)" },
      { name: "--color-primary-foreground", tailwind: "text-primary-foreground", use: "Text on primary bg" },
      { name: "--color-secondary", tailwind: "bg-secondary", use: "Secondary surfaces" },
      { name: "--color-muted", tailwind: "bg-muted", use: "Muted/subtle backgrounds" },
      { name: "--color-muted-foreground", tailwind: "text-muted-foreground", use: "Secondary text, placeholders" },
      { name: "--color-accent", tailwind: "bg-accent", use: "Hover/active accent surfaces" },
      { name: "--color-border", tailwind: "border-border", use: "All borders" },
      { name: "--color-input", tailwind: "border-input", use: "Form input borders" },
      { name: "--color-ring", tailwind: "ring-ring", use: "Focus rings" },
      { name: "--color-destructive", tailwind: "bg-destructive", use: "Destructive/danger states" },
    ],
  },
  brand: {
    description: "Brand color palette tokens.",
    tokens: [
      { name: "--color-brand-50", tailwind: "bg-brand-50", light: "#f7fee7", use: "Brand tinted backgrounds" },
      { name: "--color-brand-100", tailwind: "bg-brand-100", light: "#ecfccb", use: "" },
      { name: "--color-brand-200", tailwind: "bg-brand-200", light: "#d9f99d", use: "Soft brand fill" },
      { name: "--color-brand-300", tailwind: "bg-brand-300", light: "#E6F993", use: "Button fill (default/brand)" },
      { name: "--color-brand-400", tailwind: "bg-brand-400", light: "#a3e635", use: "" },
      { name: "--color-brand-500", tailwind: "bg-brand-500", light: "#84cc16", use: "Dark mode button fill, link color" },
      { name: "--color-brand-600", tailwind: "bg-brand-600", light: "#65a30d", use: "Button hover" },
      { name: "--color-brand-700", tailwind: "bg-brand-700", light: "#4d7c0f", use: "Dark hover" },
    ],
  },
  primitives: {
    description: "Primitive palette tokens — prefer semantic tokens when available.",
    categories: ["zinc", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "white", "black"],
    note: "Access via --color-{palette}-{shade} e.g. --color-zinc-900. Use semantic tokens when a semantic equivalent exists.",
  },
};

const RULES = {
  "color-tokens": `
# Rule: Always Use Color Tokens

TIER 1+2: Hex hardcoded values BLOCK the commit.
TIER 3: Hex requires // @ds-ignore: reason comment.

## What to use instead

| Situation | Wrong | Correct |
|-----------|-------|---------|
| Primary text | text-[#02060C] | text-foreground |
| Background | bg-[#F8F9FA] | bg-background |
| Brand button bg | bg-[#E6F993] | bg-brand-300 (or bg-primary) |
| Success state | bg-[#098400] or bg-green-600 | bg-status-success |
| Warning state | bg-[#D97706] or bg-amber-600 | bg-status-warning |
| Error state | bg-[#DC2626] or bg-red-600 | bg-status-error |
| Info state | bg-[#2563EB] or bg-blue-600 | bg-status-info |
| AI state | bg-[#8B5CF6] or bg-violet-600 | bg-status-ai |
| Border | border-[#E2E8F0] | border-border |
`,
  buttons: `
# Rule: Button Variants

Use only official Button variants from CVA. Don't create custom button styles.

## Variant selection guide
- ONE primary (default/brand) per screen section
- Pair primary with outline or ghost for secondary actions
- Never use default for destructive actions — use destructive
- Ghost for icon-only controls in toolbars
- Link for inline text navigation

## Shape
- Use shape="pill" only for brand CTAs and hero sections
- Default (rounded-md) for all other contexts

## DO NOT
- Create a <button> with custom classes
- Override variant colors with className
- Use bg-[...] overrides on Button
`,
  containers: `
# Rule: Container Components

Always use DS container components. Never create raw div containers with manual tokens.

## Container hierarchy
1. Layout — full app shell (Navbar + PageHeader + main)
2. Card (variant: default/flat/glass/brand) — content grouping
3. SectionCard — secondary groupings within a page
4. NavbarFloating — floating pill header for landing pages

## Card variant selection
- default — most cards, dashboard panels
- flat — subtle grouping, no visual weight
- glass — over images, hero sections
- brand — onboarding, promotional

## DO NOT
- <div className="bg-white border rounded-lg p-4 shadow"> — use Card
- Nesting Card > 2 levels deep
- Adding backdrop-blur manually — use glass variant
`,
  "dark-mode": `
# Rule: Dark Mode Always

All components must work in both light and dark. Test with the Storybook toolbar toggle.

## CSS pattern for custom elements
\`\`\`css
.my-element {
  /* Light */
  background: var(--color-background);
  color: var(--color-foreground);
  border-color: var(--color-border);
}
/* DO NOT add @media (prefers-color-scheme: dark) — use class .dark instead */
\`\`\`

## Tailwind pattern
\`\`\`tsx
// ✅ Tokens handle dark mode automatically
<div className="bg-card text-card-foreground border border-border">

// ❌ Only light mode — will break in dark
<div className="bg-white text-gray-900 border-gray-200">
\`\`\`
`,
  "governance-tiers": `
# Governance Tiers

Declare tier in project's CLAUDE.md:
## DS Governance Tier: 1

## Tier 1 — Production Strict (smart-comparator, strata-ds)
- Hex hardcoded → BLOCKS commit
- Custom variants (no CVA) → BLOCKS commit
- Dark mode → REQUIRED
- Pre-commit hook → ACTIVE

## Tier 2 — Demo Flexible (front-react-strata-storybook)
- Hex hardcoded → BLOCKS commit
- Custom variants → WARNING (allowed with comment)
- Tailwind palette tokens → ALLOWED
- Dark mode → REQUIRED

## Tier 3 — Simulation Free (demo-2026-strata-v2)
- Hex with @ds-ignore → ALLOWED
- Custom variants → ALLOWED
- Dark mode → RECOMMENDED
`,
};

const ANTI_PATTERNS = [
  {
    category: "Color Tokens",
    severity: "Tier 1+2 Blocker",
    pattern: "Hex hardcoded colors",
    examples: ["bg-[#E6F993]", "text-[#02060C]", "border-[#D0D4D8]", "style={{ color: '#8b5cf6' }}"],
    fix: "Use DS tokens: bg-brand-300, text-foreground, border-border, bg-status-ai",
  },
  {
    category: "Status Colors",
    severity: "Tier 1+2 Blocker",
    pattern: "Raw Tailwind semantic colors for status states",
    examples: ["bg-green-600 (for success)", "bg-red-600 (for error)", "bg-amber-600 (for warning)", "bg-blue-600 (for info)"],
    fix: "Use status tokens: bg-status-success, bg-status-error, bg-status-warning, bg-status-info, bg-status-ai",
  },
  {
    category: "Buttons",
    severity: "Tier 1 Blocker",
    pattern: "Raw <button> elements or custom button styles",
    examples: ["<button className='px-4 py-2 bg-brand rounded'>", "<div onClick={...} className='cursor-pointer'>"],
    fix: "Use <Button variant='...'> from DS",
  },
  {
    category: "Containers",
    severity: "Tier 1+2 Warning",
    pattern: "Raw div replacing Card",
    examples: ["<div className='bg-white border rounded-lg p-4 shadow'>", "<div className='bg-card rounded-xl p-6'>"],
    fix: "Use <Card> or <SectionCard> from DS",
  },
  {
    category: "Dark Mode",
    severity: "Tier 1+2 Blocker",
    pattern: "Light-only color values",
    examples: ["bg-white", "text-gray-900", "border-gray-200", "@media (prefers-color-scheme: dark)"],
    fix: "Use semantic tokens that auto-adapt: bg-background, text-foreground, border-border",
  },
  {
    category: "Alerts",
    severity: "Best Practice",
    pattern: "Wrong component for feedback type",
    examples: ["<Alert> for transient notifications", "<Alert> inside modals"],
    fix: "Transient → Sonner. Inside modals → AlertDialog. Inline → Alert",
  },
  {
    category: "Alerts",
    severity: "Tier 1+2 Warning",
    pattern: "Custom colored alert with className",
    examples: ["<Alert className='bg-[#16a34a] border-[#15803d]'>"],
    fix: "Use <Alert variant='success'> — CVA handles the colors",
  },
];

// ─── SEARCH HELPER ────────────────────────────────────────────────────────────

function searchGovernance(query) {
  const q = query.toLowerCase();
  const results = [];

  // Search components
  for (const [key, comp] of Object.entries(COMPONENTS)) {
    const text = JSON.stringify(comp).toLowerCase();
    if (text.includes(q)) {
      results.push({
        type: "component",
        name: comp.name,
        relevance: (text.match(new RegExp(q, "g")) || []).length,
        snippet: comp.description,
      });
    }
  }

  // Search rules
  for (const [key, rule] of Object.entries(RULES)) {
    if (rule.toLowerCase().includes(q) || key.includes(q)) {
      results.push({
        type: "rule",
        name: key,
        relevance: (rule.toLowerCase().match(new RegExp(q, "g")) || []).length,
        snippet: rule.split("\n")[1]?.trim() || key,
      });
    }
  }

  // Search anti-patterns
  for (const ap of ANTI_PATTERNS) {
    const text = JSON.stringify(ap).toLowerCase();
    if (text.includes(q)) {
      results.push({
        type: "anti-pattern",
        name: ap.pattern,
        relevance: (text.match(new RegExp(q, "g")) || []).length,
        snippet: ap.fix,
      });
    }
  }

  // Search token categories
  for (const [cat, data] of Object.entries(TOKENS)) {
    const text = JSON.stringify(data).toLowerCase();
    if (text.includes(q)) {
      results.push({
        type: "token",
        name: `tokens:${cat}`,
        relevance: (text.match(new RegExp(q, "g")) || []).length,
        snippet: data.description || cat,
      });
    }
  }

  return results.sort((a, b) => b.relevance - a.relevance).slice(0, 10);
}

// ─── ERROR REPORTING ──────────────────────────────────────────────────────────

function reportError(payload) {
  const proposalsPath = join(DS_ROOT, "REFINEMENT_PROPOSALS.md");
  const timestamp = new Date().toISOString();
  const entry = `
## ${timestamp}

**Component:** ${payload.component || "unknown"}
**Error:** ${payload.error}
**Project:** ${payload.project || "unknown"}
**Tier:** ${payload.tier || "unknown"}
${payload.context ? `**Context:** ${payload.context}` : ""}
${payload.suggestedFix ? `**Suggested Fix:** ${payload.suggestedFix}` : ""}

---
`;

  let existing = "";
  if (existsSync(proposalsPath)) {
    existing = readFileSync(proposalsPath, "utf-8");
  } else {
    existing = "# Refinement Proposals\n\nErrors reported via MCP `report_error` tool.\n\n";
  }

  writeFileSync(proposalsPath, existing + entry, "utf-8");
  return { success: true, file: "REFINEMENT_PROPOSALS.md", timestamp };
}

// ─── MCP SERVER ───────────────────────────────────────────────────────────────

const server = new Server(
  { name: "strata-ds", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "get_overview",
      description: "Full overview of the Strata Design System: stack, token architecture, component catalogue, and governance tiers.",
      inputSchema: { type: "object", properties: {}, required: [] },
    },
    {
      name: "get_component",
      description: "Detailed spec for a DS component: import, props/variants, token table, when-to-use, anti-patterns, and code example.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "Component name (e.g. Button, Badge, Card, Input, Alert, Dialog, Avatar, Table, NavbarFloating)" },
        },
        required: ["name"],
      },
    },
    {
      name: "get_tokens",
      description: "CSS token reference by category. Categories: status, semantic, brand, primitives",
      inputSchema: {
        type: "object",
        properties: {
          category: { type: "string", enum: ["status", "semantic", "brand", "primitives"], description: "Token category" },
        },
        required: ["category"],
      },
    },
    {
      name: "get_rules",
      description: "Governance rules by category. Categories: color-tokens, buttons, containers, dark-mode, governance-tiers",
      inputSchema: {
        type: "object",
        properties: {
          category: { type: "string", enum: ["color-tokens", "buttons", "containers", "dark-mode", "governance-tiers"], description: "Rule category" },
        },
        required: ["category"],
      },
    },
    {
      name: "get_anti_patterns",
      description: "All documented anti-patterns to avoid — indexed by severity and category.",
      inputSchema: { type: "object", properties: {}, required: [] },
    },
    {
      name: "search_governance",
      description: "Full-text search across components, rules, tokens, and anti-patterns.",
      inputSchema: {
        type: "object",
        properties: {
          q: { type: "string", description: "Search query (e.g. 'green color status', 'button destructive', 'card glass')" },
        },
        required: ["q"],
      },
    },
    {
      name: "report_error",
      description: "Report a DS violation or missing variant for the learning system. Appends to REFINEMENT_PROPOSALS.md.",
      inputSchema: {
        type: "object",
        properties: {
          component: { type: "string", description: "Component name where the error occurred" },
          error: { type: "string", description: "Description of the error or violation" },
          project: { type: "string", description: "Project name (optional)" },
          tier: { type: "string", description: "Governance tier of the project (optional)" },
          context: { type: "string", description: "Additional context about the violation (optional)" },
          suggestedFix: { type: "string", description: "Suggested fix or new variant needed (optional)" },
        },
        required: ["error"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "get_overview":
      return { content: [{ type: "text", text: OVERVIEW }] };

    case "get_component": {
      const key = args.name.toLowerCase().replace(/\s+/g, "-");
      const comp = COMPONENTS[key];
      if (!comp) {
        const available = Object.keys(COMPONENTS).join(", ");
        return {
          content: [{
            type: "text",
            text: `Component "${args.name}" not found in MCP data.\n\nAvailable: ${available}\n\nFor other components, check Storybook or the src/components/ directory.`,
          }],
        };
      }

      const sections = [
        `# ${comp.name}`,
        `\n${comp.description}`,
        `\n## Import\n\`\`\`tsx\n${comp.import}\n\`\`\``,
      ];

      if (comp.variants) {
        sections.push("\n## Variants (CVA)\n" + Object.entries(comp.variants)
          .map(([k, v]) => `- **${k}:** ${Array.isArray(v) ? v.join(", ") : v}`)
          .join("\n"));
      }

      if (comp.props) {
        sections.push("\n## Props\n" + comp.props.map(p => `- \`${p}\``).join("\n"));
      }

      if (comp.tokens) {
        sections.push("\n## Token Reference\n" + Object.entries(comp.tokens)
          .map(([token, use]) => `| \`${token}\` | ${use} |`)
          .join("\n"));
      }

      if (comp.whenToUse) {
        sections.push("\n## When to Use\n" + comp.whenToUse.map(w => `- ${w}`).join("\n"));
      }

      if (comp.antiPatterns) {
        sections.push("\n## Anti-Patterns\n" + comp.antiPatterns.join("\n"));
      }

      if (comp.example) {
        sections.push(`\n## Code Example\n\`\`\`tsx\n${comp.example}\n\`\`\``);
      }

      return { content: [{ type: "text", text: sections.join("\n") }] };
    }

    case "get_tokens": {
      const cat = args.category;
      const data = TOKENS[cat];
      if (!data) {
        return { content: [{ type: "text", text: `Unknown token category: ${cat}. Available: ${Object.keys(TOKENS).join(", ")}` }] };
      }

      let text = `# Tokens: ${cat}\n\n${data.description}\n\n`;
      if (data.tokens) {
        text += "| Token | Tailwind | Light | Dark | Use |\n|-------|---------|-------|------|-----|\n";
        text += data.tokens.map(t =>
          `| \`${t.name}\` | \`${t.tailwind}\` | ${t.light || "—"} | ${t.dark || "—"} | ${t.use} |`
        ).join("\n");
      }
      if (data.categories) {
        text += `\nPalettes available: ${data.categories.join(", ")}\n\n${data.note}`;
      }

      return { content: [{ type: "text", text }] };
    }

    case "get_rules": {
      const cat = args.category;
      const rule = RULES[cat];
      if (!rule) {
        return { content: [{ type: "text", text: `Unknown rule category: ${cat}. Available: ${Object.keys(RULES).join(", ")}` }] };
      }
      return { content: [{ type: "text", text: rule }] };
    }

    case "get_anti_patterns": {
      const text = ANTI_PATTERNS.map(ap => [
        `## ${ap.category} — ${ap.severity}`,
        `**Pattern:** ${ap.pattern}`,
        `**Examples:** ${ap.examples.join(", ")}`,
        `**Fix:** ${ap.fix}`,
      ].join("\n")).join("\n\n---\n\n");
      return { content: [{ type: "text", text: `# Anti-Patterns\n\n${text}` }] };
    }

    case "search_governance": {
      const results = searchGovernance(args.q);
      if (results.length === 0) {
        return { content: [{ type: "text", text: `No results for "${args.q}". Try: get_overview, get_anti_patterns, or get_rules("color-tokens")` }] };
      }
      const text = results.map(r =>
        `**[${r.type}] ${r.name}** (relevance: ${r.relevance})\n${r.snippet}`
      ).join("\n\n");
      return { content: [{ type: "text", text: `# Search: "${args.q}"\n\n${text}` }] };
    }

    case "report_error": {
      const result = reportError(args);
      return {
        content: [{
          type: "text",
          text: `Error reported successfully.\nFile: ${result.file}\nTimestamp: ${result.timestamp}\n\nThank you for contributing to DS improvement!`,
        }],
      };
    }

    default:
      return { content: [{ type: "text", text: `Unknown tool: ${name}` }] };
  }
});

// ─── START ────────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
