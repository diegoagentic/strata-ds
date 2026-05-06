import { useState } from "react";
import { AlertTriangle, BookOpen, Code2, Eye, Sparkles, X } from "lucide-react";
import { CodeViewer } from "../components/CodeViewer";
import { getPreviewComponent } from "./componentPreviews";
import { copyToClipboard } from "@/utils/clipboard";
import { getComponentSpec } from "../data/components-data";

interface ComponentSpec {
  id: string;
  name: string;
  import: string;
  category?: string;
  description: string;
  variants?: Record<string, string[] | string>;
  props?: string[];
  tokens?: Record<string, string>;
  whenToUse?: string[];
  antiPatterns?: string[];
  example?: string;
  governance?: { tier: number; notes?: string };
  code?: {
    react?: string;
    html?: string;
    css?: string;
    aiPrompt?: string;
  } | null;
}

export function ComponentDetailView({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  const spec = (getComponentSpec(id) ?? null) as ComponentSpec | null;

  if (!spec) {
    return (
      <div className="space-y-4">
        <p className="text-sm font-semibold text-status-warning uppercase tracking-wider">Not documented</p>
        <h1 className="text-3xl font-bold text-foreground">"{id}"</h1>
        <p className="text-muted-foreground">This component hasn't been documented yet in the design system.</p>
      </div>
    );
  }

  const handleCopyImport = async () => {
    if (await copyToClipboard(spec.import)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-status-ai mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          {spec.category || "Component"}
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-3">{spec.name}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{spec.description}</p>

        {spec.governance && (
          <div className="mt-4 flex items-center gap-2 text-sm">
            <AlertTriangle className="w-4 h-4 text-status-warning" />
            <span className="font-semibold text-status-warning">
              Tier {spec.governance.tier}
            </span>
            {spec.governance.notes && (
              <span className="text-muted-foreground">— {spec.governance.notes}</span>
            )}
          </div>
        )}
      </header>

      {/* Live Preview (only if available for this component) */}
      {(() => {
        const PreviewComponent = getPreviewComponent(spec.id);
        if (!PreviewComponent) return null;
        return (
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Live Preview
            </h2>
            <div className="bg-card border border-border rounded-xl p-8 flex items-center justify-center">
              {/* Key on spec.id forces React to remount when component changes,
                  so hook count differences between previews don't cause errors. */}
              <PreviewComponent key={spec.id} />
            </div>
          </section>
        );
      })()}

      {/* Import */}
      <section>
        <h2 className="text-xl font-bold text-foreground mb-3">Import</h2>
        <div className="flex items-center gap-2 rounded-md bg-muted border border-border p-3">
          <code className="flex-1 font-mono text-sm text-foreground">{spec.import}</code>
          <button
            onClick={handleCopyImport}
            className="px-2.5 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </section>

      {/* Variants */}
      {spec.variants && Object.keys(spec.variants).length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Variants</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Prop</th>
                  <th className="text-left p-3 font-semibold text-foreground">Values</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {Object.entries(spec.variants).map(([key, values]) => (
                  <tr key={key}>
                    <td className="p-3 font-mono text-status-ai">{key}</td>
                    <td className="p-3 text-foreground">
                      {Array.isArray(values) ? (
                        <div className="flex flex-wrap gap-1">
                          {values.map((v) => (
                            <code key={v} className="px-1.5 py-0.5 bg-muted text-xs rounded">
                              {v}
                            </code>
                          ))}
                        </div>
                      ) : (
                        <code className="text-xs">{values}</code>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Props */}
      {spec.props && spec.props.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Props</h2>
          <ul className="space-y-2">
            {spec.props.map((p, i) => (
              <li key={i} className="font-mono text-sm text-foreground bg-muted/50 border border-border rounded p-2.5">
                {p}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tokens */}
      {spec.tokens && Object.keys(spec.tokens).length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Tokens</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Token</th>
                  <th className="text-left p-3 font-semibold text-foreground">Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {Object.entries(spec.tokens).map(([token, use]) => (
                  <tr key={token}>
                    <td className="p-3">
                      <code className="px-1.5 py-0.5 bg-muted text-xs font-mono text-foreground rounded">
                        {token}
                      </code>
                    </td>
                    <td className="p-3 text-muted-foreground">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* When to Use */}
      {spec.whenToUse && spec.whenToUse.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">When to Use</h2>
          <ul className="space-y-2">
            {spec.whenToUse.map((w, i) => (
              <li key={i} className="text-sm text-foreground flex gap-2">
                <span className="text-status-success mt-0.5">✓</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Anti-Patterns */}
      {spec.antiPatterns && spec.antiPatterns.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Anti-Patterns</h2>
          <ul className="space-y-2">
            {spec.antiPatterns.map((p, i) => (
              <li
                key={i}
                className="text-sm text-foreground bg-status-error/5 border border-status-error/20 rounded p-3 flex gap-2"
              >
                <X className="w-4 h-4 text-status-error shrink-0 mt-0.5" />
                <span>{p.replace(/^❌\s*/, "")}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Code Example */}
      {spec.example && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Code Example</h2>
          <div className="bg-background border border-border rounded-lg overflow-hidden">
            <pre className="p-4 text-sm font-mono text-foreground overflow-x-auto leading-relaxed">
              {spec.example}
            </pre>
          </div>
        </section>
      )}

      {/* Multi-format CodeViewer (React/HTML/CSS/AI Prompt) */}
      {spec.code && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            Code in Multiple Formats
          </h2>
          <CodeViewer
            title={spec.name}
            react={spec.code.react}
            html={spec.code.html}
            css={spec.code.css}
            prompt={spec.code.aiPrompt}
          />
        </section>
      )}

      {/* AI Prompt Box */}
      {spec.code?.aiPrompt && (
        <section className="bg-status-ai/5 border border-status-ai/20 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-status-ai shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">AI Prompt for {spec.name}</p>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "{spec.code.aiPrompt}"
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

