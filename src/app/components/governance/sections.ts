/**
 * sections.ts — The 19 governance sections, in display order.
 *
 * Mirrors `SECTIONS` in `governance/build-guide.mjs`. The HTML guide and
 * the DS app share the SAME .md files; only the rendering surface differs.
 *
 * Each entry imports the raw markdown via Vite's `?raw` query so the
 * DS app's bundle includes the .md content statically (no runtime fetch).
 */

import lawsContent from '../../../../governance/LAWS.md?raw';
import codeUsageContent from '../../../../governance/code-usage.md?raw';
import colorTokensContent from '../../../../governance/rules/01-color-tokens.md?raw';
import brandColorsContent from '../../../../governance/rules/02-brand-colors.md?raw';
import containersContent from '../../../../governance/rules/03-containers-and-cards.md?raw';
import buttonsContent from '../../../../governance/rules/04-buttons-and-actions.md?raw';
import iconsContent from '../../../../governance/rules/05-icons.md?raw';
import typographyContent from '../../../../governance/rules/06-typography.md?raw';
import elevationContent from '../../../../governance/rules/07-elevation.md?raw';
import antiPatternsContent from '../../../../governance/anti-patterns/common-errors.md?raw';
import tokenRefContent from '../../../../governance/tokens/token-reference.md?raw';
import modalPatternsContent from '../../../../governance/rules/08-modal-patterns.md?raw';
import layoutDensityContent from '../../../../governance/rules/09-layout-density.md?raw';
import spacingRhythmContent from '../../../../governance/rules/10-spacing-rhythm.md?raw';
import responsiveContent from '../../../../governance/rules/11-responsive-behavior.md?raw';
import emptyStatesContent from '../../../../governance/rules/12-empty-states.md?raw';
import loadingStatesContent from '../../../../governance/rules/13-loading-states.md?raw';
import microcopyContent from '../../../../governance/rules/14-microcopy-tone.md?raw';
import a11yContent from '../../../../governance/rules/15-accessibility-focus.md?raw';
import dataDisplayContent from '../../../../governance/rules/16-data-display.md?raw';

export interface Section {
  id: string;
  title: string;
  content: string;
  group?: string;
}

export const SECTIONS: Section[] = [
  { id: 'laws',                  title: 'Absolute Laws',           content: lawsContent,           group: 'Foundation' },
  { id: 'code-usage',            title: 'Code Usage Rules',        content: codeUsageContent,      group: 'Foundation' },
  { id: 'rules-color-tokens',    title: 'Color tokens',            content: colorTokensContent,    group: 'Visual rules' },
  { id: 'rules-brand-colors',    title: 'Brand colors',            content: brandColorsContent,    group: 'Visual rules' },
  { id: 'rules-containers',      title: 'Containers and cards',    content: containersContent,     group: 'Visual rules' },
  { id: 'rules-buttons',         title: 'Buttons and actions',     content: buttonsContent,        group: 'Visual rules' },
  { id: 'rules-icons',           title: 'Icons',                   content: iconsContent,          group: 'Visual rules' },
  { id: 'rules-typography',      title: 'Typography',              content: typographyContent,     group: 'Visual rules' },
  { id: 'rules-elevation',       title: 'Elevation and shadows',   content: elevationContent,      group: 'Visual rules' },
  { id: 'anti-patterns',         title: 'Anti-patterns (10)',      content: antiPatternsContent,   group: 'Visual rules' },
  { id: 'token-reference',       title: 'Token reference',         content: tokenRefContent,       group: 'Visual rules' },
  { id: 'modal-patterns',        title: 'Modal patterns',          content: modalPatternsContent,  group: 'Composition' },
  { id: 'layout-density',        title: 'Layout density',          content: layoutDensityContent,  group: 'Composition' },
  { id: 'spacing-rhythm',        title: 'Spacing & rhythm',        content: spacingRhythmContent,  group: 'Composition' },
  { id: 'responsive-behavior',   title: 'Responsive behavior',     content: responsiveContent,     group: 'Composition' },
  { id: 'empty-states',          title: 'Empty states',            content: emptyStatesContent,    group: 'States & voice' },
  { id: 'loading-states',        title: 'Loading states',          content: loadingStatesContent,  group: 'States & voice' },
  { id: 'microcopy-tone',        title: 'Microcopy & tone',        content: microcopyContent,      group: 'States & voice' },
  { id: 'accessibility-focus',   title: 'Accessibility & focus',   content: a11yContent,           group: 'States & voice' },
  { id: 'data-display',          title: 'Data display',            content: dataDisplayContent,    group: 'States & voice' },
];

/**
 * slugify — must match `governance/build-guide-shared.mjs::slugify` so the
 * heading slugs in this React tree match the keys in `EXAMPLES_BY_HEADING`.
 */
export function slugify(s: string): string {
  return String(s)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
