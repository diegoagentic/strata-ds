import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '@/utils';
import typographyData from '@/tokens/primitives/typography.json';

const meta = {
  title: '1. Foundations/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Typography tokens define four **font families** — `brand` (PP Monument Extended), `sans` (Inter / system-ui stack), `serif`, and `mono` — along with a 13-step **font-size scale** (xs 0.75 rem through 9xl 8 rem), nine **font weights** (thin 100 – black 900), six **line heights** (none 1 – loose 2), and six **letter-spacing** values (tighter −0.05 em – widest 0.1 em).',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const monoBadgeClass =
  'rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground';

const thClass =
  'border-b-2 border-border px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground';

const tdClass = 'border-b border-border p-3 align-middle';

/** Sample column: Tailwind `text-*` matching `typography.json` fontSize keys. */
const FONT_SIZE_SAMPLE_CLASS: Record<string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
};

const FONT_FAMILY_SAMPLE_CLASS: Record<string, string> = {
  brand: 'font-brand',
  sans: 'font-sans',
  serif: 'font-serif',
  mono: 'font-mono',
};

const FONT_WEIGHT_SAMPLE_CLASS: Record<string, string> = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

const LINE_HEIGHT_SAMPLE_CLASS: Record<string, string> = {
  none: 'leading-none',
  tight: 'leading-tight',
  snug: 'leading-snug',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
};

const LETTER_SPACING_SAMPLE_CLASS: Record<string, string> = {
  tighter: 'tracking-tighter',
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
  widest: 'tracking-widest',
};

function FontSizes() {
  const { fontSize } = typographyData;

  return (
    <div>
      <h3 className="mt-8 border-b border-border pb-2 text-xl font-semibold">Font Sizes</h3>
      <table className="mb-8 w-full border-collapse">
        <thead>
          <tr>
            <th className={thClass}>Token</th>
            <th className={thClass}>Value</th>
            <th className={thClass}>Sample</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(fontSize).map(([name, token]) => (
            <tr key={name}>
              <td className={tdClass}>
                <span className={monoBadgeClass}>fontSize.{name}</span>
              </td>
              <td className={tdClass}>
                <span className={monoBadgeClass}>{token.value}</span>
              </td>
              <td className={cn(tdClass, FONT_SIZE_SAMPLE_CLASS[name])}>
                The quick brown fox jumps over the lazy dog
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FontFamilies() {
  const { fontFamily } = typographyData;

  return (
    <div>
      <h3 className="mt-8 border-b border-border pb-2 text-xl font-semibold">Font Families</h3>
      <table className="mb-8 w-full border-collapse">
        <thead>
          <tr>
            <th className={thClass}>Token</th>
            <th className={thClass}>Value</th>
            <th className={thClass}>Sample</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(fontFamily).map(([name, token]) => (
            <tr key={name}>
              <td className={tdClass}>
                <span className={monoBadgeClass}>fontFamily.{name}</span>
              </td>
              <td className={cn(tdClass, 'max-w-[300px]')}>
                <span className={cn(monoBadgeClass, 'break-all')}>{token.value}</span>
              </td>
              <td className={cn(tdClass, 'text-xl', FONT_FAMILY_SAMPLE_CLASS[name])}>
                The quick brown fox jumps over the lazy dog
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FontWeights() {
  const { fontWeight } = typographyData;

  return (
    <div>
      <h3 className="mt-8 border-b border-border pb-2 text-xl font-semibold">Font Weights</h3>
      <table className="mb-8 w-full border-collapse">
        <thead>
          <tr>
            <th className={thClass}>Token</th>
            <th className={thClass}>Value</th>
            <th className={thClass}>Sample</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(fontWeight).map(([name, token]) => (
            <tr key={name}>
              <td className={tdClass}>
                <span className={monoBadgeClass}>fontWeight.{name}</span>
              </td>
              <td className={tdClass}>
                <span className={monoBadgeClass}>{token.value}</span>
              </td>
              <td className={cn(tdClass, 'text-lg', FONT_WEIGHT_SAMPLE_CLASS[name])}>
                The quick brown fox jumps over the lazy dog
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LineHeights() {
  const { lineHeight } = typographyData;

  return (
    <div>
      <h3 className="mt-8 border-b border-border pb-2 text-xl font-semibold">Line Heights</h3>
      <table className="mb-8 w-full border-collapse">
        <thead>
          <tr>
            <th className={thClass}>Token</th>
            <th className={thClass}>Value</th>
            <th className={thClass}>Sample</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(lineHeight).map(([name, token]) => (
            <tr key={name}>
              <td className={tdClass}>
                <span className={monoBadgeClass}>lineHeight.{name}</span>
              </td>
              <td className={tdClass}>
                <span className={monoBadgeClass}>{token.value}</span>
              </td>
              <td className={cn(tdClass, 'max-w-md', LINE_HEIGHT_SAMPLE_CLASS[name])}>
                The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LetterSpacings() {
  const { letterSpacing } = typographyData;

  return (
    <div>
      <h3 className="mt-8 border-b border-border pb-2 text-xl font-semibold">Letter Spacing</h3>
      <table className="mb-8 w-full border-collapse">
        <thead>
          <tr>
            <th className={thClass}>Token</th>
            <th className={thClass}>Value</th>
            <th className={thClass}>Sample</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(letterSpacing).map(([name, token]) => (
            <tr key={name}>
              <td className={tdClass}>
                <span className={monoBadgeClass}>letterSpacing.{name}</span>
              </td>
              <td className={tdClass}>
                <span className={monoBadgeClass}>{token.value}</span>
              </td>
              <td className={cn(tdClass, 'text-lg', LETTER_SPACING_SAMPLE_CLASS[name])}>
                The quick brown fox jumps over the lazy dog
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <div className="p-6 font-sans">
      <h1 className="mb-2 text-3xl font-bold">Typography Tokens</h1>
      <p className="mb-8 text-muted-foreground">
        Font families, sizes, weights, line heights, and letter spacing used throughout the design
        system.
      </p>

      <FontFamilies />
      <FontSizes />
      <FontWeights />
      <LineHeights />
      <LetterSpacings />
    </div>
  ),
};
