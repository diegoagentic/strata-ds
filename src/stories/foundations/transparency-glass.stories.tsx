import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '@/utils';
import { Droplets, Layers } from 'lucide-react';

const meta = {
  title: '1. Foundations/Transparency & Glass',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Glass surfaces use design tokens exposed as Tailwind colors: `bg-glass-navbar`, `bg-glass-popover`, `border-glass-navbar-border`, `border-glass-popover-border`, plus `shadow-[var(--shadow-glass-lg)]` and `backdrop-blur-xl`. Variables `--blur-glass-xl` / `--shadow-glass-lg` live on `:root` and `.dark`.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/**
 * Glass stack: use theme-backed utilities (`bg-glass-*`, `border-glass-*-border`, `shadow-[var(--shadow-glass-lg)]`)
 * so tokens (including alpha) compile into the preview CSS. Pair `backdrop-blur-xl` with busy content behind the
 * panel (avoid wrapping glass in a parent `overflow-hidden`).
 */
const glassNavbarClass = cn(
  'z-10 flex border border-solid border-glass-navbar-border bg-glass-navbar shadow-[var(--shadow-glass-lg)] backdrop-blur-xl backdrop-saturate-150',
);

const glassPopoverClass = cn(
  'z-10 flex flex-col gap-4 rounded-xl border border-solid border-glass-popover-border bg-glass-popover p-5 shadow-[var(--shadow-glass-lg)] backdrop-blur-xl backdrop-saturate-150',
);

function TokenRow({ label, tokenName }: { label: string; tokenName: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-md border border-border bg-card p-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</div>
        <code className="font-mono text-sm text-foreground">{tokenName}</code>
      </div>
      <code className="font-mono text-xs text-muted-foreground">var({tokenName})</code>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <div className="p-6 font-sans">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Transparency &amp; Glassmorphism</h1>
        <p className="text-muted-foreground">
          Standardized tokens for glass effects, blurs, and translucent surfaces.
        </p>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-foreground">Glass surfaces</h2>

      <div className="relative isolate mb-12 rounded-xl bg-zinc-100 p-8 dark:bg-zinc-950 md:p-12">
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-20 [background-size:16px_16px] dark:bg-[radial-gradient(#6366f1_1px,transparent_1px)]" />
        <div className="pointer-events-none absolute left-1/4 top-1/4 size-32 animate-pulse rounded-full bg-blue-500 opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 size-40 animate-pulse rounded-full bg-purple-500 opacity-20 blur-3xl [animation-delay:700ms]" />

        <div className="relative flex flex-col gap-12">
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="w-full md:w-1/2">
              {/*
                Glass sits outside the overflow-hidden layer so backdrop-filter can sample the busy background.
              */}
              <div className="relative isolate h-[200px] rounded-xl border border-border shadow-sm">
                <div className="absolute inset-0 overflow-hidden rounded-xl bg-background/50 dark:bg-zinc-900/50">
                  <div className="absolute inset-0 space-y-4 p-4">
                    <div className="mb-8 h-8 w-3/4 rounded bg-muted" />
                    <div className="space-y-2">
                      <div className="h-4 w-full rounded bg-muted" />
                      <div className="h-4 w-full rounded bg-muted" />
                      <div className="h-4 w-5/6 rounded bg-muted" />
                    </div>
                    <div className="space-y-2 pt-4">
                      <div className="h-4 w-full rounded bg-muted" />
                      <div className="h-4 w-4/5 rounded bg-muted" />
                    </div>
                    <div className="absolute right-10 top-10 size-16 rounded-full bg-blue-500 opacity-50 blur-xl" />
                    <div className="absolute bottom-10 left-10 size-20 rounded-full bg-purple-500 opacity-50 blur-xl" />
                  </div>
                </div>
                <div
                  className={cn(
                    'absolute inset-x-4 top-4 flex h-14 items-center justify-between rounded-lg px-4 transition-all',
                    glassNavbarClass,
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    <div className="h-2 w-20 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  </div>
                  <div className="flex gap-2">
                    <div className="size-6 rounded bg-zinc-400/20" />
                    <div className="size-6 rounded bg-zinc-400/20" />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-sm italic text-muted-foreground">
                &quot;Navbar glass&quot; overlaying content
              </p>
            </div>

            <div className="w-full space-y-4 md:w-1/2">
              <div>
                <h3 className="text-lg font-bold text-foreground">Navbar glass</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  High transparency for navigation bars to blend with content while maintaining legibility.
                </p>
              </div>
              <div className="space-y-3">
                <TokenRow label="Background" tokenName="--color-glass-navbar" />
                <TokenRow label="Border" tokenName="--color-glass-navbar-border" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="relative isolate flex h-[240px] items-center justify-center rounded-xl border border-border shadow-sm">
                <div className="absolute inset-0 overflow-hidden rounded-xl bg-muted/50 dark:bg-zinc-900">
                  <div className="absolute -right-8 -top-8 size-64 rounded-full bg-indigo-500/20 blur-3xl" />
                  <div className="absolute -bottom-8 -left-8 size-64 rounded-full bg-rose-500/20 blur-3xl" />
                  <div className="absolute inset-0 bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] opacity-20 [background-size:24px_24px]" />
                </div>
                <div className={cn('relative w-64', glassPopoverClass)}>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-xs font-bold text-white">
                      UI
                    </div>
                    <div>
                      <div className="h-4 w-24 rounded bg-foreground/10 dark:bg-white/20" />
                      <div className="mt-1.5 h-3 w-16 rounded bg-foreground/5 dark:bg-white/10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-foreground/5 dark:bg-white/5" />
                    <div className="h-2 w-5/6 rounded bg-foreground/5 dark:bg-white/5" />
                  </div>
                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      className="flex-1 rounded py-1.5 text-xs font-medium bg-foreground text-background dark:bg-white dark:text-zinc-900"
                    >
                      Action
                    </button>
                    <button
                      type="button"
                      className="flex-1 rounded border border-border py-1.5 text-xs font-medium transition-colors hover:bg-muted"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-sm italic text-muted-foreground">
                &quot;Popover glass&quot; for cards and dropdowns
              </p>
            </div>

            <div className="w-full space-y-4 md:w-1/2">
              <div>
                <h3 className="text-lg font-bold text-foreground">Popover glass</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Higher opacity for overlaid interactive elements for readability on busy backgrounds.
                </p>
              </div>
              <div className="space-y-3">
                <TokenRow label="Background" tokenName="--color-glass-popover" />
                <TokenRow label="Border" tokenName="--color-glass-popover-border" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-foreground">Utilities</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <Droplets className="size-5 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Blur intensity</h3>
          </div>
          <div className="mb-3 flex items-center justify-between rounded border border-border bg-muted/50 p-3">
            <code className="font-mono text-sm">--blur-glass-xl</code>
            <span className="text-xs text-muted-foreground">24px</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Token <code className="rounded bg-muted px-1 font-mono text-xs">--blur-glass-xl</code> is 24px; pair with{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">backdrop-blur-xl</code> (same size) or{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">backdrop-blur-[length:var(--blur-glass-xl)]</code>.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-3">
            <Layers className="size-5 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Glass shadow</h3>
          </div>
          <div className="mb-3 flex items-center justify-between rounded border border-border bg-muted/50 p-3">
            <code className="font-mono text-sm">--shadow-glass-lg</code>
            <span className="text-xs text-muted-foreground">Soft elevation</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Apply with{' '}
            <code className="rounded bg-muted px-1 font-mono text-xs">shadow-[var(--shadow-glass-lg)]</code> (arbitrary
            value; references the token on <code className="font-mono text-xs">:root</code> /{' '}
            <code className="font-mono text-xs">.dark</code>).
          </p>
          <div className="relative isolate mt-4 h-24 rounded-lg border border-border">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-900" />
              <div className="pointer-events-none absolute left-2 top-2 size-14 rounded-full bg-blue-500/50 blur-lg" />
              <div className="pointer-events-none absolute bottom-2 right-2 size-16 rounded-full bg-purple-500/50 blur-lg" />
            </div>
            <div className="absolute inset-2 flex items-center justify-center rounded-md border border-solid border-glass-navbar-border bg-glass-navbar px-3 text-center text-xs font-medium text-foreground shadow-[var(--shadow-glass-lg)] backdrop-blur-xl backdrop-saturate-150">
              bg-glass-navbar + blur
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
