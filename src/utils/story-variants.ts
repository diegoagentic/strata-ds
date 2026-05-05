/**
 * Utility to derive Storybook argTypes options from CVA-style variant configs
 * and centralised variant options for UI components.
 * Use these in *.stories.tsx so options stay in sync with component variants.
 */

/** Given a variants config (record of variant name -> record of option key -> class), returns option keys per variant for Storybook. */
export function getVariantOptions(
  variants: Record<string, Record<string, unknown>>,
): Record<string, string[]> {
  return Object.fromEntries(
    Object.entries(variants).map(([key, value]) => [key, Object.keys(value)]),
  ) as Record<string, string[]>;
}

// --- Button (from button.tsx) ---
export const BUTTON_VARIANT_OPTIONS = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
  'brand',
  'accent',
] as const;
export const BUTTON_SIZE_OPTIONS = ['default', 'sm', 'lg', 'icon'] as const;
export const BUTTON_SHAPE_OPTIONS = ['default', 'pill'] as const;

// --- Badge (from badge.tsx) ---
export const BADGE_VARIANT_OPTIONS = ['solid', 'soft', 'outline'] as const;
export const BADGE_COLOR_OPTIONS = [
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
  'success',
] as const;
export const BADGE_SHAPE_OPTIONS = ['default', 'pill'] as const;
export const BADGE_SIZE_OPTIONS = ['default', 'nano'] as const;

// --- Avatar (from avatar.tsx) ---
export const AVATAR_SIZE_OPTIONS = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export const AVATAR_FALLBACK_VARIANT_OPTIONS = ['default', 'muted', 'gradient', 'indigo'] as const;

// --- Alert (from alert.tsx) ---
export const ALERT_VARIANT_OPTIONS = ['default', 'destructive', 'success', 'warning', 'info', 'brand'] as const;

// --- Banner (from banner.tsx) ---
export const BANNER_VARIANT_OPTIONS = ['info', 'success', 'warning', 'error'] as const;

// --- Card (from card.tsx if applicable) ---
export const CARD_VARIANT_OPTIONS = ['default', 'flat', 'glass', 'brand'] as const;

// --- Toggle (from toggle.tsx) ---
export const TOGGLE_VARIANT_OPTIONS = ['default', 'outline'] as const;
export const TOGGLE_SIZE_OPTIONS = ['default', 'sm', 'lg'] as const;

// --- Toggle group ---
export const TOGGLE_GROUP_TYPE_OPTIONS = ['single', 'multiple'] as const;
export const TOGGLE_GROUP_VARIANT_OPTIONS = ['default', 'outline'] as const;
export const TOGGLE_GROUP_SIZE_OPTIONS = ['default', 'sm', 'lg'] as const;

// --- Tabs ---
export const TABS_ORIENTATION_OPTIONS = ['horizontal', 'vertical'] as const;
export const TABS_LIST_SIZE_OPTIONS = ['default', 'sm'] as const;
export const TABS_LIST_VARIANT_OPTIONS = ['default', 'muted', 'link'] as const;

// --- Separator ---
export const SEPARATOR_ORIENTATION_OPTIONS = ['horizontal', 'vertical'] as const;

// --- Resizable ---
export const RESIZABLE_DIRECTION_OPTIONS = ['horizontal', 'vertical'] as const;

// --- Input (type attribute) ---
export const INPUT_TYPE_OPTIONS = ['text', 'email', 'password', 'number', 'search', 'tel', 'url'] as const;

// --- Heading (level) ---
export const HEADING_LEVEL_OPTIONS = [1, 2, 3, 4, 5, 6] as const;
