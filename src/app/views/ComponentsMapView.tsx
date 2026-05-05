import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/utils/cn";

import { Button } from "@/components/application-ui/button";
import { Badge } from "@/components/application-ui/badge";
import { Avatar, AvatarFallback } from "@/components/application-ui/avatar";
import { Input } from "@/components/forms/input";
import { Skeleton } from "@/components/application-ui/skeleton";
import { Switch } from "@/components/forms/switch";
import { Checkbox } from "@/components/forms/checkbox";
import { Progress } from "@/components/application-ui/progress";
import { Separator } from "@/components/application-ui/separator";

interface ComponentEntry {
  id: string;
  name: string;
  category: "application-ui" | "forms" | "overlays" | "data-visualization";
  preview?: React.ReactNode;
}

const COMPONENTS: ComponentEntry[] = [
  // Application UI
  { id: "button", name: "Button", category: "application-ui", preview: <Button size="sm">Button</Button> },
  { id: "badge", name: "Badge", category: "application-ui", preview: <Badge>Badge</Badge> },
  { id: "avatar", name: "Avatar", category: "application-ui", preview: <Avatar size="sm"><AvatarFallback>DZ</AvatarFallback></Avatar> },
  {
    id: "card",
    name: "Card",
    category: "application-ui",
    preview: (
      <div className="w-full bg-card border border-border rounded-md p-2 text-xs text-muted-foreground">
        Card surface
      </div>
    ),
  },
  { id: "skeleton", name: "Skeleton", category: "application-ui", preview: <Skeleton className="w-24 h-4" /> },
  { id: "progress", name: "Progress", category: "application-ui", preview: <div className="w-full"><Progress value={60} /></div> },
  { id: "separator", name: "Separator", category: "application-ui", preview: <div className="w-full"><Separator /></div> },
  { id: "activity-timeline", name: "ActivityTimeline", category: "application-ui" },
  { id: "aspect-ratio", name: "AspectRatio", category: "application-ui" },
  { id: "banner", name: "Banner", category: "application-ui" },
  { id: "breadcrumb", name: "Breadcrumb", category: "application-ui" },
  { id: "calendar", name: "Calendar", category: "application-ui" },
  { id: "carousel", name: "Carousel", category: "application-ui" },
  { id: "chart", name: "Chart", category: "application-ui" },
  { id: "collapsible", name: "Collapsible", category: "application-ui" },
  { id: "command", name: "Command", category: "application-ui" },
  { id: "company-greeting", name: "CompanyGreeting", category: "application-ui" },
  { id: "copy-button", name: "CopyButton", category: "application-ui" },
  { id: "divider", name: "Divider", category: "application-ui" },
  { id: "experiences-navbar", name: "ExperiencesNavbar", category: "application-ui" },
  { id: "feature-section", name: "FeatureSection", category: "application-ui" },
  { id: "filter-panel", name: "FilterPanel", category: "application-ui" },
  { id: "heading", name: "Heading", category: "application-ui" },
  { id: "hero-section", name: "HeroSection", category: "application-ui" },
  { id: "hover-card", name: "HoverCard", category: "application-ui" },
  { id: "info-banner", name: "InfoBanner", category: "application-ui" },
  { id: "kpi-card", name: "KpiCard", category: "application-ui" },
  { id: "label", name: "Label", category: "application-ui" },
  { id: "layout", name: "Layout", category: "application-ui" },
  { id: "link", name: "Link", category: "application-ui" },
  { id: "list-toolbar", name: "ListToolbar", category: "application-ui" },
  { id: "menubar", name: "Menubar", category: "application-ui" },
  { id: "navbar", name: "Navbar", category: "application-ui" },
  { id: "navbar-floating", name: "NavbarFloating", category: "application-ui" },
  { id: "navigation-menu", name: "NavigationMenu", category: "application-ui" },
  { id: "page-header", name: "PageHeader", category: "application-ui" },
  { id: "page-layout", name: "PageLayout", category: "application-ui" },
  { id: "pagination", name: "Pagination", category: "application-ui" },
  { id: "pricing", name: "Pricing", category: "application-ui" },
  { id: "priority-badge", name: "PriorityBadge", category: "application-ui" },
  { id: "product-list", name: "ProductList", category: "application-ui" },
  { id: "product-overview", name: "ProductOverview", category: "application-ui" },
  { id: "section-card", name: "SectionCard", category: "application-ui" },
  { id: "section-toolbar", name: "SectionToolbar", category: "application-ui" },
  { id: "shared-catalog-card", name: "SharedCatalogCard", category: "application-ui" },
  { id: "shared-inventory-card", name: "SharedInventoryCard", category: "application-ui" },
  { id: "shared-order-card", name: "SharedOrderCard", category: "application-ui" },
  { id: "shopping-cart", name: "ShoppingCart", category: "application-ui" },
  { id: "stage-progress", name: "StageProgress", category: "application-ui" },
  { id: "status-badge", name: "StatusBadge", category: "application-ui" },
  { id: "table", name: "Table", category: "application-ui" },
  { id: "table-empty-state", name: "TableEmptyState", category: "application-ui" },
  { id: "tabs", name: "Tabs", category: "application-ui" },
  { id: "text", name: "Text", category: "application-ui" },
  { id: "toggle", name: "Toggle", category: "application-ui" },
  { id: "toggle-group", name: "ToggleGroup", category: "application-ui" },
  { id: "tracking", name: "Tracking", category: "application-ui" },

  // Data Visualization
  { id: "accordion", name: "Accordion", category: "data-visualization" },
  { id: "description-list", name: "DescriptionList", category: "data-visualization" },
  { id: "disclosure", name: "Disclosure", category: "data-visualization" },
  { id: "empty-state", name: "EmptyState", category: "data-visualization" },
  { id: "stacked-list", name: "StackedList", category: "data-visualization" },

  // Forms
  { id: "input", name: "Input", category: "forms", preview: <Input placeholder="Input..." /> },
  { id: "switch", name: "Switch", category: "forms", preview: <Switch /> },
  { id: "checkbox", name: "Checkbox", category: "forms", preview: <Checkbox /> },
  { id: "checkbox-2", name: "Checkbox", category: "forms" },
  { id: "combobox", name: "Combobox", category: "forms" },
  { id: "date-picker", name: "DatePicker", category: "forms" },
  { id: "field", name: "Field", category: "forms" },
  { id: "fieldset", name: "Fieldset", category: "forms" },
  { id: "form", name: "Form", category: "forms" },
  { id: "input-otp", name: "InputOTP", category: "forms" },
  { id: "listbox", name: "Listbox", category: "forms" },
  { id: "radio-group", name: "RadioGroup", category: "forms" },
  { id: "searchable-multi-select", name: "SearchableMultiSelect", category: "forms" },
  { id: "select", name: "Select", category: "forms" },
  { id: "slider", name: "Slider", category: "forms" },
  { id: "textarea", name: "Textarea", category: "forms" },

  // Overlays
  { id: "alert", name: "Alert", category: "overlays" },
  { id: "alert-dialog", name: "AlertDialog", category: "overlays" },
  { id: "confirm-dialog", name: "ConfirmDialog", category: "overlays" },
  { id: "context-menu", name: "ContextMenu", category: "overlays" },
  { id: "dialog", name: "Dialog", category: "overlays" },
  { id: "drawer", name: "Drawer", category: "overlays" },
  { id: "dropdown-menu", name: "DropdownMenu", category: "overlays" },
  { id: "feedback-toast", name: "FeedbackToast", category: "overlays" },
  { id: "popover", name: "Popover", category: "overlays" },
  { id: "resizable", name: "Resizable", category: "overlays" },
  { id: "scroll-area", name: "ScrollArea", category: "overlays" },
  { id: "sheet", name: "Sheet", category: "overlays" },
  { id: "sidebar", name: "Sidebar", category: "overlays" },
  { id: "slide-over", name: "SlideOver", category: "overlays" },
  { id: "sonner", name: "Sonner", category: "overlays" },
  { id: "tooltip", name: "Tooltip", category: "overlays" },
];

const CATEGORIES: { id: ComponentEntry["category"] | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "application-ui", label: "Application UI" },
  { id: "forms", label: "Forms" },
  { id: "overlays", label: "Overlays" },
  { id: "data-visualization", label: "Data Visualization" },
];

export function ComponentsMapView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ComponentEntry["category"] | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COMPONENTS.filter((c) => {
      if (category !== "all" && c.category !== category) return false;
      if (!q) return true;
      return c.name.toLowerCase().includes(q) || c.id.includes(q);
    });
  }, [query, category]);

  const counts = useMemo(() => {
    const map = { "application-ui": 0, forms: 0, overlays: 0, "data-visualization": 0, all: 0 };
    COMPONENTS.forEach((c) => {
      map[c.category]++;
      map.all++;
    });
    return map;
  }, []);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-semibold text-status-ai uppercase tracking-wider mb-2">
          Visual catalogue
        </p>
        <h1 className="text-4xl font-bold text-foreground mb-3">Components</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          All {COMPONENTS.length} components in the Strata Design System. Click any card to
          jump to its detailed documentation.
        </p>
      </header>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search components..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 text-sm border border-input bg-background text-foreground placeholder:text-muted-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          />
        </div>
        <div className="flex gap-1 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-colors border",
                category === cat.id
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {cat.label} <span className="text-xs opacity-70">{counts[cat.id]}</span>
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          No components match "{query}".
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((c) => (
            <ComponentCard key={c.id + c.category} entry={c} />
          ))}
        </div>
      )}
    </div>
  );
}

function ComponentCard({ entry }: { entry: ComponentEntry }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("strata:navigate", { detail: entry.id }))}
      className="group text-left bg-card border border-border rounded-lg p-4 hover:border-foreground/30 hover:shadow-sm transition-all"
    >
      <div className="h-20 mb-3 rounded-md bg-muted/30 border border-border/50 flex items-center justify-center px-3 overflow-hidden">
        {entry.preview ?? (
          <span className="text-xs font-mono text-muted-foreground">{"<"}{entry.name}{" />"}</span>
        )}
      </div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground">
          {entry.name}
        </h3>
        <span className="text-[10px] font-mono uppercase tracking-wide text-muted-foreground shrink-0 mt-0.5">
          {shortCategory(entry.category)}
        </span>
      </div>
    </button>
  );
}

function shortCategory(category: ComponentEntry["category"]): string {
  return {
    "application-ui": "UI",
    forms: "Form",
    overlays: "Overlay",
    "data-visualization": "Data",
  }[category];
}
