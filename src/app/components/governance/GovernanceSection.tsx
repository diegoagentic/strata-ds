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
}

export function GovernanceSection({ section }: GovernanceSectionProps) {
  // Optional top-of-section overview block, same key the HTML guide uses.
  const topExample = getExample(section.id, '__top');
  const components = makeMarkdownComponents(section.id);

  return (
    <section id={section.id} className="guide-section scroll-mt-6">
      {topExample && <VEBlock example={topExample} />}
      <ReactMarkdown components={components}>{section.content}</ReactMarkdown>
    </section>
  );
}
