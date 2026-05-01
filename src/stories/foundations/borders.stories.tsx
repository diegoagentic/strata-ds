import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '@/utils';
import spacingData from '@/tokens/primitives/spacing.json';

const meta = {
  title: '1. Foundations/Borders',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Layout tokens covering the **spacing scale** (0 – 64, mapping to 0 – 16 rem), **border radius** (none through full/9999 px), and **border width** (0 – 8 px). These primitives are consumed by component-level tokens and Tailwind utilities to enforce consistent sizing across the design system.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** Token keys → Tailwind `rounded-*` (matches `spacing.json` borderRadius). */
const BORDER_RADIUS_CLASS: Record<string, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  base: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

/** Token keys → Tailwind `border-*` width (matches `spacing.json` borderWidth). */
const BORDER_WIDTH_CLASS: Record<string, string> = {
  '0': 'border-0',
  '1': 'border',
  '2': 'border-2',
  '4': 'border-4',
  '8': 'border-8',
};

function BorderRadiusScale() {
  const { borderRadius } = spacingData;

  return (
    <div>
      <h3 className="mt-8 border-b border-border pb-2 text-xl font-semibold">Border Radius</h3>
      <div className="mt-4 flex flex-wrap gap-6">
        {Object.entries(borderRadius).map(([name, token]) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <div
              className={cn(
                'size-20 border-2 border-brand-lime bg-zinc-100',
                BORDER_RADIUS_CLASS[name],
              )}
            />
            <div className="text-center">
              <div>
                <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                  {name}
                </span>
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">{token.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BorderWidthScale() {
  const { borderWidth } = spacingData;

  return (
    <div>
      <h3 className="mt-8 border-b border-border pb-2 text-xl font-semibold">Border Width</h3>
      <div className="mt-4 flex flex-wrap gap-6">
        {Object.entries(borderWidth).map(([name, token]) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <div
              className={cn(
                'size-20 rounded-lg border-zinc-700 bg-zinc-50',
                BORDER_WIDTH_CLASS[name],
              )}
            />
            <div className="text-center">
              <div>
                <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                  borderWidth.{name}
                </span>
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">{token.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <div className="p-6 font-sans">
      <h1 className="mb-2 text-3xl font-bold">Border tokens</h1>
      <p className="mb-8 text-muted-foreground">
        Border radius and border width values used throughout the design system.
      </p>

      <BorderRadiusScale />
      <BorderWidthScale />
    </div>
  ),
};
