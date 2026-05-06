import { Layers } from "lucide-react";
import { foundationsData } from "../data/foundations-data";

interface FoundationData {
  section: string;
  description: string;
  [key: string]: unknown;
}

interface SurfaceToken {
  light: string;
  dark: string;
  use: string;
}

interface ChartToken {
  value: string;
  use: string;
}

interface ColorScale {
  [shade: string]: string;
}

interface SizeToken {
  rem: string;
  px: string;
  use?: string;
}

interface RadiusToken {
  rem: string;
  px: string;
  class: string;
}

interface WidthToken {
  value: string;
  class: string;
}

interface GlowToken {
  light: string;
  dark: string;
  use: string;
}

interface ScaleToken {
  size: string;
  lineHeight: string;
  weight: number;
  family?: string;
  use: string;
}

export function FoundationsView({ section }: { section: string }) {
  const data = (foundationsData[section] ?? null) as FoundationData | null;

  if (!data) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Section not found: "{section}"</h1>
        <p className="text-sm text-muted-foreground">This foundation section has not been documented yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <header>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-status-ai mb-2">
          <Layers className="w-3.5 h-3.5" />
          Foundations
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-3 capitalize">{data.section}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{data.description}</p>
      </header>

      {section === "colors" && <ColorsSection data={data} />}
      {section === "typography" && <TypographySection data={data} />}
      {section === "spacing" && <SpacingSection data={data} />}
      {section === "borders" && <BordersSection data={data} />}
      {section === "shadows" && <ShadowsSection data={data} />}
    </div>
  );
}

// ─── Section: Colors ───────────────────────────────────────────────────────

function ColorsSection({ data }: { data: FoundationData }) {
  const surfaces = data.surfaces as Record<string, SurfaceToken> | undefined;
  const status = data.status as Record<string, SurfaceToken> | undefined;
  const sidebar = data.sidebar as Record<string, SurfaceToken> | undefined;
  const charts = data.charts as Record<string, ChartToken> | undefined;
  const brand = data.brand as ColorScale | undefined;
  const zinc = data.zinc as ColorScale | undefined;
  const red = data.red as ColorScale | undefined;
  const green = data.green as ColorScale | undefined;
  const blue = data.blue as ColorScale | undefined;
  const amber = data.amber as ColorScale | undefined;
  const indigo = data.indigo as ColorScale | undefined;
  const violet = data.violet as ColorScale | undefined;
  const base = data.base as Record<string, string> | undefined;

  return (
    <div className="space-y-12">
      {surfaces && (
        <SurfaceGroup
          title="Surface tokens"
          subtitle="Background, foreground, and intent surfaces. Pair with Tailwind utilities (bg-*, text-*, border-*)."
          tokens={surfaces}
          prefix=""
        />
      )}

      {status && (
        <SurfaceGroup
          title="Status tokens"
          subtitle="Semantic intent — preferred over raw color names for state indicators."
          tokens={status}
          prefix="status-"
        />
      )}

      {sidebar && (
        <SurfaceGroup
          title="Sidebar tokens"
          subtitle="Independent so app shells can style sidebars without touching surfaces."
          tokens={sidebar}
          prefix=""
        />
      )}

      {charts && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-1">Chart tokens</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Data viz palette — same in light & dark.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {Object.entries(charts).map(([name, token]) => (
              <ColorSwatch
                key={name}
                label={name}
                hex={token.value}
                hint={token.use}
              />
            ))}
          </div>
        </section>
      )}

      {brand && (
        <PaletteGroup title="Brand (Volt Lime)" prefix="brand-" scale={brand} />
      )}

      {zinc && (
        <PaletteGroup title="Zinc (Strata neutral)" prefix="zinc-" scale={zinc} />
      )}

      {red && <PaletteGroup title="Red" prefix="red-" scale={red} />}
      {green && <PaletteGroup title="Green" prefix="green-" scale={green} />}
      {blue && <PaletteGroup title="Blue" prefix="blue-" scale={blue} />}
      {amber && <PaletteGroup title="Amber" prefix="amber-" scale={amber} />}
      {indigo && <PaletteGroup title="Indigo" prefix="indigo-" scale={indigo} />}
      {violet && <PaletteGroup title="Violet" prefix="violet-" scale={violet} />}

      {base && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Base</h2>
          <div className="grid grid-cols-2 gap-3 max-w-md">
            {Object.entries(base).map(([name, hex]) => (
              <ColorSwatch key={name} label={name} hex={hex} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function SurfaceGroup({
  title,
  subtitle,
  tokens,
  prefix,
}: {
  title: string;
  subtitle?: string;
  tokens: Record<string, SurfaceToken>;
  prefix: string;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-1">{title}</h2>
      {subtitle && (
        <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.entries(tokens).map(([name, token]) => (
          <div
            key={name}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <div className="grid grid-cols-2">
              <div style={{ background: token.light }} className="h-14" />
              <div style={{ background: token.dark }} className="h-14" />
            </div>
            <div className="p-3">
              <p className="font-mono text-xs font-semibold text-foreground">
                --color-{prefix}{name}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                {token.light} / {token.dark}
              </p>
              {token.use && (
                <p className="text-xs text-muted-foreground mt-1">{token.use}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PaletteGroup({
  title,
  prefix,
  scale,
}: {
  title: string;
  prefix: string;
  scale: ColorScale;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-2">
        {Object.entries(scale).map(([shade, hex]) => (
          <ColorSwatch key={shade} label={`${prefix}${shade}`} hex={hex} compact />
        ))}
      </div>
    </section>
  );
}

function ColorSwatch({
  label,
  hex,
  hint,
  compact,
}: {
  label: string;
  hex: string;
  hint?: string;
  compact?: boolean;
}) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div
        style={{ background: hex }}
        className={compact ? "h-12" : "h-16"}
      />
      <div className="p-2">
        <p className="font-mono text-xs font-semibold text-foreground truncate">
          {label}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
          {hex}
        </p>
        {hint && (
          <p className="text-[10px] text-muted-foreground mt-1">{hint}</p>
        )}
      </div>
    </div>
  );
}

// ─── Section: Typography ───────────────────────────────────────────────────

function TypographySection({ data }: { data: FoundationData }) {
  const families = data.families as
    | Record<string, { value: string; use: string }>
    | undefined;
  const sizes = data.sizes as Record<string, SizeToken> | undefined;
  const weights = data.weights as Record<string, number> | undefined;
  const lineHeights = data.lineHeights as Record<string, string> | undefined;
  const letterSpacings = data.letterSpacings as
    | Record<string, string>
    | undefined;
  const scale = data.scale as Record<string, ScaleToken> | undefined;

  return (
    <div className="space-y-10">
      {families && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Font families</h2>
          <div className="space-y-3">
            {Object.entries(families).map(([key, family]) => (
              <div
                key={key}
                className="bg-card border border-border rounded-lg p-4"
              >
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                  {key}
                </p>
                <p
                  style={{ fontFamily: family.value }}
                  className="text-2xl text-foreground"
                >
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-xs text-muted-foreground mt-2">{family.use}</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-1 truncate">
                  {family.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {sizes && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Sizes</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Token</th>
                  <th className="text-left p-3 font-semibold text-foreground">rem / px</th>
                  <th className="text-left p-3 font-semibold text-foreground">Preview</th>
                  <th className="text-left p-3 font-semibold text-foreground">Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {Object.entries(sizes).map(([name, size]) => (
                  <tr key={name}>
                    <td className="p-3 font-mono text-xs text-status-ai">{name}</td>
                    <td className="p-3 font-mono text-xs text-muted-foreground whitespace-nowrap">
                      {size.rem} / {size.px}
                    </td>
                    <td className="p-3">
                      <span style={{ fontSize: size.rem }} className="text-foreground">
                        Aa
                      </span>
                    </td>
                    <td className="p-3 text-xs text-muted-foreground">{size.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {weights && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Weights</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {Object.entries(weights).map(([name, weight]) => (
              <div
                key={name}
                className="bg-card border border-border rounded-lg p-3 text-center"
              >
                <p
                  style={{ fontWeight: weight }}
                  className="text-xl text-foreground mb-1"
                >
                  Aa
                </p>
                <p className="font-mono text-xs text-foreground">{name}</p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {weight}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {lineHeights && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Line heights</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.entries(lineHeights).map(([name, value]) => (
              <div
                key={name}
                className="bg-card border border-border rounded-lg p-3"
              >
                <p className="font-mono text-xs font-semibold text-foreground">
                  {name}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground mb-2">
                  {value}
                </p>
                <p
                  style={{ lineHeight: value }}
                  className="text-xs text-muted-foreground"
                >
                  Two lines<br />of body text
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {letterSpacings && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Letter spacing</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.entries(letterSpacings).map(([name, value]) => (
              <div
                key={name}
                className="bg-card border border-border rounded-lg p-3"
              >
                <p className="font-mono text-xs font-semibold text-foreground">
                  {name}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground mb-2">
                  {value}
                </p>
                <p
                  style={{ letterSpacing: value }}
                  className="text-sm text-foreground"
                >
                  STRATA
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {scale && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            Curated semantic scale
          </h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Token</th>
                  <th className="text-left p-3 font-semibold text-foreground">Size / Line</th>
                  <th className="text-left p-3 font-semibold text-foreground">Weight</th>
                  <th className="text-left p-3 font-semibold text-foreground">Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {Object.entries(scale).map(([token, spec]) => (
                  <tr key={token}>
                    <td className="p-3 font-mono text-xs text-status-ai">{token}</td>
                    <td className="p-3 font-mono text-xs text-muted-foreground whitespace-nowrap">
                      {spec.size} / {spec.lineHeight}
                    </td>
                    <td className="p-3 font-mono text-xs text-muted-foreground">{spec.weight}</td>
                    <td className="p-3 text-xs text-muted-foreground">{spec.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

// ─── Section: Spacing ──────────────────────────────────────────────────────

function SpacingSection({ data }: { data: FoundationData }) {
  const scale = (data.scale ?? {}) as Record<string, SizeToken>;
  const grid = (data.grid ?? null) as { base: number; note?: string } | null;
  const hasScale = Object.keys(scale).length > 0;

  return (
    <div className="space-y-10">
      {grid && (
        <section className="bg-status-ai/5 border border-status-ai/20 rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground">
            {grid.base}px base grid
          </p>
          {grid.note && (
            <p className="text-sm text-muted-foreground mt-1">{grid.note}</p>
          )}
        </section>
      )}

      {hasScale && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Spacing scale</h2>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="space-y-2">
              {Object.entries(scale).map(([token, value]) => (
                <div key={token} className="flex items-center gap-4 py-1">
                  <code className="w-12 font-mono text-xs font-semibold text-status-ai shrink-0">
                    {token}
                  </code>
                  <code className="w-20 font-mono text-xs text-muted-foreground shrink-0">
                    {value.rem} / {value.px}
                  </code>
                  <div
                    className="h-4 rounded-sm bg-status-ai"
                    style={{
                      width: value.rem,
                      minWidth: value.px === "0px" ? "1px" : undefined,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-card border border-border rounded-lg p-4 text-sm text-muted-foreground">
        Looking for the 12-column grid system and container max-widths? See the
        dedicated{" "}
        <button
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent("strata:navigate", { detail: "grid-containers" }),
            )
          }
          className="text-status-ai hover:underline font-semibold"
        >
          Grid &amp; Containers
        </button>{" "}
        page.
      </section>
    </div>
  );
}

// ─── Section: Borders ──────────────────────────────────────────────────────

function BordersSection({ data }: { data: FoundationData }) {
  const radius = data.radius as Record<string, RadiusToken> | undefined;
  const widths = data.widths as Record<string, WidthToken> | undefined;

  return (
    <div className="space-y-10">
      {radius && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Border radius</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {Object.entries(radius).map(([name, token]) => (
              <div
                key={name}
                className="bg-card border border-border p-3 flex flex-col items-center gap-2"
                style={{ borderRadius: token.rem }}
              >
                <div
                  className="bg-primary w-12 h-12"
                  style={{ borderRadius: token.rem }}
                />
                <p className="font-mono text-xs font-semibold text-foreground">
                  {name}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {token.rem}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {token.class}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {widths && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Border width</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {Object.entries(widths).map(([name, token]) => (
              <div
                key={name}
                className="bg-card border border-foreground p-4 flex flex-col items-center gap-2 rounded-lg"
                style={{ borderWidth: token.value }}
              >
                <p className="font-mono text-xs font-semibold text-foreground">
                  {name}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {token.value}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {token.class}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// ─── Section: Shadows ──────────────────────────────────────────────────────

function ShadowsSection({ data }: { data: FoundationData }) {
  const elevations = data.elevations as Record<string, string> | undefined;
  const glow = data.glow as Record<string, GlowToken> | undefined;
  const zIndex = data.zIndex as Record<string, string> | undefined;

  return (
    <div className="space-y-10">
      {elevations && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Elevations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-muted/30 rounded-lg">
            {Object.entries(elevations).map(([name, value]) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div
                  className="bg-card w-24 h-24 rounded-lg"
                  style={{ boxShadow: value === "none" ? "none" : value }}
                />
                <div className="text-center">
                  <p className="font-mono text-xs font-semibold text-foreground">
                    {name}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                    {value === "none" ? "—" : `shadow-${name}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {glow && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-1">Glow</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Subtle ambient lift used by hero CTAs and floating panels. Light/dark
            pairs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-muted/30 rounded-lg">
            {Object.entries(glow).map(([name, token]) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div
                  className="bg-card w-32 h-24 rounded-lg"
                  style={{ boxShadow: token.light }}
                />
                <div className="text-center">
                  <p className="font-mono text-xs font-semibold text-foreground">
                    glow-{name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{token.use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {zIndex && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Z-index ladder</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">
                    Level
                  </th>
                  <th className="text-left p-3 font-semibold text-foreground">
                    Use
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {Object.entries(zIndex).map(([level, use]) => (
                  <tr key={level}>
                    <td className="p-3 font-mono text-xs text-status-ai">
                      z-{level}
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
