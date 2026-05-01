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
          'Button built with class-variance-authority and Radix Slot. **Variants:** default, destructive, outline, secondary, ghost, link, brand, accent. **Sizes:** default, sm, lg, icon. **Shape:** default or pill (common for brand CTAs). Use **asChild** to merge props onto a child element (e.g. `<a>`).',
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
