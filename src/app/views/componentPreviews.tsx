import { useState } from "react";
import {
  Bell, Calendar as CalendarIcon, Check, ChevronDown, Edit,
  FileText, Filter, Globe, Grid2x2, Home, Inbox, Info, List as ListIcon,
  MoreHorizontal, Pencil, Plus, RotateCw, Search, Settings, Share, ShoppingBag,
  Sparkles, Star, Trash, TriangleAlert, Upload, Users,
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
} from "@/components/forms/select";
import { Combobox, ComboboxOption } from "@/components/forms/combobox";
import { DatePicker } from "@/components/forms/date-picker";
import {
  InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator,
} from "@/components/forms/input-otp";
import { SearchableMultiSelect } from "@/components/forms/searchable-multi-select";
import { Fieldset, Legend, FieldGroup, Field as HFField, Label as HLabel } from "@/components/forms/fieldset";

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
 * Live preview map for components. Returns a renderable preview for components
 * that have a clean default rendering. Components requiring trigger state (Dialog, Sheet, Drawer)
 * are wrapped with their own state.
 */
export const COMPONENT_PREVIEWS: Record<string, () => React.ReactNode> = {
  button: () => (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline" size="icon" aria-label="Add">
        <Plus className="size-4" />
      </Button>
    </div>
  ),
  badge: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge className="bg-status-success/10 text-status-success border-status-success/20">Active</Badge>
      <Badge className="bg-status-warning/10 text-status-warning border-status-warning/20">Pending</Badge>
      <Badge className="bg-status-error/10 text-status-error border-status-error/20">Failed</Badge>
      <Badge className="bg-status-ai/10 text-status-ai border-status-ai/20">AI</Badge>
    </div>
  ),
  avatar: () => (
    <div className="flex items-center gap-3">
      <Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>
      <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
      <Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>
      <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
      <Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
    </div>
  ),
  card: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A short description of the card content.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Card body — any content goes here.</p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Confirm</Button>
      </CardFooter>
    </Card>
  ),
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
    <Tabs defaultValue="overview" className="max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-sm text-muted-foreground py-4">
        Overview pane content goes here.
      </TabsContent>
      <TabsContent value="analytics" className="text-sm text-muted-foreground py-4">
        Analytics pane content.
      </TabsContent>
      <TabsContent value="settings" className="text-sm text-muted-foreground py-4">
        Settings pane content.
      </TabsContent>
    </Tabs>
  ),
  "status-badge": () => (
    <div className="flex flex-wrap gap-2">
      <StatusBadge status="active" />
      <StatusBadge status="pending" />
      <StatusBadge status="completed" />
      <StatusBadge status="failed" />
      <StatusBadge status="archived" />
    </div>
  ),
  "priority-badge": () => (
    <div className="flex flex-wrap gap-2">
      <PriorityBadge priority="low" />
      <PriorityBadge priority="medium" />
      <PriorityBadge priority="high" />
      <PriorityBadge priority="critical" />
    </div>
  ),
  "kpi-card": () => (
    <KPICard
      label="Monthly Revenue"
      value={124500}
      valueFormat="currency"
      currency="USD"
      trend={{ direction: "up", value: "12.5%" }}
      tone="success"
      icon={<Star className="size-5" />}
    />
  ),
  toggle: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle pressed={pressed} onPressedChange={setPressed} aria-label="Toggle bell">
        <Bell className="size-4" />
        Notifications
      </Toggle>
    );
  },
  "toggle-group": () => {
    const [view, setView] = useState("grid");
    return (
      <ToggleGroup type="single" value={view} onValueChange={(v) => v && setView(v)} variant="outline">
        <ToggleGroupItem value="grid" aria-label="Grid">Grid</ToggleGroupItem>
        <ToggleGroupItem value="list" aria-label="List">List</ToggleGroupItem>
        <ToggleGroupItem value="table" aria-label="Table">Table</ToggleGroupItem>
      </ToggleGroup>
    );
  },
  "company-greeting": () => (
    <CompanyGreeting heading="Good morning, Diego" subheading="Acme Corp · 12 active orders · 3 alerts" />
  ),
  input: () => (
    <div className="max-w-sm space-y-3">
      <Input placeholder="Search..." />
      <Input placeholder="With search prefix" />
    </div>
  ),
  textarea: () => <Textarea placeholder="Multi-line text..." rows={3} className="max-w-sm" />,
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
    const [val, setVal] = useState([50]);
    return (
      <div className="max-w-sm space-y-2">
        <Slider value={val} onValueChange={setVal} min={0} max={100} step={1} />
        <p className="text-sm text-muted-foreground font-mono">Value: {val[0]}</p>
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

  "stage-progress": () => (
    <StageProgress
      stages={["Order Placed", "Processing", "Shipped", "Delivered"]}
      currentIndex={2}
      color="brand"
    />
  ),

  banner: () => (
    <Banner variant="info" dismissible>
      New features available — <a href="#" className="underline font-semibold">see what's new</a>
    </Banner>
  ),

  "info-banner": () => (
    <InfoBanner
      tone="info"
      icon={<Info className="size-5" />}
      title="Pro tip"
      description="Use ⌘K to open the command palette from any page."
    />
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
  select: () => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
          <SelectItem value="viewer">Viewer</SelectItem>
        </SelectContent>
      </Select>
    );
  },

  // ── Overlays ────────────────────────────────────────────────────────────────
  alert: () => (
    <div className="space-y-2 max-w-md">
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
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile and save.</SheetDescription>
        </SheetHeader>
        <div className="py-6 space-y-4">
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
      <div className="flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Settings">
              <MoreHorizontal className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Open menu (⌘K)</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Delete">
              <Trash className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Delete this row</TooltipContent>
        </Tooltip>
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
    <div className="flex items-center gap-2 max-w-md">
      <code className="flex-1 font-mono text-xs bg-muted px-3 py-2 rounded border border-border truncate">
        npm install strata-design-system
      </code>
      <Button variant="outline" size="sm">
        <FileText className="size-3.5 mr-1.5" /> Copy
      </Button>
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

  "page-header": () => (
    <PageHeader heading="Orders" subheading="Manage and track all customer orders" />
  ),

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
    const skills = [
      { id: "react", label: "React" },
      { id: "ts", label: "TypeScript" },
      { id: "css", label: "CSS" },
      { id: "node", label: "Node.js" },
      { id: "go", label: "Go" },
    ];
    const [selected, setSelected] = useState<typeof skills>([]);
    return (
      <SearchableMultiSelect
        options={skills}
        value={selected}
        onChange={setSelected}
        placeholder="Add skills..."
        className="max-w-sm"
      />
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
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        Sonner toasts also render via portal. Add{" "}
        <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">{"<Toaster />"}</code>{" "}
        once at the app root, then call{" "}
        <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">toast.success("…")</code>{" "}
        anywhere.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">toast.success</Button>
        <Button variant="outline" size="sm">toast.error</Button>
        <Button variant="outline" size="sm">
          <RotateCw className="size-3.5 mr-1.5" /> toast.promise
        </Button>
      </div>
    </div>
  ),
};

export function getComponentPreview(id: string): React.ReactNode | null {
  const fn = COMPONENT_PREVIEWS[id];
  return fn ? fn() : null;
}
