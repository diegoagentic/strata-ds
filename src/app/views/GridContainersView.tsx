import { Grid3x3, Layout as LayoutIcon } from "lucide-react";

const CONTAINERS = [
  { name: "sm", maxWidth: "640px", scaledWidth: "20%", use: "Mobile-friendly content blocks" },
  { name: "md", maxWidth: "768px", scaledWidth: "30%", use: "Tablet primary content" },
  { name: "lg", maxWidth: "1024px", scaledWidth: "50%", use: "Desktop article width" },
  { name: "xl", maxWidth: "1280px", scaledWidth: "70%", use: "Default app shell width" },
  { name: "2xl", maxWidth: "1536px", scaledWidth: "100%", use: "Wide marketing layouts" },
] as const;

export function GridContainersView() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-status-ai mb-2">
          <Grid3x3 className="w-3.5 h-3.5" />
          Foundations
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Grid & Containers</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          The Strata DS uses a 12-column grid for layout and 5 max-width containers for page chrome.
          All spacing values follow the 8px base from <code className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">/foundations/spacing</code>.
        </p>
      </header>

      {/* 12-col grid demo */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-3">12-Column Grid</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Tailwind's <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">grid-cols-12</code> applied with
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded mx-1">gap-4</code>.
          Use any combination of <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">col-span-N</code> children to compose layouts.
        </p>
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-primary/15 border border-primary/30 rounded text-center text-xs font-mono py-3 text-foreground"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <p className="text-sm font-semibold text-foreground">Common compositions</p>
          <div className="space-y-2">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 bg-status-info/10 border border-status-info/20 rounded text-center text-xs py-2 font-mono text-foreground">col-span-12</div>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-6 bg-status-info/10 border border-status-info/20 rounded text-center text-xs py-2 font-mono text-foreground">col-span-6</div>
              <div className="col-span-6 bg-status-info/10 border border-status-info/20 rounded text-center text-xs py-2 font-mono text-foreground">col-span-6</div>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4 bg-status-info/10 border border-status-info/20 rounded text-center text-xs py-2 font-mono text-foreground">col-span-4</div>
              <div className="col-span-4 bg-status-info/10 border border-status-info/20 rounded text-center text-xs py-2 font-mono text-foreground">col-span-4</div>
              <div className="col-span-4 bg-status-info/10 border border-status-info/20 rounded text-center text-xs py-2 font-mono text-foreground">col-span-4</div>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-3 bg-status-info/10 border border-status-info/20 rounded text-center text-xs py-2 font-mono text-foreground">col-span-3</div>
              <div className="col-span-3 bg-status-info/10 border border-status-info/20 rounded text-center text-xs py-2 font-mono text-foreground">col-span-3</div>
              <div className="col-span-3 bg-status-info/10 border border-status-info/20 rounded text-center text-xs py-2 font-mono text-foreground">col-span-3</div>
              <div className="col-span-3 bg-status-info/10 border border-status-info/20 rounded text-center text-xs py-2 font-mono text-foreground">col-span-3</div>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-3 bg-status-warning/10 border border-status-warning/20 rounded text-center text-xs py-2 font-mono text-foreground">sidebar (3)</div>
              <div className="col-span-9 bg-status-success/10 border border-status-success/20 rounded text-center text-xs py-2 font-mono text-foreground">main content (9)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Containers */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-3">Container Max-Widths</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Use Tailwind's <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">max-w-{"{size}"}</code> on any wrapper. Pair with
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded mx-1">mx-auto</code> to center content.
        </p>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">Token</th>
                <th className="text-left p-3 font-semibold text-foreground">Max-Width</th>
                <th className="text-left p-3 font-semibold text-foreground">Use</th>
                <th className="text-left p-3 font-semibold text-foreground">Visualization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {CONTAINERS.map((c) => (
                <tr key={c.name}>
                  <td className="p-3 font-mono text-xs font-semibold text-status-ai">max-w-{c.name}</td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">{c.maxWidth}</td>
                  <td className="p-3 text-foreground">{c.use}</td>
                  <td className="p-3">
                    <div className="bg-primary/30 h-3 rounded-sm" style={{ width: c.scaledWidth }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage snippets */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
          <LayoutIcon className="w-5 h-5" />
          Usage Patterns
        </h2>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-border bg-muted/30">
              <p className="text-sm font-semibold text-foreground">Centered content (article width)</p>
            </div>
            <pre className="p-4 text-xs font-mono text-foreground overflow-x-auto leading-relaxed">{`<div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
  {/* Article content */}
</div>`}</pre>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-border bg-muted/30">
              <p className="text-sm font-semibold text-foreground">App shell with full-width navbar + bounded main</p>
            </div>
            <pre className="p-4 text-xs font-mono text-foreground overflow-x-auto leading-relaxed">{`<header className="border-b border-border">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Navbar */}
  </div>
</header>
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
  {/* Page content */}
</main>`}</pre>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-border bg-muted/30">
              <p className="text-sm font-semibold text-foreground">12-col layout (sidebar + content)</p>
            </div>
            <pre className="p-4 text-xs font-mono text-foreground overflow-x-auto leading-relaxed">{`<div className="grid grid-cols-12 gap-6">
  <aside className="col-span-12 md:col-span-3">
    {/* Sidebar */}
  </aside>
  <main className="col-span-12 md:col-span-9">
    {/* Main content */}
  </main>
</div>`}</pre>
          </div>
        </div>
      </section>

      {/* Anti-patterns */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-3">Anti-Patterns</h2>
        <ul className="space-y-2">
          {[
            "❌ Hardcoded widths (max-w-[1380px]) — use the named container tokens",
            "❌ Centering with margin trickery — always use mx-auto + max-w-*",
            "❌ Skipping responsive padding (px-4 sm:px-6 lg:px-8) — content touches viewport edges on mobile",
            "❌ Mixing grid systems (CSS grid + flexbox arbitrary widths) within the same layout",
            "❌ col-span-N values that don't sum to 12 — leaves visual gaps unless intentional",
          ].map((p, i) => (
            <li
              key={i}
              className="text-sm text-foreground bg-status-error/5 border border-status-error/20 rounded p-3"
            >
              {p.replace(/^❌\s*/, "❌ ")}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
