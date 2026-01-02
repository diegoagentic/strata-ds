# White Label Design System

A production-ready, token-based React component library with full TypeScript support and dark mode.

## Features

- 🎨 **30+ Components** - Production-ready UI components
- 🎯 **Token-Based** - 201 design tokens for easy customization
- 🌗 **Dark Mode** - Built-in dark mode support
- 📦 **Tree-Shakeable** - Optimized bundle size
- 🔷 **TypeScript** - Full type safety
- ♿ **Accessible** - ARIA compliant components
- 🎭 **Themeable** - Easy customization via CSS variables

## Installation

```bash
npm install @whitebrand/design-system
```

## Quick Start

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@whitebrand/design-system';
import '@whitebrand/design-system/styles';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Components

### Core UI (5)
- Button, Input, Card, Badge, Modal

### Forms (7)
- Checkbox, Switch, Label, Textarea, Select, Radio, RadioGroup

### Feedback (3)
- Alert, Progress, Tooltip

### Navigation (2)
- Breadcrumb, Pagination

### Data Display (2)
- Table, Accordion, Avatar

### Overlays (4)
- Dropdown, Dialog, Popover, Toast

### Layout & Utilities (7)
- Separator, Tabs, Skeleton, Spinner, Slider, AspectRatio, ScrollArea

## Theming

Customize the design system using CSS variables:

```tsx
import { ThemeProvider } from '@whitebrand/design-system';

const customTheme = {
  '--button-primary-background': '#8B5CF6',
  '--button-primary-text': '#FFFFFF',
  '--color-interactive-default': '#8B5CF6',
};

<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>
```

Or globally in CSS:

```css
:root {
  --button-primary-background: #8B5CF6;
  --color-interactive-default: #8B5CF6;
}

.dark {
  --button-primary-background: #A78BFA;
}
```

## Design Tokens

Access design tokens programmatically:

```tsx
import { tokens } from '@whitebrand/design-system/tokens';

console.log(tokens['color-interactive-default']); // #18181b
```

## Documentation

For detailed component documentation, see [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { ButtonProps, CardProps } from '@whitebrand/design-system';
```

## Tree-Shaking

Import only what you need:

```tsx
// ✅ Tree-shakeable
import { Button, Input } from '@whitebrand/design-system';

// ❌ Imports everything
import * as DS from '@whitebrand/design-system';
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT © [Your Name]

## Contributing

Contributions are welcome! Please read our contributing guidelines.

## Links

- [Documentation](https://github.com/yourusername/whitebrand-design-system)
- [Component Guide](./COMPONENT_GUIDE.md)
- [NPM Package](https://www.npmjs.com/package/@whitebrand/design-system)
- [Issues](https://github.com/yourusername/whitebrand-design-system/issues)