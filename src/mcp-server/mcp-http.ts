import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { z } from 'zod';
import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';

const GOVERNANCE_PATH = process.env.GOVERNANCE_PATH
  || path.resolve(__dirname, '../../../governance');

function readGovernanceFile(relativePath: string): string {
  const filePath = path.join(GOVERNANCE_PATH, relativePath);
  if (!fs.existsSync(filePath)) return `File not found: ${relativePath}`;
  return fs.readFileSync(filePath, 'utf-8');
}

function searchGovernance(query: string): string {
  const results: string[] = [];
  const queryLower = query.toLowerCase();

  function searchDir(dir: string, prefix = '') {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      const relPath = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        searchDir(fullPath, relPath);
      } else if (entry.name.endsWith('.md')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        if (content.toLowerCase().includes(queryLower)) {
          const matches = content.split('\n')
            .filter(l => l.toLowerCase().includes(queryLower))
            .slice(0, 3)
            .map(l => `  > ${l.trim()}`);
          results.push(`### ${relPath}\n${matches.join('\n')}`);
        }
      }
    }
  }

  searchDir(GOVERNANCE_PATH);
  return results.length > 0
    ? `Found in ${results.length} file(s):\n\n${results.join('\n\n')}`
    : `No results for: "${query}"`;
}

function createServer() {
  const server = new McpServer({ name: 'strata-ds', version: '1.0.0' });

  server.tool('get_laws', 'Absolute DS laws — consult first before any new component.', {}, async () => ({
    content: [{ type: 'text', text: readGovernanceFile('LAWS.md') }],
  }));

  server.tool('get_rules', 'DS rules for a specific category.', {
    category: z.enum(['color-tokens', 'brand-colors', 'containers-and-cards', 'buttons-and-actions', 'icons']),
  }, async ({ category }) => {
    const map: Record<string, string> = {
      'color-tokens': 'rules/01-color-tokens.md',
      'brand-colors': 'rules/02-brand-colors.md',
      'containers-and-cards': 'rules/03-containers-and-cards.md',
      'buttons-and-actions': 'rules/04-buttons-and-actions.md',
      'icons': 'rules/05-icons.md',
    };
    return { content: [{ type: 'text', text: readGovernanceFile(map[category]) }] };
  });

  server.tool('get_tokens', 'Complete token reference (CSS vars + Tailwind classes).', {}, async () => ({
    content: [{ type: 'text', text: readGovernanceFile('tokens/token-reference.md') }],
  }));

  server.tool('get_anti_patterns', 'Documented errors and anti-patterns to avoid.', {}, async () => ({
    content: [{ type: 'text', text: readGovernanceFile('anti-patterns/common-errors.md') }],
  }));

  server.tool('search_governance', 'Search governance docs for a term or concept.', {
    query: z.string(),
  }, async ({ query }) => ({
    content: [{ type: 'text', text: searchGovernance(query) }],
  }));

  server.tool('get_overview', 'Full DS context: laws + tokens + anti-patterns in one call.', {}, async () => {
    const text = [
      '# Strata DS — Complete Governance\n',
      '## LAWS\n', readGovernanceFile('LAWS.md'),
      '\n## TOKENS\n', readGovernanceFile('tokens/token-reference.md'),
      '\n## ANTI-PATTERNS\n', readGovernanceFile('anti-patterns/common-errors.md'),
    ].join('\n');
    return { content: [{ type: 'text', text }] };
  });

  return server;
}

const PORT = parseInt(process.env.PORT || '3001', 10);

const httpServer = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', server: 'strata-ds-mcp', version: '1.0.0' }));
    return;
  }

  if (req.url === '/mcp') {
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    const server = createServer();
    await server.connect(transport);
    await transport.handleRequest(req, res);
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

httpServer.listen(PORT, () => {
  console.log(`Strata DS MCP HTTP Server listening on port ${PORT}`);
  console.log(`MCP endpoint: http://localhost:${PORT}/mcp`);
  console.log(`Health: http://localhost:${PORT}/health`);
  console.log(`Governance path: ${GOVERNANCE_PATH}`);
});
