import type { Meta, StoryObj } from '@storybook/react';
import { ShieldCheck, ShieldAlert, Shield } from 'lucide-react';

const meta = {
  title: '0. DS Configuration/Variant Tiers',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Tiers de Governance

Cada proyecto del ecosistema Strata declara su tier en su \`CLAUDE.md\`.
El tier determina qué está permitido, qué genera warning, y qué bloquea el commit.

### Cómo declarar el tier

\`\`\`markdown
<!-- CLAUDE.md del proyecto -->
## DS Governance Tier: 1
\`\`\`

### Resumen de restricciones

| Regla | Tier 1 | Tier 2 | Tier 3 |
|-------|--------|--------|--------|
| Hex hardcodeado | ❌ Bloquea | ❌ Bloquea | ⚠️ Permitido con @ds-ignore |
| Tokens Tailwind | ✅ Permitido | ✅ Permitido | ✅ Permitido |
| Variantes no-oficiales | ❌ Bloquea | ⚠️ Warning | ✅ Permitido |
| Dark mode requerido | ✅ Requerido | ✅ Requerido | ⚠️ Recomendado |
| Pre-commit hook | ✅ Activo | ✅ Activo | ⚠️ Opcional |

### Proyectos actuales

| Proyecto | Tier | Razón |
|---------|------|-------|
| smart-comparator | 1 | Producción, clientes reales |
| front-react-strata-storybook (P2) | 2 | Demos cliente con flexibilidad |
| strata-ds (P1) | 1 | DS source of truth |
| demo-2026-strata-v2 | 3 | Simulaciones con libertad creativa |
        `
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const TIERS = [
  {
    level: 1,
    name: 'Production Strict',
    icon: ShieldCheck,
    color: 'status-success',
    description: 'Máxima restricción. Solo variantes oficiales del DS. Pre-commit bloquea cualquier violación.',
    projects: ['smart-comparator', 'strata-ds'],
    rules: [
      { rule: 'Hex hardcodeado', status: 'blocked' },
      { rule: 'Variantes no oficiales', status: 'blocked' },
      { rule: 'Dark mode', status: 'required' },
      { rule: 'Tokens Tailwind', status: 'required' },
      { rule: 'Pre-commit hook', status: 'active' },
    ],
    example: `// ✅ Tier 1 — solo tokens DS
<Button variant="default">Acción</Button>
<Badge className="bg-status-success">Activo</Badge>`,
    antiExample: `// ❌ Bloquea en Tier 1
<button className="bg-[#E6F993] px-4">Acción</button>
<span className="bg-green-600">Activo</span>`,
  },
  {
    level: 2,
    name: 'Demo Flexible',
    icon: ShieldAlert,
    color: 'status-warning',
    description: 'Tokens Tailwind permitidos, hex bloqueado. Variantes custom con warning. Para demos y presentaciones a cliente.',
    projects: ['front-react-strata-storybook'],
    rules: [
      { rule: 'Hex hardcodeado', status: 'blocked' },
      { rule: 'Variantes no oficiales', status: 'warning' },
      { rule: 'Dark mode', status: 'required' },
      { rule: 'Tokens Tailwind', status: 'allowed' },
      { rule: 'Pre-commit hook', status: 'active' },
    ],
    example: `// ✅ Tier 2 — tokens Tailwind OK
<div className="bg-violet-100 text-violet-800">
  Variante custom permitida
</div>`,
    antiExample: `// ❌ Aún bloquea en Tier 2
<div style={{ backgroundColor: '#8b5cf6' }}>
  Hex directo bloqueado
</div>`,
  },
  {
    level: 3,
    name: 'Simulation Free',
    icon: Shield,
    color: 'status-info',
    description: 'Máxima libertad creativa. Hex permitido con comentario @ds-ignore. Para simulaciones y prototipos.',
    projects: ['demo-2026-strata-v2'],
    rules: [
      { rule: 'Hex hardcodeado', status: 'ds-ignore' },
      { rule: 'Variantes no oficiales', status: 'allowed' },
      { rule: 'Dark mode', status: 'recommended' },
      { rule: 'Tokens Tailwind', status: 'allowed' },
      { rule: 'Pre-commit hook', status: 'optional' },
    ],
    example: `// ✅ Tier 3 — con @ds-ignore documentado
<div
  className="bg-[#FF6B35]" // @ds-ignore: brand color cliente Acme
>
  Color custom documentado
</div>`,
    antiExample: `// ⚠️ Sin @ds-ignore genera warning
<div className="bg-[#FF6B35]">
  Sin documentar — genera aviso
</div>`,
  },
];

const STATUS_LABELS: Record<string, { label: string; className: string }> = {
  blocked: { label: 'Bloquea commit', className: 'bg-status-error/10 text-status-error' },
  warning: { label: 'Warning', className: 'bg-status-warning/10 text-status-warning' },
  required: { label: 'Requerido', className: 'bg-status-success/10 text-status-success' },
  allowed: { label: 'Permitido', className: 'bg-status-success/10 text-status-success' },
  active: { label: 'Activo', className: 'bg-status-success/10 text-status-success' },
  optional: { label: 'Opcional', className: 'bg-muted text-muted-foreground' },
  recommended: { label: 'Recomendado', className: 'bg-status-info/10 text-status-info' },
  'ds-ignore': { label: 'Con @ds-ignore', className: 'bg-status-warning/10 text-status-warning' },
};

function TierCard({ tier }: { tier: typeof TIERS[number] }) {
  const Icon = tier.icon;
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <div className={`flex items-center gap-3 px-5 py-4 bg-${tier.color}/10 border-b border-border`}>
        <Icon className={`w-5 h-5 text-${tier.color}`} />
        <div>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-${tier.color} text-white`}>
              Tier {tier.level}
            </span>
            <span className="font-semibold text-foreground">{tier.name}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">{tier.description}</p>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Proyectos</p>
          <div className="flex flex-wrap gap-2">
            {tier.projects.map((p) => (
              <code key={p} className="text-xs bg-muted px-2 py-1 rounded text-foreground">{p}</code>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Reglas</p>
          <div className="space-y-1.5">
            {tier.rules.map(({ rule, status }) => {
              const { label, className } = STATUS_LABELS[status];
              return (
                <div key={rule} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{rule}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${className}`}>{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs font-semibold text-status-success mb-1.5">✅ Permitido</p>
            <pre className="text-xs bg-status-success/5 border border-status-success/20 rounded-lg p-3 overflow-x-auto text-foreground whitespace-pre-wrap">
              <code>{tier.example}</code>
            </pre>
          </div>
          <div>
            <p className="text-xs font-semibold text-status-error mb-1.5">❌ Evitar</p>
            <pre className="text-xs bg-status-error/5 border border-status-error/20 rounded-lg p-3 overflow-x-auto text-foreground whitespace-pre-wrap">
              <code>{tier.antiExample}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export const AllTiers: Story = {
  render: () => (
    <div className="space-y-6 p-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Governance Tiers</h1>
        <p className="text-muted-foreground mt-1">
          Declara el tier en el <code className="bg-muted px-1 rounded">CLAUDE.md</code> de tu proyecto.
          El tier determina qué enforcea el pre-commit hook.
        </p>
      </div>
      <div className="space-y-4">
        {TIERS.map((tier) => (
          <TierCard key={tier.level} tier={tier} />
        ))}
      </div>
    </div>
  ),
};

export const TierComparison: Story = {
  render: () => (
    <div className="space-y-4 p-6 max-w-3xl">
      <h2 className="text-xl font-bold text-foreground">Comparación de Tiers</h2>
      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted border-b border-border">
              <th className="text-left px-4 py-3 font-semibold text-foreground">Regla</th>
              {TIERS.map((t) => (
                <th key={t.level} className="text-center px-4 py-3 font-semibold text-foreground">
                  Tier {t.level}
                  <div className="text-xs font-normal text-muted-foreground">{t.name}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {['Hex hardcodeado', 'Variantes no oficiales', 'Dark mode', 'Tokens Tailwind', 'Pre-commit hook'].map((rule, idx) => (
              <tr key={rule} className={idx % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                <td className="px-4 py-3 text-foreground font-medium">{rule}</td>
                {TIERS.map((tier) => {
                  const ruleData = tier.rules.find((r) => r.rule === rule);
                  if (!ruleData) return <td key={tier.level} />;
                  const { label, className } = STATUS_LABELS[ruleData.status];
                  return (
                    <td key={tier.level} className="px-4 py-3 text-center">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${className}`}>{label}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
};
