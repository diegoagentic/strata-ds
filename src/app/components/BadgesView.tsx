import { Check, X, XCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { CodeViewer } from './CodeViewer';
import { Badge } from './ui/badge';

export function BadgesView() {
  // Code examples for Badges
  const badgeReact = `import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      {/* Solid Badges */}
      <Badge color="zinc">Default</Badge>
      <Badge color="emerald">Success</Badge>
      <Badge color="red">Error</Badge>

      {/* Soft Badges */}
      <Badge variant="soft" color="blue">Info</Badge>
      <Badge variant="soft" color="amber">Warning</Badge>

      {/* Outline Badges */}
      <Badge variant="outline" color="zinc">Outline</Badge>
      
      {/* With Icon */}
      <Badge color="emerald">
        <CheckCircle className="size-3" />
        Verified
      </Badge>
    </div>
  );
}`;

  const badgeHTML = `<!-- Solid Emerald Badge -->
<span class="inline-flex items-center justify-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold gap-1.5 bg-emerald-600 text-white">
  Success
</span>

<!-- Soft Blue Badge -->
<span class="inline-flex items-center justify-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold gap-1.5 bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400">
  Info
</span>`;

  const badgeCSS = `@theme {
  --color-emerald-600: #059669;
  --color-blue-50: #eff6ff;
  /* ... */
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
}
/* ... Tailwind classes ... */`;

  const badgePrompt = `# AI PROMPT: Generate Badge Component
## CONTEXT
Compact status indicator or label.

## API
\`\`\`tsx
<Badge 
  variant="solid" | "soft" | "outline"
  color="zinc" | "red" | "emerald" | "amber" | "blue"
>
  Content
</Badge>
\`\`\`

## SPECS
- Radius: Full
- Padding: px-2.5 py-0.5
- Font: text-xs font-semibold
- Icons: size-3, gap-1.5`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Badges
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Status indicators, labels, and tags.
        </p>
      </div>

      {/* Badge Styles */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Styles
        </h2>

        <div className="space-y-6">
          {/* Solid */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
            <h3 className="text-sm font-medium text-zinc-500 mb-4">Solid (High Emphasis)</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="solid" color="zinc">Default</Badge>
              <Badge variant="solid" color="emerald">
                <CheckCircle className="size-3" /> Success
              </Badge>
              <Badge variant="solid" color="red">
                <XCircle className="size-3" /> Error
              </Badge>
              <Badge variant="solid" color="amber">
                <AlertTriangle className="size-3" /> Warning
              </Badge>
              <Badge variant="solid" color="blue">
                <Info className="size-3" /> Info
              </Badge>
            </div>
          </div>

          {/* Soft */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
            <h3 className="text-sm font-medium text-zinc-500 mb-4">Soft (Medium Emphasis)</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="soft" color="zinc">Default</Badge>
              <Badge variant="soft" color="emerald">
                <CheckCircle className="size-3" /> Success
              </Badge>
              <Badge variant="soft" color="red">
                <XCircle className="size-3" /> Error
              </Badge>
              <Badge variant="soft" color="amber">
                <AlertTriangle className="size-3" /> Warning
              </Badge>
              <Badge variant="soft" color="blue">
                <Info className="size-3" /> Info
              </Badge>
            </div>
          </div>

          {/* Outline */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
            <h3 className="text-sm font-medium text-zinc-500 mb-4">Outline (Low Emphasis)</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" color="zinc">Default</Badge>
              <Badge variant="outline" color="emerald">Success</Badge>
              <Badge variant="outline" color="red">Error</Badge>
              <Badge variant="outline" color="amber">Warning</Badge>
              <Badge variant="outline" color="blue">Info</Badge>
            </div>
          </div>

          <div className="mt-6">
            <CodeViewer
              title="Badge Demo"
              react={badgeReact}
              html={badgeHTML}
              css={badgeCSS}
              prompt={badgePrompt}
              enableFigmaExport={true}
              figmaSpecs={{
                padding: '2px 10px',
                borderRadius: '9999px',
                fontSize: '12px',
              }}
              figmaTokens={{
                colors: {
                  'badge-solid-emerald': '#059669',
                  'badge-soft-blue': '#eff6ff',
                },
                spacing: { 'badge-pad-x': '10px' }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}