import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '@/utils';

const meta = {
  title: '1. Foundations/Elevation & Shadows',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Elevation uses the theme shadow scale (`shadow-sm` through `shadow-xl`) plus glow tokens (`shadow-glow-*`) for dark-friendly halos. Pair depth with stacking (`z-10`–`z-50`) for predictable overlays.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

type ShadowLevel = {
  primitive: string;
  token: string;
  usage: string;
  elevation: string;
  zIndex: string;
  primary?: boolean;
};

const shadowLevels: ShadowLevel[] = [
  {
    primitive: 'sm',
    token: 'shadow-sm',
    usage: 'Subtle elevation for cards, dropdowns, tooltips',
    elevation: '1dp',
    zIndex: 'z-10',
  },
  {
    primitive: 'md',
    token: 'shadow-md',
    usage: 'Standard elevation for cards, popovers, floating elements',
    elevation: '4dp',
    zIndex: 'z-20',
    primary: true,
  },
  {
    primitive: 'lg',
    token: 'shadow-lg',
    usage: 'Higher elevation for modals, slide-overs, overlays',
    elevation: '8dp',
    zIndex: 'z-30',
    primary: true,
  },
  {
    primitive: 'xl',
    token: 'shadow-xl',
    usage: 'Maximum elevation for command palettes, critical dialogs',
    elevation: '16dp',
    zIndex: 'z-50',
  },
  {
    primitive: 'glow-sm',
    token: 'shadow-glow-sm',
    usage: 'Soft halo for small surfaces (works with dark backgrounds)',
    elevation: 'Glow',
    zIndex: 'z-10',
  },
  {
    primitive: 'glow-md',
    token: 'shadow-glow-md',
    usage: 'Ambient glow for cards and panels',
    elevation: 'Glow',
    zIndex: 'z-10',
    primary: true,
  },
  {
    primitive: 'glow-lg',
    token: 'shadow-glow-lg',
    usage: 'Strong glow for focused or modal surfaces',
    elevation: 'Glow',
    zIndex: 'z-20',
  },
];

/** Glow previews use arbitrary values such as `shadow-[var(--shadow-glow-sm)]` so box-shadow resolves from tokens. */
const SHADOW_PREVIEW_CLASS: Record<string, string> = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  'glow-sm': 'shadow-[var(--shadow-glow-sm)]',
  'glow-md': 'shadow-[var(--shadow-glow-md)]',
  'glow-lg': 'shadow-[var(--shadow-glow-lg)]',
};

const zIndexRows = [
  { primitive: '10', token: 'z-10', usage: 'Base elevated elements', shadow: 'shadow-sm' },
  { primitive: '20', token: 'z-20', usage: 'Dropdowns, popovers', shadow: 'shadow-md', primary: true },
  { primitive: '30', token: 'z-30', usage: 'Modals, overlays', shadow: 'shadow-lg', primary: true },
  { primitive: '50', token: 'z-50', usage: 'Critical UI, toasts', shadow: 'shadow-xl' },
] as const;

const componentExamples = [
  {
    name: 'Data card',
    shadowClass: 'shadow-sm dark:shadow-[var(--shadow-glow-sm)]',
    code: 'shadow-sm dark:shadow-[var(--shadow-glow-sm)]',
    description: 'Subtle depth for dense content cards.',
  },
  {
    name: 'Dropdown menu',
    shadowClass: 'shadow-md dark:shadow-[var(--shadow-glow-md)]',
    code: 'shadow-md dark:shadow-[var(--shadow-glow-md)]',
    description: 'Medium depth for floating menus.',
  },
  {
    name: 'Modal dialog',
    shadowClass: 'shadow-lg dark:shadow-[var(--shadow-glow-lg)]',
    code: 'shadow-lg dark:shadow-[var(--shadow-glow-lg)]',
    description: 'Strong separation for overlays.',
  },
  {
    name: 'Command palette',
    shadowClass: 'shadow-xl dark:shadow-[var(--shadow-glow-lg)]',
    code: 'shadow-xl dark:shadow-[var(--shadow-glow-lg)]',
    description: 'Highest emphasis for critical flows.',
  },
] as const;

const glowExamples = [
  {
    name: 'Interactive element',
    shadowClass: 'shadow-[var(--shadow-glow-sm)]',
    description: 'Light halo on buttons and inputs in dark UI.',
  },
  {
    name: 'Card / surface',
    shadowClass: 'shadow-[var(--shadow-glow-md)]',
    description: 'Default ambient separation for panels.',
  },
  {
    name: 'Active / modal',
    shadowClass: 'shadow-[var(--shadow-glow-lg)]',
    description: 'Strong backlight for focus and modals.',
  },
] as const;

/** Reference only — keeps Tailwind scanning composite shadow strings. */
const COMPOSITE_SHADOW_CLASSES = componentExamples.map((c) => c.shadowClass);
void COMPOSITE_SHADOW_CLASSES;

export const Default: Story = {
  render: () => (
    <div className="p-6 font-sans">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Elevation &amp; shadows</h1>
        <p className="text-muted-foreground">
          Shadow scale and glow tokens for depth; combine with z-index for stacking.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Shadow scale</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Standard keys map to <code className="font-mono text-xs">--shadow-*</code> in tokens. Medium and large are
          the default choices for floating UI.
        </p>
        <div className="space-y-6">
          {shadowLevels.map((shadow) => (
            <div
              key={shadow.primitive}
              className={cn(
                'rounded-md border bg-card p-6',
                shadow.primary ? 'border-foreground/25 dark:border-zinc-600' : 'border-border',
              )}
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Primitive
                      </div>
                      <code className="font-mono text-lg font-semibold">{shadow.primitive}</code>
                    </div>
                    <div className="ml-0 sm:ml-4">
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Utility
                      </div>
                      <code className="rounded bg-muted px-2 py-1 font-mono text-xs">{shadow.token}</code>
                    </div>
                    {shadow.primary ? (
                      <span className="ml-auto rounded bg-muted px-2 py-1 text-xs font-semibold dark:border dark:border-zinc-500">
                        Primary
                      </span>
                    ) : null}
                  </div>
                  <div className="mb-4 space-y-3">
                    <div>
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Usage
                      </div>
                      <p className="text-sm text-muted-foreground">{shadow.usage}</p>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Elevation
                        </div>
                        <span className="text-sm font-semibold text-foreground">{shadow.elevation}</span>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Z-index hint
                        </div>
                        <code className="font-mono text-sm text-muted-foreground">{shadow.zIndex}</code>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center justify-center rounded-lg bg-muted/60 p-8 md:p-12 dark:bg-zinc-950">
                    <div
                      className={cn(
                        'flex h-32 w-56 items-center justify-center rounded-md bg-card',
                        SHADOW_PREVIEW_CLASS[shadow.primitive],
                      )}
                    >
                      <span className="text-sm font-semibold text-muted-foreground">{shadow.elevation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Side-by-side comparison</h2>
        <div className="rounded-lg bg-muted/60 p-8 dark:bg-zinc-950 md:p-12">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {shadowLevels.map((shadow) => (
              <div key={shadow.primitive} className="text-center">
                <div
                  className={cn(
                    'mb-4 flex h-40 w-full items-center justify-center rounded-md bg-card',
                    SHADOW_PREVIEW_CLASS[shadow.primitive],
                  )}
                >
                  <div>
                    <div className="mb-1 text-2xl font-bold text-foreground">{shadow.primitive.toUpperCase()}</div>
                    <div className="text-xs text-muted-foreground">{shadow.elevation}</div>
                  </div>
                </div>
                <code className="font-mono text-xs text-muted-foreground">{shadow.token}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Component applications</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {componentExamples.map((example) => (
            <div key={example.name} className="rounded-lg bg-muted/60 p-8 dark:bg-zinc-950">
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-muted-foreground">{example.name}</div>
              <div className={cn('mb-3 rounded-md bg-card p-6', example.shadowClass)}>
                <div className="flex h-20 items-center justify-center">
                  <code className="font-mono text-xs text-muted-foreground">{example.code}</code>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{example.description}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-4 mt-8 text-lg font-bold text-foreground">Dark-mode glows</h3>
        <p className="mb-6 text-sm text-muted-foreground">
          Glow utilities layer light spill without heavy drop shadows—toggle the Storybook theme to compare.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {glowExamples.map((example) => (
            <div key={example.name} className="rounded-lg bg-muted/60 p-8 dark:bg-zinc-950">
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-muted-foreground">{example.name}</div>
              <div
                className={cn(
                  'mb-3 rounded-md border border-border bg-card p-6',
                  example.shadowClass,
                )}
              >
                <div className="flex h-20 items-center justify-center">
                  <code className="font-mono text-xs text-muted-foreground">{example.shadowClass}</code>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{example.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Elevation hierarchy</h2>
        <div className="rounded-lg bg-muted/60 p-8 dark:bg-zinc-950 md:p-12">
          <div className="relative h-96">
            <div className="absolute left-0 top-0 z-10 w-64 rounded-md bg-card p-6 shadow-sm transition-shadow duration-300 dark:shadow-[var(--shadow-glow-sm)]">
              <div className="mb-2 text-sm font-semibold text-foreground">Base layer</div>
              <code className="font-mono text-xs text-muted-foreground">shadow-sm</code>
            </div>
            <div className="absolute left-20 top-16 z-20 w-64 rounded-md bg-card p-6 shadow-md transition-shadow duration-300 dark:shadow-[var(--shadow-glow-md)]">
              <div className="mb-2 text-sm font-semibold text-foreground">Card layer</div>
              <code className="font-mono text-xs text-muted-foreground">shadow-md</code>
            </div>
            <div className="absolute left-40 top-32 z-30 w-64 rounded-md bg-card p-6 shadow-lg transition-shadow duration-300 dark:shadow-[var(--shadow-glow-lg)]">
              <div className="mb-2 text-sm font-semibold text-foreground">Modal layer</div>
              <code className="font-mono text-xs text-muted-foreground">shadow-lg</code>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Z-index tokens</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Use Tailwind <code className="font-mono text-xs">z-*</code> consistently with shadow strength.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {zIndexRows.map((row) => (
            <div
              key={row.primitive}
              className={cn(
                'rounded-md border bg-card p-5',
                row.primary ? 'border-foreground/25 dark:border-zinc-600' : 'border-border',
              )}
            >
              <div className="mb-3">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Value</div>
                <code className="font-mono text-xl font-semibold">{row.primitive}</code>
              </div>
              <div className="mb-3">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Utility
                </div>
                <code className="rounded bg-muted px-2 py-1 font-mono text-xs">{row.token}</code>
              </div>
              <div className="mb-3">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Pairs with
                </div>
                <code className="font-mono text-xs text-muted-foreground">{row.shadow}</code>
              </div>
              <p className="text-xs text-muted-foreground">{row.usage}</p>
              {row.primary ? (
                <span className="mt-3 inline-block rounded bg-muted px-2 py-1 text-xs font-semibold dark:border dark:border-zinc-500">
                  Primary
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
