import { Check, X, Search, Bell, Menu, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { CodeViewer } from './CodeViewer';

export function NavbarsView() {
  // Code examples for Simple Navbar
  const simpleNavbarReact = `import { Menu } from 'lucide-react';

export function SimpleNavbar() {
  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-800 dark:bg-zinc-700 rounded-md flex items-center justify-center">
              <span className="text-zinc-50 font-bold text-sm">ST</span>
            </div>
            <span className="font-bold text-zinc-900 dark:text-zinc-50">Strata</span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Projects
            </a>
            <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Team
            </a>
            <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Reports
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md">
              Sign in
            </button>
            <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}`;

  const simpleNavbarHTML = `<!-- Simple Navbar -->
<nav class="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
  <div class="px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-zinc-800 dark:bg-zinc-700 rounded-md flex items-center justify-center">
          <span class="text-zinc-50 font-bold text-sm">ST</span>
        </div>
        <span class="font-bold text-zinc-900 dark:text-zinc-50">Strata</span>
      </div>

      <!-- Nav Links -->
      <div class="flex items-center gap-6">
        <a href="#" class="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Dashboard</a>
        <a href="#" class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Projects</a>
        <a href="#" class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Team</a>
        <a href="#" class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Reports</a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <button class="px-4 py-2 text-sm font-semibold">Sign in</button>
        <button class="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md">Sign up</button>
      </div>
    </div>
  </div>
</nav>`;

  const simpleNavbarCSS = `/* Navbar Styles */
.navbar {
  background-color: #ffffff;
  border-bottom: 1px solid #e4e4e7;
  padding: 1rem 1.5rem;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.navbar-logo-icon {
  width: 2rem;
  height: 2rem;
  background-color: #27272a;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  font-weight: 700;
  font-size: 0.875rem;
}

.navbar-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.navbar-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: #52525b;
  text-decoration: none;
  transition: color 0.15s;
}

.navbar-link:hover {
  color: #18181b;
}

.navbar-link.active {
  font-weight: 600;
  color: #18181b;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .navbar {
    background-color: #18181b;
    border-bottom-color: #27272a;
  }
  
  .navbar-logo-icon {
    background-color: #3f3f46;
  }
  
  .navbar-link {
    color: #a1a1aa;
  }
  
  .navbar-link:hover {
    color: #fafafa;
  }
  
  .navbar-link.active {
    color: #fafafa;
  }
}`;

  const simpleNavbarPrompt = `# AI PROMPT: Generate Navbar Component

## CONTEXT
You are creating a navigation bar component for the Strata DS White Label design system - a high-density, enterprise-grade white label system using Zinc color scale and Tailwind CSS.

## REQUIREMENTS

### Visual Design
- Height: 64px (py-4 with padding)
- Background: white (light) / zinc-900 (dark)
- Border bottom: 1px border-zinc-200 (light) / border-zinc-800 (dark)
- Horizontal padding: 24px (px-6)
- Maintains visual hierarchy with elevation

### Layout Structure
- Three-column layout: Logo | Navigation Links | Actions
- Flexbox with space-between alignment
- Responsive collapse on mobile (hamburger menu)
- Fixed or sticky positioning options

### Logo Section
- Logo icon: 32x32px (w-8 h-8)
- Brand name: font-bold
- Left-aligned
- Clickable link to home

### Navigation Links
- Center-aligned horizontally
- Gap: 24px (gap-6)
- Font size: 14px (text-sm)
- Active state: font-semibold, zinc-900 (light) / zinc-50 (dark)
- Inactive: font-medium, zinc-600 (light) / zinc-400 (dark)
- Hover: zinc-900 (light) / zinc-50 (dark)

### Actions Section
- Right-aligned
- Buttons, icons, or user menu
- Consistent spacing between elements
- Primary/secondary button variants

### Responsive Behavior
- Desktop: All links visible
- Tablet: Collapse to hamburger menu < 768px
- Mobile: Full-screen mobile menu overlay

### Accessibility
- Semantic <nav> element
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus visible states
- Skip to content link

### Technical Specs
- Use Tailwind CSS utility classes
- Support dark mode with dark: prefix
- Use lucide-react icons
- Maintain 8px spacing grid
- Sticky or fixed positioning option

## CODE STRUCTURE
\`\`\`tsx
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-800 dark:bg-zinc-700 rounded-md">
              <span className="text-zinc-50 font-bold">ST</span>
            </div>
            <span className="font-bold text-zinc-900 dark:text-zinc-50">Brand</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Dashboard
            </a>
            <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Projects
            </a>
            <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Team
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-semibold rounded-md">
              Sign in
            </button>
            <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
\`\`\`

## USAGE EXAMPLES
- Application headers
- Marketing websites
- Dashboard navigation
- Admin panels
- SaaS applications

## DO'S
✓ Keep navigation items to 5-7 maximum
✓ Highlight current/active page
✓ Use consistent hover states
✓ Provide mobile menu for responsive
✓ Include logo as clickable home link

## DON'TS
✗ Don't overcrowd with too many links
✗ Don't forget mobile responsiveness
✗ Don't use different heights across pages
✗ Don't omit focus states for accessibility
✗ Don't make clickable areas too small

## DESIGN TOKENS
- Height: 64px
- Padding: 24px horizontal, 16px vertical
- Border: 1px bottom
- Font Size: 14px (links)
- Background: --color-white / --color-zinc-900

Generate the component following these specifications exactly.`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Navbars & Headers
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Top navigation components for application headers with logos, menus, search, and user actions.
        </p>
      </div>

      {/* Simple Navbar */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Simple Navbar
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Basic navigation with logo and primary links.
        </p>
        
        <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-800 dark:bg-zinc-700 rounded-md flex items-center justify-center">
                    <span className="text-zinc-50 font-bold text-sm">ST</span>
                  </div>
                  <span className="font-bold text-zinc-900 dark:text-zinc-50">Strata</span>
                </div>

                {/* Nav Links */}
                <div className="flex items-center gap-6">
                  <a href="#" className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                    Dashboard
                  </a>
                  <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                    Projects
                  </a>
                  <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                    Team
                  </a>
                  <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                    Reports
                  </a>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                    Sign in
                  </button>
                  <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        {/* Code Viewer */}
        <div className="mt-6">
          <CodeViewer
            title="Simple Navbar"
            react={simpleNavbarReact}
            html={simpleNavbarHTML}
            css={simpleNavbarCSS}
            prompt={simpleNavbarPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              height: '64px',
              padding: '24px horizontal, 16px vertical',
              backgroundColor: '#ffffff (light) / #18181b (dark)',
              borderWidth: '1px bottom',
              fontSize: '14px',
            }}
            figmaTokens={{
              colors: {
                'navbar-bg-light': '#ffffff',
                'navbar-bg-dark': '#18181b',
                'navbar-border-light': '#e4e4e7',
                'navbar-border-dark': '#27272a',
                'navbar-link-active-light': '#18181b',
                'navbar-link-active-dark': '#fafafa',
                'navbar-link-inactive-light': '#52525b',
                'navbar-link-inactive-dark': '#a1a1aa',
              },
              spacing: {
                'navbar-padding-x': '24px',
                'navbar-padding-y': '16px',
                'navbar-link-gap': '24px',
              },
              typography: {
                'navbar-link-size': '14px',
              },
            }}
          />
        </div>
      </div>

      {/* Navbar with Search */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Navbar with Search
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Navigation bar featuring integrated search functionality.
        </p>
        
        <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-800 dark:border-zinc-600 rounded-md overflow-hidden">
          <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div className="px-6 py-4">
              <div className="flex items-center gap-6">
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-800 dark:bg-zinc-700 rounded-md flex items-center justify-center">
                    <span className="text-zinc-50 font-bold text-sm">AV</span>
                  </div>
                </div>

                {/* Search */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                    <Bell className="w-5 h-5" />
                  </button>
                  <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Navbar with Dropdown */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Navbar with User Dropdown
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Full-featured navbar with user profile dropdown menu.
        </p>
        
        <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Logo & Nav */}
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-zinc-800 dark:bg-zinc-700 rounded-md flex items-center justify-center">
                      <span className="text-zinc-50 font-bold text-sm">ST</span>
                    </div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-50">Strata</span>
                  </div>

                  <div className="flex items-center gap-6">
                    <a href="#" className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Home
                    </a>
                    <a href="#" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                      Analytics
                    </a>
                    <button className="flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                      Resources
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* User Menu */}
                <div className="flex items-center gap-4">
                  <button className="relative w-10 h-10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full"></span>
                  </button>
                  
                  <button className="flex items-center gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-md px-3 py-2 transition-colors">
                    <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Sarah Chen</div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">Admin</div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Dropdown Menu Example (positioned below) */}
          <div className="bg-zinc-50 dark:bg-zinc-950 p-6">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg w-64">
              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3">
                  <User className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  Your Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3">
                  <Settings className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  Settings
                </button>
                <div className="my-1 border-t border-zinc-200 dark:border-zinc-800"></div>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors flex items-center gap-3">
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Mobile Navbar
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Responsive navigation with hamburger menu for mobile devices.
        </p>
        
        <div className="max-w-sm">
          <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
            <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
              <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                  {/* Logo */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-800 dark:bg-zinc-700 rounded-md flex items-center justify-center">
                      <span className="text-zinc-50 font-bold text-sm">AV</span>
                    </div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-50">Avanto</span>
                  </div>

                  {/* Mobile Menu Button */}
                  <button className="w-10 h-10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                    <Menu className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Menu (expanded state) */}
              <div className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                <div className="px-4 py-2 space-y-1">
                  <a href="#" className="block px-3 py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800 rounded-md">
                    Dashboard
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                    Projects
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                    Team
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                    Settings
                  </a>
                </div>
              </div>
            </nav>
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
                <span>Keep navbar height consistent (56-64px recommended)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Place logo on the left for better recognition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use sticky positioning for persistent navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Highlight current page in navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Include mobile hamburger menu for responsive design</span>
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
                <span>Don't overcrowd navbar with too many items (&gt;7)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid hiding critical navigation in dropdowns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use multiple competing CTAs in navbar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid placing search on the right side</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use hamburger menu on desktop layouts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}