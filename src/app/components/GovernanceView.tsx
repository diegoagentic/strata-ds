import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import lawsContent from '../../../../governance/LAWS.md?raw';
import colorTokensContent from '../../../../governance/rules/01-color-tokens.md?raw';
import brandColorsContent from '../../../../governance/rules/02-brand-colors.md?raw';
import containersContent from '../../../../governance/rules/03-containers-and-cards.md?raw';
import buttonsContent from '../../../../governance/rules/04-buttons-and-actions.md?raw';
import iconsContent from '../../../../governance/rules/05-icons.md?raw';
import antiPatternsContent from '../../../../governance/anti-patterns/common-errors.md?raw';
import tokenRefContent from '../../../../governance/tokens/token-reference.md?raw';

type TabId = 'laws' | 'tokens' | 'color-tokens' | 'brand' | 'containers' | 'buttons' | 'icons' | 'anti-patterns';

const tabs: { id: TabId; label: string; badge?: string }[] = [
  { id: 'laws', label: 'Leyes', badge: '!' },
  { id: 'tokens', label: 'Token Reference' },
  { id: 'color-tokens', label: 'Color Tokens' },
  { id: 'brand', label: 'Brand Colors' },
  { id: 'containers', label: 'Contenedores' },
  { id: 'buttons', label: 'Botones' },
  { id: 'icons', label: 'Iconos' },
  { id: 'anti-patterns', label: 'Anti-patrones', badge: '10' },
];

const contentMap: Record<TabId, string> = {
  'laws': lawsContent,
  'tokens': tokenRefContent,
  'color-tokens': colorTokensContent,
  'brand': brandColorsContent,
  'containers': containersContent,
  'buttons': buttonsContent,
  'icons': iconsContent,
  'anti-patterns': antiPatternsContent,
};

function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none
                    prose-headings:font-semibold
                    prose-h1:text-2xl prose-h1:text-foreground prose-h1:border-b prose-h1:border-border prose-h1:pb-3
                    prose-h2:text-lg prose-h2:text-foreground prose-h2:mt-8
                    prose-h3:text-base prose-h3:text-foreground
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-li:text-muted-foreground
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                    prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg
                    prose-table:text-sm
                    prose-th:text-foreground prose-th:font-semibold prose-th:text-left
                    prose-td:text-muted-foreground
                    prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export function GovernanceView() {
  const [activeTab, setActiveTab] = useState<TabId>('laws');

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Governance</h1>
          <p className="text-muted-foreground mt-1">
            Fuente de verdad del Design System. Reglas, tokens y anti-patrones.
          </p>
        </div>
        <div className="bg-primary/10 border border-primary/30 rounded-lg px-3 py-1.5 text-xs font-medium text-primary">
          Read-only · DS Manager
        </div>
      </div>

      {/* Alert banner */}
      <div className="bg-destructive/5 border border-destructive/30 rounded-lg px-4 py-3 flex items-start gap-3">
        <span className="text-destructive font-bold text-sm mt-0.5">⚠</span>
        <div>
          <p className="text-destructive font-semibold text-sm">Consultar antes de crear componentes nuevos</p>
          <p className="text-muted-foreground text-sm mt-0.5">
            Empezar por <strong className="text-foreground">Leyes</strong>, luego consultar el tab correspondiente al tipo de elemento a crear.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex gap-1 overflow-x-auto pb-px scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
              }`}
            >
              {tab.label}
              {tab.badge && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                  tab.badge === '!'
                    ? 'bg-destructive/10 text-destructive'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-card border border-border rounded-xl p-8">
        <MarkdownContent content={contentMap[activeTab]} />
      </div>

      {/* Footer */}
      <div className="bg-muted rounded-lg px-4 py-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>MCP Server: <code className="text-primary font-mono">strata-ds</code> · Tools: get_laws · get_rules · get_tokens · get_anti_patterns · search_governance</span>
        <span>governance/</span>
      </div>
    </div>
  );
}
