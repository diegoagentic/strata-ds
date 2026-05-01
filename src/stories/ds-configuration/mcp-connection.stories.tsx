import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Copy, Check, Terminal, Zap } from 'lucide-react';

const meta = {
  title: '0. DS Configuration/MCP Connection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Strata DS — MCP Server

Conecta Claude Code directamente al Design System sin plugins ni configuración externa.

### Qué obtienes
- \`get_overview\` — Descripción completa del DS, tokens y principios
- \`get_component(name)\` — Props, variantes CVA, tokens, reglas de governance
- \`get_tokens(category)\` — Referencia de tokens CSS por categoría
- \`get_rules(category)\` — Reglas: color-tokens, buttons, containers, etc.
- \`get_anti_patterns\` — Errores documentados a evitar
- \`search_governance(q)\` — Búsqueda en toda la governance
- \`report_error({...})\` — Reportar errores para el sistema de aprendizaje

### Setup (3 pasos)
1. Copia el JSON de configuración de abajo
2. Agrégalo a \`.claude/settings.json\` de tu proyecto
3. Reinicia Claude Code
        `
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const MCP_CONFIG = JSON.stringify({
  mcpServers: {
    "strata-ds": {
      command: "node",
      args: ["../design system/strata-ds/src/mcp-server/index.js"]
    }
  }
}, null, 2);

const MCP_TOOLS = [
  { name: 'get_overview', description: 'Resumen completo del DS', example: 'get_overview()' },
  { name: 'get_component', description: 'Props, variantes y tokens de un componente', example: 'get_component("Button")' },
  { name: 'get_tokens', description: 'Tokens CSS por categoría', example: 'get_tokens("status")' },
  { name: 'get_rules', description: 'Reglas de governance por categoría', example: 'get_rules("color-tokens")' },
  { name: 'get_anti_patterns', description: 'Errores documentados a evitar', example: 'get_anti_patterns()' },
  { name: 'search_governance', description: 'Búsqueda en toda la governance', example: 'search_governance("button variants")' },
  { name: 'report_error', description: 'Reportar error para sistema de aprendizaje', example: 'report_error({ component: "Button", error: "..." })' },
];

function CopyCodeBlock({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = code;
      ta.style.position = 'fixed';
      ta.style.left = '-999999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5" />
          {label}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs px-2 py-1 rounded bg-background hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-status-success" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copiado' : 'Copiar'}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-foreground bg-card overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export const SetupGuide: Story = {
  render: () => (
    <div className="space-y-6 p-6 max-w-2xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-status-ai rounded-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">Strata DS MCP Server</h1>
          <p className="text-sm text-muted-foreground">Conecta Claude Code al Design System en 3 pasos</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
          <div className="space-y-2 flex-1">
            <p className="font-medium text-foreground">Agrega la configuración a tu proyecto</p>
            <p className="text-sm text-muted-foreground">Crea o edita <code className="bg-muted px-1 rounded">.claude/settings.json</code> en tu proyecto:</p>
            <CopyCodeBlock code={MCP_CONFIG} label=".claude/settings.json" />
            <p className="text-xs text-muted-foreground">Ajusta la ruta según tu estructura de carpetas relativa a strata-ds.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
          <div className="space-y-2 flex-1">
            <p className="font-medium text-foreground">Reinicia Claude Code</p>
            <p className="text-sm text-muted-foreground">El MCP server se activa automáticamente al abrir Claude Code en tu proyecto.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
          <div className="space-y-2 flex-1">
            <p className="font-medium text-foreground">Verifica la conexión</p>
            <CopyCodeBlock code="get_overview" label="Prueba en Claude Code" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AvailableTools: Story = {
  render: () => (
    <div className="space-y-4 p-6 max-w-2xl">
      <h2 className="text-xl font-bold text-foreground">Tools disponibles</h2>
      <div className="space-y-2">
        {MCP_TOOLS.map((tool) => (
          <div key={tool.name} className="border border-border rounded-lg p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <code className="text-sm font-mono font-bold text-primary">{tool.name}</code>
                <p className="text-sm text-muted-foreground mt-0.5">{tool.description}</p>
              </div>
              <code className="text-xs bg-muted px-2 py-1 rounded text-foreground whitespace-nowrap flex-shrink-0">
                {tool.example}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
