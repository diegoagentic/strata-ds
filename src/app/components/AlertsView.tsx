import { Check, X, AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';
import { CodeViewer } from './CodeViewer';

export function AlertsView() {
  // Code examples for Alert Variants
  const alertVariantsReact = `import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

export function AlertVariants() {
  return (
    <div className="space-y-4">
      {/* Success Alert */}
      <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-md p-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-emerald-900 dark:text-emerald-100 mb-1">
              Success Alert
            </h3>
            <p className="text-sm text-emerald-800 dark:text-emerald-200">
              Your changes have been saved successfully.
            </p>
          </div>
          <button className="text-emerald-600 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-300">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Error Alert */}
      <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md p-4">
        <div className="flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-600 dark:text-red-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">
              Error Alert
            </h3>
            <p className="text-sm text-red-800 dark:text-red-200">
              There was a problem processing your request.
            </p>
          </div>
          <button className="text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-300">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Warning Alert */}
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-md p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">
              Warning Alert
            </h3>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Your subscription will expire in 3 days.
            </p>
          </div>
          <button className="text-amber-600 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-300">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Info Alert */}
      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-md p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
              Info Alert
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              New features are now available.
            </p>
          </div>
          <button className="text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-300">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}`;

  const alertVariantsHTML = `<!-- Alert Variants -->
<div class="space-y-4">
  <!-- Success Alert -->
  <div class="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-md p-4">
    <div class="flex items-start gap-3">
      <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="flex-1">
        <h3 class="text-sm font-semibold text-emerald-900 dark:text-emerald-100 mb-1">Success Alert</h3>
        <p class="text-sm text-emerald-800 dark:text-emerald-200">Your changes have been saved successfully.</p>
      </div>
      <button class="text-emerald-600 dark:text-emerald-500">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
  
  <!-- Error Alert -->
  <div class="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md p-4">
    <div class="flex items-start gap-3">
      <svg class="w-5 h-5 text-red-600 dark:text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <div class="flex-1">
        <h3 class="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">Error Alert</h3>
        <p class="text-sm text-red-800 dark:text-red-200">There was a problem processing your request.</p>
      </div>
      <button class="text-red-600 dark:text-red-500">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</div>`;

  const alertVariantsCSS = `/* Alert Base Styles */
.alert {
  padding: 1rem;
  border-radius: 0.375rem;
  border-width: 1px;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.alert-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.alert-title {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.alert-message {
  font-size: 0.875rem;
}

/* Success Alert */
.alert-success {
  background-color: #ecfdf5;
  border-color: #a7f3d0;
}

.alert-success .alert-icon,
.alert-success .alert-close {
  color: #059669;
}

.alert-success .alert-title {
  color: #064e3b;
}

.alert-success .alert-message {
  color: #065f46;
}

/* Error Alert */
.alert-error {
  background-color: #fef2f2;
  border-color: #fecaca;
}

.alert-error .alert-icon,
.alert-error .alert-close {
  color: #dc2626;
}

.alert-error .alert-title {
  color: #7f1d1d;
}

.alert-error .alert-message {
  color: #991b1b;
}

/* Warning Alert */
.alert-warning {
  background-color: #fffbeb;
  border-color: #fde68a;
}

.alert-warning .alert-icon,
.alert-warning .alert-close {
  color: #d97706;
}

.alert-warning .alert-title {
  color: #78350f;
}

.alert-warning .alert-message {
  color: #92400e;
}

/* Info Alert */
.alert-info {
  background-color: #eff6ff;
  border-color: #bfdbfe;
}

.alert-info .alert-icon,
.alert-info .alert-close {
  color: #2563eb;
}

.alert-info .alert-title {
  color: #1e3a8a;
}

.alert-info .alert-message {
  color: #1e40af;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .alert-success {
    background-color: rgba(6, 78, 59, 0.3);
    border-color: #065f46;
  }
  
  .alert-success .alert-icon,
  .alert-success .alert-close {
    color: #10b981;
  }
  
  .alert-success .alert-title {
    color: #d1fae5;
  }
  
  .alert-success .alert-message {
    color: #a7f3d0;
  }
  
  .alert-error {
    background-color: rgba(127, 29, 29, 0.3);
    border-color: #991b1b;
  }
  
  .alert-error .alert-icon,
  .alert-error .alert-close {
    color: #ef4444;
  }
  
  .alert-error .alert-title {
    color: #fecaca;
  }
  
  .alert-error .alert-message {
    color: #fca5a5;
  }
}`;

  const alertVariantsPrompt = `# AI PROMPT: Generate Alert Component

## CONTEXT
You are creating alert components for the Strata DS White Label design system - a high-density, enterprise-grade white label system using Zinc color scale and Tailwind CSS.

## REQUIREMENTS

### Visual Design
- Rounded corners: rounded-md (6px)
- Padding: 16px (p-4)
- Border: 1px solid (semantic colors)
- Background: Light tinted backgrounds with opacity
- Icons: 20x20px (w-5 h-5) positioned top-left

### Semantic Variants
1. **Success**: emerald-50 bg, emerald-200 border (light) / emerald-950/30 bg, emerald-800 border (dark)
2. **Error**: red-50 bg, red-200 border (light) / red-950/30 bg, red-800 border (dark)
3. **Warning**: amber-50 bg, amber-200 border (light) / amber-950/30 bg, amber-800 border (dark)
4. **Info**: blue-50 bg, blue-200 border (light) / blue-950/30 bg, blue-800 border (dark)

### Layout Structure
- Flexbox layout with gap-3
- Icon: flex-shrink-0, aligned top
- Content: flex-1 for responsive width
- Close button: flex-shrink-0, aligned top

### Content Hierarchy
- Title: font-semibold, text-sm
- Message: text-sm, slightly muted color
- Adequate spacing between title and message

### Interaction States
- Dismissible with X button
- Close button hover states
- Optional action buttons
- Smooth fade-out animation on dismiss

### Accessibility
- Proper ARIA role="alert" for important messages
- Semantic color choices with sufficient contrast
- Icon + text combination (not icon-only)
- Focus visible states for close button
- Screen reader announcements

### Technical Specs
- Use Tailwind CSS utility classes
- Support dark mode with dark: prefix
- Use lucide-react icons
- Maintain 8px spacing grid

## CODE STRUCTURE
\`\`\`tsx
import { CheckCircle, X } from 'lucide-react';

interface AlertProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  onClose?: () => void;
}

export function Alert({ variant, title, message, onClose }: AlertProps) {
  const variants = {
    success: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-200 dark:border-emerald-800',
      icon: 'text-emerald-600 dark:text-emerald-500',
      title: 'text-emerald-900 dark:text-emerald-100',
      message: 'text-emerald-800 dark:text-emerald-200'
    },
    // ... other variants
  };
  
  const styles = variants[variant];
  
  return (
    <div className={\`\${styles.bg} border \${styles.border} rounded-md p-4\`} role="alert">
      <div className="flex items-start gap-3">
        <CheckCircle className={\`w-5 h-5 \${styles.icon} mt-0.5 flex-shrink-0\`} />
        <div className="flex-1">
          <h3 className={\`text-sm font-semibold \${styles.title} mb-1\`}>{title}</h3>
          <p className={\`text-sm \${styles.message}\`}>{message}</p>
        </div>
        {onClose && (
          <button onClick={onClose} className={\`\${styles.icon} hover:opacity-70\`}>
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
\`\`\`

## USAGE EXAMPLES
- Form validation feedback
- System notifications
- Process completion status
- Warning messages
- Informational updates

## DO'S
✓ Use appropriate semantic colors
✓ Include both icon and text
✓ Provide clear, actionable messages
✓ Make dismissible when appropriate
✓ Use consistent spacing and sizing

## DON'TS
✗ Don't use alerts for non-critical info (use toast instead)
✗ Don't stack too many alerts vertically
✗ Don't use vague messages
✗ Don't omit icons (they aid quick scanning)
✗ Don't forget dark mode variants

## DESIGN TOKENS
- Border Radius: --radius-md (6px)
- Padding: --spacing-4 (16px)
- Icon Size: 20px
- Text Size: 14px (text-sm)

Generate the component following these specifications exactly.`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Alerts & Notifications
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Inline alerts, banners, and notification components for user feedback and system messages.
        </p>
      </div>

      {/* Alert Variants */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Alert Variants
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          4 semantic alert styles for different message types.
        </p>
        
        <div className="space-y-4">
          {/* Success */}
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-md p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-emerald-900 dark:text-emerald-100 mb-1">
                  Success Alert
                </h3>
                <p className="text-sm text-emerald-800 dark:text-emerald-200">
                  Your changes have been saved successfully. All updates are now live.
                </p>
              </div>
              <button className="text-emerald-600 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Error */}
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md p-4">
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-red-900 dark:text-red-100 mb-1">
                  Error Alert
                </h3>
                <p className="text-sm text-red-800 dark:text-red-200">
                  There was a problem processing your request. Please try again.
                </p>
              </div>
              <button className="text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-300 transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-md p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">
                  Warning Alert
                </h3>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  Your subscription will expire in 3 days. Renew now to avoid service interruption.
                </p>
              </div>
              <button className="text-amber-600 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-300 transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-md p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                  Info Alert
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  New features are now available. Check out the latest updates in your dashboard.
                </p>
              </div>
              <button className="text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Code Viewer */}
        <div className="mt-6">
          <CodeViewer
            title="Alert Variants"
            react={alertVariantsReact}
            html={alertVariantsHTML}
            css={alertVariantsCSS}
            prompt={alertVariantsPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              padding: '16px',
              borderRadius: '6px',
              borderWidth: '1px',
              fontSize: '14px',
            }}
            figmaTokens={{
              colors: {
                'alert-success-bg-light': '#ecfdf5',
                'alert-success-bg-dark': 'rgba(6, 78, 59, 0.3)',
                'alert-success-border-light': '#a7f3d0',
                'alert-success-border-dark': '#065f46',
                'alert-error-bg-light': '#fef2f2',
                'alert-error-bg-dark': 'rgba(127, 29, 29, 0.3)',
                'alert-warning-bg-light': '#fffbeb',
                'alert-warning-bg-dark': 'rgba(120, 53, 15, 0.3)',
                'alert-info-bg-light': '#eff6ff',
                'alert-info-bg-dark': 'rgba(30, 58, 138, 0.3)',
              },
              spacing: {
                'alert-padding': '16px',
                'alert-gap': '12px',
              },
              borders: {
                'alert-radius': '6px',
              },
            }}
          />
        </div>
      </div>

      {/* Alerts with Actions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Alerts with Actions
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Alerts with actionable buttons for user response.
        </p>
        
        <div className="space-y-4">
          <div className="bg-white dark:bg-zinc-900 border-l-4 border-emerald-500 border border-zinc-200 dark:border-zinc-800 rounded-md p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                    Update Available
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    A new version is ready to install with bug fixes and improvements.
                  </p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-emerald-600 text-white text-sm font-semibold rounded-md hover:bg-emerald-700 transition-colors">
                      Update Now
                    </button>
                    <button className="px-3 py-1.5 text-zinc-600 dark:text-zinc-400 text-sm font-semibold hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                      Remind Me Later
                    </button>
                  </div>
                </div>
              </div>
              <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors flex-shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border-l-4 border-amber-500 border border-zinc-200 dark:border-zinc-800 rounded-md p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                    Confirm Action
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    This action cannot be undone. Are you sure you want to proceed?
                  </p>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors">
                      Confirm Delete
                    </button>
                    <button className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-sm font-semibold rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Toast Notifications
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Temporary notifications that appear briefly and auto-dismiss.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md p-12">
          <div className="space-y-4 max-w-sm ml-auto">
            <div className="bg-zinc-900 dark:bg-zinc-800 text-zinc-50 rounded-md shadow-lg p-4 flex items-center gap-3 border border-zinc-700">
              <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold flex-1">Successfully saved</span>
              <button className="text-zinc-400 hover:text-zinc-200 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg p-4 flex items-center gap-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-500 flex-shrink-0" />
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 flex-1">2 new messages</span>
              <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Alerts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Banner Alerts
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Full-width banners for important announcements.
        </p>
        
        <div className="space-y-4">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-md">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  Scheduled maintenance on Dec 20th from 2:00 AM - 4:00 AM UTC
                </span>
              </div>
              <button className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-amber-500 text-white px-6 py-3 rounded-md">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5" />
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold">
                    Your trial expires in 3 days
                  </span>
                  <button className="text-sm font-semibold underline hover:no-underline">
                    Upgrade Now
                  </button>
                </div>
              </div>
              <button className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Alerts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Compact Alerts
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Minimal alerts without titles for simple messages.
        </p>
        
        <div className="space-y-3">
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-md px-4 py-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
              <p className="text-sm text-emerald-800 dark:text-emerald-200 flex-1">
                File uploaded successfully
              </p>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md px-4 py-3">
            <div className="flex items-center gap-3">
              <XCircle className="w-4 h-4 text-red-600 dark:text-red-500 flex-shrink-0" />
              <p className="text-sm text-red-800 dark:text-red-200 flex-1">
                Invalid email format
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-md px-4 py-3">
            <div className="flex items-center gap-3">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-500 flex-shrink-0" />
              <p className="text-sm text-blue-800 dark:text-blue-200 flex-1">
                Processing may take a few minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Usage Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
                Do's
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use semantic colors (green=success, red=error)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Keep messages concise and actionable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Auto-dismiss toasts after 3-5 seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Always provide a close button for persistent alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use banners for system-wide announcements</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-red-600 dark:bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                Don'ts
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-red-800 dark:text-red-200">
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't show multiple alerts of same type at once</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid using alerts for trivial information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't make toasts dismissible before they're read</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid technical jargon in error messages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't stack more than 3 toasts simultaneously</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}