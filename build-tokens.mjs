// Simple token builder - generates CSS variables and TypeScript from JSON tokens
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read all token files
function readTokens(dir) {
    const tokens = {};
    const files = fs.readdirSync(dir, { recursive: true });

    files.forEach(file => {
        if (file.endsWith('.json')) {
            const fullPath = path.join(dir, file);
            const content = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
            Object.assign(tokens, content);
        }
    });

    return tokens;
}

// Flatten nested tokens
function flattenTokens(obj, prefix = '') {
    let result = {};

    for (const [key, value] of Object.entries(obj)) {
        const newKey = prefix ? `${prefix}-${key}` : key;

        if (value && typeof value === 'object' && value.value !== undefined) {
            result[newKey] = value.value;
        } else if (value && typeof value === 'object') {
            Object.assign(result, flattenTokens(value, newKey));
        }
    }

    return result;
}

// Resolve token references like {color.zinc.900}
function resolveReferences(tokens) {
    const resolved = { ...tokens };
    let changed = true;

    while (changed) {
        changed = false;
        for (const [key, value] of Object.entries(resolved)) {
            if (typeof value === 'string' && value.includes('{')) {
                const match = value.match(/\{([^}]+)\}/);
                if (match) {
                    const refPath = match[1].replace(/\./g, '-');
                    if (resolved[refPath]) {
                        resolved[key] = value.replace(match[0], resolved[refPath]);
                        changed = true;
                    }
                }
            }
        }
    }

    return resolved;
}

// Generate CSS variables
function generateCSS(tokens, mode = 'light') {
    const selector = mode === 'dark' ? '.dark' : ':root';
    const lines = [selector + ' {'];

    for (const [key, value] of Object.entries(tokens)) {
        lines.push(`  --${key}: ${value};`);
    }

    lines.push('}');
    return lines.join('\n');
}

// Generate TypeScript - properly escape quotes
function generateTS(tokens) {
    const lines = ['export const tokens = {'];

    for (const [key, value] of Object.entries(tokens)) {
        // Escape single quotes in the value
        const escapedValue = value.replace(/'/g, "\\'");
        lines.push(`  '${key}': '${escapedValue}',`);
    }

    lines.push('} as const;');
    lines.push('');
    lines.push('export type TokenKey = keyof typeof tokens;');

    return lines.join('\n');
}

// Main build process
console.log('🎨 Building design tokens...\n');

// Create output directories
const cssDir = path.join(__dirname, 'src', 'styles', 'tokens');
const jsDir = path.join(__dirname, 'src', 'tokens');

fs.mkdirSync(cssDir, { recursive: true });
fs.mkdirSync(jsDir, { recursive: true });

// Deep merge objects
function deepMerge(target, source) {
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object && !Array.isArray(source[key]) && key in target) {
            Object.assign(source[key], deepMerge(target[key], source[key]));
        }
    }
    Object.assign(target || {}, source);
    return target;
}

// Build light mode tokens
console.log('📝 Building light mode tokens...');
const lightTokens = {};
const dirs = [
    path.join(__dirname, 'tokens', 'primitives'),
    path.join(__dirname, 'tokens', 'semantic'),
    path.join(__dirname, 'tokens', 'component')
];

dirs.forEach(dir => {
    const tokens = readTokens(dir);
    deepMerge(lightTokens, tokens);
});

const flatLight = flattenTokens(lightTokens);
const resolvedLight = resolveReferences(flatLight);

// Build dark mode tokens
console.log('📝 Building dark mode tokens...');
const darkSemanticPath = path.join(__dirname, 'tokens', 'semantic', 'colors-dark.json');
const darkSemantic = JSON.parse(fs.readFileSync(darkSemanticPath, 'utf8'));

const darkTokens = {};
// Start with primitives
deepMerge(darkTokens, readTokens(path.join(__dirname, 'tokens', 'primitives')));
// Merge dark semantic
deepMerge(darkTokens, darkSemantic);
// Merge components
deepMerge(darkTokens, readTokens(path.join(__dirname, 'tokens', 'component')));

const flatDark = flattenTokens(darkTokens);
const resolvedDark = resolveReferences(flatDark);


// Write CSS files
console.log('💅 Generating CSS variables...');
fs.writeFileSync(
    path.join(cssDir, 'variables.css'),
    generateCSS(resolvedLight, 'light')
);

fs.writeFileSync(
    path.join(cssDir, 'variables-dark.css'),
    generateCSS(resolvedDark, 'dark')
);

// Write TypeScript file
console.log('📦 Generating TypeScript exports...');
fs.writeFileSync(
    path.join(jsDir, 'tokens.ts'),
    generateTS(resolvedLight)
);

// Write JSON for reference
fs.writeFileSync(
    path.join(jsDir, 'tokens.json'),
    JSON.stringify({ light: resolvedLight, dark: resolvedDark }, null, 2)
);

// Write raw structured JSON for Storybook documentation
fs.writeFileSync(
    path.join(jsDir, 'tokens-raw.json'),
    JSON.stringify({ light: lightTokens, dark: darkTokens }, null, 2)
);

console.log('\n✅ Tokens built successfully!');
console.log(`   📁 CSS: ${cssDir}`);
console.log(`   📁 TS:  ${jsDir}`);
console.log(`   📊 Total tokens: ${Object.keys(resolvedLight).length}`);
