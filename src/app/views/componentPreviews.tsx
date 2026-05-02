import { useState } from "react";
import { Bell, Plus, Star } from "lucide-react";

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

import { Input } from "@/components/forms/input";
import { Textarea } from "@/components/forms/textarea";
import { Switch } from "@/components/forms/switch";
import { Checkbox } from "@/components/forms/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/forms/radio-group";
import { Slider } from "@/components/forms/slider";
import { Label } from "@/components/application-ui/label";
import { Field, FieldLabel, FieldDescription } from "@/components/forms/field";

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
    <div className="space-y-3 max-w-xs">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-32 w-full rounded-lg" />
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
};

export function getComponentPreview(id: string): React.ReactNode | null {
  const fn = COMPONENT_PREVIEWS[id];
  return fn ? fn() : null;
}
