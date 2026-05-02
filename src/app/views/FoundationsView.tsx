import { useEffect, useState } from "react";
import { Layers } from "lucide-react";

interface FoundationData {
  section: string;
  description: string;
  [key: string]: unknown;
}

interface ColorScale {
  [shade: string]: string;
}

interface SemanticColor {
  light: string;
  dark: string;
}

const ENDPOINT = "http://localhost:3001/foundations";

export function FoundationsView({ section }: { section: string }) {
  const [data, setData] = useState<FoundationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setData(null);
    setError(null);

    fetch(`${ENDPOINT}/${section}`)
      .then(async (res) => {
        const json = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setError(json.error || `Failed to fetch foundation "${section}"`);
        } else {
          setData(json as FoundationData);
        }
      })
      .catch((e) => {
        if (cancelled) return;
        setError(e.message);
      });

    return () => {
      cancelled = true;
    };
  }, [section]);

  if (error) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Could not load "{section}"</h1>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="space-y-3">
        <div className="h-3 w-24 bg-muted rounded animate-pulse" />
        <div className="h-10 w-72 bg-muted rounded animate-pulse" />
        <div className="h-4 w-full max-w-2xl bg-muted rounded animate-pulse" />
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

function ColorsSection({ data }: { data: FoundationData }) {
  const zinc = data.zinc as ColorScale;
  const brand = data.brand as ColorScale;
  const semantic = data.semantic as Record<string, SemanticColor>;
  const dataViz = data.dataViz as string[];

  return (
    <div className="space-y-10">
      {brand && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Brand</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {Object.entries(brand).map(([shade, hex]) => (
              <ColorSwatch key={shade} label={`brand-${shade}`} hex={hex} />
            ))}
          </div>
        </section>
      )}

      {semantic && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Semantic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(semantic).map(([name, { light, dark }]) => (
              <div key={name} className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  <div style={{ background: light }} className="h-16" />
                  <div style={{ background: dark }} className="h-16" />
                </div>
                <div className="p-3">
                  <p className="font-mono text-xs font-semibold text-foreground">--color-status-{name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {light} / {dark}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {zinc && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Zinc Scale</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {Object.entries(zinc).map(([shade, hex]) => (
              <ColorSwatch key={shade} label={`zinc-${shade}`} hex={hex} />
            ))}
          </div>
        </section>
      )}

      {dataViz && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Data Viz Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {dataViz.map((hex, i) => (
              <ColorSwatch key={i} label={`chart-${i + 1}`} hex={hex} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ColorSwatch({ label, hex }: { label: string; hex: string }) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div style={{ background: hex }} className="h-16" />
      <div className="p-2">
        <p className="font-mono text-xs font-semibold text-foreground truncate">{label}</p>
        <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{hex}</p>
      </div>
    </div>
  );
}

function TypographySection({ data }: { data: FoundationData }) {
  const fontFamily = data.fontFamily as Record<string, string>;
  const scale = data.scale as Record<string, { size: string; lineHeight: string; weight: number; use: string }>;
  const weights = data.weights as Record<string, number>;

  return (
    <div className="space-y-10">
      {fontFamily && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Font Families</h2>
          <div className="space-y-3">
            {Object.entries(fontFamily).map(([key, value]) => (
              <div key={key} className="bg-card border border-border rounded-lg p-4">
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">{key}</p>
                <p style={{ fontFamily: value }} className="text-2xl text-foreground">
                  The quick brown fox jumps over the lazy dog
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-2">{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {scale && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Type Scale</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Token</th>
                  <th className="text-left p-3 font-semibold text-foreground">Size / Line</th>
                  <th className="text-left p-3 font-semibold text-foreground">Weight</th>
                  <th className="text-left p-3 font-semibold text-foreground">Preview</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {Object.entries(scale).map(([token, spec]) => (
                  <tr key={token}>
                    <td className="p-3 font-mono text-xs text-status-ai">{token}</td>
                    <td className="p-3 font-mono text-xs text-muted-foreground">
                      {spec.size} / {spec.lineHeight}
                    </td>
                    <td className="p-3 font-mono text-xs text-muted-foreground">{spec.weight}</td>
                    <td className="p-3">
                      <span style={{ fontSize: spec.size, lineHeight: spec.lineHeight, fontWeight: spec.weight }} className="text-foreground">
                        Aa Bb Cc
                      </span>
                    </td>
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.entries(weights).map(([name, weight]) => (
              <div key={name} className="bg-card border border-border rounded-lg p-4">
                <p className="text-xs uppercase text-muted-foreground mb-1">{name}</p>
                <p style={{ fontWeight: weight }} className="text-xl text-foreground">
                  Aa
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-1">{weight}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function SpacingSection({ data }: { data: FoundationData }) {
  const scale = (data.scale ?? {}) as Record<string, string>;
  const containers = (data.containers ?? {}) as Record<string, string>;
  const grid = (data.grid ?? null) as { base: number; note?: string } | null;
  const hasScale = Object.keys(scale).length > 0;
  const hasContainers = Object.keys(containers).length > 0;

  return (
    <div className="space-y-10">
      {grid && (
        <section className="bg-status-ai/5 border border-status-ai/20 rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground">{grid.base}px base grid</p>
          {grid.note && <p className="text-sm text-muted-foreground mt-1">{grid.note}</p>}
        </section>
      )}

      {hasScale && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Spacing Scale</h2>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="space-y-2">
              {Object.entries(scale).map(([token, value]) => (
                <div key={token} className="flex items-center gap-4 py-1">
                  <code className="w-12 font-mono text-xs font-semibold text-status-ai shrink-0">{token}</code>
                  <code className="w-16 font-mono text-xs text-muted-foreground shrink-0">{value}</code>
                  <div
                    className="h-4 rounded-sm"
                    style={{ width: value, backgroundColor: "var(--color-primary, #27272a)", minWidth: value === "0px" ? "1px" : undefined }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasContainers && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Containers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {Object.entries(containers).map(([name, value]) => (
              <div key={name} className="bg-card border border-border rounded-lg p-3">
                <p className="font-mono text-xs font-semibold text-foreground">{name}</p>
                <p className="font-mono text-xs text-muted-foreground mt-0.5">{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function BordersSection({ data }: { data: FoundationData }) {
  const radius = data.radius as Record<string, string>;
  const width = data.width as Record<string, string>;

  return (
    <div className="space-y-10">
      {radius && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Border Radius</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {Object.entries(radius).map(([name, value]) => (
              <div key={name} className="bg-card border border-border p-3 flex flex-col items-center gap-2" style={{ borderRadius: value }}>
                <div className="bg-primary w-12 h-12" style={{ borderRadius: value }} />
                <p className="font-mono text-xs font-semibold text-foreground">{name}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {width && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Border Width</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.entries(width).map(([name, value]) => (
              <div key={name} className="bg-card border border-foreground p-4 flex flex-col items-center gap-2 rounded-lg" style={{ borderWidth: value }}>
                <p className="font-mono text-xs font-semibold text-foreground">{name}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ShadowsSection({ data }: { data: FoundationData }) {
  const elevation = data.elevation as Record<string, string>;

  return (
    <div className="space-y-10">
      {elevation && (
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Elevation</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-6 bg-muted/30 rounded-lg">
            {Object.entries(elevation).map(([name, value]) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div className="bg-card w-24 h-24 rounded-lg" style={{ boxShadow: value }} />
                <div className="text-center">
                  <p className="font-mono text-xs font-semibold text-foreground">{name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                    {value === "none" ? "—" : "shadow"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
