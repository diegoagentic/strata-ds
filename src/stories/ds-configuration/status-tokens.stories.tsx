import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '0. DS Configuration/Status Tokens',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Tokens de Estado Semánticos

5 tokens de status definidos en \`tokens/semantic/colors.json\`.
Resolver el 60%+ de las violaciones del ecosistema reemplazando colores raw.

### Cómo usar
\`\`\`tsx
// ✅ Correcto
<Badge className="bg-status-success text-status-success-foreground">Completado</Badge>

// ❌ Incorrecto — hex hardcodeado
<Badge className="bg-[#098400] text-white">Completado</Badge>
\`\`\`

### Tokens disponibles
| Token CSS | Tailwind | Light | Dark |
|-----------|----------|-------|------|
| \`--color-status-success\` | \`bg-status-success\` | #16a34a | #4ade80 |
| \`--color-status-warning\` | \`bg-status-warning\` | #b45309 | #fbbf24 |
| \`--color-status-error\` | \`bg-status-error\` | #C11736 | #ED5F74 |
| \`--color-status-info\` | \`bg-status-info\` | #2563eb | #60a5fa |
| \`--color-status-ai\` | \`bg-status-ai\` | #8b5cf6 | #a78bfa |
        `
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const STATUS_TOKENS = [
  { name: 'success', label: 'Success', description: 'Éxito, activo, match, completado', example: 'bg-status-success' },
  { name: 'warning', label: 'Warning', description: 'Advertencia, revisión, pendiente', example: 'bg-status-warning' },
  { name: 'error', label: 'Error', description: 'Error, crítico, fallo, rechazado', example: 'bg-status-error' },
  { name: 'info', label: 'Info', description: 'Información, neutral, proceso', example: 'bg-status-info' },
  { name: 'ai', label: 'AI', description: 'Automatización, IA, generado por Claude', example: 'bg-status-ai' },
] as const;

export const AllStatusTokens: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <h2 className="text-xl font-bold text-foreground">Status Tokens</h2>
      <div className="grid grid-cols-1 gap-3 max-w-2xl">
        {STATUS_TOKENS.map((token) => (
          <div key={token.name} className="flex items-center gap-4 border border-border rounded-lg p-4">
            <div
              className={`w-12 h-12 rounded-lg flex-shrink-0 ${token.example} flex items-center justify-center`}
            >
              <span className="text-white text-xs font-bold">Aa</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{token.label}</span>
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                  {token.example}
                </code>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{token.description}</p>
              <code className="text-xs text-muted-foreground">--color-status-{token.name}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const StatusInContext: Story = {
  render: () => (
    <div className="space-y-4 p-6 max-w-lg">
      <h2 className="text-xl font-bold text-foreground">Tokens en Contexto</h2>
      <div className="space-y-2">
        {STATUS_TOKENS.map((token) => (
          <div key={token.name} className={`flex items-center gap-3 px-4 py-3 rounded-lg ${token.example}/10 border border-current/${token.name === 'success' ? '20' : '20'}`}>
            <div className={`w-2 h-2 rounded-full ${token.example}`} />
            <span className={`text-sm font-medium text-status-${token.name}`}>{token.label}: {token.description}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
