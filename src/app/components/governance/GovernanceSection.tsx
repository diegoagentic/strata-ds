/**
 * GovernanceSection — renders ONE governance section: its `<section>` wrapper,
 * the section's top-of-section visual example (if any), then the markdown body.
 *
 * The orchestrator (GovernanceView) renders all 19 sections in sequence.
 * Each section gets its own anchor ID so the sidebar can scroll into view.
 */

import ReactMarkdown from 'react-markdown';
import { makeMarkdownComponents } from './markdown-components';
import { VEBlock } from './VEBlock';
import { getExample } from './examples-data';
import type { Section } from './sections';

interface GovernanceSectionProps {
  section: Section;
  /** When true (inside RuleSectionView), the standalone-link badge is hidden. */
  hideStandaloneLink?: boolean;
}

export function GovernanceSection({ section, hideStandaloneLink }: GovernanceSectionProps) {
  // Optional top-of-section overview block, same key the HTML guide uses.
  const topExample = getExample(section.id, '__top');
  const components = makeMarkdownComponents(section.id);

  const handleStandalone = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('strata:navigate', { detail: `rule-${section.id}` }),
    );
  };

  return (
    <section id={section.id} className="guide-section scroll-mt-6">
      {!hideStandaloneLink && (
        <div className="flex items-center justify-end mb-2">
          <a
            href={`#${section.id}`}
            onClick={handleStandalone}
            className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Open ${section.title} as a standalone page`}
            title="Open as a standalone page"
          >
            ↗ open standalone
          </a>
        </div>
      )}
      {topExample && <VEBlock example={topExample} />}
      <ReactMarkdown components={components}>{section.content}</ReactMarkdown>
    </section>
  );
}
