/**
 * RuleSectionView — standalone surface for a single governance section.
 *
 * Renders ONE rule / LAWS file / anti-patterns / token reference as a
 * solo page (no sidebar, no other sections around it). Good for:
 *   - bookmarking / sharing a single rule URL
 *   - printing one rule cleanly
 *   - deep-linking from PR comments / docs
 *
 * Route convention: `rule-<sectionId>` (e.g. `rule-modal-patterns`).
 */

import { useMemo } from 'react';
import { GovernanceSection } from '../components/governance/GovernanceSection';
import { SECTIONS } from '../components/governance/sections';
import '../components/governance/governance.css';

export function RuleSectionView({ id }: { id: string }) {
  const section = useMemo(() => SECTIONS.find((s) => s.id === id), [id]);

  if (!section) {
    return (
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-status-warning">
          Rule not found
        </p>
        <h1 className="font-brand text-3xl font-bold text-foreground">"{id}"</h1>
        <p className="text-muted-foreground">
          This rule id is not registered. Available ids include{' '}
          {SECTIONS.slice(0, 5).map((s) => (
            <code key={s.id} className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground mr-1">
              {s.id}
            </code>
          ))}
          …
        </p>
        <p>
          <a
            href="#"
            className="text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('strata:navigate', { detail: 'governance' }));
            }}
          >
            ← Open the full UI Laws page
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="governance-scope space-y-6">
      {/* Eyebrow + back link */}
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-status-ai">
          DS Manager · {section.group ?? 'Rule'} · single-section view
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#"
            className="text-sm text-primary hover:underline"
            onClick={(e) => {
              e.preventDefault();
              // Dispatch back to the canonical governance page with the
              // anchor pre-set so the parent view scrolls to the section.
              window.location.hash = `#${section.id}`;
              window.dispatchEvent(new CustomEvent('strata:navigate', { detail: 'governance' }));
            }}
          >
            ← Back to all rules
          </a>
          <span className="text-xs text-muted-foreground">
            Permalink:{' '}
            <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-foreground">
              /rule-{section.id}
            </code>
          </span>
        </div>
      </header>

      {/* The section body — same renderer used by the full Governance page */}
      <article className="bg-card border border-border rounded-xl p-8 shadow-sm">
        <GovernanceSection section={section} hideStandaloneLink />
      </article>

      {/* Footer */}
      <footer className="bg-muted rounded-lg px-4 py-3 flex items-center justify-between text-xs text-muted-foreground gap-4 flex-wrap">
        <span>
          File:{' '}
          <code className="font-mono bg-card px-1.5 py-0.5 rounded text-foreground">
            governance/{section.id === 'laws' ? 'LAWS.md'
              : section.id === 'code-usage' ? 'code-usage.md'
              : section.id === 'anti-patterns' ? 'anti-patterns/common-errors.md'
              : section.id === 'token-reference' ? 'tokens/token-reference.md'
              : 'rules/' + section.id + '.md'}
          </code>
        </span>
        <span>
          via MCP:{' '}
          <code className="font-mono bg-card px-1.5 py-0.5 rounded text-foreground">
            get_rules({'{'} category: "{section.id}" {'}'})
          </code>
        </span>
      </footer>
    </div>
  );
}
