/**
 * markdown-components.tsx — Custom renderer map for react-markdown.
 *
 * Same hierarchy as the standalone HTML guide:
 *   - h1 (the section title — kept compact since we render it via the orchestrator)
 *   - h2/h3 (sub-rules — slugified with anchor IDs + ve-block injection by GovernanceSection)
 *   - code/pre with copy buttons
 *   - tables, blockquotes, lists, links — all token-driven
 *
 * The heading components emit `id` attributes built from the same slugify
 * helper as the HTML guide so the scroll-spy + example lookup keys match.
 */

import type { Components } from 'react-markdown';
import type { ReactNode } from 'react';
import { CopyButton } from './CopyButton';
import { slugify } from './sections';
import { getExample } from './examples-data';
import { VEBlock } from './VEBlock';

function extractText(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(extractText).join('');
  if (children && typeof children === 'object' && 'props' in children) {
    return extractText((children as { props?: { children?: ReactNode } }).props?.children);
  }
  return '';
}

/**
 * makeMarkdownComponents — builds the renderer map for a given section.
 *
 * The h2/h3 renderers attach a stable anchor ID. The orchestrator
 * (GovernanceSection) reads the same slugified id and decides whether to
 * render a <VEBlock> after the heading.
 */
export function makeMarkdownComponents(sectionId: string): Components {
  return {
    h1: ({ children }) => (
      <h1 className="font-brand text-3xl font-bold text-foreground border-b border-border pb-3 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => {
      const id = slugify(extractText(children));
      const example = getExample(sectionId, id);
      return (
        <>
          <h2 id={id} className="text-xl font-semibold text-foreground mt-8 mb-3 scroll-mt-6">
            {children}
          </h2>
          {example && <VEBlock example={example} />}
        </>
      );
    },
    h3: ({ children }) => {
      const id = slugify(extractText(children));
      const example = getExample(sectionId, id);
      return (
        <>
          <h3 id={id} className="text-base font-semibold text-foreground mt-6 mb-2 scroll-mt-6">
            {children}
          </h3>
          {example && <VEBlock example={example} />}
        </>
      );
    },
    h4: ({ children }) => (
      <h4 className="text-sm font-semibold text-foreground mt-4 mb-2">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground leading-relaxed mb-3">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-1 mb-4 ml-4 list-disc text-muted-foreground">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-1 mb-4 ml-4 list-decimal text-muted-foreground">{children}</ol>
    ),
    li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
    code: ({ className, children, ...props }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code
            className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground"
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => {
      // The CopyButton needs the raw text — extract it by walking children.
      const text = extractText(children);
      return (
        <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4 text-foreground relative">
          {children}
          <CopyButton text={text} />
        </pre>
      );
    },
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
    th: ({ children }) => (
      <th className="text-foreground font-semibold text-left px-3 py-2 border-b border-border">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="text-muted-foreground px-3 py-2 border-b border-border/40">{children}</td>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary bg-primary/5 pl-4 py-2 text-muted-foreground italic mb-3">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="text-foreground font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="text-foreground italic">{children}</em>,
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-primary hover:underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    hr: () => <hr className="border-border my-8" />,
  };
}

// Re-export extractText for the orchestrator
export { extractText };
