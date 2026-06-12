/**
 * VEBlock — the per-heading visual example block.
 *
 * Renders the same 4-part shape (eyebrow + explanation + visual + code +
 * howto) as the standalone HTML guide. The `visual` field is hand-authored
 * static HTML in our own repo (see governance/examples-data.mjs) and is
 * NEVER user-sourced — safe to render via dangerouslySetInnerHTML.
 */

import { CopyButton } from './CopyButton';

interface VEBlockProps {
  example: {
    eyebrow?: string;
    explanation?: string;
    visual?: string;
    code?: string;
    howto?: string;
  };
}

export function VEBlock({ example }: VEBlockProps) {
  const { eyebrow, explanation, visual, code, howto } = example;
  return (
    <aside className="ve-block">
      <header className="ve-block-head">
        <span className="ve-block-eyebrow">
          Example{eyebrow ? ` · ${eyebrow}` : ''}
        </span>
      </header>
      {explanation && (
        <p
          className="ve-block-explanation"
          // Same trust assumption as visual — explanation strings are
          // hand-authored in the repo and may include inline <code> tags.
          dangerouslySetInnerHTML={{ __html: explanation }}
        />
      )}
      {visual && (
        <div
          className="ve-block-visual"
          // Visuals are hand-authored static HTML in the repo.
          // No user input flows through this property.
          dangerouslySetInnerHTML={{ __html: visual }}
        />
      )}
      {code && (
        <pre className="ve-block-code">
          <code>{code}</code>
          <CopyButton text={code} />
        </pre>
      )}
      {howto && (
        <p
          className="ve-block-howto"
          // howto strings may contain inline <code> + <strong>
          dangerouslySetInnerHTML={{ __html: `<strong>How to use:</strong> ${howto}` }}
        />
      )}
    </aside>
  );
}
