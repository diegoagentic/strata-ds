import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import lawsContent from '../../../governance/LAWS.md?raw';
import colorTokensContent from '../../../governance/rules/01-color-tokens.md?raw';
import brandColorsContent from '../../../governance/rules/02-brand-colors.md?raw';
import containersContent from '../../../governance/rules/03-containers-and-cards.md?raw';
import buttonsContent from '../../../governance/rules/04-buttons-and-actions.md?raw';
import iconsContent from '../../../governance/rules/05-icons.md?raw';
import typographyContent from '../../../governance/rules/06-typography.md?raw';
import elevationContent from '../../../governance/rules/07-elevation.md?raw';
import antiPatternsContent from '../../../governance/anti-patterns/common-errors.md?raw';
import tokenRefContent from '../../../governance/tokens/token-reference.md?raw';

type TabId =
  | 'laws'
  | 'tokens'
  | 'color-tokens'
  | 'brand'
  | 'containers'
  | 'buttons'
  | 'icons'
  | 'typography'
  | 'elevation'
  | 'anti-patterns';

const tabs: { id: TabId; label: string; badge?: string }[] = [
  { id: 'laws', label: 'Laws', badge: '!' },
  { id: 'tokens', label: 'Token Reference' },
  { id: 'color-tokens', label: 'Color Tokens' },
  { id: 'brand', label: 'Brand Colors' },
  { id: 'containers', label: 'Containers' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'icons', label: 'Icons' },
  { id: 'typography', label: 'Typography', badge: 'new' },
  { id: 'elevation', label: 'Elevation', badge: 'new' },
  { id: 'anti-patterns', label: 'Anti-patterns', badge: '10' },
];

const contentMap: Record<TabId, string> = {
  'laws': lawsContent,
  'tokens': tokenRefContent,
  'color-tokens': colorTokensContent,
  'brand': brandColorsContent,
  'containers': containersContent,
  'buttons': buttonsContent,
  'icons': iconsContent,
  'typography': typographyContent,
  'elevation': elevationContent,
  'anti-patterns': antiPatternsContent,
};

/**
 * Markdown renderer that maps each element to atomic DS tokens.
 *
 * Replaces the previous `prose-zinc dark:prose-invert` generic styling to align
 * GovernanceView with the canonical view pattern (OverviewView, FoundationsView):
 * font-brand for h1/h2, semantic tokens for colors, font-mono + bg-muted for code,
 * bordered tables with bg-muted headers.
 */
function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="font-brand text-3xl font-bold text-foreground border-b border-border pb-3 mb-6">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-base font-semibold text-foreground mt-6 mb-2">{children}</h3>
        ),
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
        pre: ({ children }) => (
          <pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto text-sm font-mono mb-4 text-foreground">
            {children}
          </pre>
        ),
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
            target="_blank"
            rel="noreferrer"
          >
            {children}
          </a>
        ),
        hr: () => <hr className="border-border my-8" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export function GovernanceView() {
  const [activeTab, setActiveTab] = useState<TabId>('laws');

  return (
    <div className="space-y-10">
      {/* Canonical header — label uppercase + h1 text-4xl + subtitle text-lg */}
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-status-ai">
          DS Manager · Read-only
        </p>
        <h1 className="font-brand text-4xl font-bold text-foreground">Governance</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Source of truth for the Design System. Laws, rules, tokens, and anti-patterns.
          Consult before creating new components or flows.
        </p>
      </header>

      {/* Alert banner */}
      <div className="bg-destructive/5 border border-destructive/30 rounded-lg px-4 py-3 flex items-start gap-3">
        <span className="text-destructive font-bold text-sm mt-0.5">⚠</span>
        <div>
          <p className="text-destructive font-semibold text-sm">
            Consult before creating new components
          </p>
          <p className="text-muted-foreground text-sm mt-0.5">
            Start with <strong className="text-foreground">Laws</strong>, then check the tab that
            corresponds to the element you want to create.
          </p>
        </div>
      </div>

      {/* Tabs as pills inside a card — match canonical visual pattern */}
      <nav
        className="bg-card border border-border rounded-xl p-2 flex flex-wrap gap-1 shadow-sm"
        role="tablist"
        aria-label="Governance sections"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.id)}
              className={
                isActive
                  ? 'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium bg-primary text-primary-foreground transition-colors'
                  : 'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors'
              }
            >
              {tab.label}
              {tab.badge && (
                <span
                  className={
                    tab.badge === '!'
                      ? 'text-[10px] px-1.5 py-0.5 rounded-full font-semibold bg-destructive/10 text-destructive'
                      : tab.badge === 'new'
                        ? 'text-[10px] px-1.5 py-0.5 rounded-full font-semibold bg-primary/10 text-primary'
                        : 'text-[10px] px-1.5 py-0.5 rounded-full font-semibold bg-muted text-muted-foreground'
                  }
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Content card — Elevation 1 with shadow-sm + p-8 generous padding */}
      <article
        className="bg-card border border-border rounded-xl p-8 shadow-sm"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        <MarkdownContent content={contentMap[activeTab]} />
      </article>

      {/* Footer */}
      <footer className="bg-muted rounded-lg px-4 py-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          MCP Server: <code className="font-mono bg-card px-1.5 py-0.5 rounded text-foreground">strata-ds</code>
          {' · '}Tools: get_laws · get_rules · get_tokens · get_anti_patterns · search_governance
        </span>
        <span className="font-mono">governance/</span>
      </footer>
    </div>
  );
}
