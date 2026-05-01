import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: '0. DS Configuration/Governance Rules',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Las 7 Leyes del Strata Design System

Estas leyes son absolutas. No hay excepciones sin documentación explícita con \`// @ds-ignore: razón\`.

---

## Ley 1: Tokens Siempre
Usa tokens CSS del DS, nunca valores hex directos.

| ✅ Correcto | ❌ Incorrecto |
|------------|--------------|
| \`text-foreground\` | \`text-[#02060C]\` |
| \`bg-primary\` | \`bg-[#E6F993]\` |
| \`border-border\` | \`border-[#D0D4D8]\` |

---

## Ley 2: Status Colors via Tokens
Usa \`--color-status-*\` para estados semánticos.

| Token | Uso |
|-------|-----|
| \`bg-status-success\` | Éxito, activo, match |
| \`bg-status-warning\` | Advertencia, pendiente |
| \`bg-status-error\` | Error, crítico |
| \`bg-status-info\` | Información, neutro |
| \`bg-status-ai\` | AI/automatización |

---

## Ley 3: Componentes del DS
Usa los componentes del Strata DS, no reimplementes desde cero.

---

## Ley 4: Dark Mode Siempre
Todos los componentes deben funcionar en light y dark. Prueba el toggle en el toolbar.

---

## Ley 5: Reportar Variantes Nuevas
Si necesitas una variante que no existe, repórtala con \`report_error\` en el MCP antes de improvisarla.

---

## Ley 6: Tier de Governance
Identifica el tier de tu proyecto en su \`CLAUDE.md\` antes de codear.

- **Tier 1** (smart-comparator): solo variantes oficiales, pre-commit bloquea todo
- **Tier 2** (demos cliente): tokens Tailwind permitidos, hex bloqueado
- **Tier 3** (simulaciones): hex con \`// @ds-ignore: razón\`

---

## Ley 7: Sincronización P1↔P2
Si modificas un componente de P2 que ya está en P1, ejecuta \`npm run sync:check\` para actualizar P1.
        `
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function LawCard({ number, title, good, bad }: { number: number; title: string; good?: string; bad?: string }) {
  return (
    <div className="border border-border rounded-lg p-4 space-y-2">
      <div className="flex items-center gap-2">
        <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
          Ley {number}
        </span>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      {(good || bad) && (
        <div className="grid grid-cols-2 gap-2 text-sm">
          {good && (
            <div className="bg-status-success/10 text-status-success rounded p-2">
              <span className="font-mono">✅ {good}</span>
            </div>
          )}
          {bad && (
            <div className="bg-status-error/10 text-status-error rounded p-2">
              <span className="font-mono">❌ {bad}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export const AllLaws: Story = {
  render: () => (
    <div className="space-y-4 p-6 max-w-3xl">
      <h1 className="text-2xl font-bold text-foreground">Strata DS — 7 Leyes de Governance</h1>
      <p className="text-muted-foreground">Las reglas absolutas que aplican a todos los proyectos del ecosistema.</p>
      <div className="space-y-3">
        <LawCard number={1} title="Tokens Siempre" good="text-foreground" bad="text-[#02060C]" />
        <LawCard number={2} title="Status Colors via Tokens" good="bg-status-success" bad="bg-green-600" />
        <LawCard number={3} title="Componentes del DS" good="<Button variant='default'>" bad="<button className='px-4 py-2'>" />
        <LawCard number={4} title="Dark Mode Siempre" good="dark: variants en CVA" bad="solo light mode" />
        <LawCard number={5} title="Reportar Variantes Nuevas" good="report_error via MCP" bad="crear variante sin documentar" />
        <LawCard number={6} title="Tier de Governance" good="tier declarado en CLAUDE.md" bad="sin tier, reglas ambiguas" />
        <LawCard number={7} title="Sincronización P1↔P2" good="npm run sync:check tras cambios" bad="modificar sin sincronizar" />
      </div>
    </div>
  ),
};
