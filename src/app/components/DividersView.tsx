import { Check, X } from 'lucide-react';
import { CodeViewer } from './CodeViewer';

export function DividersView() {
  // Code examples for Basic Divider
  const basicDividerReact = `export function BasicDivider() {
  return (
    <div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Content above divider
      </p>
      <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
        Content below divider
      </p>
    </div>
  );
}`;

  const basicDividerHTML = `<!-- Full Width Divider -->
<div>
  <p>Content above divider</p>
  <div class="border-t border-zinc-200 dark:border-zinc-800"></div>
  <p>Content below divider</p>
</div>`;

  const basicDividerCSS = `/* Basic Divider Styles */
.divider {
  border-top: 1px solid #e4e4e7; /* zinc-200 */
  width: 100%;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .divider {
    border-top-color: #27272a; /* zinc-800 */
  }
}`;

  const basicDividerPrompt = `# AI PROMPT: Generate Basic Divider Component

## CONTEXT
You are creating a divider component for the Strata DS White Label design system - a high-density, enterprise-grade white label system using Zinc color scale and Tailwind CSS.

## REQUIREMENTS

### Visual Design
- Border: 1px solid border-zinc-200 (light mode) / border-zinc-800 (dark mode)
- Full width by default
- Subtle, non-intrusive appearance
- Maintains visual hierarchy

### Variants
1. **Full Width**: Spans entire container width
2. **Inset**: With horizontal padding/margin
3. **With Label**: Center, left, or right aligned text
4. **With Icon**: Decorative icon in center
5. **Vertical**: For inline content separation
6. **Dashed/Dotted**: Alternative styles

### Spacing
- Minimum 16px (1rem) margin above and below
- Adequate space for legibility
- Consistent with 8px grid system

### Accessibility
- Semantic <hr> element or <div> with proper ARIA role
- Sufficient color contrast
- Does not interfere with screen readers

### Technical Specs
- Use Tailwind CSS utility classes
- Support dark mode with dark: prefix
- Maintain 8px spacing grid
- Lightweight and performant

## CODE STRUCTURE
\`\`\`tsx
export function Divider({ 
  variant = 'full',
  label,
  className 
}: DividerProps) {
  return (
    <div className={cn("border-t border-zinc-200 dark:border-zinc-800", className)} />
  );
}
\`\`\`

## USAGE EXAMPLES
- Separate content sections in articles
- Divide form sections
- Separate items in lists
- Create visual breaks in navigation

## DO'S
✓ Use subtle colors for non-intrusive separation
✓ Provide adequate spacing above and below
✓ Use semantic HTML when possible
✓ Consider using labels for long forms

## DON'TS
✗ Don't overuse dividers
✗ Don't make dividers too prominent
✗ Don't use for every list item
✗ Don't place too close to content edges

## DESIGN TOKENS
- Border Color: --color-zinc-200 / --color-zinc-800
- Border Width: 1px
- Spacing: --spacing-4 (16px)

Generate the component following these specifications exactly.`;

  // Code examples for Labeled Divider
  const labeledDividerReact = `export function LabeledDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white dark:bg-zinc-900 px-3 text-sm text-zinc-500 dark:text-zinc-400">
          Section Title
        </span>
      </div>
    </div>
  );
}`;

  const labeledDividerHTML = `<!-- Center Label Divider -->
<div class="relative">
  <div class="absolute inset-0 flex items-center">
    <div class="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
  </div>
  <div class="relative flex justify-center">
    <span class="bg-white dark:bg-zinc-900 px-3 text-sm text-zinc-500 dark:text-zinc-400">
      Section Title
    </span>
  </div>
</div>`;

  const labeledDividerCSS = `/* Labeled Divider Styles */
.divider-container {
  position: relative;
}

.divider-line {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
}

.divider-line::before {
  content: '';
  width: 100%;
  border-top: 1px solid #e4e4e7; /* zinc-200 */
}

.divider-label {
  position: relative;
  display: flex;
  justify-content: center;
}

.divider-label span {
  background-color: #ffffff;
  padding: 0 0.75rem;
  font-size: 0.875rem;
  color: #71717a; /* zinc-500 */
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .divider-line::before {
    border-top-color: #27272a; /* zinc-800 */
  }
  
  .divider-label span {
    background-color: #18181b; /* zinc-900 */
    color: #a1a1aa; /* zinc-400 */
  }
}`;

  const labeledDividerPrompt = `# AI PROMPT: Generate Labeled Divider Component

## CONTEXT
You are creating a labeled divider component for the Strata DS White Label design system that includes text labels for section identification.

## REQUIREMENTS

### Visual Design
- Label positions: center, left, right
- Label background matches container (white light / zinc-900 dark)
- Label padding: 12px horizontal (px-3)
- Label text: text-sm, zinc-500 (light) / zinc-400 (dark)
- Line: 1px border-zinc-200 (light) / border-zinc-800 (dark)

### Layout Structure
- Use absolute positioning for line
- Relative positioning for label container
- Flexbox for label alignment
- Background color matches parent to create "cut-out" effect

### Variants
1. **Center Aligned**: Label in center (most common)
2. **Left Aligned**: Label at start (for section titles)
3. **Right Aligned**: Label at end (for metadata)

### Accessibility
- Semantic heading elements for label when appropriate
- ARIA labels for context
- Sufficient color contrast

### Technical Specs
- Use Tailwind CSS utility classes
- Responsive design
- Support dark mode with dark: prefix
- Maintain 8px spacing grid

## CODE STRUCTURE
\`\`\`tsx
export function LabeledDivider({ 
  label,
  position = 'center'
}: LabeledDividerProps) {
  const alignClass = {
    center: 'justify-center',
    left: 'justify-start',
    right: 'justify-end'
  }[position];
  
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
      </div>
      <div className={\`relative flex \${alignClass}\`}>
        <span className="bg-white dark:bg-zinc-900 px-3 text-sm text-zinc-500 dark:text-zinc-400">
          {label}
        </span>
      </div>
    </div>
  );
}
\`\`\`

## USAGE EXAMPLES
- Form section headers ("Personal Information", "Payment Details")
- Timeline separators ("Today", "Yesterday")
- Category separators ("Featured", "Recent")
- Content grouping ("Related Articles")

Generate the component following these specifications exactly.`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Dividers
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Horizontal and vertical separators for content organization and visual hierarchy.
        </p>
      </div>

      {/* Basic Dividers */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Basic Dividers
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Simple horizontal lines for separating content sections.
        </p>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-600 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Full Width
            </div>
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Content above divider
              </p>
              <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
                Content below divider
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Inset
            </div>
            <div className="px-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Content above divider
              </p>
              <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4">
                Content below divider
              </p>
            </div>
          </div>
        </div>
        
        {/* Code Viewer */}
        <div className="mt-6">
          <CodeViewer
            title="Basic Divider"
            react={basicDividerReact}
            html={basicDividerHTML}
            css={basicDividerCSS}
            prompt={basicDividerPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              width: '100%',
              height: '1px',
              backgroundColor: '#e4e4e7 (light) / #27272a (dark)',
              margin: '16px 0',
            }}
            figmaTokens={{
              colors: {
                'divider-light': '#e4e4e7',
                'divider-dark': '#27272a',
              },
              spacing: {
                'divider-margin': '16px',
              },
            }}
          />
        </div>
      </div>

      {/* Dividers with Labels */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Dividers with Labels
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Dividers with text labels for section identification.
        </p>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Center Label
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white dark:bg-zinc-900 px-3 text-sm text-zinc-500 dark:text-zinc-400">
                  Section Title
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Left Label
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
              </div>
              <div className="relative flex justify-start">
                <span className="bg-white dark:bg-zinc-900 pr-3 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Personal Information
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Right Label
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
              </div>
              <div className="relative flex justify-end">
                <span className="bg-white dark:bg-zinc-900 pl-3 text-xs text-zinc-500 dark:text-zinc-400">
                  Optional
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Code Viewer */}
        <div className="mt-6">
          <CodeViewer
            title="Labeled Divider"
            react={labeledDividerReact}
            html={labeledDividerHTML}
            css={labeledDividerCSS}
            prompt={labeledDividerPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              width: '100%',
              height: '1px + label height',
              backgroundColor: '#e4e4e7 (light) / #27272a (dark)',
              padding: '0 12px (label)',
              fontSize: '14px (label)',
              color: '#71717a (light) / #a1a1aa (dark)',
            }}
            figmaTokens={{
              colors: {
                'divider-line-light': '#e4e4e7',
                'divider-line-dark': '#27272a',
                'divider-label-light': '#71717a',
                'divider-label-dark': '#a1a1aa',
                'divider-bg-light': '#ffffff',
                'divider-bg-dark': '#18181b',
              },
              spacing: {
                'label-padding': '12px',
              },
              typography: {
                'label-size': '14px',
              },
            }}
          />
        </div>
      </div>

      {/* Dividers with Icons */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Dividers with Icons
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Decorative dividers with centered icons.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-white dark:bg-zinc-900 px-3">
                  <div className="w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-white dark:bg-zinc-900 px-3">
                  <svg className="w-5 h-5 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Dividers */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Vertical Dividers
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Vertical separators for inline content or toolbar items.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="flex items-center gap-4">
            <button className="text-sm text-zinc-900 dark:text-zinc-50 font-medium hover:underline">
              Action 1
            </button>
            <div className="h-4 border-l border-zinc-200 dark:border-zinc-800"></div>
            <button className="text-sm text-zinc-900 dark:text-zinc-50 font-medium hover:underline">
              Action 2
            </button>
            <div className="h-4 border-l border-zinc-200 dark:border-zinc-800"></div>
            <button className="text-sm text-zinc-900 dark:text-zinc-50 font-medium hover:underline">
              Action 3
            </button>
            <div className="h-4 border-l border-zinc-200 dark:border-zinc-800"></div>
            <button className="text-sm text-zinc-900 dark:text-zinc-50 font-medium hover:underline">
              Action 4
            </button>
          </div>
        </div>
      </div>

      {/* Divider Variants */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Style Variants
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Different visual weights and styles.
        </p>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Subtle (default)
            </div>
            <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Emphasized
            </div>
            <div className="border-t-2 border-zinc-300 dark:border-zinc-700"></div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Dashed
            </div>
            <div className="border-t border-dashed border-zinc-300 dark:border-zinc-700"></div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Dotted
            </div>
            <div className="border-t border-dotted border-zinc-300 dark:border-zinc-700"></div>
          </div>
        </div>
      </div>

      {/* Application Examples */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Application Examples
        </h2>
        <div className="space-y-6">
          {/* List with Dividers */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
            <div className="px-6 py-4">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Item 1</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Description for item 1</p>
            </div>
            <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
            <div className="px-6 py-4">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Item 2</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Description for item 2</p>
            </div>
            <div className="border-t border-zinc-200 dark:border-zinc-800"></div>
            <div className="px-6 py-4">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">Item 3</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Description for item 3</p>
            </div>
          </div>

          {/* Form Section Divider */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-1">
                  First Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-1">
                  Last Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white dark:bg-zinc-900 px-3 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Contact Information
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-1">
                  Phone
                </label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
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
                <span>Use dividers to separate distinct content sections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Add labels to dividers for long forms or complex layouts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use subtle dividers (border-zinc-200) as default</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use vertical dividers for inline navigation or actions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Provide adequate spacing above and below dividers</span>
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
                <span>Don't overuse dividers - too many create visual clutter</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid placing dividers too close to content edges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use dividers to separate every single list item</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid mixing different divider styles in the same context</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use thick dividers unless emphasizing major sections</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}