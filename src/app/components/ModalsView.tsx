import { Check, X, AlertTriangle, Trash2, Upload, User } from 'lucide-react';
import { CodeViewer } from './CodeViewer';

export function ModalsView() {
  // Code examples for Simple Modal
  const simpleModalReact = `import { X } from 'lucide-react';
import { useState } from 'react';

export function SimpleModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-md"
      >
        Open Modal
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-md border border-zinc-200 dark:border-zinc-800">
              {/* Header */}
              <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    Confirm Action
                  </h3>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="px-6 py-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Are you sure you want to continue with this action?
                </p>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-3">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}`;

  const simpleModalHTML = `<!-- Modal Backdrop -->
<div class="fixed inset-0 bg-black/50 z-40"></div>

<!-- Modal Container -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
  <div class="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-md border border-zinc-200 dark:border-zinc-800">
    <!-- Modal Header -->
    <div class="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          Confirm Action
        </h3>
        <button class="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Modal Content -->
    <div class="px-6 py-6">
      <p class="text-sm text-zinc-600 dark:text-zinc-400">
        Are you sure you want to continue with this action?
      </p>
    </div>

    <!-- Modal Footer -->
    <div class="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-3">
      <button class="px-4 py-2 text-sm font-semibold text-zinc-700 rounded-md">Cancel</button>
      <button class="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md">Confirm</button>
    </div>
  </div>
</div>`;

  const simpleModalCSS = `/* Modal Styles */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
}

.modal-container {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 28rem;
  border: 1px solid #e4e4e7;
}

.modal-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e4e4e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #18181b;
}

.modal-close {
  color: #a1a1aa;
  transition: color 0.15s;
}

.modal-close:hover {
  color: #52525b;
}

.modal-content {
  padding: 1.5rem;
}

.modal-footer {
  padding: 1rem 1.5rem;
  background-color: #fafafa;
  border-top: 1px solid #e4e4e7;
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .modal {
    background-color: #18181b;
    border-color: #27272a;
  }
  
  .modal-header {
    border-bottom-color: #27272a;
  }
  
  .modal-title {
    color: #fafafa;
  }
  
  .modal-close {
    color: #71717a;
  }
  
  .modal-close:hover {
    color: #d4d4d8;
  }
  
  .modal-footer {
    background-color: #09090b;
    border-top-color: #27272a;
  }
}`;

  const simpleModalPrompt = `# AI PROMPT: Generate Modal Component

## CONTEXT
You are creating a modal dialog component for the Strata DS White Label design system - a high-density, enterprise-grade white label system using Zinc color scale and Tailwind CSS.

## REQUIREMENTS

### Visual Design
- Backdrop: Semi-transparent black overlay (bg-black/50)
- Modal: white (light) / zinc-900 (dark)
- Border radius: rounded-lg (8px)
- Border: 1px solid zinc-200 (light) / zinc-800 (dark)
- Shadow: shadow-lg for depth
- Max width: 28rem (448px) for standard modals
- Centered on screen with padding

### Layout Structure
1. **Header**: Title + close button, border-bottom
2. **Content**: Main content area, flexible height
3. **Footer**: Action buttons, light background, border-top

### Z-Index Layering
- Backdrop: z-40
- Modal: z-50
- Ensures modal appears above all content

### Header Section
- Padding: 20px 24px (px-6 py-5)
- Title: text-lg font-bold
- Close button: X icon, top-right corner
- Border bottom: 1px solid zinc-200/800

### Content Section
- Padding: 24px (px-6 py-6)
- Text: text-sm for body content
- Flexible height based on content
- Scroll if content exceeds viewport

### Footer Section
- Padding: 16px 24px (px-6 py-4)
- Background: zinc-50 (light) / zinc-950 (dark)
- Border top: 1px solid zinc-200/800
- Buttons: Right-aligned with gap-3
- Button order: Cancel (ghost) | Confirm (primary)

### Interaction States
1. **Open**: Fade in backdrop and modal
2. **Close**: Click backdrop, X button, or Cancel
3. **Prevent Close**: Optional for critical actions
4. **Focus Trap**: Keep focus within modal
5. **Escape Key**: Close modal on ESC press

### Accessibility
- Role="dialog" and aria-modal="true"
- aria-labelledby for title
- aria-describedby for content
- Focus management (trap focus)
- Keyboard navigation (Tab, Shift+Tab, ESC)
- Screen reader announcements
- Prevent body scroll when open

### Technical Specs
- Use Tailwind CSS utility classes
- Support dark mode with dark: prefix
- Portal rendering to body for z-index control
- React state management for open/close
- Smooth transitions (fade in/out)

## CODE STRUCTURE
\`\`\`tsx
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-md border border-zinc-200 dark:border-zinc-800">
          <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                {title}
              </h3>
              <button onClick={onClose}>
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="px-6 py-6">{children}</div>

          {footer && (
            <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
\`\`\`

## USAGE EXAMPLES
- Confirmation dialogs
- Form submissions
- Delete confirmations
- Information displays
- Multi-step wizards

## DO'S
✓ Use for focused interactions
✓ Provide clear action buttons
✓ Include close button (X)
✓ Prevent body scroll when open
✓ Use appropriate modal size for content

## DON'TS
✗ Don't nest modals
✗ Don't use for non-critical info (use toast instead)
✗ Don't make modals too large
✗ Don't forget to trap focus
✗ Don't omit close options

## DESIGN TOKENS
- Max Width: 448px (standard)
- Border Radius: 8px
- Backdrop Opacity: 50%
- Z-Index: 50 (modal), 40 (backdrop)
- Padding: 24px content, 20px header, 16px footer

Generate the component following these specifications exactly.`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Modals
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Dialog overlays for focused interactions, confirmations, and forms that require user attention.
        </p>
      </div>

      {/* Simple Modal */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Simple Modal
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Basic modal with title, content, and action buttons.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md p-12 flex items-center justify-center min-h-[400px]">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-md border border-zinc-200 dark:border-zinc-800">
            <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  Confirm Action
                </h3>
                <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="px-6 py-6">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Are you sure you want to continue with this action? This will update your settings and may affect your current configuration.
              </p>
            </div>

            <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                Confirm
              </button>
            </div>
          </div>
        </div>
        
        {/* Code Viewer */}
        <div className="mt-6">
          <CodeViewer
            title="Simple Modal"
            react={simpleModalReact}
            html={simpleModalHTML}
            css={simpleModalCSS}
            prompt={simpleModalPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              width: '448px (max-width)',
              backgroundColor: '#ffffff (light) / #18181b (dark)',
              borderRadius: '8px',
              borderWidth: '1px',
              padding: 'Header: 20px 24px, Content: 24px, Footer: 16px 24px',
            }}
            figmaTokens={{
              colors: {
                'modal-bg-light': '#ffffff',
                'modal-bg-dark': '#18181b',
                'modal-border-light': '#e4e4e7',
                'modal-border-dark': '#27272a',
                'modal-footer-bg-light': '#fafafa',
                'modal-footer-bg-dark': '#09090b',
                'backdrop-color': 'rgba(0, 0, 0, 0.5)',
              },
              spacing: {
                'modal-header-padding': '20px 24px',
                'modal-content-padding': '24px',
                'modal-footer-padding': '16px 24px',
              },
              borders: {
                'modal-radius': '8px',
              },
            }}
          />
        </div>
      </div>

      {/* Destructive Modal */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Destructive Modal
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Warning modal for destructive actions like deletion.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md p-12 flex items-center justify-center min-h-[400px]">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-md border border-zinc-200 dark:border-zinc-800">
            <div className="px-6 py-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-950/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                    Delete Project
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Are you sure you want to delete this project? All data will be permanently removed from our servers. This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-600 dark:bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-700 dark:hover:bg-red-600 transition-colors flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                Delete Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Form Modal
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Modal with form inputs for creating or editing content.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md p-12 flex items-center justify-center min-h-[500px]">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-lg border border-zinc-200 dark:border-zinc-800">
            <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  Add Team Member
                </h3>
                <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Invite a new member to join your team
              </p>
            </div>
            
            <div className="px-6 py-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="colleague@example.com"
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Role
                </label>
                <select className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50">
                  <option>Member</option>
                  <option>Admin</option>
                  <option>Viewer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Add a personal message..."
                  className="w-full px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50"
                />
              </div>

              <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-md">
                <User className="w-4 h-4 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                <p className="text-xs text-blue-800 dark:text-blue-200">
                  They'll receive an email invitation to join the team
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                Send Invitation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Success Modal
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Confirmation modal showing successful completion of an action.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md p-12 flex items-center justify-center min-h-[400px]">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-md border border-zinc-200 dark:border-zinc-800">
            <div className="px-6 py-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  Payment Successful
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Your payment of $299.00 has been processed successfully. A receipt has been sent to your email.
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <button className="w-full px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Modal */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Wide Modal
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Larger modal for content-heavy interactions or previews.
        </p>
        
        <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md p-12 flex items-center justify-center min-h-[500px]">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-4xl border border-zinc-200 dark:border-zinc-800">
            <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  Upload Files
                </h3>
                <button className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="px-6 py-6">
              <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-12 text-center hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-zinc-400 dark:text-zinc-500 mx-auto mb-4" />
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                  Click to upload or drag and drop
                </h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/40 rounded flex items-center justify-center flex-shrink-0">
                    <Upload className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 truncate">
                      design-mockup.png
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      2.4 MB • Uploading...
                    </div>
                  </div>
                  <div className="w-32 bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
                    <div className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md">
                  <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950/40 rounded flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 truncate">
                      profile-photo.jpg
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-500">
                      1.8 MB • Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm font-semibold rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                Upload 2 Files
              </button>
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
                <span>Use modals for important, focused tasks that require attention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Always provide a clear way to close or dismiss the modal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use red/destructive styling for delete confirmations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Keep modal content concise and focused</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Add backdrop overlay to focus user attention</span>
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
                <span>Don't stack multiple modals on top of each other</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid using modals for non-critical information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't make modals too large (max 90% viewport)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid auto-opening modals on page load</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use vague action button labels</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}