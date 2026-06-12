/**
 * examples-data.ts — Typed re-export of the per-heading visual examples.
 *
 * The data itself lives in `governance/examples-data.mjs` (the source of
 * truth, also consumed by the HTML guide generator). This module just
 * re-exports it with TypeScript types so React components get autocomplete.
 *
 * Shape:
 *   EXAMPLES_BY_HEADING[sectionId][headingSlug] = {
 *     eyebrow, explanation, visual (HTML), code, howto
 *   }
 */

// Tell TypeScript the .mjs export shape — see comment above the .mjs file
// for the runtime structure.
type ExampleEntry = {
  eyebrow?: string;
  explanation?: string;
  visual?: string;
  code?: string;
  howto?: string;
};

type ExamplesByHeading = Record<string, Record<string, ExampleEntry>>;

// @ts-expect-error — Vite resolves the .mjs export; tsserver doesn't have a .d.ts for it.
import { EXAMPLES_BY_HEADING as RAW } from '../../../../governance/examples-data.mjs';

export const EXAMPLES_BY_HEADING = RAW as ExamplesByHeading;

export function getExample(sectionId: string, slug: string): ExampleEntry | undefined {
  return EXAMPLES_BY_HEADING[sectionId]?.[slug];
}
