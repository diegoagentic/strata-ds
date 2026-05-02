import { useState } from "react";
import {
  Bell, Calendar as CalendarIcon, Check, ChevronDown, FileText, Filter, Inbox, Info,
  MoreHorizontal, Plus, Search, Star, Trash, TriangleAlert,
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

  "kpi-card-row": () => null, // placeholder for future composite preview
};

export function getComponentPreview(id: string): React.ReactNode | null {
  const fn = COMPONENT_PREVIEWS[id];
  return fn ? fn() : null;
}
