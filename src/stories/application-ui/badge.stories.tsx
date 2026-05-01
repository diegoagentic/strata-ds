import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../components/application-ui/badge';

/** Mirrors `badgeVariants` in the component — keep in sync when palette changes. */
const BADGE_VARIANTS = ['solid', 'soft', 'outline'] as const;

const BADGE_COLORS = [
  'zinc',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'brand',
] as const;

const meta = {
  title: '2. Application UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Small status or label chip built with CVA. **Variant** controls surface style (\`solid\` filled, \`soft\` tinted, \`outline\` bordered). **Color** picks the palette (Tailwind semantic colors plus \`brand\`). Use **asChild** to merge styles onto a single child element (e.g. a \`button\` or \`a\`) via Radix \`Slot\`.

### When to use
- Label states on records: "Activo", "Pendiente", "Vencido"
- Category tags on items in lists or tables
- Count indicators (unread, errors)
- Status chips next to headings or rows

### When NOT to use
- For longer text labels (> 3 words) → use a \`Tag\` or \`Card\` surface
- For interactive selection → use \`ToggleGroup\`
- For alert messages → use \`Alert\`

### Governance: status colors
Use \`bg-status-*\` tokens when coloring outside CVA's built-in colors.
**Never use raw hex or \`bg-green-600\` for semantic states.**

\`\`\`tsx
// ✅ Correct — DS status tokens
<Badge className="bg-status-success text-white">Activo</Badge>
<Badge className="bg-status-warning text-white">Pendiente</Badge>
<Badge className="bg-status-error text-white">Error</Badge>
<Badge className="bg-status-ai text-white">IA</Badge>

// ❌ Blocks commit in Tier 1 and 2
<Badge className="bg-[#098400]">Activo</Badge>
<Badge className="bg-green-600">Activo</Badge>
\`\`\`

### Token reference
| Token | Tailwind class | Use |
|-------|---------------|-----|
| \`--color-status-success\` | \`bg-status-success\` | Active, completed, match |
| \`--color-status-warning\` | \`bg-status-warning\` | Pending, review |
| \`--color-status-error\` | \`bg-status-error\` | Error, rejected |
| \`--color-status-info\` | \`bg-status-info\` | In progress, neutral |
| \`--color-status-ai\` | \`bg-status-ai\` | AI-generated content |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [...BADGE_VARIANTS],
      description: 'Surface style: solid (filled), soft (muted fill), or outline (border only).',
      table: { category: 'Appearance' },
    },
    color: {
      control: { type: 'select' },
      options: [...BADGE_COLORS],
      description: 'Palette key; pairs with variant in compound styles.',
      table: { category: 'Appearance' },
    },
    children: {
      control: { type: 'text' },
      description: 'Badge label. When asChild is on, this text is rendered inside the child element in the demo.',
      table: { category: 'Content' },
    },
    className: {
      control: { type: 'text' },
      description: 'Extra classes merged after variant/color styles.',
      table: { category: 'Appearance' },
    },
    asChild: {
      control: { type: 'boolean' },
      description:
        'If true, Badge styles apply to the single child (e.g. button). Demo wraps label in a native button.',
      table: { category: 'Behavior' },
    },
    title: {
      control: { type: 'text' },
      description: 'Native title tooltip (optional).',
      table: { category: 'Content' },
    },
    'aria-invalid': {
      control: { type: 'boolean' },
      description: 'Invalid state (focus ring / border use destructive tokens).',
      table: { category: 'Accessibility' },
    },
  },
  args: {
    children: 'Badge',
    variant: 'solid',
    color: 'zinc',
    asChild: false,
    className: '',
    title: '',
    'aria-invalid': false,
  },
  render: (args) => {
    const {
      children,
      asChild,
      className,
      title,
      variant,
      color,
      'aria-invalid': ariaInvalid,
      ...rest
    } = args;
    const trimmedClass = typeof className === 'string' && className.trim() ? className : undefined;
    const trimmedTitle = typeof title === 'string' && title.trim() ? title : undefined;

    if (asChild) {
      return (
        <Badge
          {...rest}
          asChild
          variant={variant}
          color={color}
          className={trimmedClass}
          title={trimmedTitle}
          aria-invalid={ariaInvalid || undefined}
        >
          <button type="button" className="cursor-default">
            {children}
          </button>
        </Badge>
      );
    }

    return (
      <Badge
        {...rest}
        variant={variant}
        color={color}
        className={trimmedClass}
        title={trimmedTitle}
        aria-invalid={ariaInvalid || undefined}
      >
        {children}
      </Badge>
    );
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BrandSolid: Story = {
  name: 'Brand / Solid',
  args: {
    variant: 'solid',
    color: 'brand',
    children: 'Brand',
  },
};

export const SoftWarning: Story = {
  name: 'Amber / Soft',
  args: {
    variant: 'soft',
    color: 'amber',
    children: 'Warning',
  },
};

export const OutlineError: Story = {
  name: 'Red / Outline',
  args: {
    variant: 'outline',
    color: 'red',
    children: 'Error',
  },
};

/** Status tokens applied directly via className — governance-compliant pattern. */
export const WithStatusTokens: Story = {
  name: 'With Status Tokens (Governance)',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="space-y-4 p-4 max-w-sm">
      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
        Correct — DS status tokens
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-status-success text-white">Activo</Badge>
        <Badge className="bg-status-warning text-white">Pendiente</Badge>
        <Badge className="bg-status-error text-white">Error</Badge>
        <Badge className="bg-status-info text-white">En proceso</Badge>
        <Badge className="bg-status-ai text-white">IA</Badge>
      </div>
      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
        Soft (10% opacity bg + colored text)
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-status-success/10 text-status-success">Activo</Badge>
        <Badge className="bg-status-warning/10 text-status-warning">Pendiente</Badge>
        <Badge className="bg-status-error/10 text-status-error">Error</Badge>
        <Badge className="bg-status-info/10 text-status-info">En proceso</Badge>
        <Badge className="bg-status-ai/10 text-status-ai">IA</Badge>
      </div>
    </div>
  ),
};
