import { useEffect, useState } from "react";
import { Moon, Sun, Sparkles } from "lucide-react";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "./components/ui/sidebar";
import { ErrorBoundary } from "./components/ErrorBoundary";

import { OverviewView } from "./views/OverviewView";
import { MCPView } from "./views/MCPView";
import { DeveloperGuideView } from "./views/DeveloperGuideView";
import { ComponentsMapView } from "./views/ComponentsMapView";
import { ComponentDetailView } from "./views/ComponentDetailView";
import { FoundationsView } from "./views/FoundationsView";
import { BrandingView } from "./views/BrandingView";
import { TransparencyView } from "./views/TransparencyView";
import { GridContainersView } from "./views/GridContainersView";
import { GovernanceView } from "./components/GovernanceView";
import { RecipeDetailView } from "./views/RecipeDetailView";

type ViewId = string;

interface NavItem {
  id: ViewId;
  label: string;
  isNew?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const NAV: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { id: "overview", label: "Overview" },
      { id: "developer-guide", label: "Developer Guide", isNew: true },
      { id: "mcp", label: "MCP Connection", isNew: true },
      { id: "governance", label: "Governance", isNew: true },
    ],
  },
  {
    title: "Foundations",
    items: [
      { id: "branding", label: "Branding & Assets" },
      { id: "colors", label: "Colors" },
      { id: "typography", label: "Typography" },
      { id: "spacing", label: "Spacing" },
      { id: "grid-containers", label: "Grid & Containers", isNew: true },
      { id: "borders", label: "Borders & Radius" },
      { id: "shadows", label: "Elevation & Shadows" },
      { id: "transparency", label: "Transparency & Glass" },
    ],
  },
  {
    title: "Strata Components",
    items: [
      // Data List family
      { id: "strata-top-bar", label: "StrataTopBar", isNew: true },
      { id: "data-list-toolbar", label: "DataListToolbar", isNew: true },
      { id: "view-toggle", label: "ViewToggle", isNew: true },
      { id: "filter-pills", label: "FilterPills", isNew: true },
      { id: "data-list-table", label: "DataListTable", isNew: true },
      { id: "data-list-card", label: "DataListCard", isNew: true },
      { id: "data-list-card-grid", label: "DataListCardGrid", isNew: true },
      { id: "bulk-action-bar", label: "BulkActionBar", isNew: true },
      // Funnel / pipeline
      { id: "funnel-stepper", label: "FunnelStepper", isNew: true },
      { id: "kanban-funnel", label: "KanbanFunnel", isNew: true },
      // Upload + line items
      { id: "file-upload-modal", label: "FileUploadModal", isNew: true },
      { id: "editable-line-table", label: "EditableLineTable", isNew: true },
      // Document review family
      { id: "document-review-modal", label: "DocumentReviewModal", isNew: true },
      { id: "field-section", label: "FieldSection", isNew: true },
      { id: "field-value-row", label: "FieldValueRow", isNew: true },
      { id: "confidence-indicator", label: "ConfidenceIndicator", isNew: true },
      { id: "split-pane-review-modal", label: "SplitPaneReviewModal", isNew: true },
      // OCR / comparison
      { id: "discrepancy-row", label: "DiscrepancyRow", isNew: true },
      { id: "discrepancy-comparison-block", label: "DiscrepancyComparisonBlock", isNew: true },
    ],
  },
  {
    title: "Application UI",
    items: [
      { id: "action-center", label: "ActionCenter" },
      { id: "activity-timeline", label: "ActivityTimeline" },
      { id: "aspect-ratio", label: "AspectRatio" },
      { id: "avatar", label: "Avatar" },
      { id: "badge", label: "Badge" },
      { id: "banner", label: "Banner" },
      { id: "breadcrumb", label: "Breadcrumb" },
      { id: "button", label: "Button" },
      { id: "calendar", label: "Calendar" },
      { id: "card", label: "Card" },
      { id: "carousel", label: "Carousel" },
      { id: "chart", label: "Chart" },
      { id: "command", label: "Command" },
      { id: "company-greeting", label: "CompanyGreeting" },
      { id: "create-order-dialog", label: "CreateOrderDialog" },
      { id: "divider", label: "Divider" },
      { id: "experiences-navbar", label: "ExperiencesNavbar" },
      { id: "filter-panel", label: "FilterPanel" },
      { id: "heading", label: "Heading" },
      { id: "hover-card", label: "HoverCard" },
      { id: "info-banner", label: "InfoBanner" },
      { id: "kpi-card", label: "KpiCard" },
      { id: "label", label: "Label" },
      { id: "layout", label: "Layout" },
      { id: "link", label: "Link" },
      { id: "list-toolbar", label: "ListToolbar" },
      { id: "menubar", label: "Menubar" },
      { id: "navbar", label: "Navbar" },
      { id: "navigation-menu", label: "NavigationMenu" },
      { id: "page-header", label: "PageHeader" },
      { id: "page-layout", label: "PageLayout" },
      { id: "pagination", label: "Pagination" },
      { id: "priority-badge", label: "PriorityBadge" },
      { id: "progress", label: "Progress" },
      { id: "section-card", label: "SectionCard" },
      { id: "section-toolbar", label: "SectionToolbar" },
      { id: "separator", label: "Separator" },
      { id: "skeleton", label: "Skeleton" },
      { id: "stage-progress", label: "StageProgress" },
      { id: "status-badge", label: "StatusBadge" },
      { id: "table", label: "Table" },
      { id: "table-empty-state", label: "TableEmptyState" },
      { id: "tabs", label: "Tabs" },
      { id: "text", label: "Text" },
      { id: "toggle", label: "Toggle" },
      { id: "toggle-group", label: "ToggleGroup" },
      { id: "tracking", label: "Tracking" },
    ],
  },
  {
    title: "Forms",
    items: [
      { id: "checkbox", label: "Checkbox" },
      { id: "combobox", label: "Combobox" },
      { id: "date-picker", label: "DatePicker" },
      { id: "field", label: "Field" },
      { id: "fieldset", label: "Fieldset" },
      { id: "form", label: "Form" },
      { id: "input", label: "Input" },
      { id: "input-otp", label: "InputOTP" },
      { id: "listbox", label: "Listbox", isNew: true },
      { id: "radio-group", label: "RadioGroup" },
      { id: "searchable-multi-select", label: "SearchableMultiSelect" },
      { id: "select", label: "Select" },
      { id: "slider", label: "Slider" },
      { id: "switch", label: "Switch" },
      { id: "textarea", label: "Textarea" },
    ],
  },
  {
    title: "Overlays",
    items: [
      { id: "alert", label: "Alert" },
      { id: "alert-dialog", label: "AlertDialog" },
      { id: "confirm-dialog", label: "ConfirmDialog" },
      { id: "context-menu", label: "ContextMenu" },
      { id: "dialog", label: "Dialog" },
      { id: "drawer", label: "Drawer" },
      { id: "dropdown-menu", label: "DropdownMenu" },
      { id: "feedback-toast", label: "FeedbackToast" },
      { id: "popover", label: "Popover" },
      { id: "resizable", label: "Resizable" },
      { id: "scroll-area", label: "ScrollArea" },
      { id: "sheet", label: "Sheet" },
      { id: "sidebar", label: "Sidebar" },
      { id: "slide-over", label: "SlideOver" },
      { id: "sonner", label: "Sonner" },
      { id: "tooltip", label: "Tooltip" },
    ],
  },
  {
    title: "Data Visualization",
    items: [
      { id: "accordion", label: "Accordion" },
      { id: "description-list", label: "DescriptionList" },
      { id: "disclosure", label: "Disclosure" },
      { id: "empty-state", label: "EmptyState" },
      { id: "stacked-list", label: "StackedList" },
    ],
  },
  {
    title: "Recipes",
    items: [
      { id: "recipe-sif-generator", label: "SIF Generator", isNew: true },
      { id: "recipe-transactions-list", label: "Transactions List", isNew: true },
      { id: "recipe-ack-reconciliation", label: "ACK Reconciliation", isNew: true },
      { id: "recipe-dashboard-kpi", label: "Dashboard KPI Grid", isNew: true },
    ],
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<ViewId>("overview");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (typeof detail === "string") setCurrentView(detail);
    };
    window.addEventListener("strata:navigate", handler);
    return () => window.removeEventListener("strata:navigate", handler);
  }, []);

  const FOUNDATIONS_IDS = new Set(["colors", "typography", "spacing", "borders", "shadows"]);

  const renderView = () => {
    switch (currentView) {
      case "overview":
        return <OverviewView />;
      case "developer-guide":
        return <DeveloperGuideView />;
      case "mcp":
        return <MCPView />;
      case "governance":
        return <GovernanceView />;
      case "branding":
        return <BrandingView />;
      case "transparency":
        return <TransparencyView />;
      case "grid-containers":
        return <GridContainersView />;
      default:
        if (FOUNDATIONS_IDS.has(currentView)) {
          return <FoundationsView section={currentView} />;
        }
        if (currentView.startsWith("recipe-")) {
          return <RecipeDetailView id={currentView.replace("recipe-", "")} />;
        }
        // Legacy alias: deep-links to "examples" land on the first recipe
        if (currentView === "examples") {
          return <RecipeDetailView id="sif-generator" />;
        }
        // sidebar-component is the navbar nav id but the MCP component is just "sidebar"
        const componentId = currentView === "sidebar-component" ? "sidebar" : currentView;
        return <ComponentDetailView id={componentId} />;
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar className="w-[280px] fixed h-full z-50">
        <SidebarHeader className="px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-foreground rounded-md flex items-center justify-center">
              <span className="text-background font-bold text-lg">ST</span>
            </div>
            <div>
              <div className="font-bold text-foreground">Strata DS</div>
              <div className="text-xs text-muted-foreground">v1.0 · 112 components</div>
            </div>
          </div>
        </SidebarHeader>

        <SidebarBody>
          {NAV.map((section) => (
            <div key={section.title} className="mb-6 last:mb-0">
              <SidebarLabel>{section.title}</SidebarLabel>
              <SidebarSection>
                {section.items.map((item) => (
                  <SidebarItem
                    key={item.id}
                    current={currentView === item.id}
                    onClick={() => setCurrentView(item.id)}
                    badge={item.isNew ? <NewBadge /> : undefined}
                  >
                    {item.label}
                  </SidebarItem>
                ))}
              </SidebarSection>
            </div>
          ))}
        </SidebarBody>

        <SidebarFooter className="px-3 py-4">
          <button
            onClick={() => setDarkMode((d) => !d)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-card border border-border rounded-md text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            {darkMode ? (
              <>
                <Sun className="w-4 h-4" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" />
                Dark Mode
              </>
            )}
          </button>
        </SidebarFooter>
      </Sidebar>

      <main className="flex-1 ml-[280px] overflow-y-auto">
        <div className="max-w-[1280px] mx-auto p-12">
          <ErrorBoundary resetKey={currentView}>{renderView()}</ErrorBoundary>
        </div>
      </main>
    </div>
  );
}

function NewBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-status-ai bg-status-ai/10 px-1.5 py-0.5 rounded">
      <Sparkles className="w-2.5 h-2.5" /> New
    </span>
  );
}

