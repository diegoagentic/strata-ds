import { Check, X, Search, Mail, Lock, DollarSign, Calendar, Link as LinkIcon, AtSign, Globe } from 'lucide-react';
import { CodeViewer } from './CodeViewer';

export function InputGroupsView() {
  // Code examples for Input with Leading Icon
  const leadingIconInputReact = `import { Mail, Lock, Search } from 'lucide-react';

export function LeadingIconInput() {
  return (
    <div className="space-y-4">
      {/* Email Input */}
      <div>
        <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
          />
        </div>
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          <input
            type="password"
            placeholder="••••••••"
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
          />
        </div>
      </div>

      {/* Search Input */}
      <div>
        <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
          Search
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
          />
        </div>
      </div>
    </div>
  );
}`;

  const leadingIconInputHTML = `<!-- Email Input with Leading Icon -->
<div>
  <label class="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
    Email Address
  </label>
  <div class="relative">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <input
      type="email"
      placeholder="you@example.com"
      class="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
    />
  </div>
</div>

<!-- Password Input with Leading Icon -->
<div>
  <label class="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
    Password
  </label>
  <div class="relative">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <input
      type="password"
      placeholder="••••••••"
      class="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
    />
  </div>
</div>`;

  const leadingIconInputCSS = `/* Input with Leading Icon */
.input-group {
  position: relative;
  width: 100%;
}

.input-icon-leading {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  color: #a1a1aa; /* zinc-400 */
  pointer-events: none;
}

.input-with-icon {
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem; /* Extra left padding for icon */
  background-color: #ffffff;
  border: 1px solid #d4d4d8; /* zinc-300 */
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #18181b; /* zinc-900 */
}

.input-with-icon::placeholder {
  color: #a1a1aa; /* zinc-400 */
}

.input-with-icon:focus {
  outline: none;
  ring: 2px solid #18181b; /* zinc-900 */
  border-color: #18181b;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .input-icon-leading {
    color: #71717a; /* zinc-500 */
  }
  
  .input-with-icon {
    background-color: #27272a; /* zinc-800 */
    border-color: #3f3f46; /* zinc-700 */
    color: #fafafa; /* zinc-50 */
  }
  
  .input-with-icon::placeholder {
    color: #71717a; /* zinc-500 */
  }
  
  .input-with-icon:focus {
    ring-color: #fafafa; /* zinc-50 */
    border-color: #fafafa;
  }
}`;

  const leadingIconInputPrompt = `# AI PROMPT: Generate Input with Leading Icon Component

## CONTEXT
You are creating input fields with leading icons for the Strata DS White Label design system - a high-density, enterprise-grade white label system using Zinc color scale and Tailwind CSS.

## REQUIREMENTS

### Visual Design
- Input height: 40px (py-2 with padding)
- Background: white (light) / zinc-800 (dark)
- Border: 1px solid zinc-300 (light) / zinc-700 (dark)
- Border radius: rounded-md (6px)
- Font size: 14px (text-sm)
- Icon: 16x16px positioned left at 12px from edge

### Icon Positioning
- Use absolute positioning within relative container
- Icon position: left-3 (12px from left)
- Vertically centered with top-1/2 -translate-y-1/2
- Icon color: zinc-400 (light) / zinc-500 (dark)
- Icon size: w-4 h-4 (16x16px)

### Input Padding
- Left padding: pl-10 (40px) to accommodate icon
- Right padding: pr-4 (16px)
- Vertical padding: py-2 (8px)
- Maintains 8px spacing grid

### States
1. **Default**: Subtle border, light background
2. **Hover**: No visual change (handled by focus)
3. **Focus**: 2px ring in zinc-900 (light) / zinc-50 (dark)
4. **Disabled**: Reduced opacity, cursor-not-allowed
5. **Error**: Red border and ring

### Label
- Font size: 14px (text-sm)
- Font weight: 600 (font-semibold)
- Color: zinc-900 (light) / zinc-50 (dark)
- Margin bottom: 8px (mb-2)

### Accessibility
- Semantic <label> with htmlFor attribute
- Proper input type (email, password, text, search)
- Placeholder text for context
- Focus visible states
- ARIA labels when needed

### Technical Specs
- Use Tailwind CSS utility classes
- Support dark mode with dark: prefix
- Use lucide-react icons (Mail, Lock, Search, etc.)
- Maintain 8px spacing grid
- Full width by default (w-full)

## CODE STRUCTURE
\`\`\`tsx
import { Mail } from 'lucide-react';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  icon: React.ComponentType;
}

export function InputWithLeadingIcon({ 
  label, 
  type = 'text', 
  placeholder,
  icon: Icon 
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
        />
      </div>
    </div>
  );
}
\`\`\`

## USAGE EXAMPLES
- Email inputs (Mail icon)
- Password fields (Lock icon)
- Search bars (Search icon)
- URL inputs (Globe icon)
- Username fields (AtSign icon)

## DO'S
✓ Use semantic icons that match input purpose
✓ Maintain consistent icon sizing (16x16px)
✓ Include proper labels for accessibility
✓ Use appropriate input types
✓ Provide clear placeholder text

## DON'TS
✗ Don't use decorative-only icons without context
✗ Don't make icons too large (max 20px)
✗ Don't forget padding adjustment for icon space
✗ Don't use too many different icon styles
✗ Don't omit focus states

## DESIGN TOKENS
- Input Height: 40px
- Icon Size: 16px
- Border Radius: 6px
- Border Width: 1px
- Font Size: 14px
- Left Padding: 40px (with icon)

Generate the component following these specifications exactly.`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Input Groups
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Enhanced input fields with icons, addons, and action buttons for better context and functionality.
        </p>
      </div>

      {/* Input with Leading Icon */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Input with Leading Icon
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Icons placed inside the input on the left side for visual context.
        </p>
        
        <div className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>
          </div>
        </div>
        
        {/* Code Viewer */}
        <div className="mt-6">
          <CodeViewer
            title="Input with Leading Icon"
            react={leadingIconInputReact}
            html={leadingIconInputHTML}
            css={leadingIconInputCSS}
            prompt={leadingIconInputPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              height: '40px',
              padding: '8px 16px 8px 40px',
              backgroundColor: '#ffffff (light) / #27272a (dark)',
              borderRadius: '6px',
              borderWidth: '1px',
              fontSize: '14px',
            }}
            figmaTokens={{
              colors: {
                'input-bg-light': '#ffffff',
                'input-bg-dark': '#27272a',
                'input-border-light': '#d4d4d8',
                'input-border-dark': '#3f3f46',
                'input-text-light': '#18181b',
                'input-text-dark': '#fafafa',
                'input-placeholder-light': '#a1a1aa',
                'input-placeholder-dark': '#71717a',
                'input-icon-light': '#a1a1aa',
                'input-icon-dark': '#71717a',
              },
              spacing: {
                'input-padding-left': '40px',
                'input-padding-right': '16px',
                'input-padding-y': '8px',
                'icon-left': '12px',
              },
              borders: {
                'input-radius': '6px',
              },
              typography: {
                'input-size': '14px',
              },
            }}
          />
        </div>
      </div>

      {/* Input with Trailing Icon */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Input with Trailing Icon
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Icons or buttons on the right side for actions like clear or submit.
        </p>
        
        <div className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Website URL
            </label>
            <div className="relative">
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full pl-4 pr-10 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
              <Globe className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Search with Clear
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-10 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full pl-4 pr-10 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Input with Addons */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Input with Addons
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Text or buttons attached to the input field for context or actions.
        </p>
        
        <div className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Price
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-4 bg-zinc-100 dark:bg-zinc-800 border border-r-0 border-zinc-300 dark:border-zinc-700 rounded-l-md text-sm text-zinc-600 dark:text-zinc-400">
                <DollarSign className="w-4 h-4" />
              </span>
              <input
                type="number"
                placeholder="0.00"
                className="flex-1 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-r-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Website
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-4 bg-zinc-100 dark:bg-zinc-800 border border-r-0 border-zinc-300 dark:border-zinc-700 rounded-l-md text-sm text-zinc-600 dark:text-zinc-400">
                https://
              </span>
              <input
                type="text"
                placeholder="www.example.com"
                className="flex-1 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-r-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Username
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-4 bg-zinc-100 dark:bg-zinc-800 border border-r-0 border-zinc-300 dark:border-zinc-700 rounded-l-md text-sm text-zinc-600 dark:text-zinc-400">
                <AtSign className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="username"
                className="flex-1 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
              <span className="inline-flex items-center px-4 bg-zinc-100 dark:bg-zinc-800 border border-l-0 border-zinc-300 dark:border-zinc-700 rounded-r-md text-sm text-zinc-600 dark:text-zinc-400">
                .strata.io
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Input with Button */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Input with Button
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Action buttons integrated directly with input fields.
        </p>
        
        <div className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Newsletter Signup
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>
              <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Search
            </label>
            <div className="flex">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                <input
                  type="search"
                  placeholder="Search for anything..."
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-800 border border-r-0 border-zinc-300 dark:border-zinc-700 rounded-l-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>
              <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-r-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors border border-zinc-900 dark:border-zinc-50">
                Search
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Invite Link
            </label>
            <div className="flex">
              <div className="relative flex-1">
                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                <input
                  type="text"
                  value="https://app.strata.io/invite/abc123"
                  readOnly
                  className="w-full pl-10 pr-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-r-0 border-zinc-300 dark:border-zinc-700 rounded-l-md text-sm text-zinc-900 dark:text-zinc-50"
                />
              </div>
              <button className="px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-sm font-semibold rounded-r-md hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors border border-zinc-300 dark:border-zinc-700">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Input Groups with Validation */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Input Groups with Validation
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Input groups showing success and error states.
        </p>
        
        <div className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Valid Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600 dark:text-emerald-500" />
              <input
                type="email"
                value="user@example.com"
                className="w-full pl-10 pr-10 py-2 bg-white dark:bg-zinc-800 border-2 border-emerald-500 dark:border-emerald-500 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600 dark:text-emerald-500" />
            </div>
            <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-2">
              Email address is valid
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Invalid URL
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-600 dark:text-red-500" />
              <input
                type="url"
                value="invalid-url"
                className="w-full pl-10 pr-10 py-2 bg-white dark:bg-zinc-800 border-2 border-red-500 dark:border-red-500 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <X className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-600 dark:text-red-500" />
            </div>
            <p className="text-xs text-red-600 dark:text-red-500 mt-2">
              Please enter a valid URL
            </p>
          </div>
        </div>
      </div>

      {/* Inline Input Groups */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Inline Input Groups
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Multiple related inputs grouped together in a single row.
        </p>
        
        <div className="max-w-2xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Phone Number
            </label>
            <div className="flex gap-2">
              <select className="w-32 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50">
                <option>+1</option>
                <option>+44</option>
                <option>+52</option>
              </select>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                className="flex-1 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Price Range
            </label>
            <div className="flex items-center gap-2">
              <div className="flex flex-1">
                <span className="inline-flex items-center px-3 bg-zinc-100 dark:bg-zinc-800 border border-r-0 border-zinc-300 dark:border-zinc-700 rounded-l-md text-sm text-zinc-600 dark:text-zinc-400">
                  $
                </span>
                <input
                  type="number"
                  placeholder="0"
                  className="flex-1 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-r-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>
              <span className="text-zinc-500 dark:text-zinc-400">to</span>
              <div className="flex flex-1">
                <span className="inline-flex items-center px-3 bg-zinc-100 dark:bg-zinc-800 border border-r-0 border-zinc-300 dark:border-zinc-700 rounded-l-md text-sm text-zinc-600 dark:text-zinc-400">
                  $
                </span>
                <input
                  type="number"
                  placeholder="1000"
                  className="flex-1 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-r-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
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
                <span>Use icons that clearly represent the input purpose</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Position icons consistently (left for type, right for actions)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Make addon text concise (2-8 characters)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use button groups for immediate actions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Show validation states with appropriate colors</span>
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
                <span>Don't use decorative icons that add no meaning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid putting too many addons on one input</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't make icons too large (max 16-20px)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid clickable-looking icons that do nothing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use different addon styles in the same form</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}