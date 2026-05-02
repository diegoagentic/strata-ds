import { Layers, Droplets } from "lucide-react";

export function TransparencyView() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-status-ai mb-2">
          <Layers className="w-3.5 h-3.5" />
          Foundations
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Transparency & Glassmorphism</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Standardized patterns for translucent surfaces, blurs, and depth-conveying glass effects. Use sparingly:
          glass works when there is content behind it worth seeing.
        </p>
      </header>

      {/* Live demo */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Glass Surfaces — Live Preview</h2>
        <div className="rounded-xl p-12 relative overflow-hidden bg-muted">
          {/* Background pattern + colored blobs (showcase what's "behind" the glass) */}
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(var(--color-foreground)_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-status-info rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-status-ai rounded-full blur-3xl opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Navbar glass */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Navbar Glass</p>
              <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-foreground">STRATA</span>
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    <span>Dashboard</span>
                    <span>Orders</span>
                    <span>Settings</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                <code className="font-mono bg-muted px-1.5 py-0.5 rounded">bg-card/60 + backdrop-blur-xl</code>
                <span> — high transparency for nav over content.</span>
              </p>
            </div>

            {/* Popover glass */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Popover Glass</p>
              <div className="bg-popover/85 backdrop-blur-xl border border-border rounded-xl p-4 shadow-lg">
                <p className="text-sm font-semibold text-foreground mb-2">Notifications</p>
                <ul className="space-y-1.5">
                  <li className="text-xs text-muted-foreground">3 new comments on PR #324</li>
                  <li className="text-xs text-muted-foreground">Q2 report ready for review</li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground">
                <code className="font-mono bg-muted px-1.5 py-0.5 rounded">bg-popover/85 + backdrop-blur-xl</code>
                <span> — higher opacity for readability.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token reference */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Tailwind Opacity Patterns</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Use Tailwind's color-with-slash syntax (<code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">bg-card/50</code>)
          instead of <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">opacity-50</code>. The first only fades the
          background; the second fades all children including text.
        </p>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">Pattern</th>
                <th className="text-left p-3 font-semibold text-foreground">When to use</th>
                <th className="text-left p-3 font-semibold text-foreground">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                {
                  pattern: "bg-card/80 + backdrop-blur-xl",
                  use: "Floating navbars over hero images",
                  example: <NavbarPreview />,
                },
                {
                  pattern: "bg-popover/95 + backdrop-blur-md",
                  use: "Dropdown menus, command palettes",
                  example: <PopoverPreview />,
                },
                {
                  pattern: "bg-muted/30",
                  use: "Subtle section backgrounds",
                  example: (
                    <div className="bg-muted/30 px-3 py-2 rounded text-xs text-foreground">
                      Subtle section
                    </div>
                  ),
                },
                {
                  pattern: "bg-status-success/10 + text-status-success",
                  use: "Soft status badges (matches Strata pattern)",
                  example: (
                    <span className="inline-flex bg-status-success/10 text-status-success border border-status-success/20 px-2 py-0.5 rounded-full text-xs font-medium">
                      Success
                    </span>
                  ),
                },
                {
                  pattern: "bg-foreground/5 (mockup)",
                  use: "Skeleton placeholders on a colored bg",
                  example: <div className="bg-foreground/5 h-4 w-32 rounded" />,
                },
              ].map((row) => (
                <tr key={row.pattern}>
                  <td className="p-3 font-mono text-xs text-status-ai whitespace-nowrap">{row.pattern}</td>
                  <td className="p-3 text-foreground">{row.use}</td>
                  <td className="p-3">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Anti-patterns */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Anti-Patterns</h2>
        <ul className="space-y-2">
          {[
            "❌ <div className='opacity-50 bg-card'> — fades content too. Use bg-card/50 instead.",
            "❌ Glass surfaces over solid empty backgrounds — backdrop-blur has nothing to blur.",
            "❌ Glass on text-heavy content — readability drops fast. Reserve for nav and floating panels.",
            "❌ Custom rgba() values — use Tailwind opacity syntax for token consistency.",
            "❌ backdrop-blur-3xl on always-visible UI — performance cost, especially on mobile.",
          ].map((p, i) => (
            <li
              key={i}
              className="text-sm text-foreground bg-status-error/5 border border-status-error/20 rounded p-3 flex gap-2"
            >
              <Droplets className="w-4 h-4 text-status-error shrink-0 mt-0.5" />
              <span>{p.replace(/^❌\s*/, "")}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function NavbarPreview() {
  return (
    <div className="relative h-12 w-32 rounded-md overflow-hidden bg-muted">
      <div className="absolute inset-0 [background:radial-gradient(var(--color-foreground)_1px,transparent_1px)] [background-size:8px_8px] opacity-30" />
      <div className="absolute top-1 left-1 right-1 h-6 bg-card/80 backdrop-blur-md border border-border/50 rounded text-[10px] flex items-center px-2 text-foreground">
        Navbar
      </div>
    </div>
  );
}

function PopoverPreview() {
  return (
    <div className="relative h-12 w-32 rounded-md overflow-hidden bg-status-ai/20">
      <div className="absolute top-1 left-3 right-3 h-8 bg-popover/95 backdrop-blur-md border border-border rounded shadow text-[10px] flex items-center px-2 text-foreground">
        Menu
      </div>
    </div>
  );
}
