import { readdirSync, readFileSync, writeFileSync, statSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const P2_COMPONENTS = join(__dirname, '../../front-react-strata-storybook/src/components');
const OUTPUT = join(__dirname, 'p2-manifest.json');

function walkDir(dir, base) {
  let results = [];
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(walkDir(fullPath, base));
    } else if (entry.endsWith('.tsx')) {
      const rel = fullPath.replace(base, '').replace(/^[/\\]/, '').replace(/\\/g, '/');
      const content = readFileSync(fullPath, 'utf8');
      const hash = createHash('md5').update(content).digest('hex');
      const name = entry.replace('.tsx', '');
      const parts = rel.split('/');
      const category = parts.length > 1 ? parts.slice(0, -1).join('/') : 'root';
      const hasVariants = content.includes('cva(') || content.includes('class-variance-authority');
      results.push({ name, path: rel, category, hash, hasCVA: hasVariants, size: stat.size });
    }
  }
  return results;
}

const components = walkDir(P2_COMPONENTS, P2_COMPONENTS);
const manifest = {
  generated: new Date().toISOString(),
  p2_version: '0.1.116',
  total: components.length,
  components
};

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2));
console.log(`Generated manifest with ${components.length} components`);
const cats = [...new Set(components.map(c => c.category.split('/')[0]))];
console.log(`Categories: ${cats.join(', ')}`);
