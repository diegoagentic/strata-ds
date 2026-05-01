import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '@/utils';
import colorsData from '@/tokens/primitives/colors.json';
import semanticColorsData from '@/tokens/semantic/colors.json';

/**
 * Literal `bg-*` names referenced dynamically below; keeps Tailwind v4 scanning these utilities.
 * Regenerate if primitives or semantic color keys change (see repo script or: merge keys → `bg-\${...}`).
 */
const TAILWIND_COLOR_SWATCH_BG_CLASSES = [
  'bg-accent',
  'bg-accent-foreground',
  'bg-amber-50',
  'bg-amber-100',
  'bg-amber-200',
  'bg-amber-300',
  'bg-amber-400',
  'bg-amber-500',
  'bg-amber-600',
  'bg-amber-700',
  'bg-amber-800',
  'bg-amber-900',
  'bg-amber-950',
  'bg-background',
  'bg-black',
  'bg-blue-50',
  'bg-blue-100',
  'bg-blue-200',
  'bg-blue-300',
  'bg-blue-400',
  'bg-blue-500',
  'bg-blue-600',
  'bg-blue-700',
  'bg-blue-800',
  'bg-blue-900',
  'bg-blue-950',
  'bg-border',
  'bg-brand-50',
  'bg-brand-100',
  'bg-brand-200',
  'bg-brand-300',
  'bg-brand-400',
  'bg-brand-500',
  'bg-brand-600',
  'bg-brand-700',
  'bg-brand-800',
  'bg-brand-900',
  'bg-brand-950',
  'bg-brand-lime',
  'bg-card',
  'bg-card-foreground',
  'bg-chart-1',
  'bg-chart-2',
  'bg-chart-3',
  'bg-chart-4',
  'bg-chart-5',
  'bg-destructive',
  'bg-destructive-foreground',
  'bg-foreground',
  'bg-info',
  'bg-info-border',
  'bg-info-foreground',
  'bg-green-50',
  'bg-green-100',
  'bg-green-200',
  'bg-green-300',
  'bg-green-400',
  'bg-green-500',
  'bg-green-600',
  'bg-green-700',
  'bg-green-800',
  'bg-green-900',
  'bg-green-950',
  'bg-indigo-50',
  'bg-indigo-100',
  'bg-indigo-200',
  'bg-indigo-300',
  'bg-indigo-400',
  'bg-indigo-500',
  'bg-indigo-600',
  'bg-indigo-700',
  'bg-indigo-800',
  'bg-indigo-900',
  'bg-indigo-950',
  'bg-input',
  'bg-input-background',
  'bg-mono-deepGraphite',
  'bg-mono-offBlack',
  'bg-mono-offWhite',
  'bg-mono-softGray',
  'bg-muted',
  'bg-muted-foreground',
  'bg-popover',
  'bg-popover-foreground',
  'bg-primary',
  'bg-primary-foreground',
  'bg-red-50',
  'bg-red-100',
  'bg-red-200',
  'bg-red-300',
  'bg-red-400',
  'bg-red-500',
  'bg-red-600',
  'bg-red-700',
  'bg-red-800',
  'bg-red-900',
  'bg-red-950',
  'bg-ring',
  'bg-secondary',
  'bg-secondary-foreground',
  'bg-sidebar',
  'bg-sidebar-accent',
  'bg-sidebar-accent-foreground',
  'bg-sidebar-border',
  'bg-sidebar-foreground',
  'bg-sidebar-primary',
  'bg-sidebar-primary-foreground',
  'bg-sidebar-ring',
  'bg-success',
  'bg-success-foreground',
  'bg-warning',
  'bg-warning-foreground',
  'bg-white',
  'bg-zinc-50',
  'bg-zinc-100',
  'bg-zinc-200',
  'bg-zinc-300',
  'bg-zinc-400',
  'bg-zinc-500',
  'bg-zinc-600',
  'bg-zinc-700',
  'bg-zinc-800',
  'bg-zinc-900',
  'bg-zinc-950',
] as const;

void TAILWIND_COLOR_SWATCH_BG_CLASSES;

const meta = {
  title: '1. Foundations/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The color system is built on a two-tier token architecture. **Primitive tokens** define the raw palette — brand (lime-based), mono (offBlack through offWhite), zinc, red, green, blue, amber, and indigo scales — while **semantic tokens** map those primitives to intent-based roles such as `primary`, `destructive`, `muted`, and `accent`. A separate `colors-dark.json` file remaps the same semantic keys to dark-mode values (e.g., `background` flips from `offWhite` to `offBlack`), toggled at runtime via the `.dark` CSS class. Swatches use Tailwind utilities such as `bg-brand-400` backed by `@theme` CSS variables.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** Map `{color.brand.lime}` → `bg-brand-lime` (matches `theme-v4` / Tailwind color names). */
function tokenRefToBgClass(ref: string): string {
  const match = ref.match(/^\{(.+)\}$/);
  if (!match) {
    return 'bg-transparent';
  }
  const segments = match[1].split('.');
  if (segments[0] !== 'color') {
    return 'bg-transparent';
  }
  return `bg-${segments.slice(1).join('-')}`;
}

function ColorSwatch({
  tokenLabel,
  bgClass,
  caption,
}: {
  tokenLabel: string;
  bgClass: string;
  caption?: string;
}) {
  return (
    <div className="flex max-w-20 flex-col items-center">
      <div
        className={cn('h-16 w-16 rounded-lg border border-border', bgClass)}
        title={`${tokenLabel} → ${bgClass}`}
      />
      <div className="mt-1 max-w-20 text-center font-mono text-xs break-all">
        <div className="font-semibold">{tokenLabel}</div>
        <div className="text-muted-foreground">{bgClass}</div>
        {caption ? <div className="text-[10px] text-muted-foreground">{caption}</div> : null}
      </div>
    </div>
  );
}

function PrimitivePalettes() {
  const { color } = colorsData;

  const palettes: Record<string, Record<string, { value: string }>> = {};
  const standalone: Record<string, string> = {};

  for (const [key, val] of Object.entries(color)) {
    if (typeof val === 'object' && val !== null && 'value' in val) {
      standalone[key] = (val as { value: string }).value;
    } else {
      palettes[key] = val as Record<string, { value: string }>;
    }
  }

  return (
    <>
      {Object.entries(palettes).map(([paletteName, shades]) => (
        <div key={paletteName}>
          <h3 className="mt-6 border-b border-border pb-2 text-xl font-semibold first:mt-0">
            {paletteName}
          </h3>
          <div className="mb-8 mt-8 flex flex-wrap gap-4">
            {Object.entries(shades).map(([shade, token]) => {
              const bgClass = `bg-${paletteName}-${shade}`;
              return (
                <ColorSwatch
                  key={`${paletteName}-${shade}`}
                  tokenLabel={`${paletteName}.${shade}`}
                  bgClass={bgClass}
                  caption={token.value}
                />
              );
            })}
          </div>
        </div>
      ))}

      {Object.keys(standalone).length > 0 ? (
        <div>
          <h3 className="mt-6 border-b border-border pb-2 text-xl font-semibold">Base Colors</h3>
          <div className="mb-8 mt-8 flex flex-wrap gap-4">
            {Object.entries(standalone).map(([name, value]) => (
              <ColorSwatch key={name} tokenLabel={name} bgClass={`bg-${name}`} caption={value} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

function SemanticColors() {
  const { color } = semanticColorsData;

  return (
    <>
      <h2 className="mt-12 mb-2 text-2xl font-bold">Semantic Colors</h2>
      <p className="mb-6 text-muted-foreground">
        Semantic tokens reference primitive color values and define the design system&apos;s intent-based palette.
        Utilities follow token names (e.g. <code className="font-mono text-sm">bg-primary</code>,{' '}
        <code className="font-mono text-sm">bg-muted-foreground</code>).
      </p>
      <div className="mb-8 mt-8 flex flex-wrap gap-4">
        {Object.entries(color).map(([name, token]) => {
          const bgClass = `bg-${name}`;
          const refClass = tokenRefToBgClass(token.value);
          return (
            <ColorSwatch
              key={name}
              tokenLabel={name}
              bgClass={bgClass}
              caption={`${token.value} → ${refClass}`}
            />
          );
        })}
      </div>
    </>
  );
}

export const Default: Story = {
  render: () => (
    <div className="p-6 font-sans">
      <h1 className="mb-2 text-3xl font-bold">Color Tokens</h1>
      <p className="mb-8 text-muted-foreground">
        Primitive and semantic color palettes used throughout the design system (Tailwind <code className="font-mono text-sm">bg-*</code>{' '}
        utilities).
      </p>

      <h2 className="mb-2 text-2xl font-bold">Primitive Colors</h2>
      <PrimitivePalettes />
      <SemanticColors />
    </div>
  ),
};
