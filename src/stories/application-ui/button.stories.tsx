import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';
import { Button } from '../../components/application-ui/button';
import {
  BUTTON_SHAPE_OPTIONS,
  BUTTON_SIZE_OPTIONS,
  BUTTON_VARIANT_OPTIONS,
} from '@/utils/story-variants';

const meta = {
  title: '2. Application UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `Button built with CVA and Radix Slot.

**Variants:** default (brand-300 fill), destructive (red), outline (border only), secondary (zinc tinted), ghost (hover only), link (underline), brand (same as default, explicit), accent (indigo).
**Sizes:** default (h-9), sm (h-8), lg (h-10), icon (9×9 square).
**Shape:** default (rounded-md) or pill (rounded-full) — pill is the standard for brand CTAs.

### When to use
- **default / brand** — primary CTA, one per screen section
- **outline** — secondary action alongside a primary button
- **ghost** — icon triggers in toolbars, table rows, inline controls
- **destructive** — irreversible actions (delete, revoke)
- **link** — inline navigational action inside text
- **accent** — indigo highlight action for feature promotion

### When NOT to use
- Don't use \`default\` for 3+ sibling actions — use outline or ghost
- Don't use raw \`<button>\` tags — always use this component
- Don't add \`onClick\` to navigation → use \`asChild\` with \`<Link>\`

### Token reference
| Token | Used by |
|-------|---------|
| \`bg-brand-300\` | default / brand light |
| \`bg-brand-500\` | default / brand dark |
| \`border-border\` | outline variant |
| \`text-foreground\` | outline, ghost |
| \`bg-accent\` | ghost hover bg |
| \`ring-ring/50\` | focus ring |
| \`border-destructive\` | aria-invalid ring |

### Anti-patterns
\`\`\`tsx
// ❌ Raw button element — no DS styles
<button className="px-4 py-2 bg-[#E6F993]">Submit</button>

// ❌ Wrong variant for destructive action
<Button variant="default" onClick={deleteRecord}>Delete</Button>

// ✅ Correct
<Button variant="destructive" onClick={deleteRecord}>Delete</Button>
<Button asChild variant="ghost"><Link to="/settings">Settings</Link></Button>
\`\`\``,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [...BUTTON_VARIANT_OPTIONS],
      description: 'Visual style.',
      table: { category: 'Appearance' },
    },
    size: {
      control: 'select',
      options: [...BUTTON_SIZE_OPTIONS],
      description: 'Height and padding. Use icon for square icon-only buttons.',
      table: { category: 'Appearance' },
    },
    shape: {
      control: 'select',
      options: [...BUTTON_SHAPE_OPTIONS],
      description: 'Corner radius; pill is often used with brand buttons.',
      table: { category: 'Appearance' },
    },
    asChild: {
      control: 'boolean',
      description:
        'When true, merges props onto the single child via Radix Slot (Playground wraps text in a demo link).',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction and lowers opacity.',
      table: { category: 'Behavior' },
    },
    children: {
      control: 'text',
      description: 'Button label (ignored for icon size in Playground when not using asChild—use text or switch size).',
      table: { category: 'Content' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Every variant × size, pill shape, asChild link, and disabled states. */
export const Showcase: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-10 bg-background p-4 py-8 rounded-lg">
      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Variants × sizes</h3>
        <p className="text-sm text-muted-foreground">
          Each row is one variant; columns are sm, default, lg, and icon (plus icon).
        </p>
        <div className="mt-4 space-y-6">
          {BUTTON_VARIANT_OPTIONS.map((variant) => (
            <div key={variant}>
              <p className="mb-2 text-xs font-medium capitalize text-muted-foreground">{variant}</p>
              <div className="flex flex-wrap items-center gap-3">
                {BUTTON_SIZE_OPTIONS.map((size) => (
                  <Button key={size} variant={variant} size={size}>
                    {size === 'icon' ? <Plus aria-hidden /> : `${variant} · ${size}`}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Shape: pill</h3>
        <p className="text-sm text-muted-foreground">Pill radius; often paired with brand-style CTAs.</p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Button variant="brand" shape="pill">
            Brand pill
          </Button>
          <Button variant="default" shape="pill">
            Default pill
          </Button>
          <Button variant="accent" shape="pill" size="lg">
            Accent large pill
          </Button>
          <Button variant="outline" shape="pill" size="sm">
            Outline sm pill
          </Button>
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">asChild → anchor</h3>
        <p className="text-sm text-muted-foreground">Same styles merged onto a child <code className="text-xs">&lt;a&gt;</code>.</p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Button asChild variant="default">
            <a href="#button-showcase" onClick={(e) => e.preventDefault()}>
              Default as link
            </a>
          </Button>
          <Button asChild variant="link">
            <a href="#button-showcase" onClick={(e) => e.preventDefault()}>
              Link variant as anchor
            </a>
          </Button>
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Disabled</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Button disabled>Disabled default</Button>
          <Button disabled variant="outline">
            Disabled outline
          </Button>
          <Button disabled variant="brand" shape="pill">
            Disabled brand pill
          </Button>
        </div>
      </section>
    </div>
  ),
};

/** Tweak variant, size, shape, disabled, and asChild via Controls. */
export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    shape: 'default',
    disabled: false,
    asChild: false,
  },
  render: (args) => {
    const { asChild, children, ...rest } = args;
    if (asChild) {
      return (
        <Button {...rest} asChild>
          <a href="#playground" onClick={(e) => e.preventDefault()}>
            {children}
          </a>
        </Button>
      );
    }
    if (rest.size === 'icon') {
      return (
        <Button {...rest} aria-label="Add">
          <Plus />
        </Button>
      );
    }
    return <Button {...rest}>{children}</Button>;
  },
};
