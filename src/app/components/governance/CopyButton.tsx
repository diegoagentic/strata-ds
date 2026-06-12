/**
 * CopyButton — clipboard button injected on every code block.
 *
 * Same UX + a11y pattern as the standalone HTML guide (build-guide.mjs::SCRIPT):
 * - Default state: muted clipboard icon + "Copy"
 * - On click: animates to "Copied" with checkmark (1.6s) then resets
 * - On failure: "Failed" with destructive tone
 * - Falls back to execCommand for browsers blocking the async clipboard API
 *   (notably old Safari + file:// pages)
 */

import { useState, useCallback } from 'react';

interface CopyButtonProps {
  text: string;
}

const ICON_COPY = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const ICON_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

type State = 'idle' | 'copied' | 'error';

export function CopyButton({ text }: CopyButtonProps) {
  const [state, setState] = useState<State>('idle');

  const handleCopy = useCallback(async () => {
    const reset = (next: State) => {
      setState(next);
      window.setTimeout(() => setState('idle'), 1600);
    };
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        reset('copied');
        return;
      }
    } catch {
      /* fall through to execCommand fallback */
    }
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      reset('copied');
    } catch {
      reset('error');
    }
  }, [text]);

  const className =
    state === 'copied' ? 'copy-btn is-copied' :
    state === 'error' ? 'copy-btn is-error' :
    'copy-btn';

  return (
    <button
      type="button"
      className={className}
      onClick={handleCopy}
      aria-label="Copy code to clipboard"
    >
      {state === 'copied' ? ICON_CHECK : ICON_COPY}
      <span>{state === 'copied' ? 'Copied' : state === 'error' ? 'Failed' : 'Copy'}</span>
    </button>
  );
}
