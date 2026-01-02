import { Check, X, ChevronDown, User, Settings, LogOut, Bell, Mail, HelpCircle, CreditCard } from 'lucide-react';
import { CodeViewer } from './CodeViewer';

export function DropdownsView() {
  // Code examples for Simple Dropdown
  const simpleDropdownReact = `import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function SimpleDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-700"
      >
        Options
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden z-10">
          <div className="py-1">
            <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              Edit
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              Duplicate
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              Archive
            </button>
            <div className="my-1 border-t border-zinc-200 dark:border-zinc-800"></div>
            <button className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}`;

  const simpleDropdownHTML = `<!-- Dropdown Menu -->
<div class="relative inline-block">
  <button class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold">
    Options
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  
  <div class="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden z-10">
    <div class="py-1">
      <button class="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800">Edit</button>
      <button class="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800">Duplicate</button>
      <button class="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800">Archive</button>
      <div class="my-1 border-t border-zinc-200 dark:border-zinc-800"></div>
      <button class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30">Delete</button>
    </div>
  </div>
</div>`;

  const simpleDropdownCSS = `/* Dropdown Styles */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border: 1px solid #d4d4d8;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #18181b;
  cursor: pointer;
  transition: background-color 0.15s;
}

.dropdown-trigger:hover {
  background-color: #fafafa;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  width: 14rem;
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
}

.dropdown-menu-items {
  padding: 0.25rem 0;
}

.dropdown-item {
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #18181b;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s;
}

.dropdown-item:hover {
  background-color: #f4f4f5;
}

.dropdown-divider {
  margin: 0.25rem 0;
  border-top: 1px solid #e4e4e7;
}

.dropdown-item-danger {
  color: #dc2626;
}

.dropdown-item-danger:hover {
  background-color: #fef2f2;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .dropdown-trigger {
    background-color: #27272a;
    border-color: #3f3f46;
    color: #fafafa;
  }
  
  .dropdown-trigger:hover {
    background-color: #3f3f46;
  }
  
  .dropdown-menu {
    background-color: #18181b;
    border-color: #27272a;
  }
  
  .dropdown-item {
    color: #fafafa;
  }
  
  .dropdown-item:hover {
    background-color: #27272a;
  }
  
  .dropdown-divider {
    border-top-color: #27272a;
  }
  
  .dropdown-item-danger {
    color: #ef4444;
  }
  
  .dropdown-item-danger:hover {
    background-color: rgba(127, 29, 29, 0.3);
  }
}`;

  const simpleDropdownPrompt = `# AI PROMPT: Generate Dropdown Menu Component

## CONTEXT
You are creating a dropdown menu component for the Strata DS White Label design system - a high-density, enterprise-grade white label system using Zinc color scale and Tailwind CSS.

## REQUIREMENTS

### Visual Design
- Trigger button: white (light) / zinc-800 (dark)
- Border: 1px solid zinc-300 (light) / zinc-700 (dark)
- Menu: white (light) / zinc-900 (dark)
- Border radius: rounded-md (6px)
- Shadow: shadow-lg on menu
- Width: 224px (14rem) default for menu

### Layout Structure
- Relative positioning on container
- Absolute positioning on menu (top-full left-0)
- Menu appears 8px below trigger (mt-2)
- Z-index: 10 to appear above content

### Trigger Button
- Padding: 8px 16px (px-4 py-2)
- Font size: 14px (text-sm)
- Font weight: 600 (font-semibold)
- Icon: ChevronDown, 16x16px (w-4 h-4)
- Gap between text and icon: 8px (gap-2)

### Menu Items
- Padding: 8px 16px (px-4 py-2)
- Font size: 14px (text-sm)
- Full width (w-full)
- Left aligned (text-left)
- Hover state: zinc-100 (light) / zinc-800 (dark)

### Dividers
- Border top: 1px solid zinc-200 (light) / zinc-800 (dark)
- Margin: 4px 0 (my-1)
- Separates logical groups of items

### Destructive Items
- Color: red-600 (light) / red-500 (dark)
- Hover background: red-50 (light) / red-950/30 (dark)
- Used for delete, remove, or destructive actions

### Interaction States
1. **Closed**: Only trigger button visible
2. **Open**: Menu appears below trigger
3. **Hover**: Menu item background changes
4. **Click**: Execute action and close menu
5. **Outside Click**: Close menu

### Accessibility
- Keyboard navigation (Arrow keys, Enter, Escape)
- ARIA role="menu" on menu container
- ARIA role="menuitem" on items
- aria-expanded on trigger button
- Focus management
- Escape key closes menu

### Technical Specs
- Use Tailwind CSS utility classes
- Support dark mode with dark: prefix
- React state for open/close
- Click outside to close (useEffect)
- Portal rendering optional for z-index control

## CODE STRUCTURE
\`\`\`tsx
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold"
      >
        Options
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden z-10">
          <div className="py-1">
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
              Edit
            </button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">
              Duplicate
            </button>
            <div className="my-1 border-t border-zinc-200 dark:border-zinc-800"></div>
            <button className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
\`\`\`

## USAGE EXAMPLES
- Action menus (Edit, Delete, Share)
- User profile menus
- Filter options
- Context menus
- Navigation submenus

## DO'S
✓ Use clear, action-oriented labels
✓ Group related items with dividers
✓ Place destructive actions at bottom
✓ Provide keyboard navigation
✓ Close on outside click

## DON'TS
✗ Don't nest dropdowns
✗ Don't use for long lists (use Select instead)
✗ Don't make menus too wide
✗ Don't forget hover states
✗ Don't omit close functionality

## DESIGN TOKENS
- Menu Width: 224px
- Item Height: 32px (with padding)
- Border Radius: 6px
- Shadow: shadow-lg
- Z-Index: 10

Generate the component following these specifications exactly.`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Dropdowns
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Contextual menus for actions, selections, and navigation triggered by user interaction.
        </p>
      </div>

      {/* Simple Dropdown */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Simple Dropdown
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Basic dropdown menu with text-only items.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-12">
          <div className="relative inline-block">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
              Options
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Dropdown Menu (shown as static example) */}
            <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden z-10">
              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                  Edit
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                  Duplicate
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                  Archive
                </button>
                <div className="my-1 border-t border-zinc-200 dark:border-zinc-800"></div>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Code Viewer */}
        <div className="mt-6">
          <CodeViewer
            title="Simple Dropdown"
            react={simpleDropdownReact}
            html={simpleDropdownHTML}
            css={simpleDropdownCSS}
            prompt={simpleDropdownPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              width: '224px (menu)',
              backgroundColor: '#ffffff (light) / #18181b (dark)',
              borderRadius: '6px',
              borderWidth: '1px',
              padding: '4px 0 (menu), 8px 16px (items)',
            }}
            figmaTokens={{
              colors: {
                'dropdown-trigger-bg-light': '#ffffff',
                'dropdown-trigger-bg-dark': '#27272a',
                'dropdown-menu-bg-light': '#ffffff',
                'dropdown-menu-bg-dark': '#18181b',
                'dropdown-item-hover-light': '#f4f4f5',
                'dropdown-item-hover-dark': '#27272a',
                'dropdown-danger-light': '#dc2626',
                'dropdown-danger-dark': '#ef4444',
              },
              spacing: {
                'dropdown-item-padding': '8px 16px',
                'dropdown-menu-gap': '8px',
              },
              borders: {
                'dropdown-radius': '6px',
              },
            }}
          />
        </div>
      </div>

      {/* Dropdown with Icons */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Dropdown with Icons
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Menu items enhanced with leading icons for better scannability.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-600 rounded-md p-12">
          <div className="relative inline-block">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-md text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
              Account
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden z-10">
              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3">
                  <User className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  Your Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3">
                  <Settings className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3">
                  <Bell className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  Notifications
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  Billing
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

      {/* Dropdown with Sections */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Dropdown with Sections
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Organized menu with labeled sections and dividers.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-12">
          <div className="relative inline-block">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold text-zinc-900 dark:text-zinc-50 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              More Actions
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden z-10">
              {/* User Info */}
              <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Sarah Chen
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      sarah@company.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Section */}
              <div className="py-1">
                <div className="px-4 py-2 text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                  Account
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3">
                  <User className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  Profile Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  Subscription
                </button>
              </div>

              {/* Support Section */}
              <div className="py-1 border-t border-zinc-200 dark:border-zinc-800">
                <div className="px-4 py-2 text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                  Support
                </div>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  Help Center
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-3">
                  <Mail className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  Contact Us
                </button>
              </div>

              {/* Sign Out */}
              <div className="py-1 border-t border-zinc-200 dark:border-zinc-800">
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors flex items-center gap-3">
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Select Dropdown */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Select Dropdown
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Selection menus with checkmark indicators for current selection.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Single Select */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Single Select
            </div>
            <div className="relative inline-block w-full">
              <button className="w-full inline-flex items-center justify-between px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
                English (US)
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden z-10">
                <div className="py-1">
                  <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-between">
                    <span>English (US)</span>
                    <Check className="w-4 h-4 text-zinc-900 dark:text-zinc-50" />
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    English (UK)
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    Spanish
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    French
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    German
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* With Search */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              With Search
            </div>
            <div className="relative inline-block w-full">
              <button className="w-full inline-flex items-center justify-between px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
                Select country...
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg overflow-hidden z-10">
                <div className="p-2 border-b border-zinc-200 dark:border-zinc-800">
                  <input 
                    type="text" 
                    placeholder="Search..."
                    className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
                  />
                </div>
                <div className="py-1 max-h-48 overflow-y-auto">
                  <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    United States
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    United Kingdom
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    Canada
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    Australia
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    Germany
                  </button>
                </div>
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
                <span>Keep menu items concise and scannable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use icons to improve recognition speed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Group related items with dividers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Place destructive actions at the bottom</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Show checkmarks for current selections</span>
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
                <span>Don't use dropdowns with more than 15 items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid nesting dropdowns inside dropdowns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't mix different action types without sections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid truncating text in dropdown items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't hide critical actions in dropdowns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}