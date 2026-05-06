/**
 * Component specs — imported directly by ComponentDetailView (no server needed).
 * Source: src/components/ file structure + DS governance rules.
 */

export interface ComponentSpec {
  id: string;
  name: string;
  import: string;
  category?: string;
  description: string;
  variants?: Record<string, string[] | string>;
  props?: string[];
  tokens?: Record<string, string>;
  whenToUse?: string[];
  antiPatterns?: string[];
  example?: string;
  governance?: { tier: number; notes?: string };
  code?: { react?: string; html?: string; css?: string; aiPrompt?: string } | null;
}

const COMMON_ANTI_PATTERNS = [
  "Never use hardcoded hex colors — always use CSS custom properties (bg-primary, text-foreground, etc.)",
  "Never use raw Tailwind color classes like bg-green-500, bg-red-500, text-blue-600",
  "Always provide dark mode support via semantic tokens (they adapt automatically)",
];

const componentsMap: Record<string, ComponentSpec> = {
  // ── Application UI ────────────────────────────────────────────────────────

  "action-center": {
    id: "action-center",
    name: "ActionCenter",
    import: `import { ActionCenter } from "@/components/application-ui/action-center"`,
    category: "Application UI",
    description: "A floating action hub that aggregates quick-access actions, notifications, or contextual tools into a single entry point.",
    variants: { position: ["bottom-right", "bottom-left", "top-right"] },
    tokens: {
      "bg-card": "Panel background",
      "border-border": "Panel border",
      "text-foreground": "Icon and label color",
      "shadow-lg": "Floating elevation",
    },
    whenToUse: [
      "Global quick-action tray (notifications, help, feedback)",
      "Floating context toolbar on dashboards",
    ],
    antiPatterns: [...COMMON_ANTI_PATTERNS, "Don't place inside scrollable containers — keep it fixed/sticky"],
  },

  "activity-timeline": {
    id: "activity-timeline",
    name: "ActivityTimeline",
    import: `import { ActivityTimeline } from "@/components/application-ui/activity-timeline"`,
    category: "Application UI",
    description: "Vertical timeline of chronological events with icons, timestamps, and optional descriptions.",
    variants: { size: ["sm", "md"], showConnector: ["true", "false"] },
    tokens: {
      "bg-card": "Event card background",
      "border-border": "Connector line and card border",
      "text-muted-foreground": "Timestamp and secondary text",
      "bg-status-success": "Positive event indicator",
      "bg-status-error": "Error or cancelled event",
    },
    whenToUse: [
      "Order or shipment history",
      "User activity logs",
      "Audit trails and change history",
    ],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
    example: `<ActivityTimeline events={[{ id: '1', title: 'Order placed', timestamp: '2025-01-01', status: 'success' }]} />`,
  },

  "aspect-ratio": {
    id: "aspect-ratio",
    name: "AspectRatio",
    import: `import { AspectRatio } from "@/components/application-ui/aspect-ratio"`,
    category: "Application UI",
    description: "A wrapper that maintains a fixed aspect ratio for its children (images, videos, embeds).",
    variants: { ratio: ["16/9", "4/3", "1/1", "3/2"] },
    tokens: { "bg-muted": "Fallback / placeholder background" },
    whenToUse: ["Image galleries", "Video embeds", "Map previews"],
    antiPatterns: ["Don't use fixed px heights instead of AspectRatio for responsive media"],
  },

  avatar: {
    id: "avatar",
    name: "Avatar",
    import: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/application-ui/avatar"`,
    category: "Application UI",
    description: "User profile picture with image fallback initials.",
    variants: { size: ["xs", "sm", "md", "lg", "xl"], shape: ["circle", "square"] },
    tokens: {
      "bg-muted": "Fallback background",
      "text-muted-foreground": "Fallback initials color",
    },
    whenToUse: ["User profiles", "Comment threads", "Team member lists"],
    antiPatterns: [...COMMON_ANTI_PATTERNS, "Always provide AvatarFallback — never rely solely on the image"],
    example: `<Avatar size="md">\n  <AvatarImage src="/user.jpg" />\n  <AvatarFallback>DZ</AvatarFallback>\n</Avatar>`,
  },

  badge: {
    id: "badge",
    name: "Badge",
    import: `import { Badge } from "@/components/application-ui/badge"`,
    category: "Application UI",
    description: "Compact label for statuses, counts, and categories.",
    variants: {
      variant: ["default", "secondary", "destructive", "outline", "success", "warning", "info", "ai"],
      size: ["sm", "md"],
    },
    tokens: {
      "bg-status-success/10": "Success soft fill",
      "text-status-success": "Success text",
      "bg-status-error/10": "Error soft fill",
      "text-status-error": "Error text",
      "bg-status-warning/10": "Warning soft fill",
      "bg-status-ai/10": "AI indicator fill",
    },
    whenToUse: ["Status labels (Active, Inactive, Pending)", "Count indicators", "Category tags"],
    antiPatterns: [
      "Never use bg-green-100 text-green-700 — use bg-status-success/10 text-status-success",
      "Never use bg-red-100 text-red-700 — use bg-status-error/10 text-status-error",
    ],
    example: `<Badge variant="success">Active</Badge>\n<Badge variant="warning">Pending</Badge>\n<Badge variant="destructive">Cancelled</Badge>`,
  },

  banner: {
    id: "banner",
    name: "Banner",
    import: `import { Banner } from "@/components/application-ui/banner"`,
    category: "Application UI",
    description: "Full-width notification strip for system-wide alerts, announcements, or promotions.",
    variants: { variant: ["info", "warning", "error", "success", "brand"], dismissible: ["true", "false"] },
    tokens: {
      "bg-status-info/10": "Info banner background",
      "border-status-info/20": "Info banner border",
      "bg-status-warning/10": "Warning banner background",
      "bg-primary": "Brand banner background",
    },
    whenToUse: ["System maintenance notices", "Feature announcements", "Cookie consent", "Trial expiration warnings"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  breadcrumb: {
    id: "breadcrumb",
    name: "Breadcrumb",
    import: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/application-ui/breadcrumb"`,
    category: "Application UI",
    description: "Hierarchical navigation trail showing the current location.",
    tokens: { "text-muted-foreground": "Inactive crumb color", "text-foreground": "Active/current crumb" },
    whenToUse: ["Multi-level navigation (settings, catalog hierarchies)", "Detail pages in nested routes"],
    antiPatterns: ["Don't show breadcrumbs for flat single-level navigation"],
    example: `<Breadcrumb>\n  <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>\n  <BreadcrumbSeparator />\n  <BreadcrumbItem>Settings</BreadcrumbItem>\n</Breadcrumb>`,
  },

  button: {
    id: "button",
    name: "Button",
    import: `import { Button } from "@/components/application-ui/button"`,
    category: "Application UI",
    description: "The primary interactive element. Multiple variants for different intent levels.",
    variants: {
      variant: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      size: ["sm", "md", "lg", "icon"],
    },
    tokens: {
      "bg-primary": "Primary fill (brand)",
      "text-primary-foreground": "Text on primary (always dark)",
      "bg-secondary": "Secondary fill",
      "bg-destructive": "Destructive action fill",
      "text-destructive": "Destructive ghost/outline text",
    },
    whenToUse: [
      "Primary CTA: variant='default' (brand-300/500 auto light/dark)",
      "Secondary action: variant='secondary' or variant='outline'",
      "Dangerous action: variant='destructive'",
      "Subtle inline action: variant='ghost'",
    ],
    antiPatterns: [
      "Never use raw <button className='bg-blue-500'> — use <Button>",
      "Never hardcode bg-brand-300 directly — use variant='default'",
      "Never use text-white on primary in dark mode — primary-foreground handles this",
    ],
    example: `<Button variant="default">Save changes</Button>\n<Button variant="secondary">Cancel</Button>\n<Button variant="destructive">Delete</Button>`,
  },

  calendar: {
    id: "calendar",
    name: "Calendar",
    import: `import { Calendar } from "@/components/application-ui/calendar"`,
    category: "Application UI",
    description: "Date picker calendar widget with single, range, and multi-select modes.",
    variants: { mode: ["single", "range", "multiple"] },
    tokens: {
      "bg-card": "Calendar panel background",
      "bg-primary": "Selected date fill",
      "text-primary-foreground": "Selected date text",
      "bg-accent": "Hover and range fill",
      "text-muted-foreground": "Day-of-week labels",
    },
    whenToUse: ["Date filters", "Booking flows", "Scheduling interfaces"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  card: {
    id: "card",
    name: "Card",
    import: `import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/application-ui/card"`,
    category: "Application UI",
    description: "The primary surface container. Use for grouping related content.",
    variants: { padding: ["sm", "md", "lg"], elevation: ["flat", "raised"] },
    tokens: {
      "bg-card": "Card surface",
      "text-card-foreground": "Card text",
      "border-border": "Card border",
      "rounded-lg": "Standard card radius",
      "shadow-md": "Raised card elevation",
    },
    whenToUse: ["Content grouping (stats, forms, details)", "List items", "Dashboard widgets"],
    antiPatterns: [
      "Never use bg-white or bg-zinc-900 directly — use bg-card",
      "Never nest cards more than 2 levels deep",
    ],
    example: `<Card>\n  <CardHeader><CardTitle>Revenue</CardTitle></CardHeader>\n  <CardContent>$24,000</CardContent>\n</Card>`,
    governance: { tier: 1, notes: "Most-used container — follow bg-card rule strictly" },
  },

  carousel: {
    id: "carousel",
    name: "Carousel",
    import: `import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/application-ui/carousel"`,
    category: "Application UI",
    description: "Horizontal scrolling carousel with navigation controls.",
    tokens: { "bg-card": "Slide background", "bg-background": "Arrow button background", "border-border": "Arrow border" },
    whenToUse: ["Product galleries", "Feature showcases", "Image sliders"],
    antiPatterns: ["Don't use for primary navigation — carousels hide content"],
  },

  chart: {
    id: "chart",
    name: "Chart",
    import: `import { Chart } from "@/components/application-ui/chart"`,
    category: "Application UI",
    description: "Data visualization wrapper supporting bar, line, area, and pie charts.",
    tokens: {
      "bg-chart-1": "First data series (indigo)",
      "bg-chart-2": "Second data series (green)",
      "bg-chart-3": "Third data series (red)",
      "bg-chart-4": "Fourth data series (amber)",
      "bg-chart-5": "Fifth data series (indigo-400)",
    },
    whenToUse: ["KPI dashboards", "Revenue trends", "Category breakdowns"],
    antiPatterns: [
      "Never use hardcoded colors for chart series — use chart-1 through chart-5 tokens",
      "Never use green-500 or red-500 for chart data",
    ],
  },

  collapsible: {
    id: "collapsible",
    name: "Collapsible",
    import: `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/application-ui/collapsible"`,
    category: "Application UI",
    description: "A single togglable section that shows/hides its content.",
    tokens: { "border-border": "Section divider", "text-foreground": "Trigger text" },
    whenToUse: ["Optional advanced settings", "Expandable metadata sections"],
    antiPatterns: ["Use Accordion for multiple collapsible sections — not individual Collapsibles"],
  },

  command: {
    id: "command",
    name: "Command",
    import: `import { Command, CommandInput, CommandList, CommandItem, CommandGroup } from "@/components/application-ui/command"`,
    category: "Application UI",
    description: "Searchable command palette with keyboard navigation.",
    tokens: { "bg-popover": "Palette background", "bg-accent": "Highlighted item", "border-border": "Palette border" },
    whenToUse: ["Global search", "Quick actions launcher (⌘K palette)", "Multi-item selector"],
    antiPatterns: ["Never build a custom search input when Command provides this"],
  },

  "company-greeting": {
    id: "company-greeting",
    name: "CompanyGreeting",
    import: `import { CompanyGreeting } from "@/components/application-ui/company-greeting"`,
    category: "Application UI",
    description: "Personalized greeting header with company name and user context.",
    tokens: { "text-foreground": "Greeting text", "text-muted-foreground": "Subtitle/context" },
    whenToUse: ["Dashboard welcome header", "Onboarding screens"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "copy-button": {
    id: "copy-button",
    name: "CopyButton",
    import: `import { CopyButton } from "@/components/application-ui/copy-button"`,
    category: "Application UI",
    description: "Icon button that copies text to clipboard with a confirmation state.",
    tokens: { "text-muted-foreground": "Icon default color", "text-status-success": "Copied confirmation color" },
    whenToUse: ["Code snippets", "API keys", "Share links"],
    antiPatterns: ["Don't show raw clipboard API fallbacks — CopyButton handles all cases"],
    example: `<CopyButton value="npm install @strata-ds" />`,
  },

  divider: {
    id: "divider",
    name: "Divider",
    import: `import { Divider } from "@/components/application-ui/divider"`,
    category: "Application UI",
    description: "Visual separator between content sections, with optional label.",
    variants: { orientation: ["horizontal", "vertical"], label: ["none", "text"] },
    tokens: { "border-border": "Divider line color", "text-muted-foreground": "Optional label text" },
    whenToUse: ["Section breaks in forms", "Content region separators"],
    antiPatterns: ["Never use <hr> directly — use Divider or Separator"],
  },

  "experiences-navbar": {
    id: "experiences-navbar",
    name: "ExperiencesNavbar",
    import: `import { ExperiencesNavbar } from "@/components/application-ui/experiences-navbar"`,
    category: "Application UI",
    description: "Specialized navigation bar for experience/flow-based apps with step tracking.",
    tokens: { "bg-card": "Navbar background", "text-foreground": "Nav text", "bg-primary": "Active step indicator" },
    whenToUse: ["Demo environments", "Guided experience flows"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "feature-section": {
    id: "feature-section",
    name: "FeatureSection",
    import: `import { FeatureSection } from "@/components/application-ui/feature-section"`,
    category: "Application UI",
    description: "Marketing-style section showcasing product features with icons and descriptions.",
    tokens: { "bg-background": "Section background", "text-foreground": "Title text", "text-status-ai": "Feature icon color" },
    whenToUse: ["Landing pages", "Product overviews", "Onboarding walkthroughs"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "filter-panel": {
    id: "filter-panel",
    name: "FilterPanel",
    import: `import { FilterPanel } from "@/components/application-ui/filter-panel"`,
    category: "Application UI",
    description: "Side or top panel for filtering lists and data tables with multiple criteria.",
    tokens: { "bg-card": "Panel background", "border-border": "Panel border", "bg-primary": "Active filter indicator" },
    whenToUse: ["Product catalog filtering", "Order list filtering", "Report builder"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  heading: {
    id: "heading",
    name: "Heading",
    import: `import { Heading } from "@/components/application-ui/heading"`,
    category: "Application UI",
    description: "Semantic heading component with consistent type scale.",
    variants: { level: ["h1", "h2", "h3", "h4", "h5", "h6"], size: ["xs", "sm", "md", "lg", "xl", "2xl"] },
    tokens: { "text-foreground": "Heading color", "font-bold": "Default weight" },
    whenToUse: ["Page titles", "Section headings", "Card titles"],
    antiPatterns: ["Never skip heading levels for visual sizing — use size prop instead"],
  },

  "hero-section": {
    id: "hero-section",
    name: "HeroSection",
    import: `import { HeroSection } from "@/components/application-ui/hero-section"`,
    category: "Application UI",
    description: "Full-width hero banner with headline, description, and CTA.",
    tokens: { "bg-background": "Section background", "text-foreground": "Headline", "bg-primary": "CTA button fill" },
    whenToUse: ["Landing page hero", "App welcome screen", "Feature announcement"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "hover-card": {
    id: "hover-card",
    name: "HoverCard",
    import: `import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/application-ui/hover-card"`,
    category: "Application UI",
    description: "Popover that appears on hover with preview content.",
    tokens: { "bg-popover": "Card background", "border-border": "Card border", "shadow-md": "Card elevation" },
    whenToUse: ["User profile previews on hover", "Link previews", "Tooltip-like rich content"],
    antiPatterns: ["Don't use for critical information — hover is inaccessible on touch devices"],
  },

  "info-banner": {
    id: "info-banner",
    name: "InfoBanner",
    import: `import { InfoBanner } from "@/components/application-ui/info-banner"`,
    category: "Application UI",
    description: "Inline contextual info strip with icon and optional action.",
    variants: { variant: ["info", "warning", "success", "error"] },
    tokens: {
      "bg-status-info/10": "Info background",
      "border-status-info/20": "Info border",
      "text-status-info": "Info icon",
    },
    whenToUse: ["Form section guidance", "Contextual help inline with content"],
    antiPatterns: ["Use Banner for page-wide notices — InfoBanner is for inline context"],
  },

  "kpi-card": {
    id: "kpi-card",
    name: "KpiCard",
    import: `import { KpiCard } from "@/components/application-ui/kpi-card"`,
    category: "Application UI",
    description: "Metric display card with value, label, trend indicator, and optional chart.",
    tokens: {
      "bg-card": "Card background",
      "text-foreground": "Metric value",
      "text-muted-foreground": "Label",
      "text-status-success": "Positive trend",
      "text-status-error": "Negative trend",
    },
    whenToUse: ["Dashboard KPI grids", "Sales summary rows", "Performance snapshots"],
    antiPatterns: [
      "Never use text-green-600 for positive trends — use text-status-success",
      "Never use text-red-600 for negative trends — use text-status-error",
    ],
    example: `<KpiCard label="Revenue" value="$24,000" trend="+12%" trendDirection="up" />`,
  },

  label: {
    id: "label",
    name: "Label",
    import: `import { Label } from "@/components/application-ui/label"`,
    category: "Application UI",
    description: "Accessible form label with optional required indicator.",
    tokens: { "text-foreground": "Label text", "text-status-error": "Required asterisk" },
    whenToUse: ["All form inputs must have an associated Label"],
    antiPatterns: ["Never use a plain <label> without the Label component — it lacks DS styling"],
  },

  layout: {
    id: "layout",
    name: "Layout",
    import: `import { Layout } from "@/components/application-ui/layout"`,
    category: "Application UI",
    description: "App shell layout with sidebar, header, and main content area slots.",
    tokens: { "bg-background": "Page background", "bg-card": "Sidebar background", "border-border": "Layout dividers" },
    whenToUse: ["Main app shell", "Dashboard wrapper"],
    antiPatterns: ["Never build a custom app shell — use Layout"],
  },

  link: {
    id: "link",
    name: "Link",
    import: `import { Link } from "@/components/application-ui/link"`,
    category: "Application UI",
    description: "Styled anchor element with consistent DS underline and color behavior.",
    tokens: { "text-status-ai": "Link color", "text-foreground": "Visited / neutral variant" },
    whenToUse: ["Inline text links", "Navigation links"],
    antiPatterns: ["Never use raw <a> with hardcoded text-blue-600 — use Link"],
  },

  "list-toolbar": {
    id: "list-toolbar",
    name: "ListToolbar",
    import: `import { ListToolbar } from "@/components/application-ui/list-toolbar"`,
    category: "Application UI",
    description: "Toolbar above data lists with search, filter toggles, and actions.",
    tokens: { "bg-background": "Toolbar background", "border-border": "Bottom border" },
    whenToUse: ["Above tables and lists that need search + bulk actions"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  menubar: {
    id: "menubar",
    name: "Menubar",
    import: `import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent } from "@/components/application-ui/menubar"`,
    category: "Application UI",
    description: "Desktop application-style horizontal menu bar with nested submenus.",
    tokens: { "bg-background": "Bar background", "bg-popover": "Dropdown background", "border-border": "Borders" },
    whenToUse: ["Desktop-like app interfaces with complex menu structures"],
    antiPatterns: ["Don't use Menubar for simple top navigation — use Navbar"],
  },

  navbar: {
    id: "navbar",
    name: "Navbar",
    import: `import { Navbar } from "@/components/application-ui/navbar"`,
    category: "Application UI",
    description: "Standard full-width top navigation bar with logo, links, and actions.",
    tokens: {
      "bg-card": "Navbar background",
      "border-border": "Bottom border",
      "text-foreground": "Nav items",
      "bg-primary": "Active indicator",
    },
    whenToUse: ["Primary site/app navigation", "Simple single-level navigation"],
    antiPatterns: ["Never hardcode bg-zinc-900 for dark navbars — use bg-card which adapts"],
    example: `<Navbar logo={<Logo />} links={[{ href: '/dashboard', label: 'Dashboard' }]} />`,
  },

  "navbar-floating": {
    id: "navbar-floating",
    name: "NavbarFloating",
    import: `import { NavbarFloating } from "@/components/application-ui/navbar-floating"`,
    category: "Application UI",
    description: "Pill-shaped floating navbar with backdrop blur, elevated above page content.",
    tokens: {
      "bg-card/80": "Glassmorphism background",
      "backdrop-blur-xl": "Blur effect",
      "shadow-lg": "Floating elevation",
      "rounded-full": "Pill shape",
    },
    whenToUse: ["Marketing/demo pages", "Hero sections requiring a floating nav"],
    governance: { tier: 1, notes: "Signature Strata pattern — use for demo and marketing contexts" },
    antiPatterns: ["Never use for app dashboards — use Navbar or sidebar instead"],
    example: `<NavbarFloating logo={<Logo />} tabs={tabs} actions={<ThemeToggle />} />`,
  },

  "navigation-menu": {
    id: "navigation-menu",
    name: "NavigationMenu",
    import: `import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/application-ui/navigation-menu"`,
    category: "Application UI",
    description: "Accessible navigation menu with keyboard support and dropdown mega-menus.",
    tokens: { "bg-popover": "Dropdown background", "border-border": "Borders", "bg-accent": "Hover state" },
    whenToUse: ["Complex multi-level navigation with rich dropdowns"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "page-header": {
    id: "page-header",
    name: "PageHeader",
    import: `import { PageHeader } from "@/components/application-ui/page-header"`,
    category: "Application UI",
    description: "Page-level header with title, optional subtitle, breadcrumb, and action buttons.",
    tokens: { "text-foreground": "Title", "text-muted-foreground": "Subtitle", "border-border": "Bottom divider" },
    whenToUse: ["Top of every main page or section"],
    antiPatterns: ["Never build a custom page title + breadcrumb combo — use PageHeader"],
    example: `<PageHeader title="Orders" subtitle="Manage your orders" actions={<Button>New order</Button>} />`,
  },

  "page-layout": {
    id: "page-layout",
    name: "PageLayout",
    import: `import { PageLayout } from "@/components/application-ui/page-layout"`,
    category: "Application UI",
    description: "Inner page layout with consistent max-width, padding, and content regions.",
    tokens: { "bg-background": "Page background", "max-w-7xl": "Standard content width" },
    whenToUse: ["Wrapping every page's content for consistent margins"],
    antiPatterns: ["Never use arbitrary padding — PageLayout enforces the layout grid"],
  },

  pagination: {
    id: "pagination",
    name: "Pagination",
    import: `import { Pagination } from "@/components/application-ui/pagination"`,
    category: "Application UI",
    description: "Page navigation controls for large data sets.",
    tokens: { "bg-primary": "Active page fill", "text-primary-foreground": "Active page text", "border-border": "Page button border" },
    whenToUse: ["Below data tables and lists with server-side pagination"],
    antiPatterns: ["Never build custom prev/next buttons — use Pagination"],
  },

  pricing: {
    id: "pricing",
    name: "Pricing",
    import: `import { Pricing } from "@/components/application-ui/pricing"`,
    category: "Application UI",
    description: "Pricing tier cards with feature lists, CTAs, and highlighted recommended plan.",
    tokens: { "bg-card": "Tier card", "bg-primary": "CTA button", "border-status-ai": "Recommended tier highlight" },
    whenToUse: ["SaaS pricing pages", "Plan selection screens"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "priority-badge": {
    id: "priority-badge",
    name: "PriorityBadge",
    import: `import { PriorityBadge } from "@/components/application-ui/priority-badge"`,
    category: "Application UI",
    description: "Badge variant specifically for priority levels (Critical, High, Medium, Low).",
    tokens: {
      "bg-status-error/10": "Critical",
      "bg-status-warning/10": "High",
      "bg-status-info/10": "Medium",
      "bg-muted": "Low",
    },
    whenToUse: ["Order priority", "Support ticket priority", "Task priority"],
    antiPatterns: ["Never use raw red/yellow/green for priorities — use status tokens"],
    example: `<PriorityBadge priority="critical" />\n<PriorityBadge priority="high" />\n<PriorityBadge priority="medium" />`,
  },

  "product-list": {
    id: "product-list",
    name: "ProductList",
    import: `import { ProductList } from "@/components/application-ui/product-list"`,
    category: "Application UI",
    description: "Catalog grid or list for product/item browsing with cards.",
    tokens: { "bg-card": "Product card", "border-border": "Card border", "text-foreground": "Product name" },
    whenToUse: ["Product catalogs", "Inventory browsers", "Quote item selectors"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "product-overview": {
    id: "product-overview",
    name: "ProductOverview",
    import: `import { ProductOverview } from "@/components/application-ui/product-overview"`,
    category: "Application UI",
    description: "Detail view for a single product with image, specs, pricing, and actions.",
    tokens: { "bg-card": "Detail surface", "bg-primary": "CTA button", "text-muted-foreground": "Spec labels" },
    whenToUse: ["Product detail pages", "Quote item detail drawer"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  progress: {
    id: "progress",
    name: "Progress",
    import: `import { Progress } from "@/components/application-ui/progress"`,
    category: "Application UI",
    description: "Linear progress bar for loading states and completion tracking.",
    variants: { variant: ["default", "success", "warning", "error"] },
    tokens: { "bg-muted": "Track background", "bg-primary": "Default fill", "bg-status-success": "Success fill" },
    whenToUse: ["File upload progress", "Form completion", "Step indicators"],
    antiPatterns: ["Never use bg-green-500 for progress — use variant='success'"],
    example: `<Progress value={75} />\n<Progress value={100} variant="success" />`,
  },

  "section-card": {
    id: "section-card",
    name: "SectionCard",
    import: `import { SectionCard } from "@/components/application-ui/section-card"`,
    category: "Application UI",
    description: "Card variant for page sections with title, optional actions, and padded content.",
    tokens: { "bg-card": "Section background", "border-border": "Section border" },
    whenToUse: ["Settings page sections", "Form groupings"],
    antiPatterns: ["Don't use Card directly for sections that need a title header — use SectionCard"],
  },

  "section-toolbar": {
    id: "section-toolbar",
    name: "SectionToolbar",
    import: `import { SectionToolbar } from "@/components/application-ui/section-toolbar"`,
    category: "Application UI",
    description: "Toolbar inside a section with title and action buttons.",
    tokens: { "border-border": "Bottom divider", "text-foreground": "Title" },
    whenToUse: ["Inside panels or cards that need their own title + actions row"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "shared-catalog-card": {
    id: "shared-catalog-card",
    name: "SharedCatalogCard",
    import: `import { SharedCatalogCard } from "@/components/application-ui/shared-catalog-card"`,
    category: "Application UI",
    description: "Shared catalog item card for cross-project product browsing.",
    tokens: { "bg-card": "Card surface", "border-border": "Card border" },
    whenToUse: ["Shared product catalogs across dealer/manufacturer flows"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "shared-inventory-card": {
    id: "shared-inventory-card",
    name: "SharedInventoryCard",
    import: `import { SharedInventoryCard } from "@/components/application-ui/shared-inventory-card"`,
    category: "Application UI",
    description: "Inventory item card for shared stock views.",
    tokens: { "bg-card": "Card surface", "text-status-success": "In stock indicator", "text-status-error": "Out of stock" },
    whenToUse: ["Inventory management views"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "shared-order-card": {
    id: "shared-order-card",
    name: "SharedOrderCard",
    import: `import { SharedOrderCard } from "@/components/application-ui/shared-order-card"`,
    category: "Application UI",
    description: "Order summary card for order lists and dashboards.",
    tokens: { "bg-card": "Card surface", "text-status-warning": "Pending status", "text-status-success": "Completed status" },
    whenToUse: ["Order list items", "Order tracking views"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "shopping-cart": {
    id: "shopping-cart",
    name: "ShoppingCart",
    import: `import { ShoppingCart } from "@/components/application-ui/shopping-cart"`,
    category: "Application UI",
    description: "Cart panel with item list, quantities, totals, and checkout action.",
    tokens: { "bg-card": "Cart panel", "bg-primary": "Checkout CTA", "border-border": "Item dividers" },
    whenToUse: ["Quote builder", "Order configuration cart"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  separator: {
    id: "separator",
    name: "Separator",
    import: `import { Separator } from "@/components/application-ui/separator"`,
    category: "Application UI",
    description: "Thin visual separator line (horizontal or vertical).",
    variants: { orientation: ["horizontal", "vertical"] },
    tokens: { "bg-border": "Separator color" },
    whenToUse: ["Between grouped items", "Sidebar section dividers"],
    antiPatterns: ["Never use border-t border-border on a div instead of Separator"],
  },

  skeleton: {
    id: "skeleton",
    name: "Skeleton",
    import: `import { Skeleton } from "@/components/application-ui/skeleton"`,
    category: "Application UI",
    description: "Animated placeholder for loading states.",
    tokens: { "bg-muted": "Skeleton base color" },
    whenToUse: ["While fetching data for cards, text, or images"],
    antiPatterns: ["Never use a spinner for layout-level loading — use Skeleton"],
    example: `<Skeleton className="w-48 h-4" />\n<Skeleton className="w-full h-32 rounded-lg" />`,
  },

  "stage-progress": {
    id: "stage-progress",
    name: "StageProgress",
    import: `import { StageProgress } from "@/components/application-ui/stage-progress"`,
    category: "Application UI",
    description: "Multi-step progress indicator for workflows and onboarding.",
    tokens: { "bg-primary": "Completed step", "bg-muted": "Upcoming step", "bg-status-ai": "Active step" },
    whenToUse: ["Checkout flows", "Onboarding wizards", "Multi-step forms"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
    example: `<StageProgress steps={['Details', 'Review', 'Confirm']} currentStep={1} />`,
  },

  "status-badge": {
    id: "status-badge",
    name: "StatusBadge",
    import: `import { StatusBadge } from "@/components/application-ui/status-badge"`,
    category: "Application UI",
    description: "Dot + label status indicator for entity states.",
    variants: { status: ["active", "inactive", "pending", "error", "warning", "success", "ai"] },
    tokens: {
      "bg-status-success": "Active/success dot",
      "bg-status-error": "Error/inactive dot",
      "bg-status-warning": "Pending/warning dot",
      "bg-status-ai": "AI-generated indicator",
    },
    whenToUse: ["Row status in tables", "Entity state labels"],
    antiPatterns: [
      "Never use inline green/red dots with hardcoded bg-green-500 — use StatusBadge",
    ],
    example: `<StatusBadge status="active" />\n<StatusBadge status="pending" />\n<StatusBadge status="error" />`,
  },

  table: {
    id: "table",
    name: "Table",
    import: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/application-ui/table"`,
    category: "Application UI",
    description: "Data table with consistent styling for headers, rows, and cells.",
    tokens: {
      "bg-muted/50": "Header background",
      "border-border": "Table and cell borders",
      "hover:bg-muted/50": "Row hover state",
      "text-foreground": "Cell text",
      "text-muted-foreground": "Header text",
    },
    whenToUse: ["Data grids", "Report tables", "Order lists"],
    antiPatterns: [
      "Never use raw <table> — use Table component",
      "Never skip hover states on rows — always include hover:bg-muted/50",
    ],
    governance: { tier: 1, notes: "High-use component — follow token rules strictly" },
  },

  "table-empty-state": {
    id: "table-empty-state",
    name: "TableEmptyState",
    import: `import { TableEmptyState } from "@/components/application-ui/table-empty-state"`,
    category: "Application UI",
    description: "Empty state placeholder shown inside a table when there are no results.",
    tokens: { "text-muted-foreground": "Empty message", "bg-muted/30": "Illustration background" },
    whenToUse: ["Inside Table when data is empty or filtered to zero results"],
    antiPatterns: ["Never show a blank table — always include TableEmptyState"],
  },

  tabs: {
    id: "tabs",
    name: "Tabs",
    import: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/application-ui/tabs"`,
    category: "Application UI",
    description: "Tabbed panel for organizing related content into named sections.",
    variants: { variant: ["default", "pills", "underline"] },
    tokens: {
      "bg-muted": "Tab list background",
      "bg-background": "Active tab background",
      "text-foreground": "Active tab text",
      "text-muted-foreground": "Inactive tab text",
    },
    whenToUse: ["Settings categories", "Dashboard view switching", "Detail panel sections"],
    antiPatterns: ["Never build custom tab-like UIs with state — use Tabs"],
    example: `<Tabs defaultValue="overview">\n  <TabsList>\n    <TabsTrigger value="overview">Overview</TabsTrigger>\n    <TabsTrigger value="details">Details</TabsTrigger>\n  </TabsList>\n  <TabsContent value="overview">…</TabsContent>\n</Tabs>`,
  },

  text: {
    id: "text",
    name: "Text",
    import: `import { Text } from "@/components/application-ui/text"`,
    category: "Application UI",
    description: "Semantic text component with consistent DS type scale.",
    variants: { as: ["p", "span", "div"], size: ["xs", "sm", "base", "lg"], color: ["default", "muted", "success", "error"] },
    tokens: { "text-foreground": "Default", "text-muted-foreground": "Secondary/muted", "text-status-success": "Positive", "text-status-error": "Error" },
    whenToUse: ["All body text in DS components"],
    antiPatterns: ["Never use raw text-gray-500 or text-zinc-400 — use text-muted-foreground"],
  },

  toggle: {
    id: "toggle",
    name: "Toggle",
    import: `import { Toggle } from "@/components/application-ui/toggle"`,
    category: "Application UI",
    description: "Single-button toggle for binary on/off states.",
    tokens: { "bg-accent": "Active toggle background", "bg-transparent": "Inactive background" },
    whenToUse: ["Formatting toolbars (bold, italic)", "View mode switchers"],
    antiPatterns: ["Use Switch for form-level boolean settings — Toggle is for UI state"],
  },

  "toggle-group": {
    id: "toggle-group",
    name: "ToggleGroup",
    import: `import { ToggleGroup, ToggleGroupItem } from "@/components/application-ui/toggle-group"`,
    category: "Application UI",
    description: "Group of toggles for exclusive or multi-select options.",
    variants: { type: ["single", "multiple"] },
    tokens: { "bg-accent": "Active item", "bg-transparent": "Inactive item" },
    whenToUse: ["View type selectors (Grid/List)", "Alignment pickers"],
    antiPatterns: ["Don't use RadioGroup for visual button-style options — use ToggleGroup"],
  },

  tracking: {
    id: "tracking",
    name: "Tracking",
    import: `import { Tracking } from "@/components/application-ui/tracking"`,
    category: "Application UI",
    description: "Shipment/order tracking timeline with status stages and delivery estimate.",
    tokens: { "bg-status-success": "Completed stage", "bg-primary": "Current stage", "bg-muted": "Upcoming stage" },
    whenToUse: ["Order tracking pages", "Delivery status views"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  // ── Data Visualization ────────────────────────────────────────────────────

  accordion: {
    id: "accordion",
    name: "Accordion",
    import: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/data-visualization/accordion"`,
    category: "Data Visualization",
    description: "Stacked collapsible panels for FAQs and grouped content.",
    variants: { type: ["single", "multiple"] },
    tokens: { "border-border": "Item divider", "text-foreground": "Trigger text", "text-muted-foreground": "Content text" },
    whenToUse: ["FAQ sections", "Settings categories", "Grouped spec fields"],
    antiPatterns: ["Don't use multiple Collapsibles for grouped sections — use Accordion"],
    example: `<Accordion type="single" collapsible>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Question</AccordionTrigger>\n    <AccordionContent>Answer</AccordionContent>\n  </AccordionItem>\n</Accordion>`,
  },

  "description-list": {
    id: "description-list",
    name: "DescriptionList",
    import: `import { DescriptionList } from "@/components/data-visualization/description-list"`,
    category: "Data Visualization",
    description: "Key-value pair list for entity details and metadata.",
    tokens: { "text-muted-foreground": "Term/label color", "text-foreground": "Value color", "border-border": "Row divider" },
    whenToUse: ["Order details", "Contact information", "Product specs"],
    antiPatterns: ["Never build custom dl/dt/dd with raw styles — use DescriptionList"],
  },

  disclosure: {
    id: "disclosure",
    name: "Disclosure",
    import: `import { Disclosure } from "@/components/data-visualization/disclosure"`,
    category: "Data Visualization",
    description: "Show/hide section with animated transition.",
    tokens: { "text-foreground": "Trigger", "text-muted-foreground": "Content" },
    whenToUse: ["Progressive disclosure of advanced options"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "empty-state": {
    id: "empty-state",
    name: "EmptyState",
    import: `import { EmptyState } from "@/components/data-visualization/empty-state"`,
    category: "Data Visualization",
    description: "Full empty state with illustration, message, and optional CTA.",
    tokens: { "text-foreground": "Headline", "text-muted-foreground": "Description", "bg-primary": "CTA button" },
    whenToUse: ["Empty tables", "No search results", "First-time empty views"],
    antiPatterns: ["Never show blank space when data is empty — always use EmptyState"],
    example: `<EmptyState\n  title="No orders yet"\n  description="Create your first order to get started."\n  action={<Button>New order</Button>}\n/>`,
  },

  "stacked-list": {
    id: "stacked-list",
    name: "StackedList",
    import: `import { StackedList, StackedListItem } from "@/components/data-visualization/stacked-list"`,
    category: "Data Visualization",
    description: "Vertical list with consistent item spacing and dividers.",
    tokens: { "border-border": "Item dividers", "hover:bg-muted/50": "Item hover", "text-foreground": "Item title" },
    whenToUse: ["Recent activity feeds", "Notification lists", "Simple item lists"],
    antiPatterns: ["Never build a custom <ul> list — use StackedList for consistent hover + spacing"],
  },

  // ── Forms ─────────────────────────────────────────────────────────────────

  checkbox: {
    id: "checkbox",
    name: "Checkbox",
    import: `import { Checkbox } from "@/components/forms/checkbox"`,
    category: "Forms",
    description: "Controlled checkbox for boolean and multi-select form fields.",
    tokens: { "bg-primary": "Checked fill", "border-border": "Unchecked border", "text-primary-foreground": "Check icon" },
    whenToUse: ["Multi-select options", "Terms and conditions", "Bulk selection in tables"],
    antiPatterns: ["Never use raw <input type='checkbox'> — use Checkbox"],
    example: `<Checkbox id="terms" />\n<Label htmlFor="terms">I agree to the terms</Label>`,
  },

  "checkbox-2": {
    id: "checkbox-2",
    name: "Checkbox (variant)",
    import: `import { Checkbox } from "@/components/forms/checkbox"`,
    category: "Forms",
    description: "Alternative checkbox layout variant.",
    tokens: { "bg-primary": "Checked fill", "border-border": "Border" },
    whenToUse: ["Alternative checkbox layout contexts"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  combobox: {
    id: "combobox",
    name: "Combobox",
    import: `import { Combobox } from "@/components/forms/combobox"`,
    category: "Forms",
    description: "Combined text input and dropdown for searchable select with free-text fallback.",
    tokens: { "bg-popover": "Dropdown background", "bg-accent": "Highlighted option", "border-border": "Input border" },
    whenToUse: ["Searchable selects with many options", "Autocomplete inputs"],
    antiPatterns: ["Don't use Select for large option lists — use Combobox"],
  },

  "date-picker": {
    id: "date-picker",
    name: "DatePicker",
    import: `import { DatePicker } from "@/components/forms/date-picker"`,
    category: "Forms",
    description: "Form input for selecting dates via calendar popup.",
    tokens: { "bg-popover": "Calendar popup", "bg-primary": "Selected date", "border-input": "Input border" },
    whenToUse: ["Date fields in forms", "Date range selection"],
    antiPatterns: ["Never use a raw <input type='date'> — use DatePicker"],
    example: `<DatePicker value={date} onChange={setDate} placeholder="Select date" />`,
  },

  field: {
    id: "field",
    name: "Field",
    import: `import { Field } from "@/components/forms/field"`,
    category: "Forms",
    description: "Form field wrapper combining Label, Input, and error message.",
    tokens: { "text-status-error": "Error message color", "border-status-error": "Error input border" },
    whenToUse: ["All form inputs — Field handles label + input + error as a unit"],
    antiPatterns: ["Never manually assemble Label + Input + error div — use Field"],
    example: `<Field label="Email" error={errors.email}>\n  <Input type="email" {...register('email')} />\n</Field>`,
  },

  fieldset: {
    id: "fieldset",
    name: "Fieldset",
    import: `import { Fieldset } from "@/components/forms/fieldset"`,
    category: "Forms",
    description: "Groups related form fields with a legend/title.",
    tokens: { "border-border": "Fieldset border", "text-foreground": "Legend text" },
    whenToUse: ["Grouping address fields", "Related settings sections"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  form: {
    id: "form",
    name: "Form",
    import: `import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/forms/form"`,
    category: "Forms",
    description: "React Hook Form integration with DS-styled form primitives.",
    tokens: { "text-status-error": "Validation messages", "text-foreground": "Labels" },
    whenToUse: ["All complex forms requiring validation"],
    antiPatterns: ["Never build form validation manually — use Form with react-hook-form"],
  },

  input: {
    id: "input",
    name: "Input",
    import: `import { Input } from "@/components/forms/input"`,
    category: "Forms",
    description: "Text input with consistent DS styling, focus ring, and dark mode.",
    variants: { type: ["text", "email", "password", "number", "search", "url"], size: ["sm", "md"] },
    tokens: {
      "bg-input-background": "Input fill",
      "border-input": "Input border",
      "text-foreground": "Input text",
      "text-muted-foreground": "Placeholder",
      "ring-primary": "Focus ring",
    },
    whenToUse: ["All text form inputs"],
    antiPatterns: ["Never use raw <input> — use Input component"],
    example: `<Input type="email" placeholder="you@example.com" />`,
  },

  "input-otp": {
    id: "input-otp",
    name: "InputOTP",
    import: `import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/forms/input-otp"`,
    category: "Forms",
    description: "One-time password input with individual character slots.",
    tokens: { "border-input": "Slot border", "border-primary": "Active slot", "bg-input-background": "Slot fill" },
    whenToUse: ["2FA code entry", "PIN inputs", "Verification codes"],
    antiPatterns: ["Never build individual character inputs manually"],
    example: `<InputOTP maxLength={6}>\n  <InputOTPGroup>\n    <InputOTPSlot index={0} />\n    {/* ... */}\n  </InputOTPGroup>\n</InputOTP>`,
  },

  listbox: {
    id: "listbox",
    name: "Listbox",
    import: `import { Listbox } from "@/components/forms/listbox"`,
    category: "Forms",
    description: "Accessible listbox for single or multiple item selection.",
    tokens: { "bg-popover": "Dropdown background", "bg-accent": "Selected/hovered item" },
    whenToUse: ["Settings with multiple selectable options"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "radio-group": {
    id: "radio-group",
    name: "RadioGroup",
    import: `import { RadioGroup, RadioGroupItem } from "@/components/forms/radio-group"`,
    category: "Forms",
    description: "Accessible radio button group for mutually exclusive options.",
    tokens: { "bg-primary": "Selected radio fill", "border-border": "Unselected border" },
    whenToUse: ["Plan selection", "Shipping method", "Any mutually exclusive choice"],
    antiPatterns: ["Never use raw <input type='radio'> — use RadioGroup"],
    example: `<RadioGroup value={plan} onValueChange={setPlan}>\n  <RadioGroupItem value="basic" />\n  <Label>Basic</Label>\n</RadioGroup>`,
  },

  "searchable-multi-select": {
    id: "searchable-multi-select",
    name: "SearchableMultiSelect",
    import: `import { SearchableMultiSelect } from "@/components/forms/searchable-multi-select"`,
    category: "Forms",
    description: "Multi-select dropdown with search filtering.",
    tokens: { "bg-popover": "Dropdown", "bg-primary/10": "Selected tag", "border-input": "Input border" },
    whenToUse: ["Tag/category selection with many options", "Multi-product selection"],
    antiPatterns: ["Don't stack multiple Checkboxes for large option sets — use SearchableMultiSelect"],
  },

  select: {
    id: "select",
    name: "Select",
    import: `import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/forms/select"`,
    category: "Forms",
    description: "Styled dropdown select for choosing from a short list of options.",
    tokens: { "bg-input-background": "Trigger fill", "border-input": "Trigger border", "bg-popover": "Options panel" },
    whenToUse: ["Country/state selection", "Category filtering", "Short option lists (<20 items)"],
    antiPatterns: ["Use Combobox for >20 options or when search is needed"],
    example: `<Select>\n  <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>\n  <SelectContent>\n    <SelectItem value="active">Active</SelectItem>\n    <SelectItem value="inactive">Inactive</SelectItem>\n  </SelectContent>\n</Select>`,
  },

  slider: {
    id: "slider",
    name: "Slider",
    import: `import { Slider } from "@/components/forms/slider"`,
    category: "Forms",
    description: "Range slider for numeric value selection within a defined range.",
    tokens: { "bg-primary": "Track fill and thumb", "bg-muted": "Empty track" },
    whenToUse: ["Budget range filters", "Quantity selection", "Opacity controls"],
    antiPatterns: ["Never build a custom range slider — use Slider"],
    example: `<Slider min={0} max={100} step={5} value={[50]} onValueChange={setVal} />`,
  },

  switch: {
    id: "switch",
    name: "Switch",
    import: `import { Switch } from "@/components/forms/switch"`,
    category: "Forms",
    description: "Toggle switch for boolean settings.",
    tokens: { "bg-primary": "Checked fill", "bg-muted": "Unchecked fill" },
    whenToUse: ["Enable/disable settings", "Feature flags", "Notification preferences"],
    antiPatterns: ["Use Checkbox for multi-select — Switch is only for binary on/off settings"],
    example: `<Switch checked={enabled} onCheckedChange={setEnabled} />\n<Label>Enable notifications</Label>`,
  },

  textarea: {
    id: "textarea",
    name: "Textarea",
    import: `import { Textarea } from "@/components/forms/textarea"`,
    category: "Forms",
    description: "Multi-line text input with auto-resize and character count.",
    tokens: { "bg-input-background": "Fill", "border-input": "Border", "text-foreground": "Text", "text-muted-foreground": "Placeholder" },
    whenToUse: ["Comments", "Descriptions", "Message composition"],
    antiPatterns: ["Never use raw <textarea> — use Textarea"],
    example: `<Textarea placeholder="Add a note..." rows={4} />`,
  },

  // ── Overlays ──────────────────────────────────────────────────────────────

  alert: {
    id: "alert",
    name: "Alert",
    import: `import { Alert, AlertTitle, AlertDescription } from "@/components/overlays/alert"`,
    category: "Overlays",
    description: "Inline alert box for important messages with semantic intent.",
    variants: { variant: ["default", "destructive", "success", "warning", "info"] },
    tokens: {
      "bg-status-error/10": "Destructive background",
      "border-status-error/20": "Destructive border",
      "text-status-error": "Destructive icon",
      "bg-status-success/10": "Success background",
    },
    whenToUse: ["Form-level validation summaries", "Inline contextual warnings", "Success confirmations"],
    antiPatterns: [
      "Never use bg-red-50 text-red-700 for error alerts — use Alert variant='destructive'",
      "Use Banner for page-level alerts — Alert is for inline content areas",
    ],
    example: `<Alert variant="destructive">\n  <AlertTitle>Error</AlertTitle>\n  <AlertDescription>Something went wrong.</AlertDescription>\n</Alert>`,
  },

  "alert-dialog": {
    id: "alert-dialog",
    name: "AlertDialog",
    import: `import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogAction, AlertDialogCancel } from "@/components/overlays/alert-dialog"`,
    category: "Overlays",
    description: "Confirmation dialog for destructive or irreversible actions.",
    tokens: { "bg-background": "Overlay background", "bg-destructive": "Confirm button", "border-border": "Dialog border" },
    whenToUse: ["Delete confirmations", "Irreversible action warnings"],
    antiPatterns: ["Never use window.confirm() — use AlertDialog", "Don't use for non-destructive confirmations — use Dialog"],
    governance: { tier: 1, notes: "Must be used for all destructive actions" },
    example: `<AlertDialog>\n  <AlertDialogTrigger>Delete</AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogAction className="bg-destructive">Delete</AlertDialogAction>\n    <AlertDialogCancel>Cancel</AlertDialogCancel>\n  </AlertDialogContent>\n</AlertDialog>`,
  },

  "confirm-dialog": {
    id: "confirm-dialog",
    name: "ConfirmDialog",
    import: `import { ConfirmDialog } from "@/components/overlays/confirm-dialog"`,
    category: "Overlays",
    description: "Simplified confirmation dialog with preset layout for quick use.",
    tokens: { "bg-primary": "Confirm action", "bg-background": "Dialog surface" },
    whenToUse: ["Quick confirmations that don't need custom content"],
    antiPatterns: ["For destructive actions use AlertDialog — ConfirmDialog is for neutral confirmations"],
  },

  "context-menu": {
    id: "context-menu",
    name: "ContextMenu",
    import: `import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/overlays/context-menu"`,
    category: "Overlays",
    description: "Right-click context menu for item-level actions.",
    tokens: { "bg-popover": "Menu background", "bg-accent": "Hovered item", "border-border": "Menu border" },
    whenToUse: ["Table row right-click actions", "Canvas element context actions"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  dialog: {
    id: "dialog",
    name: "Dialog",
    import: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/overlays/dialog"`,
    category: "Overlays",
    description: "Modal dialog for focused tasks, forms, and details.",
    variants: { size: ["sm", "md", "lg", "xl", "full"] },
    tokens: {
      "bg-background": "Dialog overlay backdrop",
      "bg-card": "Dialog panel",
      "border-border": "Dialog border",
      "shadow-xl": "Dialog elevation",
    },
    whenToUse: ["Form modals", "Detail view overlays", "Multi-step workflows"],
    antiPatterns: [
      "Never build a custom modal with fixed positioning — use Dialog",
      "Use AlertDialog for destructive confirmations — not Dialog",
    ],
    example: `<Dialog>\n  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>\n  <DialogContent>\n    <DialogHeader><DialogTitle>Title</DialogTitle></DialogHeader>\n    {/* form content */}\n    <DialogFooter><Button>Save</Button></DialogFooter>\n  </DialogContent>\n</Dialog>`,
  },

  drawer: {
    id: "drawer",
    name: "Drawer",
    import: `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/overlays/drawer"`,
    category: "Overlays",
    description: "Slide-in panel from bottom (mobile) or side (desktop) for contextual content.",
    variants: { direction: ["bottom", "left", "right", "top"] },
    tokens: { "bg-card": "Drawer panel", "border-border": "Panel edge border" },
    whenToUse: ["Mobile-first detail views", "Filter panels on mobile"],
    antiPatterns: ["Use Sheet for side-sliding panels on desktop — Drawer is primarily mobile"],
  },

  "dropdown-menu": {
    id: "dropdown-menu",
    name: "DropdownMenu",
    import: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/overlays/dropdown-menu"`,
    category: "Overlays",
    description: "Contextual action menu triggered by a button.",
    tokens: { "bg-popover": "Menu background", "bg-accent": "Hovered item", "border-border": "Menu border" },
    whenToUse: ["'More actions' menus", "User account menus", "Row action dropdowns"],
    antiPatterns: ["Never build a custom position-absolute dropdown — use DropdownMenu"],
    example: `<DropdownMenu>\n  <DropdownMenuTrigger asChild><Button variant="ghost">Actions</Button></DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>Edit</DropdownMenuItem>\n    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`,
  },

  "feedback-toast": {
    id: "feedback-toast",
    name: "FeedbackToast",
    import: `import { FeedbackToast } from "@/components/overlays/feedback-toast"`,
    category: "Overlays",
    description: "Non-blocking toast notification for user feedback.",
    variants: { variant: ["default", "success", "error", "warning", "info"] },
    tokens: {
      "bg-card": "Toast background",
      "border-status-success/30": "Success toast border",
      "text-status-success": "Success icon",
    },
    whenToUse: ["After save/update confirmations", "Background operation results", "Non-critical warnings"],
    antiPatterns: [
      "Never use alert() for user feedback — use FeedbackToast",
      "Don't show errors only as toasts — also show inline validation",
    ],
  },

  popover: {
    id: "popover",
    name: "Popover",
    import: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/overlays/popover"`,
    category: "Overlays",
    description: "Floating panel anchored to a trigger element.",
    tokens: { "bg-popover": "Panel background", "border-border": "Panel border", "shadow-md": "Panel elevation" },
    whenToUse: ["Date pickers", "Color selectors", "Rich tooltips with interaction"],
    antiPatterns: ["Use Tooltip for read-only hover hints — Popover is for interactive content"],
  },

  resizable: {
    id: "resizable",
    name: "Resizable",
    import: `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/overlays/resizable"`,
    category: "Overlays",
    description: "Drag-to-resize panel layouts.",
    tokens: { "bg-border": "Resize handle color" },
    whenToUse: ["Split-pane views", "Adjustable sidebar widths"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  "scroll-area": {
    id: "scroll-area",
    name: "ScrollArea",
    import: `import { ScrollArea } from "@/components/overlays/scroll-area"`,
    category: "Overlays",
    description: "Custom-styled scrollable area with DS-themed scrollbar.",
    tokens: { "bg-muted": "Scrollbar track", "bg-muted-foreground": "Scrollbar thumb" },
    whenToUse: ["Fixed-height panels with overflow content", "Chat message lists"],
    antiPatterns: ["Never use overflow-y-auto with default browser scrollbars in visible panel areas"],
  },

  sheet: {
    id: "sheet",
    name: "Sheet",
    import: `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/overlays/sheet"`,
    category: "Overlays",
    description: "Side panel (right/left) that slides in over the main content.",
    variants: { side: ["right", "left", "top", "bottom"] },
    tokens: { "bg-card": "Panel background", "border-border": "Panel border" },
    whenToUse: ["Detail view panels", "Filter panels on desktop", "Settings flyouts"],
    antiPatterns: ["Don't use Dialog for side-sliding content — use Sheet"],
    example: `<Sheet>\n  <SheetTrigger asChild><Button>View details</Button></SheetTrigger>\n  <SheetContent side="right">\n    <SheetHeader><SheetTitle>Order #1234</SheetTitle></SheetHeader>\n  </SheetContent>\n</Sheet>`,
  },

  sidebar: {
    id: "sidebar",
    name: "Sidebar",
    import: `import { Sidebar, SidebarContent, SidebarNav } from "@/components/overlays/sidebar"`,
    category: "Overlays",
    description: "App navigation sidebar with grouped nav items and collapse support.",
    tokens: {
      "bg-card": "Sidebar background",
      "text-foreground": "Nav item text",
      "bg-primary": "Active nav fill",
      "border-border": "Right border",
    },
    whenToUse: ["Primary app navigation"],
    antiPatterns: ["Never hardcode sidebar background colors — use bg-card"],
    governance: { tier: 1, notes: "Core layout component" },
  },

  "slide-over": {
    id: "slide-over",
    name: "SlideOver",
    import: `import { SlideOver } from "@/components/overlays/slide-over"`,
    category: "Overlays",
    description: "Full-height side panel with backdrop for focused editing tasks.",
    tokens: { "bg-card": "Panel background", "bg-black/50": "Backdrop" },
    whenToUse: ["Edit panels that need more space than Sheet", "Complex form sidebars"],
    antiPatterns: [...COMMON_ANTI_PATTERNS],
  },

  sonner: {
    id: "sonner",
    name: "Sonner",
    import: `import { Toaster } from "@/components/overlays/sonner"`,
    category: "Overlays",
    description: "Toast notification system (Sonner). Must be mounted once at app root.",
    tokens: { "bg-card": "Toast background", "border-border": "Toast border" },
    whenToUse: ["App-level toast provider — mount once in root layout"],
    antiPatterns: ["Never mount Toaster multiple times — it's a singleton"],
    example: `// In App root:\n<Toaster />\n\n// Anywhere in app:\nimport { toast } from "sonner";\ntoast.success("Saved!");`,
  },

  tooltip: {
    id: "tooltip",
    name: "Tooltip",
    import: `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/overlays/tooltip"`,
    category: "Overlays",
    description: "Hover tooltip for supplementary read-only context.",
    tokens: { "bg-foreground": "Tooltip background", "text-background": "Tooltip text" },
    whenToUse: ["Icon button labels", "Truncated text expansion", "Helper hints"],
    antiPatterns: [
      "Never use Tooltip for critical information — it's inaccessible on touch",
      "Use Popover for interactive tooltip content",
    ],
    example: `<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger asChild><Button variant="icon"><Trash /></Button></TooltipTrigger>\n    <TooltipContent>Delete item</TooltipContent>\n  </Tooltip>\n</TooltipProvider>`,
  },
};

export function getComponentSpec(id: string): ComponentSpec | undefined {
  return componentsMap[id];
}

export default componentsMap;
