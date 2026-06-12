/**
 * GovernanceView — rich governance page that mirrors the standalone HTML
 * rules guide (governance/rules-guide.html) inside the DS app.
 *
 * Renders all 19 sections (LAWS · code-usage · 7 visual rules · anti-patterns ·
 * token reference · modal-patterns · layout · spacing · responsive · empty ·
 * loading · microcopy · a11y · data-display) in one scrollable column with a
 * sticky left sidebar (scroll-spy) and per-heading visual examples.
 *
 * On <lg viewports the sidebar collapses and only the content column shows.
 *
 * Source of truth: the .md files in `governance/` (shared with the
 * standalone HTML guide and the MCP server). Visual examples come from
 * `governance/examples-data.mjs` (also shared).
 */

import { useEffect, useMemo } from 'react';
import { GovernanceSidebar } from './governance/GovernanceSidebar';
import { GovernanceSection } from './governance/GovernanceSection';
import { SECTIONS } from './governance/sections';
import './governance/governance.css';

export function GovernanceView() {
  // On mount, if the URL has a #section hash, scroll to it after layout.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      // Defer one frame so the layout has settled before scrolling.
      window.requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
    }
  }, []);

  const sections = useMemo(() => SECTIONS, []);

  return (
    <div className="governance-scope space-y-8">
      {/* Header — same canonical pattern as before (label + h1 + subtitle) */}
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-status-ai">
          DS Manager · Read-only · 19 sections · {sections.length} files
        </p>
        <h1 className="font-brand text-4xl font-bold text-foreground">Governance</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Source of truth for the Design System — laws, rules, tokens, anti-patterns,
          composition and state patterns, voice, accessibility, data display.
          Consult before creating any new component or flow.
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
            Start with <strong className="text-foreground">Absolute Laws</strong>, then check the
            section that matches what you are building. The sidebar on the left lets you
            jump between sections; each heading has a live visual example where applicable.
          </p>
        </div>
      </div>

      {/* Two-column layout: sticky sidebar + scrollable content */}
      <div className="flex gap-8 items-start">
        <GovernanceSidebar sections={sections} />
        <article
          className="bg-card border border-border rounded-xl p-8 shadow-sm flex-1 min-w-0"
        >
          {sections.map((s) => (
            <GovernanceSection key={s.id} section={s} />
          ))}
        </article>
      </div>

      {/* Footer */}
      <footer className="bg-muted rounded-lg px-4 py-3 flex items-center justify-between text-xs text-muted-foreground gap-4 flex-wrap">
        <span>
          MCP Server:{' '}
          <code className="font-mono bg-card px-1.5 py-0.5 rounded text-foreground">strata-ds</code>
          {' · '}17 rule categories via{' '}
          <code className="font-mono bg-card px-1.5 py-0.5 rounded text-foreground">get_rules()</code>
          {' · '}Lint TSX via{' '}
          <code className="font-mono bg-card px-1.5 py-0.5 rounded text-foreground">
            validate_component_against_rules()
          </code>
        </span>
        <span className="font-mono">governance/</span>
      </footer>
    </div>
  );
}
