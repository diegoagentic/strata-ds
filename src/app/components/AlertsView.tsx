import { Check, X, AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';
import { CodeViewer } from './CodeViewer';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export function AlertsView() {
  // Code examples for Alert Variants
  const alertVariantsReact = `import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AlertVariants() {
  return (
    <div className="space-y-4">
      <Alert variant="success">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          There was a problem processing your request.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your subscription will expire in 3 days.
        </AlertDescription>
      </Alert>

      <Alert variant="info">
        <Info className="h-4 w-4" />
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>
          New features are now available.
        </AlertDescription>
      </Alert>
    </div>
  );
}`;

  const alertVariantsHTML = `<!-- Success Alert -->
<div role="alert" class="relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start border-emerald-500/50 text-emerald-600 dark:border-emerald-500 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-900/10">
  <svg class="size-4 translate-y-0.5 text-emerald-600 dark:text-emerald-500" ... />
  <div class="col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight">Success</div>
  <div class="text-emerald-600/90 dark:text-emerald-500/90 col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed">
    Your changes have been saved successfully.
  </div>
</div>`;

  const alertVariantsCSS = `@theme {
  --color-emerald-50: #ecfdf5;
  --color-emerald-500: #10b981;
  --color-emerald-600: #059669;
  --color-emerald-900: #064e3b;
  /* ... other semantic colors ... */
}

/* Tailwind Utilities Used */
.bg-emerald-50 { background-color: var(--color-emerald-50); }
.text-emerald-600 { color: var(--color-emerald-600); }
.border-emerald-500\/50 { border-color: color-mix(in srgb, var(--color-emerald-500), transparent 50%); }
/* ... */`;

  const alertVariantsPrompt = `# AI PROMPT: Generate Alert Component
## CONTEXT
Create a semantic Alert component supporting success, error, warning, and info states.

## SPECIFICATIONS
- **Base Components**: Alert, AlertTitle, AlertDescription
- **Variants**:
  - \`default\`: bg-white, border-zinc-200
  - \`destructive\`: bg-red-50, border-red-500/50, text-red-500
  - \`success\`: bg-emerald-50, border-emerald-500/50, text-emerald-600
  - \`warning\`: bg-amber-50, border-amber-500/50, text-amber-600
  - \`info\`: bg-blue-50, border-blue-500/50, text-blue-600
- **Structure**:
  - Icon: 16x16px (size-4), absolute positioned or grid column
  - Title: font-medium, tracking-tight
  - Description: text-sm, relaxed leading

## USAGE
<Alert variant="success">
  <Icon />
  <AlertTitle>Title</AlertTitle>
  <AlertDescription>Message</AlertDescription>
</Alert>`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Alerts
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Displays a callout for user attention.
        </p>
      </div>

      {/* Alert Variants */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Variants
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Semantic variants for different message types.
        </p>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 space-y-4">
          <Alert variant="success">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was a problem processing your request.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Your subscription will expire in 3 days.
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <Info className="h-4 w-4" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              New features are now available.
            </AlertDescription>
          </Alert>
        </div>

        <div className="mt-6">
          <CodeViewer
            title="Alert Variants"
            react={alertVariantsReact}
            html={alertVariantsHTML}
            css={alertVariantsCSS}
            prompt={alertVariantsPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              padding: '12px 16px',
              borderRadius: '8px',
              borderWidth: '1px',
              fontSize: '14px',
            }}
            figmaTokens={{
              colors: {
                'alert-success-bg': '#ecfdf5',
                'alert-destructive-bg': '#fef2f2',
                'alert-warning-bg': '#fffbeb',
                'alert-info-bg': '#eff6ff',
              },
              spacing: {
                'alert-padding-x': '16px',
                'alert-padding-y': '12px',
              },
              borders: {
                'alert-radius': '8px',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}