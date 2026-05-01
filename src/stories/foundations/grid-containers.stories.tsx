import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '@/utils';

const meta = {
  title: '1. Foundations/Grid & Containers',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'CSS Grid column patterns (`grid-cols-*`) and responsive max-width containers (`max-w-screen-*`). For the spacing scale, see **Spacing**.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const gridLayouts = [
  {
    primitive: '12-col',
    token: 'grid-cols-12',
    usage: 'Default grid system',
    primary: true,
    gridClass: 'grid-cols-12',
    count: 12,
  },
  {
    primitive: '6-col',
    token: 'grid-cols-6',
    usage: 'Two-column and dense layouts',
    primary: true,
    gridClass: 'grid-cols-6',
    count: 6,
  },
  {
    primitive: '4-col',
    token: 'grid-cols-4',
    usage: 'Card grids, three-up',
    gridClass: 'grid-cols-4',
    count: 4,
  },
  {
    primitive: '3-col',
    token: 'grid-cols-3',
    usage: 'Simple tri-column layouts',
    gridClass: 'grid-cols-3',
    count: 3,
  },
  {
    primitive: '2-col',
    token: 'grid-cols-2',
    usage: 'Split views, form columns',
    gridClass: 'grid-cols-2',
    count: 2,
  },
] as const;

const containerSizes = [
  {
    primitive: 'sm',
    token: 'max-w-screen-sm',
    value: '640px',
    rem: '40rem',
    usage: 'Small content, forms',
    maxClass: 'max-w-screen-sm',
  },
  {
    primitive: 'md',
    token: 'max-w-screen-md',
    value: '768px',
    rem: '48rem',
    usage: 'Medium content, articles',
    maxClass: 'max-w-screen-md',
  },
  {
    primitive: 'lg',
    token: 'max-w-screen-lg',
    value: '1024px',
    rem: '64rem',
    usage: 'Large content, dashboards',
    primary: true,
    maxClass: 'max-w-screen-lg',
  },
  {
    primitive: 'xl',
    token: 'max-w-screen-xl',
    value: '1280px',
    rem: '80rem',
    usage: 'Wide marketing layouts',
    primary: true,
    maxClass: 'max-w-screen-xl',
  },
  {
    primitive: '2xl',
    token: 'max-w-screen-2xl',
    value: '1536px',
    rem: '96rem',
    usage: 'Maximum width content',
    maxClass: 'max-w-screen-2xl',
  },
] as const;

export const Default: Story = {
  render: () => (
    <div className="p-6 font-sans">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Grid &amp; containers</h1>
        <p className="text-muted-foreground">
          Grid column templates and container max-widths. Spacing scale lives in the Spacing foundation story.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Grid columns</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Use <code className="font-mono text-xs">grid</code> with{' '}
          <code className="font-mono text-xs">grid-cols-*</code> for column templates.
        </p>
        <div className="space-y-4">
          {gridLayouts.map((grid) => (
            <div
              key={grid.primitive}
              className={cn(
                'rounded-md border bg-card p-5',
                grid.primary ? 'border-foreground/25 dark:border-zinc-600' : 'border-border',
              )}
            >
              <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
                <div className="lg:w-28">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Pattern
                  </div>
                  <code className="font-mono text-sm font-semibold">{grid.primitive}</code>
                </div>
                <div className="lg:w-48">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Utility
                  </div>
                  <code className="rounded bg-muted px-2 py-1 font-mono text-xs">{grid.token}</code>
                </div>
                <div className="flex-1">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    When to use
                  </div>
                  <span className="text-sm text-muted-foreground">{grid.usage}</span>
                </div>
                {grid.primary ? (
                  <span className="shrink-0 rounded bg-muted px-2 py-1 text-xs font-semibold dark:border dark:border-zinc-500">
                    Primary
                  </span>
                ) : null}
              </div>
              <div className={cn('grid gap-2', grid.gridClass)}>
                {Array.from({ length: grid.count }, (_, index) => (
                  <div
                    key={index}
                    className="flex h-12 items-center justify-center rounded bg-muted text-xs text-muted-foreground"
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Container widths</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          <code className="font-mono text-xs">max-w-screen-*</code> matches Tailwind breakpoint widths (640px–1536px).
        </p>
        <div className="space-y-3">
          {containerSizes.map((container) => (
            <div
              key={container.primitive}
              className={cn(
                'rounded-md border bg-card p-5',
                'primary' in container && container.primary
                  ? 'border-foreground/25 dark:border-zinc-600'
                  : 'border-border',
              )}
            >
              <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
                <div className="w-16">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Size</div>
                  <code className="font-mono text-sm font-semibold">{container.primitive}</code>
                </div>
                <div className="lg:w-52">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Utility
                  </div>
                  <code className="rounded bg-muted px-2 py-1 font-mono text-xs">{container.token}</code>
                </div>
                <div className="w-36">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Max width
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {container.value} / {container.rem}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    When to use
                  </div>
                  <span className="text-sm text-muted-foreground">{container.usage}</span>
                </div>
                {'primary' in container && container.primary ? (
                  <span className="shrink-0 rounded bg-muted px-2 py-1 text-xs font-semibold dark:border dark:border-zinc-500">
                    Primary
                  </span>
                ) : null}
              </div>
              <div className="w-full overflow-x-auto rounded-md border border-dashed border-border bg-muted/30 p-2">
                <div className={cn('h-3 min-h-3 rounded bg-brand-lime', container.maxClass, 'w-full')} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
