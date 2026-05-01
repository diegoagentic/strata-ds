import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '@/utils';
import spacingData from '@/tokens/primitives/spacing.json';

const meta = {
  title: '1. Foundations/Spacing',
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

/** Token keys → Tailwind `w-*` (matches default spacing scale in Tailwind). */
const SPACING_WIDTH_CLASS: Record<string, string> = {
  '0': 'w-0 min-w-[2px] border border-lime-500',
  '1': 'w-1',
  '2': 'w-2',
  '3': 'w-3',
  '4': 'w-4',
  '5': 'w-5',
  '6': 'w-6',
  '8': 'w-8',
  '10': 'w-10',
  '11': 'w-11',
  '12': 'w-12',
  '16': 'w-16',
  '20': 'w-20',
  '24': 'w-24',
  '32': 'w-32',
  '40': 'w-40',
  '48': 'w-48',
  '56': 'w-56',
  '64': 'w-64',
};

function SpacingScale() {
  const { spacing } = spacingData;

  return (
    <div>
      <h3 className="mt-8 border-b border-border pb-2 text-xl font-semibold">Spacing Scale</h3>
      <div>
        {Object.entries(spacing).map(([name, token]) => (
          <div
            key={name}
            className="mb-2 flex items-center gap-4 border-b border-border py-2 last:border-b-0"
          >
            <div className="w-[140px] shrink-0">
              <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                spacing.{name}
              </span>
            </div>
            <div className="w-20 shrink-0">
              <span className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                {token.value}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div
                className={cn('h-6 rounded bg-brand-lime', SPACING_WIDTH_CLASS[name])}
              />
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
      <h1 className="mb-2 text-3xl font-bold">Spacing tokens</h1>
      <p className="mb-8 text-muted-foreground">
        Spacing scale values used throughout the design system.
      </p>
      <SpacingScale />
    </div>
  ),
};
