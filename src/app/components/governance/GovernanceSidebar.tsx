/**
 * GovernanceSidebar — sticky left-rail navigation for the 19 sections.
 *
 * Behaviour:
 * - Active state driven by IntersectionObserver scroll-spy
 * - Click → smooth scroll to the section anchor
 * - Sections grouped visually by their `group` field
 * - Hides under <lg breakpoint (a future enhancement could add a burger
 *   trigger; for now we just collapse it on small viewports)
 */

import { useEffect, useState } from 'react';
import type { Section } from './sections';

interface GovernanceSidebarProps {
  sections: Section[];
}

export function GovernanceSidebar({ sections }: GovernanceSidebarProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
    setActiveId(id);
  };

  // Group sections by their `group` field, preserving insertion order
  const groups: { name: string; items: Section[] }[] = [];
  for (const s of sections) {
    const groupName = s.group ?? 'Other';
    let bucket = groups.find((g) => g.name === groupName);
    if (!bucket) {
      bucket = { name: groupName, items: [] };
      groups.push(bucket);
    }
    bucket.items.push(s);
  }

  return (
    <aside className="hidden lg:block w-60 shrink-0 sticky top-6 self-start">
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border bg-muted/30">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Strata DS
          </p>
          <p className="text-sm font-bold text-foreground">Rules guide</p>
        </div>
        <nav className="px-2 py-3 max-h-[calc(100vh-12rem)] overflow-y-auto" aria-label="Governance sections">
          {groups.map((group) => (
            <div key={group.name} className="mb-3 last:mb-0">
              <div className="px-2 mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">
                {group.name}
              </div>
              <ul className="space-y-0.5">
                {group.items.map((s) => {
                  const isActive = activeId === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={handleClick(s.id)}
                        data-active={isActive || undefined}
                        className={
                          isActive
                            ? 'block px-2 py-1.5 rounded text-sm font-semibold bg-primary text-primary-foreground'
                            : 'block px-2 py-1.5 rounded text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors'
                        }
                      >
                        {s.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
