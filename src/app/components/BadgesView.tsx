import { Check, X, XCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { CodeViewer } from './CodeViewer';

export function BadgesView() {
  // Code examples for Badges
  const badgeReact = `import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

export function Badge({ variant = 'default', style = 'solid', children, icon }) {
  const variants = {
    solid: {
      default: 'bg-zinc-800 dark:bg-zinc-700 text-zinc-50',
      success: 'bg-emerald-600 text-white',
      error: 'bg-red-600 text-white',
      warning: 'bg-amber-500 text-white',
      info: 'bg-blue-600 text-white',
    },
    soft: {
      default: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50',
      success: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400',
      error: 'bg-red-100 dark:bg-red-950/40 text-red-800 dark:text-red-400',
      warning: 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400',
      info: 'bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400',
    },
    outline: {
      default: 'border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50',
      success: 'border-2 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300',
      error: 'border-2 border-red-300 dark:border-red-700 text-red-700 dark:text-red-300',
      warning: 'border-2 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300',
      info: 'border-2 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300',
    },
  };

  return (
    <span className={\`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold \${variants[style][variant]}\`}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
}

// Usage Examples
<Badge variant="success" style="solid" icon={<CheckCircle className="w-3 h-3" />}>
  Success
</Badge>
<Badge variant="error" style="soft">Error</Badge>
<Badge variant="warning" style="outline">Warning</Badge>`;

  const badgeHTML = `<!-- Solid Badge -->
<span class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold">
  <svg class="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2"/>
    <polyline points="22 4 12 14.01 9 11.01" stroke-width="2"/>
  </svg>
  Success
</span>

<!-- Soft Badge -->
<span class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
  Success
</span>

<!-- Outline Badge -->
<span class="inline-flex items-center px-3 py-1 rounded-full border-2 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
  Success
</span>

<!-- With Icon -->
<span class="inline-flex items-center px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold">
  <svg class="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10" stroke-width="2"/>
    <path d="M15 9l-6 6M9 9l6 6" stroke-width="2"/>
  </svg>
  Error
</span>`;

  const badgeCSS = `/* Badge Base Styles */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem; /* 4px 12px */
  border-radius: 9999px; /* Full round */
  font-size: 0.75rem; /* 12px */
  font-weight: 600;
  line-height: 1;
}

/* Solid Variants */
.badge-solid-default {
  background-color: #18181b; /* zinc-800 */
  color: #fafafa; /* zinc-50 */
}

.badge-solid-success {
  background-color: #059669; /* emerald-600 */
  color: #ffffff;
}

.badge-solid-error {
  background-color: #dc2626; /* red-600 */
  color: #ffffff;
}

.badge-solid-warning {
  background-color: #f59e0b; /* amber-500 */
  color: #ffffff;
}

.badge-solid-info {
  background-color: #2563eb; /* blue-600 */
  color: #ffffff;
}

/* Soft Variants (Light Mode) */
.badge-soft-success {
  background-color: #d1fae5; /* emerald-100 */
  color: #065f46; /* emerald-800 */
}

.badge-soft-error {
  background-color: #fee2e2; /* red-100 */
  color: #991b1b; /* red-800 */
}

.badge-soft-warning {
  background-color: #fef3c7; /* amber-100 */
  color: #92400e; /* amber-800 */
}

/* Dark Mode Soft Variants */
@media (prefers-color-scheme: dark) {
  .badge-soft-success {
    background-color: rgba(4, 120, 87, 0.4); /* emerald-950/40 */
    color: #34d399; /* emerald-400 */
  }
  
  .badge-soft-error {
    background-color: rgba(127, 29, 29, 0.4); /* red-950/40 */
    color: #f87171; /* red-400 */
  }
}

/* Outline Variants */
.badge-outline-success {
  border: 2px solid #6ee7b7; /* emerald-300 */
  color: #047857; /* emerald-700 */
}

/* Icon Sizing */
.badge svg {
  width: 0.75rem; /* 12px */
  height: 0.75rem; /* 12px */
  margin-right: 0.25rem; /* 4px */
}`;

  const badgePrompt = `# AI PROMPT: Generate Badge Component

## CONTEXT
Create a badge component for Strata DS White Label - a high-density enterprise design system. Badges are compact status indicators used for labels, tags, and state communication.

## REQUIREMENTS

### Visual Design
- **Shape**: Fully rounded (border-radius: 9999px)
- **Padding**: px-3 py-1 (12px horizontal, 4px vertical)
- **Font Size**: text-xs (12px)
- **Font Weight**: font-semibold (600)
- **Height**: Auto with consistent padding
- **Min Width**: Enough to contain text comfortably

### Three Style Variants

#### 1. SOLID (High Emphasis)
- Full background color
- White or contrasting text
- Use for: Critical status, primary labels
- Examples: Active, Published, Paid

#### 2. SOFT (Medium Emphasis)
- Light background with opacity
- Colored text matching background hue
- Use for: Secondary status, categories
- Examples: Draft, Pending, In Progress

#### 3. OUTLINE (Low Emphasis)
- Border only (2px)
- Colored border and text
- Transparent background
- Use for: Tags, filters, non-critical info
- Examples: Optional, Beta, New

### Five Semantic Colors

1. **Default** (Zinc): Neutral, no specific meaning
2. **Success** (Emerald): Completed, approved, active
3. **Error** (Red): Failed, rejected, critical
4. **Warning** (Amber): Attention needed, caution
5. **Info** (Blue): Informational, helpful context

### With Icons (Optional)
- Icon size: 12x12px (w-3 h-3)
- Position: Leading (before text)
- Spacing: 4px gap between icon and text
- Icons from: lucide-react

### Accessibility
- Semantic color meaning should be reinforced with text
- Don't rely on color alone
- Support dark mode with adjusted opacity and colors
- Maintain WCAG AA contrast ratios

### Technical Specs
- Use Tailwind CSS utility classes
- Inline-flex for proper icon alignment
- Support dark mode with dark: prefix
- No click interactions (badges are static)

## COLOR SPECIFICATIONS

### Solid Badges
\`\`\`
Default: bg-zinc-800 dark:bg-zinc-700 text-zinc-50
Success: bg-emerald-600 text-white
Error: bg-red-600 text-white
Warning: bg-amber-500 text-white
Info: bg-blue-600 text-white
\`\`\`

### Soft Badges
\`\`\`
Success: bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400
Error: bg-red-100 dark:bg-red-950/40 text-red-800 dark:text-red-400
Warning: bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400
Info: bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400
\`\`\`

### Outline Badges
\`\`\`
Success: border-2 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300
Error: border-2 border-red-300 dark:border-red-700 text-red-700 dark:text-red-300
Warning: border-2 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300
Info: border-2 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300
\`\`\`

## USAGE EXAMPLES

### Status Indicators
- Order Status: "Shipped", "Delivered", "Cancelled"
- User Status: "Active", "Inactive", "Pending"
- Task Status: "To Do", "In Progress", "Done"

### Labels & Categories
- Priority: "High", "Medium", "Low"
- Type: "Bug", "Feature", "Enhancement"
- Environment: "Production", "Staging", "Development"

### Counts & Metrics
- Notifications: "5 New"
- Items: "12 Items"
- Version: "v2.1.0"

## DO'S
✓ Use consistent badge style within same context
✓ Keep text short (1-2 words max)
✓ Use semantic colors appropriately
✓ Include icons for added clarity
✓ Maintain visual hierarchy with style variants

## DON'TS
✗ Don't use badges for clickable actions (use buttons)
✗ Don't mix different styles in same group
✗ Don't use long text that causes wrapping
✗ Don't rely solely on color for meaning
✗ Don't make badges too large (breaks hierarchy)

## CODE TEMPLATE
\`\`\`tsx
interface BadgeProps {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  style?: 'solid' | 'soft' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Badge({ 
  variant = 'default', 
  style = 'solid', 
  children, 
  icon 
}: BadgeProps) {
  // Style mapping logic
  const classes = getClasses(variant, style);
  
  return (
    <span className={\`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold \${classes}\`}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
}
\`\`\`

Generate the complete badge component following these specifications.`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Badges & Labels
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Status indicators, labels, and tags for categorization and state display.
        </p>
      </div>

      {/* Badge Styles */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Badge Styles
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          3 badge styles: Solid (high emphasis), Soft (medium), Outline (low emphasis).
        </p>
        
        <div className="space-y-6">
          {/* Solid */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-600 rounded-md p-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="w-32">
                <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  Style
                </div>
                <code className="text-sm font-mono font-semibold text-zinc-900 dark:text-zinc-50">
                  Solid
                </code>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  Usage
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  High contrast status, critical states
                </span>
              </div>
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">
                Primary
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800 dark:bg-zinc-700 text-zinc-50 text-xs font-semibold">
                Default
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold">
                <CheckCircle className="w-3 h-3 mr-1" />
                Success
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold">
                <XCircle className="w-3 h-3 mr-1" />
                Error
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-semibold">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Warning
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">
                <Info className="w-3 h-3 mr-1" />
                Info
              </span>
            </div>
            
            {/* Code Viewer */}
            <CodeViewer
              title="Badge Component"
              react={badgeReact}
              html={badgeHTML}
              css={badgeCSS}
              prompt={badgePrompt}
              enableFigmaExport={true}
              figmaSpecs={{
                padding: '12px horizontal, 4px vertical',
                borderRadius: 'full (9999px)',
                fontSize: '12px',
                fontWeight: '600',
                height: 'auto',
                border: '2px (outline variant)',
              }}
              figmaTokens={{
                colors: {
                  'badge-solid-default-bg': '#18181b',
                  'badge-solid-success-bg': '#059669',
                  'badge-solid-error-bg': '#dc2626',
                  'badge-solid-warning-bg': '#f59e0b',
                  'badge-solid-info-bg': '#2563eb',
                  'badge-soft-success-bg-light': '#d1fae5',
                  'badge-soft-success-text-light': '#065f46',
                  'badge-outline-border': '#6ee7b7',
                },
                spacing: {
                  'badge-padding-x': '12px',
                  'badge-padding-y': '4px',
                  'badge-icon-margin': '4px',
                },
                typography: {
                  'badge-font-size': '12px',
                  'badge-font-weight': '600',
                },
                borders: {
                  'badge-radius': '9999px',
                  'badge-outline-width': '2px',
                },
              }}
            />
          </div>

          {/* Soft */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-600 rounded-md p-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="w-32">
                <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  Style
                </div>
                <code className="text-sm font-mono font-semibold text-zinc-900 dark:text-zinc-50">
                  Soft
                </code>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  Usage
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Subtle status, secondary information
                </span>
              </div>
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">
                Primary
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-xs font-semibold">
                Default
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
                <CheckCircle className="w-3 h-3 mr-1" />
                Success
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/40 text-red-800 dark:text-red-400 text-xs font-semibold">
                <XCircle className="w-3 h-3 mr-1" />
                Error
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 text-xs font-semibold">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Warning
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400 text-xs font-semibold">
                <Info className="w-3 h-3 mr-1" />
                Info
              </span>
            </div>
          </div>

          {/* Outline */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="w-32">
                <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  Style
                </div>
                <code className="text-sm font-mono font-semibold text-zinc-900 dark:text-zinc-50">
                  Outline
                </code>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  Usage
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Minimal style, light information
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-xs font-semibold">
                Default
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                <CheckCircle className="w-3 h-3 mr-1" />
                Success
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 text-xs font-semibold">
                <XCircle className="w-3 h-3 mr-1" />
                Error
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-xs font-semibold">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Warning
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-semibold">
                <Info className="w-3 h-3 mr-1" />
                Info
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Badge Sizes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Badge Sizes
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          3 size variations to match different text scales.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-zinc-800 dark:bg-zinc-700 text-zinc-50 text-xs font-semibold">
              Small
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800 dark:bg-zinc-700 text-zinc-50 text-sm font-semibold">
              Medium
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-800 dark:bg-zinc-700 text-zinc-50 text-base font-semibold">
              Large
            </span>
          </div>
        </div>
      </div>

      {/* Dismissible Badges */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Dismissible Badges
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Badges with close button for removable tags or filters.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-xs font-semibold">
              Design
              <button className="hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full p-0.5 transition-colors">
                <XCircle className="w-3 h-3" />
              </button>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400 text-xs font-semibold">
              Engineering
              <button className="hover:bg-blue-200 dark:hover:bg-blue-900/60 rounded-full p-0.5 transition-colors">
                <XCircle className="w-3 h-3" />
              </button>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
              Marketing
              <button className="hover:bg-emerald-200 dark:hover:bg-emerald-900/60 rounded-full p-0.5 transition-colors">
                <XCircle className="w-3 h-3" />
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Dot Badges */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Dot Indicators
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Simple dot indicators for status without text.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-sm text-zinc-900 dark:text-zinc-50">Online</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span className="text-sm text-zinc-900 dark:text-zinc-50">Away</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-sm text-zinc-900 dark:text-zinc-50">Offline</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
              <span className="text-sm text-zinc-900 dark:text-zinc-50">Inactive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Count Badges */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Count Badges
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Numeric indicators for notifications and counts.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="flex flex-wrap gap-6">
            <div className="relative inline-block">
              <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold rounded-md border border-zinc-300 dark:border-zinc-700">
                Messages
              </button>
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 rounded-full">
                12
              </span>
            </div>

            <div className="relative inline-block">
              <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold rounded-md border border-zinc-300 dark:border-zinc-700">
                Notifications
              </button>
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-600 rounded-full">
                5
              </span>
            </div>

            <div className="relative inline-block">
              <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold rounded-md border border-zinc-300 dark:border-zinc-700">
                Updates
              </button>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Application Examples */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Application Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Card */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                  Sarah Chen
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400 text-xs font-semibold">
                    Admin
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
                    Verified
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Product Designer • San Francisco
            </p>
          </div>

          {/* Task Card */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                Design System Update
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 text-xs font-semibold">
                In Progress
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Update all components to v9.1 specifications
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-semibold">
                High Priority
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-semibold">
                Design
              </span>
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
                <span>Use Soft badges for most UI applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Reserve Solid badges for critical status</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Keep badge text short (1-2 words)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use semantic colors for status (green=success, red=error)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use count badges for actionable notifications</span>
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
                <span>Don't use too many badges in one component</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid mixing badge styles in the same group</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use badges for primary navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid using semantic colors for non-status information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't make badges interactive unless dismissible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}