import { Sparkles, Download, Quote } from "lucide-react";
import { copyToClipboard } from "@/utils/clipboard";
import { useState } from "react";
import logoBlack from "@/assets/branding/logo-black.png";
import logoWhite from "@/assets/branding/logo-white.png";
import logoLime from "@/assets/branding/logo-lime.png";
import logoGray from "@/assets/branding/logo-gray.png";

export function BrandingView() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (id: string, value: string) => {
    if (await copyToClipboard(value)) {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <header>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-status-ai mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          Foundations
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Branding & Assets</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          The Strata brand identity is technical, functional, and precise. Assets work seamlessly across light
          and dark modes — with <strong className="text-foreground">Volt Lime</strong> serving as the primary signal color.
        </p>
      </header>

      {/* Brand essence */}
      <section className="bg-card border border-border rounded-xl p-6 max-w-3xl">
        <Quote className="w-6 h-6 text-status-ai mb-3" />
        <p className="text-lg text-foreground leading-relaxed">
          "Strata is the intelligence layer for industrial operations. Our brand reflects clarity, precision,
          and the disciplined quiet of systems that simply work — punctuated by Volt Lime when something
          deserves your attention."
        </p>
      </section>

      {/* Logo presentations */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Logo Variants</h2>
        <p className="text-sm text-muted-foreground mb-6">
          The Strata mark is a flat geometric monogram. Click any variant to download the PNG.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <LogoCard
            label="Logo Black (Mark)"
            description="Light backgrounds — official documents, light mode"
            src={logoBlack}
            wrapperClass="bg-muted"
          />
          <LogoCard
            label="Logo White (Mark)"
            description="Dark backgrounds — dark mode primary nav"
            src={logoWhite}
            wrapperClass="bg-foreground"
          />
          <LogoCard
            label="Logo Lime (Mark)"
            description="Accent / signal usage (dark mode only)"
            src={logoLime}
            wrapperClass="bg-foreground"
          />
          <LogoCard
            label="Logo Gray (Mark)"
            description="Muted/secondary contexts, footers"
            src={logoGray}
            wrapperClass="bg-card border border-border"
          />
        </div>
      </section>

      {/* Volt Lime spotlight */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Volt Lime — Primary Signal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-300 dark:bg-brand-500 size-12 rounded-md" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">brand-300 / brand-500 (dark)</p>
                <p className="text-lg font-bold text-foreground">#E6F993 / #84cc16</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              The lime accent that says <strong className="text-foreground">act now</strong> — primary CTAs,
              active state indicators, focus rings. Use sparingly: one signal per screen section.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 space-y-3">
            <p className="text-sm font-semibold text-foreground">Where to use Volt Lime</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-status-success mt-0.5">✓</span>
                <span className="text-foreground">Primary CTA buttons (default / brand variant)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-status-success mt-0.5">✓</span>
                <span className="text-foreground">Active nav indicators / selected state underlines</span>
              </li>
              <li className="flex gap-2">
                <span className="text-status-success mt-0.5">✓</span>
                <span className="text-foreground">Card accent strips / icon container backgrounds</span>
              </li>
              <li className="flex gap-2">
                <span className="text-status-error mt-0.5">✗</span>
                <span className="text-muted-foreground">Body text or headings (fails WCAG AA contrast)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-status-error mt-0.5">✗</span>
                <span className="text-muted-foreground">Full section / page backgrounds (too heavy)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-status-error mt-0.5">✗</span>
                <span className="text-muted-foreground">Status indicators (use status-success/warning/error)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Usage examples */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Usage Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar header */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="bg-foreground p-4">
              <div className="flex items-center gap-3">
                <img src={logoLime} alt="Strata" className="size-8" />
                <div>
                  <p className="text-background font-bold text-sm tracking-wide">STRATA</p>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-wider">Intelligence Layer</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-foreground mb-1">Sidebar Header (Dark)</p>
              <p className="text-xs text-muted-foreground">
                Use the Lime mark at 32px (w-8) for application headers in dark mode.
              </p>
            </div>
          </div>

          {/* Auth hero */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="bg-muted p-8 flex flex-col items-center gap-4 min-h-[160px] justify-center">
              <img src={logoBlack} alt="Strata" className="size-12 dark:hidden" />
              <img src={logoWhite} alt="Strata" className="size-12 hidden dark:block" />
              <div className="text-center space-y-1">
                <div className="h-2 w-24 bg-muted-foreground/30 rounded mx-auto" />
                <div className="h-2 w-16 bg-muted-foreground/30 rounded mx-auto" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-foreground mb-1">Auth Hero (Centered)</p>
              <p className="text-xs text-muted-foreground">
                For authentication or centered layouts, use the mark at 48px (w-12) or larger.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <img src={logoBlack} alt="Strata" className="size-6 dark:hidden" />
                <img src={logoWhite} alt="Strata" className="size-6 hidden dark:block" />
                <span className="text-xs font-bold text-foreground">STRATA</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-foreground mb-1">Footer / Condensed</p>
              <p className="text-xs text-muted-foreground">
                Use the mark at 24px (w-6) for footers or secondary attribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation snippet */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">Implementation Snippets</h2>
        <div className="space-y-4">
          {[
            {
              id: "cta-button",
              label: "Primary CTA Button",
              code: `<Button variant="default">Get Started</Button>\n// Renders bg-brand-300 light, bg-brand-500 dark`,
            },
            {
              id: "active-nav",
              label: "Active Nav Indicator",
              code: `<NavbarItem current>Dashboard</NavbarItem>\n// 'current' adds the brand accent bar`,
            },
            {
              id: "icon-container",
              label: "Brand Icon Container",
              code: `<span className="inline-flex p-2 rounded-lg bg-brand-300/15 dark:bg-brand-500/15">\n  <StarIcon className="size-5 text-foreground" />\n</span>`,
            },
          ].map(({ id, label, code }) => (
            <div key={id} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <button
                  onClick={() => copy(id, code)}
                  className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied === id ? (
                    <>✓ Copied</>
                  ) : (
                    <>
                      <Download className="w-3 h-3" /> Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 text-xs font-mono text-foreground overflow-x-auto leading-relaxed">{code}</pre>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function LogoCard({
  label,
  description,
  src,
  wrapperClass,
}: {
  label: string;
  description: string;
  src: string;
  wrapperClass: string;
}) {
  return (
    <div className="space-y-3">
      <div
        className={`aspect-square rounded-lg border border-border flex items-center justify-center p-10 transition-shadow hover:shadow-md ${wrapperClass}`}
      >
        <img src={src} alt={label} className="w-full h-auto object-contain" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        <a
          href={src}
          download
          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <Download className="w-3 h-3" /> Download PNG
        </a>
      </div>
    </div>
  );
}
