
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PROJECTS = [
    {
        name: 'Expert Hub',
        path: 'c:/Users/User/Documents/design-system/strata-projects/config-evolution/expert-hub',
        configFile: 'tailwind.config.js'
    },
    {
        name: 'UI Dealer',
        path: 'c:/Users/User/Documents/design-system/strata-projects/config-evolution/UI-Dealer',
        configFile: 'tailwind.config.js'
    }
];

const OUTPUT_FILE = 'C:/Users/User/.gemini/antigravity/brain/5bf3172a-9860-4749-9ccf-ea46f4d1941b/DESIGN_SYSTEM_RULES.md';

function extractTokens(configContent) {
    const tokens = {};

    // Improved brand extraction
    // Looks for brand: { ... } block
    const brandBlockRegex = /brand:\s*\{([^}]+)\}/s;
    const brandMatch = configContent.match(brandBlockRegex);

    if (brandMatch) {
        // Clean up the match to just show key-values
        tokens.brand = brandMatch[1]
            .split('\n')
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('//'))
            .join('\n');
    }

    // Extract semantic tokens
    const semanticMatches = ['background', 'foreground', 'card', 'primary', 'secondary', 'muted', 'accent', 'destructive', 'border', 'input', 'ring'];
    semanticMatches.forEach(token => {
        // Regex to capture value after token key
        const regex = new RegExp(`${token}:\\s*['"]([^'"]+)['"]`);
        const match = configContent.match(regex);
        if (match) {
            tokens[token] = match[1];
        }
    });

    return tokens;
}

function generateMarkdown(projectData) {
    let md = `# Design System Rules & Guidelines\n\n`;
    md += `*Last Synced: ${new Date().toLocaleString()}*\n\n`;
    md += `This document serves as the single source of truth for creating styling components across the Strata ecosystem.\n\n`;

    md += `## 1. General Component Creation Rule\n\n`;
    md += `When creating new components, you **MUST** adhere to the following principles:\n\n`;
    md += `1.  **Never Use Hardcoded Colors:**\n`;
    md += `    *   ❌ \`bg-white\`, \`text-black\`, \`bg-zinc-800\` (unless creating a token abstraction)\n`;
    md += `    *   ✅ \`bg-background\`, \`text-foreground\`, \`bg-card\`, \`text-muted-foreground\`\n\n`;

    md += `2.  **Support Light & Dark Modes via Semantic Tokens:**\n`;
    md += `    *   Use tokens that automatically adapt to the theme.\n`;
    md += `    *   Avoid manual \`dark:\` prefixes for standard background/text colors if a semantic token exists.\n`;
    md += `    *   Example: Use \`bg-card\` instead of \`bg-white dark:bg-zinc-800\`.\n\n`;

    md += `3.  **Use Brand Tokens for Accents:**\n`;
    md += `    *   Actionable elements (buttons, active states) should use \`brand\` tokens.\n`;
    md += `    *   **Rule:** Use \`bg-brand-500\`, \`text-brand-600\` etc. The \`tailwind.config.js\` in each project maps \`brand\` to the specific color palette (Lime, Blue, etc.).\n\n`;

    md += `## 2. Common Palette & Containers\n\n`;
    md += `### Backgrounds\n`;
    md += `| Usage | Token | Tailwind Utility | Light Mode Value | Dark Mode Value |\n`;
    md += `| :--- | :--- | :--- | :--- | :--- |\n`;
    md += `| **Page Root** | \`background\` | \`bg-background\` | \`white\` / \`zinc-50\` | \`black\` / \`zinc-950\` |\n`;
    md += `| **Cards/Containers** | \`card\` | \`bg-card\` | \`white\` | \`zinc-900\` / \`zinc-800\` |\n`;
    md += `| **Secondary/Muted** | \`muted\` | \`bg-muted\` | \`zinc-100\` | \`zinc-800\` |\n`;
    md += `| **Inputs/Forms** | \`input\` | \`bg-white\` / \`bg-transparent\` | \`white\` | \`zinc-900\` |\n\n`;

    md += `## 3. Implementation Validation\n\n`;
    md += `To ensure these rules are followed and updated:\n\n`;
    md += `1.  **Run the Sync Script:**\n`;
    md += `    Execute \`node scripts/sync-design-tokens.mjs\` (or equivalent) to scan projects and update usage reports.\n\n`;
    md += `2.  **Linting (Future):**\n`;
    md += `    We will strictly enforce \`no-restricted-syntax\` for hardcoded hex values or non-token utility classes in the future.\n\n`;

    md += `## 4. Current Project Configurations\n\n`;

    projectData.forEach(proj => {
        md += `### ${proj.name}\n`;
        md += `**Path:** \`${proj.path}\`\n\n`;

        md += `#### Semantic Tokens\n`;
        md += `| Token | Value/Reference |\n`;
        md += `| :--- | :--- |\n`;
        ['background', 'foreground', 'card', 'primary', 'secondary', 'muted', 'accent', 'border'].forEach(t => {
            if (proj.tokens[t]) {
                md += `| \`${t}\` | \`${proj.tokens[t]}\` |\n`;
            }
        });
        md += `\n`;

        if (proj.tokens.brand) {
            md += `#### Brand Configuration\n\`\`\`js\n${proj.tokens.brand}\n\`\`\`\n`;
        }
        md += `\n---\n\n`;
    });

    return md;
}

async function main() {
    console.log("Starting Design System Synchronization...");

    const projectData = [];

    for (const project of PROJECTS) {
        const configPath = path.join(project.path, project.configFile);
        console.log(`Analyzing ${project.name} at ${configPath}...`);

        try {
            if (fs.existsSync(configPath)) {
                const content = fs.readFileSync(configPath, 'utf8');
                const tokens = extractTokens(content);
                projectData.push({ ...project, tokens, status: 'Success' });
            } else {
                console.error(`Config file not found for ${project.name}`);
                projectData.push({ ...project, tokens: {}, status: 'Error: Config not found' });
            }
        } catch (err) {
            console.error(`Error reading ${project.name}: ${err.message}`);
            projectData.push({ ...project, tokens: {}, status: `Error: ${err.message}` });
        }
    }

    const markdownContent = generateMarkdown(projectData);

    try {
        fs.writeFileSync(OUTPUT_FILE, markdownContent);
        console.log(`Successfully updated guidelines at: ${OUTPUT_FILE}`);
    } catch (err) {
        console.error(`Error writing output file: ${err.message}`);
    }
}

main();
