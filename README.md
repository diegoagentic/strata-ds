# Strata Design System

A technical, functional, and precise design system operating as the intelligence layer that unifies data, workflows, and AI across the ecosystem. Built with React, TypeScript, and a robust token architecture.

## Features

- 🎨 **Strata Identity** - Implements the "Volt Lime" signal color and strict Monochrome palette.
- 🎯 **Token-Based** - Comprehensive JSON-based token architecture (Primitive -> Semantic -> Component).
- 🔠 **Typography** - "Inter" for system clarity and "PP Monument Extended" for brand presence.
- 🌗 **Dark Mode** - Built-in dark mode with deep graphite tones.
- 📦 **Tree-Shakeable** - Optimized bundle size.
- 🔷 **TypeScript** - Full type safety.
- ♿ **Accessible** - ARIA compliant components.

## Installation

```bash
npm install @strata/design-system
```

## Quick Start

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@strata/design-system';
import '@strata/design-system/styles';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-brand">Welcome to Strata</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Initialize System</Button>
      </CardContent>
    </Card>
  );
}
```

## Documentation

### Foundations
- **Colors**: Volt Lime (#D6FF3C) signal color, Monochrome structural palette.
- **Typography**: Inter (Body), PP Monument Extended (Display).
- **Branding**: Official logo assets and usage guidelines.

For detailed component documentation, see [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md).

## Components

### Core UI
- Button, Input, Card, Badge, Modal

### Forms
- Checkbox, Switch, Label, Textarea, Select, Radio, RadioGroup

### Feedback
- Alert, Progress, Tooltip

### Navigation
- Breadcrumb, Pagination

### Data Display
- Table, Accordion, Avatar

### Overlays
- Dropdown, Dialog, Popover, Toast

### Layout & Utilities
- Sidebar, Separator, Tabs, Skeleton, Spinner, Slider, ScrollArea

## Theming

Customize the design system using the generated CSS tokens:

```css
:root {
  --color-brand-lime: #D6FF3C;
  --font-brand: 'PP Monument Extended', sans-serif;
}
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT © Strata Team