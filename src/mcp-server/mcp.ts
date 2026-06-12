import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import * as fs from 'fs';
import * as path from 'path';
import { validateCode, formatValidation } from './validator.js';

const GOVERNANCE_PATH = path.resolve(__dirname, '../../../governance');

function readGovernanceFile(relativePath: string): string {
  const filePath = path.join(GOVERNANCE_PATH, relativePath);
  if (!fs.existsSync(filePath)) {
    return `File not found: ${relativePath}`;
  }
  return fs.readFileSync(filePath, 'utf-8');
}

function searchGovernance(query: string): string {
  const results: string[] = [];
  const queryLower = query.toLowerCase();

  function searchDir(dir: string, prefix = '') {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relPath = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        searchDir(fullPath, relPath);
      } else if (entry.name.endsWith('.md')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        if (content.toLowerCase().includes(queryLower)) {
          const lines = content.split('\n');
          const matchLines = lines
            .filter(line => line.toLowerCase().includes(queryLower))
            .slice(0, 3)
            .map(line => `  > ${line.trim()}`);
          results.push(`### ${relPath}\n${matchLines.join('\n')}`);
        }
      }
    }
  }

  searchDir(GOVERNANCE_PATH);
  return results.length > 0
    ? `Found in ${results.length} file(s):\n\n${results.join('\n\n')}`
    : `No results found for: "${query}"`;
}

const server = new McpServer({
  name: 'strata-ds',
  version: '1.0.0',
});

server.tool(
  'get_laws',
  'Get the absolute design system laws that must never be violated. Always consult before creating any new component or flow.',
  {},
  async () => ({
    content: [{ type: 'text', text: readGovernanceFile('LAWS.md') }],
  })
);

server.tool(
  'get_rules',
  'Get design system rules for a specific category.',
  {
    category: z.enum([
      'color-tokens',
      'brand-colors',
      'containers-and-cards',
      'buttons-and-actions',
      'icons',
      'typography',
      'elevation',
      'code-usage',
      'modal-patterns',
      'layout-density',
      'spacing-rhythm',
      'responsive-behavior',
      'empty-states',
      'loading-states',
      'microcopy-tone',
      'accessibility-focus',
      'data-display',
    ]).describe('The rule category to retrieve'),
  },
  async ({ category }) => {
    const fileMap: Record<string, string> = {
      'color-tokens': 'rules/01-color-tokens.md',
      'brand-colors': 'rules/02-brand-colors.md',
      'containers-and-cards': 'rules/03-containers-and-cards.md',
      'buttons-and-actions': 'rules/04-buttons-and-actions.md',
      'icons': 'rules/05-icons.md',
      'typography': 'rules/06-typography.md',
      'elevation': 'rules/07-elevation.md',
      'code-usage': 'code-usage.md',
      'modal-patterns': 'rules/08-modal-patterns.md',
      'layout-density': 'rules/09-layout-density.md',
      'spacing-rhythm': 'rules/10-spacing-rhythm.md',
      'responsive-behavior': 'rules/11-responsive-behavior.md',
      'empty-states': 'rules/12-empty-states.md',
      'loading-states': 'rules/13-loading-states.md',
      'microcopy-tone': 'rules/14-microcopy-tone.md',
      'accessibility-focus': 'rules/15-accessibility-focus.md',
      'data-display': 'rules/16-data-display.md',
    };
    return {
      content: [{ type: 'text', text: readGovernanceFile(fileMap[category]) }],
    };
  }
);

server.tool(
  'get_tokens',
  'Get the complete token reference for all available CSS custom properties and their Tailwind equivalents. Use this to find the correct token name for any color, spacing, or typography need.',
  {},
  async () => ({
    content: [{ type: 'text', text: readGovernanceFile('tokens/token-reference.md') }],
  })
);

server.tool(
  'get_anti_patterns',
  'Get documented errors and anti-patterns that have been observed in Strata projects. Consult this to avoid repeating known mistakes.',
  {},
  async () => ({
    content: [{ type: 'text', text: readGovernanceFile('anti-patterns/common-errors.md') }],
  })
);

server.tool(
  'search_governance',
  'Search across all governance documentation for a specific term, token name, component, or concept.',
  {
    query: z.string().describe('The term or concept to search for'),
  },
  async ({ query }) => ({
    content: [{ type: 'text', text: searchGovernance(query) }],
  })
);

server.tool(
  'get_overview',
  'Get a full design system overview: laws summary + token reference + anti-patterns. Use this when starting work on a new component or flow to get complete context in one call.',
  {},
  async () => {
    const laws = readGovernanceFile('LAWS.md');
    const tokens = readGovernanceFile('tokens/token-reference.md');
    const antiPatterns = readGovernanceFile('anti-patterns/common-errors.md');
    const combined = [
      '# Strata DS — Complete Governance Overview\n',
      '---\n## LAWS (Never Violate)\n',
      laws,
      '\n---\n## TOKEN REFERENCE\n',
      tokens,
      '\n---\n## ANTI-PATTERNS (Documented Errors)\n',
      antiPatterns,
    ].join('\n');
    return { content: [{ type: 'text', text: combined }] };
  }
);

server.tool(
  'validate_component_against_rules',
  'Lint a TSX / JSX / CSS snippet against the Strata DS rules. Returns per-violation: rule reference (LAW-N or rules/0X), severity, the offending match, a suggested fix. Use this before committing any component code generated by AI or hand-written.',
  {
    code: z.string().describe('The TSX, JSX, or CSS snippet to validate.'),
    filename: z.string().optional().describe('Optional filename for reporting context.'),
  },
  async ({ code, filename }) => {
    const result = validateCode(code, filename);
    return { content: [{ type: 'text', text: formatValidation(result) }] };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Strata DS MCP Server running on stdio');
}

main().catch(console.error);
