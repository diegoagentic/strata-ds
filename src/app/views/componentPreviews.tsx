import { useState } from "react";
import { toast } from "sonner";
import {
  Bell, Calendar as CalendarIcon, Check, ChevronDown, Download, Edit,
  FileText, Filter, Globe, Grid2x2, Heart, Home, Inbox, Info, List as ListIcon,
  MoreHorizontal, Package, Pencil, Plus, RotateCw, Search, Settings, Share, ShoppingBag,
  Sparkles, Star, Trash, TriangleAlert, Truck, Upload, Users,
} from "lucide-react";

import { Button } from "@/components/application-ui/button";
import { Badge } from "@/components/application-ui/badge";
import { Avatar, AvatarFallback } from "@/components/application-ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/application-ui/card";
import { Skeleton } from "@/components/application-ui/skeleton";
import { Progress } from "@/components/application-ui/progress";
import { Separator } from "@/components/application-ui/separator";
import { Divider } from "@/components/application-ui/divider";
import { Heading, Subheading } from "@/components/application-ui/heading";
import { Text } from "@/components/application-ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/application-ui/tabs";
import { StatusBadge } from "@/components/application-ui/status-badge";
import { PriorityBadge } from "@/components/application-ui/priority-badge";
import { KPICard } from "@/components/application-ui/kpi-card";
import { Toggle } from "@/components/application-ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/application-ui/toggle-group";
import { CompanyGreeting } from "@/components/application-ui/company-greeting";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/application-ui/breadcrumb";
import {
  Pagination, PaginationContent, PaginationItem, PaginationLink,
  PaginationPrevious, PaginationNext, PaginationEllipsis,
} from "@/components/application-ui/pagination";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/application-ui/table";
import { StageProgress } from "@/components/application-ui/stage-progress";
import { Banner } from "@/components/application-ui/banner";
import { InfoBanner } from "@/components/application-ui/info-banner";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/application-ui/hover-card";
import { Link } from "@/components/application-ui/link";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/application-ui/collapsible";
import { Navbar, NavbarSection, NavbarSpacer, NavbarItem } from "@/components/application-ui/navbar";
import { NavbarFloating } from "@/components/application-ui/navbar-floating";
import { PageHeader } from "@/components/application-ui/page-header";
import { Calendar } from "@/components/application-ui/calendar";
import {
  Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
} from "@/components/application-ui/carousel";
import { AspectRatio } from "@/components/application-ui/aspect-ratio";
import {
  Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem,
  CommandShortcut, CommandSeparator,
} from "@/components/application-ui/command";
import {
  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem,
  MenubarSeparator, MenubarShortcut,
} from "@/components/application-ui/menubar";
import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger,
  NavigationMenuContent, NavigationMenuLink, navigationMenuTriggerStyle,
} from "@/components/application-ui/navigation-menu";
import {
  FilterPanel, FilterPanelHeader, FilterPanelHeaderTitle, FilterPanelSection,
  FilterPanelSectionTrigger, FilterPanelSectionContent, FilterPanelOption,
} from "@/components/application-ui/filter-panel";
import {
  ListToolbar,
} from "@/components/application-ui/list-toolbar";
import {
  SectionCard, SectionCardHeader, SectionCardBody, SectionCardFooter,
} from "@/components/application-ui/section-card";
import { SectionToolbar } from "@/components/application-ui/section-toolbar";
import { OrderTracking, ProgressTracker } from "@/components/application-ui/tracking";
import {
  Hero, HeroTitle, HeroSubtitle, HeroButtons,
} from "@/components/application-ui/hero-section";
import {
  FeatureSection, FeatureGrid, Feature, FeatureIcon, FeatureTitle, FeatureDescription,
} from "@/components/application-ui/feature-section";
import {
  PricingSection, PricingCard, PricingTitle, PricingPrice, PricingCost,
  PricingFeatures, PricingFeature,
} from "@/components/application-ui/pricing";
import { CopyButton } from "@/components/application-ui/copy-button";
import { Toaster } from "@/components/overlays/sonner";
import { ProductGrid, ProductCard } from "@/components/application-ui/product-list";
import { ShoppingCart } from "@/components/application-ui/shopping-cart";
import { SharedCatalogCard } from "@/components/application-ui/shared-catalog-card";
import { SharedInventoryCard } from "@/components/application-ui/shared-inventory-card";
import { SharedOrderCard } from "@/components/application-ui/shared-order-card";

import { Input } from "@/components/forms/input";
import { Textarea } from "@/components/forms/textarea";
import { Switch } from "@/components/forms/switch";
import { Checkbox } from "@/components/forms/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/forms/radio-group";
import { Slider } from "@/components/forms/slider";
import { Label } from "@/components/application-ui/label";
import { Field, FieldLabel, FieldDescription } from "@/components/forms/field";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  SelectGroup, SelectLabel,
} from "@/components/forms/select";
import { Combobox, ComboboxOption } from "@/components/forms/combobox";
import { DatePicker } from "@/components/forms/date-picker";
import {
  InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator,
} from "@/components/forms/input-otp";
import { SearchableMultiSelect } from "@/components/forms/searchable-multi-select";
import { Fieldset, Legend, FieldGroup, Field as HFField, Label as HLabel } from "@/components/forms/fieldset";
import { Listbox, ListboxOption, ListboxLabel, ListboxDescription } from "@/components/forms/listbox";

import ActionCenter from "@/components/application-ui/action-center";
import {
  ActivityTimeline, type ActivityTimelineItem,
} from "@/components/application-ui/activity-timeline";
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig,
} from "@/components/application-ui/chart";
import { ProductLayout, ProductGallery, ProductDetails, ProductTitle, ProductPrice } from "@/components/application-ui/product-overview";

import { Alert, AlertTitle, AlertDescription } from "@/components/overlays/alert";
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogFooter,
} from "@/components/overlays/dialog";
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader,
  AlertDialogTitle, AlertDialogDescription, AlertDialogFooter,
  AlertDialogCancel, AlertDialogAction,
} from "@/components/overlays/alert-dialog";
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription,
} from "@/components/overlays/sheet";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/overlays/popover";
import {
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
} from "@/components/overlays/tooltip";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel,
} from "@/components/overlays/dropdown-menu";
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle,
  DrawerDescription, DrawerFooter, DrawerClose,
} from "@/components/overlays/drawer";
import {
  SlideOver, SlideOverHeader, SlideOverTitle, SlideOverDescription, SlideOverBody,
} from "@/components/overlays/slide-over";
import { ConfirmDialog } from "@/components/overlays/confirm-dialog";
import {
  ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem,
  ContextMenuSeparator, ContextMenuLabel,
} from "@/components/overlays/context-menu";
import { ScrollArea, ScrollBar } from "@/components/overlays/scroll-area";
import {
  ResizablePanelGroup, ResizablePanel, ResizableHandle,
} from "@/components/overlays/resizable";

import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/data-visualization/accordion";
import {
  EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateActions,
} from "@/components/data-visualization/empty-state";
import {
  DescriptionList, DescriptionTerm, DescriptionDetails,
} from "@/components/data-visualization/description-list";
import { StackedList, StackedListItem } from "@/components/data-visualization/stacked-list";

/**
 * Live preview map for components. Each entry is a React functional component
 * (not a plain function) so any hooks inside it are scoped to that preview's
 * own component instance — avoids "Rendered more hooks than during the previous
 * render" errors in the parent ComponentDetailView when navigating between
 * different components with different hook counts.
 */
export const COMPONENT_PREVIEWS: Record<string, React.FC> = {
  button: () => {
    const variants = ["default", "secondary", "outline", "ghost", "destructive", "link", "brand", "accent"] as const;
    const sizes = ["sm", "default", "lg"] as const;
    return (
      <div className="space-y-6 w-full">
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Variants × sizes</p>
          <div className="space-y-2">
            {variants.map((v) => (
              <div key={v} className="flex flex-wrap items-center gap-2">
                <code className="w-20 font-mono text-xs text-muted-foreground shrink-0">{v}</code>
                {sizes.map((s) => (
                  <Button key={s} variant={v} size={s}>{v}</Button>
                ))}
                <Button variant={v} size="icon" aria-label={`${v} icon`}>
                  <Plus className="size-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Shape pill (brand CTA)</p>
          <div className="flex flex-wrap items-center gap-2">
            <Button shape="pill" size="sm">Pill sm</Button>
            <Button shape="pill">Pill default</Button>
            <Button shape="pill" size="lg">Pill large</Button>
            <Button variant="brand" shape="pill" size="lg">Brand pill</Button>
          </div>
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Disabled</p>
          <div className="flex flex-wrap items-center gap-2">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>Disabled</Button>
            <Button variant="destructive" disabled>Disabled</Button>
          </div>
        </section>
      </div>
    );
  },
  badge: () => (
    <div className="space-y-5 w-full">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Variants × colors (sample)</p>
        <div className="space-y-2">
          {(["solid", "soft", "outline"] as const).map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-2">
              <code className="w-16 font-mono text-xs text-muted-foreground shrink-0">{variant}</code>
              {(["zinc", "blue", "green", "amber", "red", "brand"] as const).map((color) => (
                <Badge key={color} variant={variant} color={color}>{color}</Badge>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">DS status tokens (governance-compliant)</p>
        <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge className="bg-status-success/10 text-status-success border-status-success/20">Active</Badge>
      <Badge className="bg-status-warning/10 text-status-warning border-status-warning/20">Pending</Badge>
      <Badge className="bg-status-error/10 text-status-error border-status-error/20">Failed</Badge>
      <Badge className="bg-status-ai/10 text-status-ai border-status-ai/20">AI</Badge>
      <Badge className="bg-status-info/10 text-status-info border-status-info/20">In progress</Badge>
        </div>
      </section>
    </div>
  ),
  avatar: () => (
    <div className="space-y-5 w-full">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Sizes</p>
        <div className="flex items-center gap-3">
          <Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>
          <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
          <Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>
          <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
          <Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
        </div>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Fallback variants</p>
        <div className="flex items-center gap-3">
          <Avatar size="lg"><AvatarFallback variant="default">DF</AvatarFallback></Avatar>
          <Avatar size="lg"><AvatarFallback variant="muted">MT</AvatarFallback></Avatar>
          <Avatar size="lg"><AvatarFallback variant="gradient">GR</AvatarFallback></Avatar>
        </div>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Stacked group</p>
        <div className="flex -space-x-2">
          {["DZ", "JK", "AM", "LH"].map((initials, i) => (
            <Avatar key={i} size="md" className="ring-2 ring-background">
              <AvatarFallback variant={i % 2 === 0 ? "default" : "gradient"}>{initials}</AvatarFallback>
            </Avatar>
          ))}
          <span className="ring-2 ring-background flex items-center justify-center w-10 h-10 rounded-full bg-muted text-xs font-medium text-muted-foreground">+5</span>
        </div>
      </section>
    </div>
  ),
  card: () => {
    const variants = ["default", "flat", "glass", "brand"] as const;
    return (
      <div className="space-y-5 w-full">
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-3">Surface variants</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {variants.map((v) => (
              <Card key={v} variant={v}>
                <CardHeader>
                  <CardTitle className="capitalize">{v}</CardTitle>
                  <CardDescription>Short supporting copy for this surface style.</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-3">Structured layout (Header + Content + Footer)</p>
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review before submitting.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">3 items · $299.00</p>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Confirm</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    );
  },
  skeleton: () => (
    // Wrap with bg-muted/30 to give Skeleton's bg-accent enough contrast on light card
    <div className="bg-muted/30 rounded-md p-4 max-w-sm">
      <div className="flex items-center gap-3 mb-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-3 w-full mb-2" />
      <Skeleton className="h-3 w-5/6 mb-2" />
      <Skeleton className="h-3 w-4/6 mb-3" />
      <Skeleton className="h-24 w-full rounded-lg" />
    </div>
  ),
  progress: () => {
    const [value, setValue] = useState(60);
    return (
      <div className="space-y-3 max-w-sm">
        <Progress value={value} />
        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline" onClick={() => setValue((v) => Math.max(0, v - 10))}>
            -10
          </Button>
          <span className="text-sm font-mono text-muted-foreground">{value}%</span>
          <Button size="sm" variant="outline" onClick={() => setValue((v) => Math.min(100, v + 10))}>
            +10
          </Button>
        </div>
      </div>
    );
  },
  separator: () => (
    <div className="flex flex-col gap-3 max-w-xs">
      <p className="text-sm text-foreground">Above</p>
      <Separator />
      <p className="text-sm text-foreground">Below</p>
      <div className="flex items-center gap-2 h-6 mt-3">
        <span className="text-sm text-foreground">Left</span>
        <Separator orientation="vertical" />
        <span className="text-sm text-foreground">Right</span>
      </div>
    </div>
  ),
  divider: () => (
    <div className="flex flex-col gap-3 max-w-xs">
      <p className="text-sm text-foreground">Default</p>
      <Divider />
      <p className="text-sm text-foreground">Soft</p>
      <Divider soft />
    </div>
  ),
  heading: () => (
    <div className="space-y-2">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Subheading level={3}>Muted subheading</Subheading>
    </div>
  ),
  text: () => (
    <div className="space-y-2 max-w-md">
      <Text>Body text — default size and muted color, intended for paragraphs.</Text>
      <Text className="text-foreground">With override to foreground color for emphasis.</Text>
      <Text className="text-xs">Smaller text size.</Text>
    </div>
  ),
  tabs: () => (
    <div className="space-y-6 w-full max-w-md">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Variant: default (boxed)</p>
        <Tabs defaultValue="overview">
          <TabsList variant="default">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-sm text-muted-foreground py-3">Overview content.</TabsContent>
          <TabsContent value="analytics" className="text-sm text-muted-foreground py-3">Analytics content.</TabsContent>
          <TabsContent value="settings" className="text-sm text-muted-foreground py-3">Settings content.</TabsContent>
        </Tabs>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Variant: muted (pill)</p>
        <Tabs defaultValue="all">
          <TabsList variant="muted">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
        </Tabs>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Variant: link (underline)</p>
        <Tabs defaultValue="overview">
          <TabsList variant="link">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </Tabs>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Size: sm</p>
        <Tabs defaultValue="day">
          <TabsList variant="muted" size="sm">
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
        </Tabs>
      </section>
    </div>
  ),
  "status-badge": () => {
    const all = ["active", "available", "in_progress", "pending", "completed", "maintenance", "warning", "error", "archived", "in-progress", "in use", "failed"] as const;
    return (
      <div className="space-y-3 w-full">
        <p className="text-xs font-semibold uppercase text-muted-foreground">All 12 canonical status values</p>
        <div className="flex flex-wrap gap-2">
          {all.map((s) => <StatusBadge key={s} status={s as never} />)}
        </div>
      </div>
    );
  },
  "priority-badge": () => {
    const priorities = ["low", "medium", "high", "critical"] as const;
    return (
      <div className="space-y-5 w-full">
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Priorities × sizes × shapes</p>
          <div className="space-y-2">
            {(["default", "nano"] as const).map((size) => (
              <div key={size} className="flex flex-wrap items-center gap-2">
                <code className="w-16 font-mono text-xs text-muted-foreground shrink-0">{size}</code>
                {priorities.map((p) => (
                  <PriorityBadge key={p} priority={p} size={size} />
                ))}
                {priorities.map((p) => (
                  <PriorityBadge key={`${p}-pill`} priority={p} size={size} shape="pill" />
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },
  "kpi-card": () => (
    <div className="space-y-5 w-full">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Tones</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <KPICard
            label="Monthly Revenue"
            value={124500}
            valueFormat="currency"
            currency="USD"
            trend={{ direction: "up", value: "12.5%" }}
            tone="success"
            icon={<Star className="size-5" />}
          />
          <KPICard
            label="Failed Orders"
            value={23}
            trend={{ direction: "down", value: "4.2%" }}
            tone="danger"
            icon={<TriangleAlert className="size-5" />}
          />
          <KPICard
            label="Active Users"
            value={8492}
            valueFormat={(v) => `${(v / 1000).toFixed(1)}k`}
            trend={{ direction: "up", value: "8.7%" }}
            tone="brand"
            icon={<Users className="size-5" />}
          />
          <KPICard
            label="Pending Approvals"
            value={47}
            tone="warning"
            icon={<Bell className="size-5" />}
          />
        </div>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Densities</p>
        <div className="space-y-3">
          {(["compact", "default", "comfortable"] as const).map((d) => (
            <div key={d}>
              <code className="text-xs text-muted-foreground">density={d}</code>
              <KPICard
                label="Total orders"
                value={1284}
                density={d}
                trend={{ direction: "up", value: "3.1%" }}
                tone="neutral"
                icon={<Star className="size-5" />}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
  toggle: () => (
    <div className="space-y-5 w-full">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Variants × sizes</p>
        <div className="space-y-2">
          {(["default", "outline", "pill"] as const).map((v) => (
            <div key={v} className="flex items-center gap-2">
              <code className="w-16 font-mono text-xs text-muted-foreground shrink-0">{v}</code>
              {(["sm", "default", "lg"] as const).map((s) => (
                <Toggle key={s} variant={v} size={s} aria-label={`${v}-${s}`}>
                  <Bell className="size-4" />
                </Toggle>
              ))}
              <Toggle variant={v} pressed aria-label={`${v}-pressed`}>
                <Bell className="size-4" /> On
              </Toggle>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
  "toggle-group": () => {
    const [view, setView] = useState("grid");
    const [formats, setFormats] = useState<string[]>(["bold"]);
    return (
      <div className="space-y-5 w-full">
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Single-select (variant: outline)</p>
          <ToggleGroup type="single" value={view} onValueChange={(v) => v && setView(v)} variant="outline">
            <ToggleGroupItem value="grid" aria-label="Grid"><Grid2x2 className="size-4 mr-1" /> Grid</ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List"><ListIcon className="size-4 mr-1" /> List</ToggleGroupItem>
            <ToggleGroupItem value="table" aria-label="Table">Table</ToggleGroupItem>
          </ToggleGroup>
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Multi-select (variant: default)</p>
          <ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
            <ToggleGroupItem value="bold" aria-label="Bold">Bold</ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic"><em>Italic</em></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline"><u>Underline</u></ToggleGroupItem>
          </ToggleGroup>
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Pill segmented (size sm)</p>
          <ToggleGroup type="single" defaultValue="day" variant="pill" size="sm">
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
          </ToggleGroup>
        </section>
      </div>
    );
  },
  // (company-greeting expanded version is defined at the bottom)
  input: () => (
    <div className="max-w-sm space-y-5 w-full">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">States</p>
        <div className="space-y-2">
          <Input placeholder="Default state" />
          <Input placeholder="Disabled" disabled />
          <Input placeholder="Invalid" aria-invalid defaultValue="bad@input" />
        </div>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Slots</p>
        <div className="space-y-2">
          <Input placeholder="With prefix" prefix={<Search className="size-4" />} />
          <Input placeholder="With suffix" suffix={<ChevronDown className="size-4" />} />
          <Input placeholder="Both" prefix={<Search className="size-4" />} suffix={<Plus className="size-4" />} />
        </div>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Types</p>
        <div className="space-y-2">
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Password (auto toggle)" type="password" placeholder="••••••••" />
        </div>
      </section>
    </div>
  ),
  textarea: () => (
    <div className="max-w-sm space-y-5 w-full">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Default</p>
        <Textarea placeholder="Type your message here..." rows={3} />
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Disabled</p>
        <Textarea defaultValue="This textarea is disabled" disabled rows={3} />
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Larger (rows=6)</p>
        <Textarea placeholder="A taller textarea for longer content like descriptions, notes, or comments." rows={6} />
      </section>
    </div>
  ),
  switch: () => {
    const [on, setOn] = useState(false);
    return (
      <div className="flex items-center gap-3">
        <Switch id="prev-switch" checked={on} onCheckedChange={setOn} />
        <Label htmlFor="prev-switch">{on ? "Enabled" : "Disabled"}</Label>
      </div>
    );
  },
  checkbox: () => {
    const [checked, setChecked] = useState(true);
    return (
      <div className="flex items-center gap-2">
        <Checkbox id="prev-checkbox" checked={checked} onCheckedChange={(v) => setChecked(v === true)} />
        <Label htmlFor="prev-checkbox">Accept terms</Label>
      </div>
    );
  },
  "radio-group": () => {
    const [value, setValue] = useState("option-1");
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="rg-1" value="option-1" />
          <Label htmlFor="rg-1">Option 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="rg-2" value="option-2" />
          <Label htmlFor="rg-2">Option 2</Label>
        </div>
      </RadioGroup>
    );
  },
  slider: () => {
    const [single, setSingle] = useState([50]);
    const [range, setRange] = useState([20, 80]);
    return (
      <div className="max-w-sm w-full space-y-6">
        <section>
          <div className="flex justify-between mb-2">
            <p className="text-xs font-semibold uppercase text-muted-foreground">Single value</p>
            <span className="text-xs font-mono text-muted-foreground">{single[0]}</span>
          </div>
          <Slider value={single} onValueChange={setSingle} min={0} max={100} step={1} />
        </section>
        <section>
          <div className="flex justify-between mb-2">
            <p className="text-xs font-semibold uppercase text-muted-foreground">Range (2 thumbs)</p>
            <span className="text-xs font-mono text-muted-foreground">{range[0]} – {range[1]}</span>
          </div>
          <Slider value={range} onValueChange={setRange} min={0} max={100} step={1} />
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Disabled</p>
          <Slider defaultValue={[35]} min={0} max={100} step={1} disabled />
        </section>
      </div>
    );
  },
  label: () => <Label htmlFor="demo">Field label (paired with an input)</Label>,
  field: () => (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="you@example.com" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  ),

  // ── Application UI extras ───────────────────────────────────────────────────
  breadcrumb: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Team Members</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),

  pagination: () => {
    const [page, setPage] = useState(3);
    const total = 10;
    const onChange = (p: number) => (e: React.MouseEvent) => {
      e.preventDefault();
      if (p >= 1 && p <= total) setPage(p);
    };
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={onChange(page - 1)} />
          </PaginationItem>
          {[1, 2, 3, 4, 5].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink href="#" isActive={p === page} onClick={onChange(p)}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem><PaginationEllipsis /></PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" onClick={onChange(total)}>{total}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={onChange(page + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },

  table: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV-001</TableCell>
          <TableCell><StatusBadge status="completed" /></TableCell>
          <TableCell className="text-right font-mono">$249.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV-002</TableCell>
          <TableCell><StatusBadge status="pending" /></TableCell>
          <TableCell className="text-right font-mono">$120.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV-003</TableCell>
          <TableCell><StatusBadge status="failed" /></TableCell>
          <TableCell className="text-right font-mono">$48.50</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),

  "stage-progress": () => {
    const stages = ["Placed", "Processing", "Shipped", "Delivered"];
    const colors = ["brand", "success", "warning", "error"] as const;
    return (
      <div className="space-y-5 w-full">
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Colors</p>
          <div className="space-y-3">
            {colors.map((c) => (
              <div key={c}>
                <code className="text-xs text-muted-foreground mb-1 block">color={c}</code>
                <StageProgress stages={stages} currentIndex={2} color={c} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Vertical (asc)</p>
          <StageProgress
            vertical
            verticalDirection="asc"
            stages={["Application", "Interview", "Decision"]}
            currentIndex={1}
            color="brand"
          />
        </section>
      </div>
    );
  },

  banner: () => (
    <div className="space-y-2 max-w-2xl w-full">
      <p className="text-xs font-semibold uppercase text-muted-foreground">All 4 variants</p>
      <Banner variant="info" dismissible>
        New features available — <a href="#" className="underline font-semibold">see what's new</a>
      </Banner>
      <Banner variant="success">All systems operational.</Banner>
      <Banner variant="warning">Scheduled maintenance: Saturday 10pm–12am UTC.</Banner>
      <Banner variant="error" dismissible>
        Payment failed. <a href="#" className="underline font-semibold">Update billing</a>.
      </Banner>
    </div>
  ),

  "info-banner": () => (
    <div className="space-y-2 max-w-md w-full">
      <p className="text-xs font-semibold uppercase text-muted-foreground">All 5 tones</p>
      <InfoBanner
        tone="neutral"
        icon={<Info className="size-5" />}
        title="Neutral"
        description="Default tone for non-prioritized notes."
      />
      <InfoBanner
        tone="info"
        icon={<Info className="size-5" />}
        title="Info"
        description="Use ⌘K to open the command palette from any page."
      />
      <InfoBanner
        tone="success"
        icon={<Check className="size-5" />}
        title="Synced"
        description="Last sync: 2 minutes ago."
      />
      <InfoBanner
        tone="warning"
        icon={<TriangleAlert className="size-5" />}
        title="Quota approaching"
        description="You are using 90% of your storage."
      />
      <InfoBanner
        tone="danger"
        icon={<Trash className="size-5" />}
        title="Action required"
        description="Subscription expires in 3 days."
      />
    </div>
  ),

  "hover-card": () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="text-primary underline underline-offset-4">@diego</button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-3">
          <Avatar size="lg"><AvatarFallback>DZ</AvatarFallback></Avatar>
          <div>
            <p className="text-sm font-semibold text-foreground">Diego Zuluaga</p>
            <p className="text-sm text-muted-foreground">Design Systems @ Strata</p>
            <p className="text-xs text-muted-foreground mt-2">Hover to keep open.</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),

  link: () => (
    <div className="space-y-2">
      <p className="text-sm text-foreground">
        Inline link: <Link href="#" className="text-primary hover:underline underline-offset-4">read the docs</Link>.
      </p>
      <Button asChild variant="ghost" size="sm">
        <Link href="#">As a Button child (asChild)</Link>
      </Button>
    </div>
  ),

  collapsible: () => {
    const [open, setOpen] = useState(false);
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {open ? "Hide" : "Show"} advanced options
            <ChevronDown className={`size-4 ml-1 transition-transform ${open ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 space-y-2 text-sm text-muted-foreground">
          <p>Advanced setting 1</p>
          <p>Advanced setting 2</p>
          <p>Advanced setting 3</p>
        </CollapsibleContent>
      </Collapsible>
    );
  },

  // ── Forms extras ────────────────────────────────────────────────────────────
  select: () => (
    <div className="space-y-6 w-full">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Trigger sizes (sm + default)</p>
        <div className="flex items-center gap-3 flex-wrap">
          <Select>
            <SelectTrigger size="sm" className="w-[160px]">
              <SelectValue placeholder="Small" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Item A</SelectItem>
              <SelectItem value="b">Item B</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Default size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Item A</SelectItem>
              <SelectItem value="b">Item B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">States</p>
        <div className="flex items-center gap-3 flex-wrap">
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
            </SelectContent>
          </Select>
          <Select disabled>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Disabled" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[160px]" aria-invalid>
              <SelectValue placeholder="Invalid" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">With groups + labels</p>
        <Select>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Select a food" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="carrot">Carrot</SelectItem>
              <SelectItem value="broccoli">Broccoli</SelectItem>
              <SelectItem value="spinach">Spinach</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
    </div>
  ),

  // ── Overlays ────────────────────────────────────────────────────────────────
  alert: () => (
    <div className="space-y-2 max-w-md w-full">
      <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">All 6 variants</p>
      <Alert>
        <Info className="size-4" />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Neutral inline message.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <Check className="size-4" />
        <AlertTitle>Saved</AlertTitle>
        <AlertDescription>Your changes were saved successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlert className="size-4" />
        <AlertTitle>Storage almost full</AlertTitle>
        <AlertDescription>You are using 90% of your 5GB storage.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <Info className="size-4" />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>Maintenance window scheduled for Saturday.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <Trash className="size-4" />
        <AlertTitle>Upload failed</AlertTitle>
        <AlertDescription>The file exceeded the 10MB limit.</AlertDescription>
      </Alert>
      <Alert variant="brand">
        <Sparkles className="size-4" />
        <AlertTitle>New feature</AlertTitle>
        <AlertDescription>Try the redesigned dashboard — beta available now.</AlertDescription>
      </Alert>
    </div>
  ),

  dialog: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogDescription>Multi-field forms or detailed views go here.</DialogDescription>
        </DialogHeader>
        <p className="text-sm text-foreground">Content body…</p>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),

  "alert-dialog": () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your account and remove all data. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Yes, delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),

  sheet: () => (
    <div className="space-y-6 w-full">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">With form (default side: right)</p>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Edit profile</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile and save.</SheetDescription>
            </SheetHeader>
            <div className="py-6 space-y-4 px-4">
              <Field>
                <FieldLabel>Display name</FieldLabel>
                <Input defaultValue="Diego Zuluaga" />
              </Field>
              <Field>
                <FieldLabel>Bio</FieldLabel>
                <Textarea rows={3} defaultValue="Design Systems @ Strata" />
              </Field>
            </div>
          </SheetContent>
        </Sheet>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Side variants (top / right / bottom / left)</p>
        <div className="flex flex-wrap gap-2">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">{side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>{side} sheet</SheetTitle>
                  <SheetDescription>This sheet slides in from the {side}.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </section>
    </div>
  ),

  popover: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <CalendarIcon className="size-4 mr-2" /> Open Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Dimensions</p>
          <p className="text-xs text-muted-foreground">Set the dimensions for the layer.</p>
          <Input placeholder="Width" defaultValue="100%" />
          <Input placeholder="Height" defaultValue="25px" />
        </div>
      </PopoverContent>
    </Popover>
  ),

  tooltip: () => (
    <TooltipProvider delayDuration={200}>
      <div className="space-y-5 w-full">
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">All 4 placements</p>
          <div className="flex flex-wrap gap-3">
            {(["top", "right", "bottom", "left"] as const).map((side) => (
              <Tooltip key={side}>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">side: {side}</Button>
                </TooltipTrigger>
                <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Common usage (icon buttons)</p>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Settings">
                  <Settings className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Settings (⌘,)</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Edit">
                  <Edit className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Edit</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Delete">
                  <Trash className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Delete</TooltipContent>
            </Tooltip>
          </div>
        </section>
      </div>
    </TooltipProvider>
  ),

  "dropdown-menu": () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Order actions">
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),

  // ── Data Visualization ──────────────────────────────────────────────────────
  accordion: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="faq-1">
        <AccordionTrigger>How do I get started?</AccordionTrigger>
        <AccordionContent>
          Install the package and import components from <code>strata-design-system</code>.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>Can I customize the theme?</AccordionTrigger>
        <AccordionContent>
          Yes — override CSS variables in your global stylesheet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>Is dark mode supported?</AccordionTrigger>
        <AccordionContent>
          All DS tokens auto-adapt via the .dark class — no per-component overrides needed.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),

  "empty-state": () => (
    <EmptyState>
      <EmptyStateIcon>
        <Inbox className="size-6 text-muted-foreground" />
      </EmptyStateIcon>
      <EmptyStateTitle>No orders yet</EmptyStateTitle>
      <EmptyStateDescription>
        Get started by creating your first order. Drafts are auto-saved every 30 seconds.
      </EmptyStateDescription>
      <EmptyStateActions>
        <Button>
          <Plus className="size-4 mr-2" /> Create Order
        </Button>
        <Button variant="outline">Import CSV</Button>
      </EmptyStateActions>
    </EmptyState>
  ),

  "description-list": () => (
    <DescriptionList className="max-w-md">
      <div className="px-4 py-3 grid grid-cols-3 gap-4">
        <DescriptionTerm>Customer</DescriptionTerm>
        <DescriptionDetails className="col-span-2">Acme Corp</DescriptionDetails>
      </div>
      <div className="px-4 py-3 grid grid-cols-3 gap-4">
        <DescriptionTerm>Order ID</DescriptionTerm>
        <DescriptionDetails className="col-span-2">#ORD-1234</DescriptionDetails>
      </div>
      <div className="px-4 py-3 grid grid-cols-3 gap-4">
        <DescriptionTerm>Status</DescriptionTerm>
        <DescriptionDetails className="col-span-2">
          <StatusBadge status="completed" />
        </DescriptionDetails>
      </div>
      <div className="px-4 py-3 grid grid-cols-3 gap-4">
        <DescriptionTerm>Total</DescriptionTerm>
        <DescriptionDetails className="col-span-2 font-mono">$1,250.00</DescriptionDetails>
      </div>
    </DescriptionList>
  ),

  "stacked-list": () => (
    <StackedList className="max-w-md">
      {[
        { id: '1', icon: <Bell className="size-4 text-status-info" />, title: '3 new comments on PR #324', time: '2m ago' },
        { id: '2', icon: <FileText className="size-4 text-status-success" />, title: 'New document uploaded: Q2-report.pdf', time: '1h ago' },
        { id: '3', icon: <Star className="size-4 text-status-warning" />, title: 'Order #1234 starred by customer', time: '3h ago' },
      ].map((item) => (
        <StackedListItem key={item.id}>
          <div className="flex items-start gap-3 min-w-0">
            <div className="mt-0.5">{item.icon}</div>
            <p className="text-sm text-foreground">{item.title}</p>
          </div>
          <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
        </StackedListItem>
      ))}
    </StackedList>
  ),

  disclosure: () => (
    <details className="max-w-md group">
      <summary className="text-sm font-medium text-foreground cursor-pointer hover:text-primary flex items-center gap-2">
        <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
        Show order history
      </summary>
      <div className="mt-2 pl-6 space-y-1 text-sm text-muted-foreground">
        <p>ORD-1234 · $250.00</p>
        <p>ORD-1233 · $120.00</p>
        <p>ORD-1232 · $48.50</p>
      </div>
    </details>
  ),

  "table-empty-state": () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3}>
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <Search className="size-8 mb-2" />
              <p className="text-sm">No orders match the current filters.</p>
              <Button variant="ghost" size="sm" className="mt-3">
                <Filter className="size-3.5 mr-1.5" /> Clear filters
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),

  "copy-button": () => (
    <div className="space-y-6 w-full max-w-xl">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Single format (sm + md)</p>
        <div className="flex flex-wrap items-center gap-3">
          <CopyButton
            size="sm"
            formats={[{ label: "npm", value: "npm install strata-design-system" }]}
          />
          <CopyButton
            size="md"
            formats={[{ label: "yarn", value: "yarn add strata-design-system" }]}
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Click to copy. The button shows a "Copied" check for 2 seconds.
        </p>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Multiple formats (dropdown)</p>
        <CopyButton
          formats={[
            { label: "npm", value: "npm install strata-design-system", description: "Node Package Manager" },
            { label: "yarn", value: "yarn add strata-design-system", description: "Yarn package manager" },
            { label: "pnpm", value: "pnpm add strata-design-system", description: "Performant npm" },
            { label: "bun", value: "bun add strata-design-system", description: "Bun runtime" },
          ]}
        />
        <p className="mt-2 text-xs text-muted-foreground">
          Click the chevron to pick a format; the chosen one is remembered.
        </p>
      </section>
    </div>
  ),

  // ── Application UI: Navigation ──────────────────────────────────────────────
  navbar: () => (
    <div className="w-full max-w-2xl">
      <Navbar>
        <NavbarSection>
          <span className="font-bold text-foreground px-2">STRATA</span>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection>
          <NavbarItem current>Dashboard</NavbarItem>
          <NavbarItem>Orders</NavbarItem>
          <NavbarItem>Settings</NavbarItem>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection>
          <Button variant="ghost" size="icon" aria-label="Notifications"><Bell className="size-4" /></Button>
          <Avatar size="sm"><AvatarFallback>DZ</AvatarFallback></Avatar>
        </NavbarSection>
      </Navbar>
    </div>
  ),

  "navbar-floating": () => (
    <div className="bg-muted/30 rounded-md p-6 w-full">
      <NavbarFloating className="relative top-0 mx-auto">
        <Button variant="ghost" size="icon" aria-label="Home"><Home className="size-4" /></Button>
        <span className="font-semibold text-foreground px-2">Strata DS</span>
        <div className="flex-1" />
        <Button variant="default" shape="pill" size="sm">Get Started</Button>
      </NavbarFloating>
    </div>
  ),

  // (page-header expanded version is defined at the bottom)

  menubar: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
          <MenubarItem>Open... <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
          <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In</MenubarItem>
          <MenubarItem>Zoom Out</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),

  "navigation-menu": () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-3">
              <li>
                <NavigationMenuLink href="#" className="block rounded p-2 hover:bg-accent">
                  <div className="font-semibold text-foreground">Tours</div>
                  <p className="text-sm text-muted-foreground">Curated experiences</p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#" className="block rounded p-2 hover:bg-accent">
                  <div className="font-semibold text-foreground">Hotels</div>
                  <p className="text-sm text-muted-foreground">Trusted partners</p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),

  // ── Application UI: Data + Layout ───────────────────────────────────────────
  calendar: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} />;
  },

  carousel: () => (
    <Carousel opts={{ align: "start" }} className="w-full max-w-md">
      <CarouselContent>
        {[1, 2, 3, 4].map((n) => (
          <CarouselItem key={n} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-3xl font-bold text-foreground">{n}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),

  "aspect-ratio": () => (
    <div className="max-w-md w-full">
      <AspectRatio ratio={16 / 9}>
        <div className="size-full rounded-lg bg-gradient-to-br from-status-info via-status-ai to-status-success flex items-center justify-center">
          <span className="text-background font-bold text-xl">16 / 9</span>
        </div>
      </AspectRatio>
    </div>
  ),

  command: () => (
    <Command className="rounded-lg border border-border shadow-md w-[420px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon className="size-4 mr-2" /> Calendar
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Search className="size-4 mr-2" /> Search
          </CommandItem>
          <CommandItem>
            <Settings className="size-4 mr-2" /> Settings
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem><Plus className="size-4 mr-2" /> New File</CommandItem>
          <CommandItem><Upload className="size-4 mr-2" /> Upload</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),

  // ── Application UI: Section primitives ──────────────────────────────────────
  "section-card": () => (
    <SectionCard surface="default" className="max-w-md">
      <SectionCardHeader divider="bottom">
        <h3 className="text-lg font-semibold text-foreground">Order Summary</h3>
        <p className="text-sm text-muted-foreground">12 items ready for review</p>
      </SectionCardHeader>
      <SectionCardBody>
        <p className="text-sm text-foreground">Ship-by date: April 24, 2024</p>
      </SectionCardBody>
      <SectionCardFooter divider="top">
        <Button size="sm">Review</Button>
      </SectionCardFooter>
    </SectionCard>
  ),

  "section-toolbar": () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [view, setView] = useState("grid");
    return (
      <SectionToolbar
        search={{ value: search, onSearchChange: setSearch, placeholder: "Search...", ariaLabel: "Search" }}
        filters={{
          options: [{ value: "all", label: "All" }, { value: "active", label: "Active" }],
          value: filter,
          onValueChange: setFilter,
          ariaLabel: "Filter",
        }}
        viewMode={{
          value: view,
          onValueChange: setView,
          options: [
            { value: "grid", icon: <Grid2x2 className="size-4" />, ariaLabel: "Grid" },
            { value: "list", icon: <ListIcon className="size-4" />, ariaLabel: "List" },
          ],
        }}
        primaryAction={{ label: "New", icon: <Plus className="size-4" />, onClick: () => {} }}
      />
    );
  },

  "list-toolbar": () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    return (
      <ListToolbar
        search={{ value: search, onSearchChange: setSearch, placeholder: "Search orders..." }}
        filter={{
          options: [{ value: "all", label: "All" }, { value: "pending", label: "Pending" }],
          value: filter,
          onValueChange: setFilter,
        }}
        primaryAction={{ label: "New Order", onClick: () => {} }}
      />
    );
  },

  "filter-panel": () => (
    <FilterPanel mode="sidebar">
      <FilterPanelHeader>
        <FilterPanelHeaderTitle>Filters</FilterPanelHeaderTitle>
      </FilterPanelHeader>
      <FilterPanelSection>
        <FilterPanelSectionTrigger data-state="open">
          Status <ChevronDown className="size-4 transition-transform" />
        </FilterPanelSectionTrigger>
        <FilterPanelSectionContent>
          <FilterPanelOption>
            <Checkbox id="fp-open" />
            <Label htmlFor="fp-open" className="text-sm">Open</Label>
          </FilterPanelOption>
          <FilterPanelOption>
            <Checkbox id="fp-closed" />
            <Label htmlFor="fp-closed" className="text-sm">Closed</Label>
          </FilterPanelOption>
        </FilterPanelSectionContent>
      </FilterPanelSection>
    </FilterPanel>
  ),

  tracking: () => (
    <div className="space-y-6 max-w-lg">
      <OrderTracking
        color="brand"
        layout="inline"
        steps={[
          { id: "1", name: "Placed", status: "complete" },
          { id: "2", name: "Processing", status: "complete" },
          { id: "3", name: "Shipped", status: "current" },
          { id: "4", name: "Delivered", status: "upcoming" },
        ]}
      />
      <ProgressTracker currentStep={3} totalSteps={5} />
    </div>
  ),

  // ── Application UI: Marketing ───────────────────────────────────────────────
  "hero-section": () => (
    <Hero className="bg-card border border-border rounded-lg !py-8">
      <HeroTitle className="!text-2xl">Build faster with Strata</HeroTitle>
      <HeroSubtitle className="!text-sm">The DS that scales with your team.</HeroSubtitle>
      <HeroButtons>
        <Button shape="pill">Get Started</Button>
        <Button variant="outline">View Docs</Button>
      </HeroButtons>
    </Hero>
  ),

  "feature-section": () => (
    <FeatureSection className="!py-6 bg-card border border-border rounded-lg">
      <FeatureGrid className="grid-cols-3 max-w-3xl">
        <Feature>
          <FeatureIcon><Sparkles className="size-4 text-white" /></FeatureIcon>
          <FeatureTitle className="!text-sm">Fast onboarding</FeatureTitle>
          <FeatureDescription className="!text-xs">Guided setup in minutes.</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon><Globe className="size-4 text-white" /></FeatureIcon>
          <FeatureTitle className="!text-sm">Global edge</FeatureTitle>
          <FeatureDescription className="!text-xs">200+ cities worldwide.</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon><Users className="size-4 text-white" /></FeatureIcon>
          <FeatureTitle className="!text-sm">Team-ready</FeatureTitle>
          <FeatureDescription className="!text-xs">Roles, audits, SSO.</FeatureDescription>
        </Feature>
      </FeatureGrid>
    </FeatureSection>
  ),

  pricing: () => (
    <PricingSection className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
      <PricingCard>
        <PricingTitle>Starter</PricingTitle>
        <PricingPrice><PricingCost>$29</PricingCost> / mo</PricingPrice>
        <PricingFeatures>
          <PricingFeature>5 users</PricingFeature>
          <PricingFeature>10GB</PricingFeature>
        </PricingFeatures>
        <Button className="mt-4 w-full" variant="outline">Get started</Button>
      </PricingCard>
      <PricingCard featured>
        <PricingTitle featured>Pro</PricingTitle>
        <PricingPrice featured><PricingCost>$99</PricingCost> / mo</PricingPrice>
        <PricingFeatures>
          <PricingFeature featured>Unlimited users</PricingFeature>
          <PricingFeature featured>100GB</PricingFeature>
        </PricingFeatures>
        <Button className="mt-4 w-full">Upgrade</Button>
      </PricingCard>
      <PricingCard>
        <PricingTitle>Enterprise</PricingTitle>
        <PricingPrice>Custom</PricingPrice>
        <PricingFeatures>
          <PricingFeature>SSO + SLAs</PricingFeature>
          <PricingFeature>Dedicated CSM</PricingFeature>
        </PricingFeatures>
        <Button className="mt-4 w-full" variant="outline">Contact</Button>
      </PricingCard>
    </PricingSection>
  ),

  // ── Application UI: Ecommerce ───────────────────────────────────────────────
  "product-list": () => (
    <ProductGrid className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
      {[
        { id: 1, name: "Strata Runner", category: "Shoes", price: "$129.00", inStock: true },
        { id: 2, name: "Cotton Tee", category: "Apparel", price: "$29.00", inStock: true },
        { id: 3, name: "Daypack", category: "Bags", price: "$89.00", inStock: false },
      ].map((p) => (
        <ProductCard
          key={p.id}
          product={{
            id: p.id,
            name: p.name,
            href: "#",
            price: p.price,
            imageSrc: "",
            imageAlt: p.name,
            category: p.category,
            inStock: p.inStock,
          }}
        />
      ))}
    </ProductGrid>
  ),

  "shopping-cart": () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="space-y-2">
        <Button onClick={() => setOpen(true)}>
          <ShoppingBag className="size-4 mr-2" /> Open Cart (2)
        </Button>
        <ShoppingCart
          open={open}
          onClose={setOpen}
          items={[
            { id: 1, name: "Strata Runner", href: "#", color: "Black", price: "$129.00", quantity: 1, imageSrc: "", imageAlt: "Runner" },
            { id: 2, name: "Cotton Tee", href: "#", color: "White", price: "$29.00", quantity: 2, imageSrc: "", imageAlt: "Tee" },
          ]}
        />
      </div>
    );
  },

  "shared-catalog-card": () => (
    <SharedCatalogCard
      title="Partner Inventory Q2"
      itemsCount={1284}
      catalogType="API"
      owner="Diego Zuluaga"
      lastSyncedText="Synced 5 min ago"
      statusBadge={{ label: "Live" }}
      onSync={() => {}}
      onPrimaryAction={() => {}}
      primaryActionLabel="Create Quote"
    />
  ),

  "shared-inventory-card": () => (
    <SharedInventoryCard
      title="Steel Beam — Type A"
      subtitle="SKU 12345 · Acme Supplier"
      location="Warehouse 2, Aisle 4"
      valueLabel="Stock"
      value="284 units"
      statusBadge={{ label: "In stock", variant: "green" }}
      priorityBadge={{ label: "High demand", variant: "yellow", emoji: "🔥" }}
    />
  ),

  "shared-order-card": () => (
    <SharedOrderCard
      variant="default"
      initials="AC"
      client="Acme Corp"
      orderId="ORD-2024-1284"
      amount="$1,250.00"
      date="May 1, 2024"
      status="Paid"
      statusBadge="completed"
    />
  ),

  // ── Forms ───────────────────────────────────────────────────────────────────
  combobox: () => {
    const items = [
      { value: "us", label: "🇺🇸 United States" },
      { value: "ca", label: "🇨🇦 Canada" },
      { value: "mx", label: "🇲🇽 Mexico" },
      { value: "co", label: "🇨🇴 Colombia" },
      { value: "br", label: "🇧🇷 Brazil" },
    ];
    type Country = typeof items[number];
    const [value, setValue] = useState<Country | undefined>(undefined);
    return (
      <Combobox<Country>
        value={value}
        onChange={(v) => setValue((v as Country) ?? undefined)}
        displayValue={(item: Country) => item?.label ?? ""}
        placeholder="Select country..."
        aria-label="Country"
        className="max-w-[280px]"
      >
        {items.map((item) => (
          <ComboboxOption key={item.value} value={item}>
            {item.label}
          </ComboboxOption>
        ))}
      </Combobox>
    );
  },

  "date-picker": () => {
    const [date, setDate] = useState("");
    return (
      <div className="max-w-sm space-y-2">
        <DatePicker value={date} onChange={setDate} placeholder="Pick a date" />
        <p className="text-xs text-muted-foreground font-mono">Value: {date || "(empty)"}</p>
      </div>
    );
  },

  "input-otp": () => {
    const [value, setValue] = useState("");
    return (
      <div className="space-y-2">
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-xs text-muted-foreground font-mono">Value: {value || "(empty)"}</p>
      </div>
    );
  },

  "searchable-multi-select": () => {
    const fruits = [
      { id: "1", label: "Apple" },
      { id: "2", label: "Banana" },
      { id: "3", label: "Cherry" },
      { id: "4", label: "Date" },
      { id: "5", label: "Elderberry" },
      { id: "6", label: "Fig" },
      { id: "7", label: "Grape" },
      { id: "8", label: "Honeydew" },
    ];
    const skills = [
      { id: "react", label: "React" },
      { id: "ts", label: "TypeScript" },
      { id: "css", label: "CSS" },
      { id: "node", label: "Node.js" },
      { id: "go", label: "Go" },
    ];
    const manyOptions = Array.from({ length: 24 }, (_, i) => ({
      id: `opt-${i + 1}`,
      label: `Option ${i + 1}`,
    }));
    const [empty, setEmpty] = useState<typeof skills>([]);
    const [preselected, setPreselected] = useState([fruits[0], fruits[2], fruits[4]]);
    const [withIcon, setWithIcon] = useState([fruits[0], fruits[1]]);
    const [many, setMany] = useState<typeof manyOptions>([]);
    return (
      <div className="max-w-sm space-y-6 w-full">
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Default (empty)</p>
          <SearchableMultiSelect
            options={skills}
            value={empty}
            onChange={setEmpty}
            placeholder="Add skills..."
          />
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">With pre-selected values</p>
          <SearchableMultiSelect
            options={fruits}
            value={preselected}
            onChange={setPreselected}
            placeholder="Search..."
          />
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">With tag icon</p>
          <SearchableMultiSelect
            options={fruits}
            value={withIcon}
            onChange={setWithIcon}
            icon={<Heart className="fill-current size-3" />}
            placeholder="Search..."
          />
        </section>
        <section>
          <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Many options (+ add custom)</p>
          <SearchableMultiSelect
            options={manyOptions}
            value={many}
            onChange={setMany}
            placeholder="Search or add custom..."
          />
        </section>
      </div>
    );
  },

  fieldset: () => (
    <Fieldset>
      <Legend>Shipping address</Legend>
      <FieldGroup>
        <HFField>
          <HLabel>Street</HLabel>
          <Input placeholder="123 Main St" />
        </HFField>
        <HFField>
          <HLabel>City</HLabel>
          <Input placeholder="New York" />
        </HFField>
      </FieldGroup>
    </Fieldset>
  ),

  form: () => (
    <div className="space-y-3 max-w-sm">
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input type="email" placeholder="you@example.com" />
        <FieldDescription>We'll send a magic link.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input type="password" placeholder="••••••••" />
      </Field>
      <Button type="submit" className="w-full">Sign in</Button>
      <p className="text-xs text-muted-foreground italic">
        (Compose with react-hook-form's FormField/FormItem/FormControl in real apps.)
      </p>
    </div>
  ),

  // ── Overlays ────────────────────────────────────────────────────────────────
  drawer: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <ShoppingBag className="size-4 mr-2" /> Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
          <DrawerDescription>2 items · $158.00</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-2 text-sm text-muted-foreground">
          Cart items would render here.
        </div>
        <DrawerFooter>
          <Button>Checkout</Button>
          <DrawerClose asChild><Button variant="outline">Continue shopping</Button></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),

  "slide-over": () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          <Edit className="size-4 mr-2" /> Open SlideOver
        </Button>
        <SlideOver open={open} onClose={setOpen}>
          <SlideOverHeader onClose={() => setOpen(false)}>
            <SlideOverTitle>Order #ORD-1284</SlideOverTitle>
            <SlideOverDescription>Acme Corp · $1,250.00 · May 1, 2024</SlideOverDescription>
          </SlideOverHeader>
          <SlideOverBody>
            <DescriptionList>
              <div className="px-4 py-2 grid grid-cols-3 gap-3">
                <DescriptionTerm>Status</DescriptionTerm>
                <DescriptionDetails className="col-span-2">
                  <StatusBadge status="completed" />
                </DescriptionDetails>
              </div>
              <div className="px-4 py-2 grid grid-cols-3 gap-3">
                <DescriptionTerm>Customer</DescriptionTerm>
                <DescriptionDetails className="col-span-2">Acme Corp</DescriptionDetails>
              </div>
            </DescriptionList>
          </SlideOverBody>
        </SlideOver>
      </>
    );
  },

  "confirm-dialog": () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          <Trash className="size-4 mr-2" /> Delete order
        </Button>
        <ConfirmDialog
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          title="Delete order #1234?"
          description="This will permanently remove the order. This action cannot be undone."
          confirmLabel="Delete order"
        />
      </>
    );
  },

  "context-menu": () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex items-center justify-center w-full max-w-md h-32 border border-dashed border-border rounded-md text-sm text-muted-foreground">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem><Pencil className="size-4 mr-2" /> Edit</ContextMenuItem>
        <ContextMenuItem><Share className="size-4 mr-2" /> Share</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash className="size-4 mr-2" /> Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),

  "scroll-area": () => (
    <ScrollArea className="h-48 w-72 rounded-md border border-border">
      <div className="p-4">
        <h4 className="mb-3 text-sm font-medium text-foreground">Tags</h4>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="text-sm text-muted-foreground py-1 border-b border-border last:border-0">
            v1.{i}.0 — {["initial release", "bug fixes", "feature update", "patch"][i % 4]}
          </div>
        ))}
      </div>
      <ScrollBar />
    </ScrollArea>
  ),

  resizable: () => (
    <ResizablePanelGroup direction="horizontal" className="h-48 max-w-xl rounded-md border border-border">
      <ResizablePanel defaultSize={30} minSize={20}>
        <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">
          Sidebar
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center p-4 text-sm text-foreground">
          Main content (drag the handle ←→)
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),

  // ── Notifications via portal — show triggers + explanatory text ─────────────
  "feedback-toast": () => (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        Toasts render in a portal. In a real app, wrap your tree with{" "}
        <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
          {"<FeedbackToastProvider>"}
        </code>{" "}
        and call{" "}
        <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
          show({"{ variant, message }"})
        </code>{" "}
        from the hook.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">
          <Check className="size-3.5 mr-1.5" /> Trigger success
        </Button>
        <Button variant="outline" size="sm">
          <TriangleAlert className="size-3.5 mr-1.5" /> Trigger warning
        </Button>
        <Button variant="outline" size="sm">
          <Trash className="size-3.5 mr-1.5" /> Trigger error
        </Button>
      </div>
    </div>
  ),

  sonner: () => (
    <div className="space-y-4 w-full max-w-xl">
      <Toaster />
      <p className="text-sm text-muted-foreground">
        Sonner toasts render via portal. Add{" "}
        <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">{"<Toaster />"}</code>{" "}
        once at the app root, then call{" "}
        <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">toast.success(...)</code>{" "}
        anywhere. Click any button below to see it live.
      </p>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Variants</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => toast("Heads up — something happened")}>
            toast()
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.success("Profile saved successfully")}>
            <Check className="size-3.5 mr-1.5" /> success
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.error("Could not connect to server")}>
            <TriangleAlert className="size-3.5 mr-1.5" /> error
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.warning("Your session expires in 5 minutes")}>
            warning
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.info("New version available")}>
            <Info className="size-3.5 mr-1.5" /> info
          </Button>
        </div>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Patterns</p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toast("File deleted", {
                action: { label: "Undo", onClick: () => toast.success("Restored") },
              })
            }
          >
            with action
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const id = toast.loading("Uploading...");
              setTimeout(() => toast.success("Upload complete", { id }), 1800);
            }}
          >
            <RotateCw className="size-3.5 mr-1.5" /> loading → success
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 1500)),
                {
                  loading: "Saving order...",
                  success: "Order #4821 saved",
                  error: "Save failed",
                },
              )
            }
          >
            promise
          </Button>
        </div>
      </section>
    </div>
  ),

  // ── Newly added (previously missing) ────────────────────────────────────────
  "action-center": () => (
    <div className="flex items-start gap-4">
      <ActionCenter />
      <p className="text-sm text-muted-foreground max-w-md">
        Click the bell icon to open the Action Center popover. Notifications categorized by tab,
        searchable, with chat view integration.
      </p>
    </div>
  ),

  "activity-timeline": () => {
    const items: ActivityTimelineItem<Record<string, unknown>>[] = [
      {
        id: "1",
        icon: <Check className="size-4 text-status-success" aria-hidden />,
        circleBackgroundClassName: "bg-status-success/10",
        separatorClassName: "bg-status-success/30",
        content: (
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Order confirmed</p>
            <p className="text-xs text-muted-foreground">Payment captured · #PO-48291</p>
          </div>
        ),
      },
      {
        id: "2",
        icon: <Package className="size-4 text-status-info" aria-hidden />,
        circleBackgroundClassName: "bg-status-info/10",
        separatorClassName: "bg-status-info/30",
        content: (
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Picking started</p>
            <p className="text-xs text-muted-foreground">Warehouse B · 12 SKUs</p>
          </div>
        ),
      },
      {
        id: "3",
        icon: <Truck className="size-4 text-status-ai" aria-hidden />,
        circleBackgroundClassName: "bg-status-ai/10",
        separatorClassName: "bg-status-ai/30",
        content: (
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Shipped</p>
            <p className="text-xs text-muted-foreground">Carrier: Northwind · ETA Apr 24</p>
          </div>
        ),
      },
      {
        id: "4",
        icon: <Bell className="size-4 text-muted-foreground" aria-hidden />,
        circleBackgroundClassName: "bg-muted",
        separatorClassName: "bg-border",
        content: (
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Out for delivery</p>
            <p className="text-xs text-muted-foreground">Awaiting carrier scan</p>
          </div>
        ),
      },
    ];
    return <ActivityTimeline items={items} className="max-w-lg w-full" />;
  },

  chart: () => {
    const data = [
      { month: "Jan", revenue: 4200, expenses: 2400 },
      { month: "Feb", revenue: 5300, expenses: 2800 },
      { month: "Mar", revenue: 6100, expenses: 3100 },
      { month: "Apr", revenue: 5800, expenses: 2900 },
      { month: "May", revenue: 7200, expenses: 3400 },
      { month: "Jun", revenue: 8400, expenses: 3700 },
    ];
    const config = {
      revenue: { label: "Revenue", color: "var(--color-chart-1, #6366f1)" },
      expenses: { label: "Expenses", color: "var(--color-chart-2, #8b5cf6)" },
    } satisfies ChartConfig;
    return (
      <div className="w-full max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase text-muted-foreground">Revenue vs Expenses (last 6 months)</p>
        <ChartContainer config={config} className="h-64 w-full">
          <svg viewBox="0 0 600 250" className="w-full h-full">
            {/* Simple bar chart in SVG to avoid recharts complexity in preview */}
            {data.map((d, i) => {
              const x = 60 + i * 90;
              const maxVal = 9000;
              const revHeight = (d.revenue / maxVal) * 180;
              const expHeight = (d.expenses / maxVal) * 180;
              return (
                <g key={d.month}>
                  <rect x={x} y={210 - revHeight} width="30" height={revHeight} fill="var(--color-chart-1, #6366f1)" rx="2" />
                  <rect x={x + 35} y={210 - expHeight} width="30" height={expHeight} fill="var(--color-chart-2, #8b5cf6)" rx="2" />
                  <text x={x + 32} y="230" fontSize="11" fill="currentColor" textAnchor="middle" className="text-muted-foreground">{d.month}</text>
                </g>
              );
            })}
            <line x1="50" y1="210" x2="590" y2="210" stroke="currentColor" className="text-border" strokeWidth="1" />
          </svg>
          <ChartTooltip content={<ChartTooltipContent />} />
        </ChartContainer>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5"><span className="size-3 rounded-sm" style={{ backgroundColor: "var(--color-chart-1, #6366f1)" }} /> Revenue</span>
          <span className="flex items-center gap-1.5"><span className="size-3 rounded-sm" style={{ backgroundColor: "var(--color-chart-2, #8b5cf6)" }} /> Expenses</span>
        </div>
        <p className="text-xs text-muted-foreground italic">
          (Simplified SVG bars for preview. In real apps, compose Recharts BarChart + Bar inside ChartContainer.)
        </p>
      </div>
    );
  },

  "create-order-dialog": () => (
    <div className="text-sm text-muted-foreground max-w-md">
      <p className="mb-2">
        <strong className="text-foreground">CreateOrderDialog</strong> is a multi-step modal with 4 flows:
        From Quote, From Template, Manual Creation, and Import.
      </p>
      <p className="mb-3">It requires <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">approvedQuotes</code>,
        <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded mx-1">orderTemplates</code>,
        <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">manualOrderCustomers</code>,
        and <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">importOrderAnalysis</code> data.
        See P2 Storybook for an interactive demo.
      </p>
      <Button variant="outline" size="sm">Mock trigger (no data wired)</Button>
    </div>
  ),

  "experiences-navbar": () => (
    <div className="text-sm text-muted-foreground space-y-3 max-w-2xl">
      <p>
        <strong className="text-foreground">ExperiencesNavbar</strong> is a product-specific navbar with
        12+ required props (navItems, onLogout, onNavigate, logos, ActionCenter wiring). Visiting this page
        in a real Experiences shell shows the full chrome.
      </p>
      <div className="bg-card border border-border rounded-xl p-3 flex items-center justify-between">
        <span className="font-bold text-foreground">[ Experiences brand ]</span>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2 py-1 rounded bg-brand-300 dark:bg-brand-500 text-foreground">Dashboard</span>
          <span className="px-2 py-1 text-muted-foreground">Orders</span>
          <span className="px-2 py-1 text-muted-foreground">Inventory</span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="size-4 text-muted-foreground" />
          <Avatar size="sm"><AvatarFallback>DZ</AvatarFallback></Avatar>
        </div>
      </div>
      <p className="text-xs italic">Schematic only — see ExperiencesNavbar in production for the full version.</p>
    </div>
  ),

  layout: () => (
    <div className="text-sm text-muted-foreground space-y-3 max-w-2xl">
      <p>
        <strong className="text-foreground">Layout</strong> is a page-level shell that wraps the entire
        app: ExperiencesNavbar at top + main content area. Visiting any page in this dev app uses a
        similar shell.
      </p>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="bg-foreground/5 border-b border-border px-3 py-2 flex items-center justify-between text-xs">
          <span className="font-bold text-foreground">STRATA</span>
          <div className="flex gap-2 text-muted-foreground">
            <span>Dashboard</span><span>Orders</span><span>Settings</span>
          </div>
          <Avatar size="xs"><AvatarFallback>DZ</AvatarFallback></Avatar>
        </div>
        <div className="p-4">
          <p className="text-base font-semibold text-foreground mb-1">Page Heading</p>
          <p className="text-xs text-muted-foreground mb-3">Page subheading describing the section.</p>
          <div className="bg-muted/30 border border-dashed border-border rounded p-6 text-center text-xs">
            Main content area
          </div>
        </div>
      </div>
    </div>
  ),

  "page-layout": () => (
    <div className="text-sm text-muted-foreground space-y-3 max-w-2xl">
      <p>
        <strong className="text-foreground">PageLayout</strong> is a thinner wrapper around Layout where most
        navigation props are optional — useful for demo screens or pages without full auth context.
      </p>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="bg-foreground/5 border-b border-border px-3 py-2 text-xs">
          <span className="font-bold text-foreground">STRATA · Demo</span>
        </div>
        <div className="p-4">
          <p className="text-base font-semibold text-foreground mb-1">Demo Dashboard</p>
          <p className="text-xs text-muted-foreground mb-3">Component playground</p>
          <div className="bg-muted/30 border border-dashed border-border rounded p-6 text-center text-xs">
            Main content
          </div>
        </div>
      </div>
    </div>
  ),

  listbox: () => (
    <Listbox value={undefined} onChange={() => {}} placeholder="Select a role" aria-label="Role" className="max-w-[280px]">
      <ListboxOption value="admin">
        <ListboxLabel>Admin</ListboxLabel>
        <ListboxDescription>Full access to all settings and billing.</ListboxDescription>
      </ListboxOption>
      <ListboxOption value="editor">
        <ListboxLabel>Editor</ListboxLabel>
        <ListboxDescription>Can edit content but not billing.</ListboxDescription>
      </ListboxOption>
      <ListboxOption value="viewer">
        <ListboxLabel>Viewer</ListboxLabel>
        <ListboxDescription>Read-only access.</ListboxDescription>
      </ListboxOption>
    </Listbox>
  ),

  "product-overview": () => (
    <ProductLayout className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
      <ProductGallery
        images={[
          { id: 1, name: "Front", src: "", alt: "Product front" },
          { id: 2, name: "Side", src: "", alt: "Product side" },
        ]}
      />
      <ProductDetails>
        <ProductTitle>Strata Runner</ProductTitle>
        <ProductPrice>$129.00</ProductPrice>
        <p className="mt-3 text-sm text-muted-foreground">
          Lightweight everyday running shoe. Sustainable materials, breathable mesh upper.
        </p>
        <Button className="mt-6 w-full">Add to Cart</Button>
        <p className="mt-3 text-xs text-muted-foreground">Free shipping on orders over $75.</p>
      </ProductDetails>
    </ProductLayout>
  ),

  // Override "thin" previews with richer composition

  "company-greeting": () => (
    <div className="space-y-3 w-full max-w-2xl">
      <CompanyGreeting heading="Good morning, Diego" subheading="Acme Corp · 12 active orders · 3 alerts" />
      <CompanyGreeting heading="Welcome back" subheading="Last sign-in: 2 hours ago" />
      <CompanyGreeting heading="Q2 Summary" subheading="Revenue +12.5% · Active users 8,492 · Pending approvals 47" />
    </div>
  ),

  "page-header": () => (
    <div className="space-y-6 w-full max-w-2xl">
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">Heading + subheading</p>
        <PageHeader heading="Orders" subheading="Manage and track all customer orders" />
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">With breadcrumb above</p>
        <div className="space-y-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Team</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <PageHeader heading="Team Members" subheading="Manage who has access to this project" />
        </div>
      </section>
      <section>
        <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">With actions row</p>
        <div className="flex items-start justify-between gap-4">
          <PageHeader heading="Reports" subheading="Quarterly financial overview" />
          <Button>
            <Download className="size-4 mr-2" /> Export CSV
          </Button>
        </div>
      </section>
    </div>
  ),
};

export function getPreviewComponent(id: string): React.FC | null {
  return COMPONENT_PREVIEWS[id] ?? null;
}

/** @deprecated Use `getPreviewComponent` and render the returned Component as JSX. */
export function getComponentPreview(id: string): React.ReactNode | null {
  const Component = COMPONENT_PREVIEWS[id];
  return Component ? <Component /> : null;
}
