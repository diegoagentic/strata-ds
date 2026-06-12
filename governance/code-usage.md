# Strata DS — Code Usage Rules

These rules govern **how you use the Strata Design System inside application code**. They are complementary to the visual rules in the other governance files: the visual rules tell you what good UI looks like; these rules tell you how to write the code that produces it.

Contributed by the frontend team — both Part 1 (six core non-negotiables) and Part 2 (pattern reference for components categories) are intended to be the first thing any dev reads before opening a TSX file.

---

## Part 1: Core Rules

Six non-negotiables. If you break these, the design system cannot help you.

---

### Rule 1 — Import from the design system package

Always import from `@avantodev/strata-design-system`. Never reach into storybook source files directly.

```tsx
// ✅ Do
import { Button, Field, Input } from '@avantodev/strata-design-system';

// ❌ Don't
import { Button } from '../../storybook/src/components/button';
```

---

### Rule 2 — Use semantic color tokens, never hardcode colors

Use the token names. Never use Tailwind primitives, hex values, or arbitrary classes for color.

```tsx
// ✅ Do
<p className="text-foreground">Main text</p>
<p className="text-muted-foreground">Secondary text</p>
<p className="text-destructive">Error text</p>
<div className="bg-card border-border">...</div>
<button className="bg-brand-500 hover:bg-brand-600">Action</button>

// ❌ Don't
<p className="text-zinc-900">Main text</p>
<p className="text-gray-500">Secondary text</p>
<p className="text-red-500">Error text</p>
<div className="bg-white border-gray-200">...</div>
<button className="bg-lime-400 text-black">Action</button>
```

---

### Rule 3 — Use lucide-react for all icons, never text characters

```tsx
// ✅ Do
import { ChevronRight, X, ArrowRight } from 'lucide-react';
<ChevronRight className="w-4 h-4" />

// ❌ Don't
<span>›</span>
<span>→</span>
<button>✕</button>
```

---

### Rule 4 — Use cn() for all className merging

```tsx
import { cn } from '@avantodev/strata-design-system';

// ✅ Do
<div className={cn('base-class', isActive && 'active-class', className)} />

// ❌ Don't
<div className={'base-class ' + className} />
<div className={`base-class ${className}`} />
```

---

### Rule 5 — Use DS components, never raw HTML equivalents

| Need | Use | Never use |
|------|-----|-----------|
| Button | `<Button>` | `<button>` |
| Navigation link | `<Link>` from DS | `<a href>` |
| Date input | `<DatePicker>` | `<Input type="date" />` |
| Table | DS `<Table>` family | `<table>` |
| Typography | `<Heading>`, `<Text>` | `<h1>`–`<h6>`, `<p>` with manual classes |

```tsx
// ✅ Do
import { Button, Link } from '@avantodev/strata-design-system';
<Button variant="outline">Cancel</Button>
<Link href="/dashboard">Dashboard</Link>

// ❌ Don't
<button className="border rounded px-4 py-2">Cancel</button>
<a href="/dashboard" className="text-lime-400 underline">Dashboard</a>
```

---

### Rule 6 — Wrap form inputs in Field

Every input needs a `<Field>` wrapper with its label, description, and error sub-components. No raw label/input/error HTML.

```tsx
import { Field, FieldLabel, FieldDescription, FieldError, Input } from '@avantodev/strata-design-system';

// ✅ Do
<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="you@example.com" />
  <FieldDescription>We'll never share your email.</FieldDescription>
  <FieldError>Please enter a valid email.</FieldError>
</Field>

// ❌ Don't
<div>
  <label className="text-sm font-medium text-zinc-700">Email</label>
  <input type="email" className="border rounded px-3 py-2" />
  <p className="text-xs text-red-500">Please enter a valid email.</p>
</div>
```

---

## Part 2: Pattern Reference

---

### Colors and Typography

**Semantic color tokens:**

| Category | Tokens |
|----------|--------|
| Text | `text-foreground`, `text-muted-foreground`, `text-destructive`, `text-primary` |
| Background | `bg-background`, `bg-card`, `bg-muted`, `bg-primary` |
| Border | `border-border`, `border-input` |
| Brand | `bg-brand-500`, `text-brand-500`, `hover:bg-brand-600` |
| Status | `text-destructive` (error), `text-green-600` (success — use sparingly) |

**Use `<Heading>` and `<Text>` for all typography — never raw HTML tags with manual size classes.**

```tsx
import { Heading, Text } from '@avantodev/strata-design-system';

// ✅ Do
<Heading level={2}>Section Title</Heading>
<Text className="text-muted-foreground">Helper text</Text>

// ❌ Don't
<h2 className="text-xl font-bold text-zinc-900">Section Title</h2>
<p className="text-sm text-gray-500">Helper text</p>
```

---

### Buttons and Links

**Variants:** `default` (lime-green), `destructive`, `outline`, `secondary`, `ghost`, `link`, `brand`, `accent`
**Sizes:** `default`, `sm`, `lg`, `icon`
**Shape:** `default` (rounded), `pill` (fully rounded)

```tsx
import { Button } from '@avantodev/strata-design-system';
import { Plus, Trash2 } from 'lucide-react';

// ✅ Do
<Button variant="default" size="default">Save</Button>
<Button variant="destructive" size="sm"><Trash2 className="w-4 h-4" />Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost" size="icon"><Plus className="w-4 h-4" /></Button>

// ❌ Don't
<button className="bg-lime-400 text-black px-4 py-2 rounded">Save</button>
<button onClick={handleDelete}>✕ Delete</button>
```

**Links — use DS `<Link>`, not `<a>`:**

```tsx
import { Link } from '@avantodev/strata-design-system';

// ✅ Do
<Link href="/dashboard">Go to Dashboard</Link>

// ❌ Don't
<a href="/dashboard" className="text-lime-400 underline">Go to Dashboard</a>
```

---

### Icons reference

**Always import from `lucide-react`. Size with Tailwind classes.**

```tsx
import { ChevronRight, ArrowRight, X, Check, AlertCircle } from 'lucide-react';

// ✅ Do
<ChevronRight className="w-4 h-4" />
<Button variant="ghost" size="icon">
  <X className="w-4 h-4" />
</Button>

// ❌ Don't
<span>›</span>
<span>→</span>
<button>✕</button>
```

**Sizing convention:**

| Context | Class | strokeWidth |
|---------|-------|-------------|
| Inline with text | `w-4 h-4` | — |
| Standalone in button | `w-5 h-5` | — |
| Lighter visual weight | — | `strokeWidth={1.5}` |

---

### Forms

**Always use `<Field>` with its sub-components. Never write raw label/input/error HTML.**

```tsx
import {
  Field, FieldLabel, FieldDescription, FieldError,
  Input, Select, SelectTrigger, SelectContent, SelectItem, SelectValue,
  DatePicker, Textarea,
} from '@avantodev/strata-design-system';

// ✅ Do — text input
<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="you@example.com" />
  <FieldDescription>We'll never share your email.</FieldDescription>
  <FieldError>Please enter a valid email.</FieldError>
</Field>

// ✅ Do — date input
<Field>
  <FieldLabel>Delivery Date</FieldLabel>
  <DatePicker value={date} onChange={setDate} />
</Field>

// ❌ Don't
<Input type="date" value={date} onChange={...} />
```

**Select:**

```tsx
// ✅ Do
<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>

// ❌ Don't
<select className="border rounded px-2 py-1">
  <option value="a">Option A</option>
</select>
```

**React Hook Form integration:**

```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@avantodev/strata-design-system';
import { useForm } from 'react-hook-form';

const form = useForm<FormValues>();

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>
```

---

### Layout

**Use `<PageLayout>` for every page — never a raw `<div>` with padding and a manual heading.**

```tsx
import { PageLayout } from '@avantodev/strata-design-system';

// ✅ Do
<PageLayout
  heading="Dashboard"
  subheading="Overview of all activity"
  headerActions={<Button>New Item</Button>}
>
  {/* page content */}
</PageLayout>

// ❌ Don't
<div className="p-8">
  <h1 className="text-2xl font-bold">Dashboard</h1>
  {/* content */}
</div>
```

**Breadcrumbs — compound component pattern:**

```tsx
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@avantodev/strata-design-system';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

**Tabs:**

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@avantodev/strata-design-system';

<Tabs defaultValue="details">
  <TabsList>
    <TabsTrigger value="details">Details</TabsTrigger>
    <TabsTrigger value="history">History</TabsTrigger>
  </TabsList>
  <TabsContent value="details">...</TabsContent>
  <TabsContent value="history">...</TabsContent>
</Tabs>
```

---

### Overlays

**Dialog — use the compound component. Never roll a custom modal with `fixed inset-0`.**

```tsx
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from '@avantodev/strata-design-system';

// ✅ Do
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// ❌ Don't
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50">
    <div className="bg-white p-6 rounded-lg">...</div>
  </div>
)}
```

**Tooltip:**

```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from '@avantodev/strata-design-system';
import { AlertCircle } from 'lucide-react';

// ✅ Do
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <AlertCircle className="w-4 h-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>This action is permanent.</TooltipContent>
</Tooltip>
```

**Popover:**

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@avantodev/strata-design-system';

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open menu</Button>
  </PopoverTrigger>
  <PopoverContent>
    {/* content */}
  </PopoverContent>
</Popover>
```

---

## Summary

| Don't write | Use instead |
|------------|-------------|
| `<button>` | `<Button>` |
| `<a href>` | `<Link>` |
| `<input type="date">` | `<DatePicker>` |
| `<select>` | `<Select>` compound |
| `<h1>` / `<p>` with manual classes | `<Heading>` / `<Text>` |
| `<table>` | DS `<Table>` family |
| Custom modal with `fixed inset-0` | `<Dialog>` compound |
| Raw `<label>` + `<input>` + error `<p>` | `<Field>` wrapper |
| `text-zinc-900`, `text-red-500`, `bg-white` | Semantic tokens (`text-foreground`, `text-destructive`, `bg-card`) |
| `›`, `→`, `✕` | `lucide-react` icons |
| `'classA ' + className` | `cn('classA', className)` |
| `import from '../../storybook/...'` | `import from '@avantodev/strata-design-system'` |
