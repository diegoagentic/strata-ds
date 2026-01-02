import { Check, X, Plus } from 'lucide-react';
import { CodeViewer } from './CodeViewer';

export function AvatarsView() {
  // Code examples for Avatar Sizes
  const avatarSizesReact = `export function AvatarSizes() {
  return (
    <div className="flex flex-wrap items-end gap-6">
      {/* Extra Small - 24px */}
      <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
      
      {/* Small - 32px */}
      <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
      
      {/* Medium - 40px */}
      <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
      
      {/* Large - 48px */}
      <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
      
      {/* Extra Large - 64px */}
      <div className="w-16 h-16 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
      
      {/* 2X Large - 96px */}
      <div className="w-24 h-24 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
    </div>
  );
}`;

  const avatarSizesHTML = `<!-- Avatar Sizes -->\n<div class="flex flex-wrap items-end gap-6">
  <!-- Extra Small - 24px -->
  <div class="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
  
  <!-- Small - 32px -->
  <div class="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
  
  <!-- Medium - 40px -->
  <div class="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
  
  <!-- Large - 48px -->
  <div class="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
  
  <!-- Extra Large - 64px -->
  <div class="w-16 h-16 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
  
  <!-- 2X Large - 96px -->
  <div class="w-24 h-24 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
</div>`;

  const avatarSizesCSS = `/* Avatar Size Variants */
.avatar-xs {
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background-color: #d4d4d8; /* zinc-300 */
}

.avatar-sm {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background-color: #d4d4d8; /* zinc-300 */
}

.avatar-md {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-color: #d4d4d8; /* zinc-300 */
}

.avatar-lg {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background-color: #d4d4d8; /* zinc-300 */
}

.avatar-xl {
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  background-color: #d4d4d8; /* zinc-300 */
}

.avatar-2xl {
  width: 96px;
  height: 96px;
  border-radius: 9999px;
  background-color: #d4d4d8; /* zinc-300 */
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .avatar-xs, .avatar-sm, .avatar-md, 
  .avatar-lg, .avatar-xl, .avatar-2xl {
    background-color: #3f3f46; /* zinc-700 */
  }
}`;

  const avatarSizesPrompt = `# AI PROMPT: Generate Avatar Component with Multiple Sizes

## CONTEXT
You are creating an avatar component for the Strata DS White Label design system - a high-density, enterprise-grade white label system using Zinc color scale and Tailwind CSS.

## REQUIREMENTS

### Visual Design
- Perfect circular shape (border-radius: 9999px)
- Background: zinc-300 (light mode) / zinc-700 (dark mode)
- Clean, minimal aesthetic
- Support for images, initials, and placeholder icons

### Size Variants
1. **xs**: 24x24px - For compact lists, tags
2. **sm**: 32x32px - For navigation, small cards
3. **md**: 40x40px - Default size for most contexts
4. **lg**: 48x48px - For emphasis in cards, headers
5. **xl**: 64x64px - For profiles, large cards
6. **2xl**: 96x96px - For profile pages, hero sections

### Types
1. **Image Avatar**: Profile photo with proper sizing
2. **Initials Avatar**: 1-2 letter initials, centered text
3. **Placeholder Avatar**: User icon for empty state

### Status Indicators
- Optional status dot (online, away, busy, offline)
- Position: bottom-right with 2px border
- Colors: emerald-500 (online), amber-500 (away), red-500 (busy), zinc-400 (offline)

### Accessibility
- Semantic markup with proper ARIA labels
- Alt text for images
- Sufficient color contrast
- Keyboard navigation support

### Technical Specs
- Use Tailwind CSS utility classes
- Support dark mode with dark: prefix
- Maintain 8px spacing grid
- Responsive and performant

## CODE STRUCTURE
\`\`\`tsx
interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  src?: string;
  alt?: string;
  initials?: string;
  status?: 'online' | 'away' | 'busy' | 'offline';
}

export function Avatar({ 
  size = 'md', 
  src, 
  alt, 
  initials, 
  status 
}: AvatarProps) {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24'
  }[size];
  
  return (
    <div className="relative inline-block">
      <div className={\`\${sizeClasses} bg-zinc-300 dark:bg-zinc-700 rounded-full overflow-hidden\`}>
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : initials ? (
          <div className="w-full h-full flex items-center justify-center font-semibold text-zinc-800 dark:text-zinc-200">
            {initials}
          </div>
        ) : (
          {/* Placeholder icon */}
        )}
      </div>
      {status && <StatusIndicator status={status} />}
    </div>
  );
}
\`\`\`

## USAGE EXAMPLES
- User profiles and navigation
- Comment threads and feeds
- Team member lists
- Chat interfaces
- Contact cards

## DO'S
✓ Use appropriate size for context
✓ Provide alt text for accessibility
✓ Use initials when image unavailable
✓ Consider status indicators for real-time apps
✓ Maintain aspect ratio for images

## DON'TS
✗ Don't use non-circular shapes (breaks pattern)
✗ Don't omit alt text for images
✗ Don't make avatars too small (min 24px)
✗ Don't use low-quality or pixelated images
✗ Don't forget dark mode styling

## DESIGN TOKENS
- Background: --color-zinc-300 / --color-zinc-700
- Border Radius: 9999px (full circle)
- Sizes: 24px, 32px, 40px, 48px, 64px, 96px
- Status Colors: emerald-500, amber-500, red-500, zinc-400

Generate the component following these specifications exactly.`;

  // Code examples for Avatar with Status
  const avatarStatusReact = `export function AvatarWithStatus() {
  return (
    <div className="flex gap-8">
      {/* Online */}
      <div className="relative inline-block">
        <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
      </div>
      
      {/* Away */}
      <div className="relative inline-block">
        <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-amber-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
      </div>
      
      {/* Busy */}
      <div className="relative inline-block">
        <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
      </div>
      
      {/* Offline */}
      <div className="relative inline-block">
        <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-zinc-400 rounded-full border-2 border-white dark:border-zinc-900"></div>
      </div>
    </div>
  );
}`;

  const avatarStatusHTML = `<!-- Avatar with Status Indicators -->\n<div class="flex gap-8">
  <!-- Online -->
  <div class="relative inline-block">
    <div class="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
    <div class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
  </div>
  
  <!-- Away -->
  <div class="relative inline-block">
    <div class="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
    <div class="absolute bottom-0 right-0 w-3 h-3 bg-amber-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
  </div>
  
  <!-- Busy -->
  <div class="relative inline-block">
    <div class="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
    <div class="absolute bottom-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
  </div>
  
  <!-- Offline -->
  <div class="relative inline-block">
    <div class="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
    <div class="absolute bottom-0 right-0 w-3 h-3 bg-zinc-400 rounded-full border-2 border-white dark:border-zinc-900"></div>
  </div>
</div>`;

  const avatarStatusCSS = `/* Avatar with Status Indicator */
.avatar-container {
  position: relative;
  display: inline-block;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background-color: #d4d4d8; /* zinc-300 */
}

.status-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  border: 2px solid #ffffff;
}

.status-online {
  background-color: #10b981; /* emerald-500 */
}

.status-away {
  background-color: #f59e0b; /* amber-500 */
}

.status-busy {
  background-color: #ef4444; /* red-500 */
}

.status-offline {
  background-color: #a1a1aa; /* zinc-400 */
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .avatar {
    background-color: #3f3f46; /* zinc-700 */
  }
  
  .status-indicator {
    border-color: #18181b; /* zinc-900 */
  }
}`;

  const avatarStatusPrompt = `# AI PROMPT: Generate Avatar with Status Indicator Component

## CONTEXT
You are creating an avatar component with real-time status indicators for the Strata DS White Label design system.

## REQUIREMENTS

### Visual Design
- Avatar: Circular, zinc-300 (light) / zinc-700 (dark)
- Status dot: 12x12px circle positioned bottom-right
- Border: 2px solid white (light) / zinc-900 (dark)
- Status colors clearly distinguishable

### Status States
1. **Online**: emerald-500 (#10b981) - Active/available
2. **Away**: amber-500 (#f59e0b) - Temporarily unavailable
3. **Busy**: red-500 (#ef4444) - Do not disturb
4. **Offline**: zinc-400 (#a1a1aa) - Not available

### Layout
- Use relative positioning on container
- Absolute positioning for status dot
- Position: bottom-right (bottom: 0, right: 0)
- Z-index management for proper layering

### Accessibility
- ARIA label for status ("online", "away", "busy", "offline")
- Screen reader announcement for status changes
- Sufficient color contrast
- Tooltip on hover showing status text

### Technical Specs
- Use Tailwind CSS utility classes
- Support dark mode with dark: prefix
- Smooth transitions for status changes
- Maintain circular shape at all sizes

## CODE STRUCTURE
\`\`\`tsx
interface StatusProps {
  status: 'online' | 'away' | 'busy' | 'offline';
}

export function AvatarWithStatus({ status }: StatusProps) {
  const statusColors = {
    online: 'bg-emerald-500',
    away: 'bg-amber-500',
    busy: 'bg-red-500',
    offline: 'bg-zinc-400'
  };
  
  return (
    <div className="relative inline-block">
      <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
      <div 
        className={\`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-zinc-900 \${statusColors[status]}\`}
        aria-label={status}
      />
    </div>
  );
}
\`\`\`

## USAGE EXAMPLES
- Team collaboration tools
- Chat and messaging interfaces
- User directories
- Video conferencing
- Social platforms

## DO'S
✓ Use consistent status colors
✓ Provide ARIA labels for accessibility
✓ Add tooltips for clarity
✓ Consider real-time updates
✓ Test visibility in both light/dark modes

## DON'TS
✗ Don't use too many status states (max 4-5)
✗ Don't make status indicators too small
✗ Don't omit border around status dot
✗ Don't use similar colors for different states
✗ Don't forget to handle status transitions

Generate the component following these specifications exactly.`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Avatars
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          User profile images with fallbacks, status indicators, and various sizes for different contexts.
        </p>
      </div>

      {/* Avatar Sizes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Avatar Sizes
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          6 size variations from extra small to extra large.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-600 rounded-md p-8">
          <div className="flex flex-wrap items-end gap-6">
            <div className="text-center">
              <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full mb-2"></div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">xs (24px)</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full mb-2"></div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">sm (32px)</div>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full mb-2"></div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">md (40px)</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full mb-2"></div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">lg (48px)</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-300 dark:bg-zinc-700 rounded-full mb-2"></div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">xl (64px)</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-zinc-300 dark:bg-zinc-700 rounded-full mb-2"></div>
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">2xl (96px)</div>
            </div>
          </div>
        </div>
        
        {/* Code Viewer */}
        <div className="mt-6">
          <CodeViewer
            title="Avatar Sizes"
            react={avatarSizesReact}
            html={avatarSizesHTML}
            css={avatarSizesCSS}
            prompt={avatarSizesPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              width: '24px, 32px, 40px, 48px, 64px, 96px',
              height: '24px, 32px, 40px, 48px, 64px, 96px',
              backgroundColor: '#d4d4d8 (light) / #3f3f46 (dark)',
              borderRadius: '9999px (full circle)',
            }}
            figmaTokens={{
              colors: {
                'avatar-bg-light': '#d4d4d8',
                'avatar-bg-dark': '#3f3f46',
              },
              spacing: {
                'avatar-xs': '24px',
                'avatar-sm': '32px',
                'avatar-md': '40px',
                'avatar-lg': '48px',
                'avatar-xl': '64px',
                'avatar-2xl': '96px',
              },
              borders: {
                'avatar-radius': '9999px',
              },
            }}
          />
        </div>
      </div>

      {/* Avatar Types */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Avatar Types
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Different avatar styles for various use cases.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image Avatar */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-600 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Image
            </div>
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
            </div>
          </div>

          {/* Initials Avatar */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-600 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Initials
            </div>
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center text-zinc-800 dark:text-zinc-200 font-semibold">
                SC
              </div>
              <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center text-zinc-800 dark:text-zinc-200 font-semibold">
                JD
              </div>
              <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center text-zinc-800 dark:text-zinc-200 font-semibold">
                AM
              </div>
            </div>
          </div>

          {/* Icon Avatar */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Placeholder
            </div>
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-zinc-400 dark:text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar with Status */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Avatar with Status Indicator
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Online status indicators positioned at the bottom-right.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-8">
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-2">
                <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Online</div>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-2">
                <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-amber-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Away</div>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-2">
                <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"></div>
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Busy</div>
            </div>
            <div className="text-center">
              <div className="relative inline-block mb-2">
                <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-zinc-400 dark:bg-zinc-600 rounded-full border-2 border-white dark:border-zinc-900"></div>
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Offline</div>
            </div>
          </div>
        </div>
        
        {/* Code Viewer */}
        <div className="mt-6">
          <CodeViewer
            title="Avatar with Status"
            react={avatarStatusReact}
            html={avatarStatusHTML}
            css={avatarStatusCSS}
            prompt={avatarStatusPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              width: '48px',
              height: '48px',
              backgroundColor: '#d4d4d8 (light) / #3f3f46 (dark)',
              borderRadius: '9999px (full circle)',
            }}
            figmaTokens={{
              colors: {
                'avatar-bg-light': '#d4d4d8',
                'avatar-bg-dark': '#3f3f46',
                'status-online': '#10b981',
                'status-away': '#f59e0b',
                'status-busy': '#ef4444',
                'status-offline': '#a1a1aa',
              },
              spacing: {
                'avatar': '48px',
                'status-indicator': '12px',
              },
              borders: {
                'avatar-radius': '9999px',
                'status-indicator': '2px',
              },
            }}
          />
        </div>
      </div>

      {/* Avatar with Badge */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Avatar with Notification Badge
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Notification count badges for unread messages or alerts.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-8">
          <div className="flex flex-wrap gap-8">
            <div className="relative inline-block">
              <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                3
              </div>
            </div>
            <div className="relative inline-block">
              <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                9
              </div>
            </div>
            <div className="relative inline-block">
              <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full border-2 border-white dark:border-zinc-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar Groups */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Avatar Groups
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Stacked avatars showing multiple users or collaborators.
        </p>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-800 dark:border-zinc-600 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              Overlapping Stack
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white dark:border-zinc-900"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-white dark:border-zinc-900"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white dark:border-zinc-900"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border-2 border-white dark:border-zinc-900"></div>
                <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900 flex items-center justify-center text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  +12
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
              With Names
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center text-xs font-semibold">
                  SC
                </div>
                <span className="text-sm text-zinc-900 dark:text-zinc-50">Sarah Chen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center text-xs font-semibold">
                  JD
                </div>
                <span className="text-sm text-zinc-900 dark:text-zinc-50">John Doe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center text-xs font-semibold">
                  AM
                </div>
                <span className="text-sm text-zinc-900 dark:text-zinc-50">Anna Miller</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avatar with Ring */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Avatar with Ring
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Highlighted avatars with colored rings for emphasis or active state.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-8">
          <div className="flex flex-wrap gap-6">
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-blue-500 to-purple-500">
              <div className="w-full h-full bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
            </div>
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-emerald-500 to-blue-500">
              <div className="w-full h-full bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
            </div>
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-red-500 to-amber-500">
              <div className="w-full h-full bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Avatar Button */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Add Avatar Button
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Interactive button for adding new users or inviting collaborators.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-8">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
              <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
              <div className="w-10 h-10 bg-zinc-300 dark:bg-zinc-700 rounded-full border-2 border-white dark:border-zinc-900"></div>
            </div>
            <button className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center transition-colors">
              <Plus className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
            </button>
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
                <span>Use appropriate size for context (sm for lists, lg for profiles)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Provide initials fallback when images fail to load</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use status indicators for real-time presence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Keep avatar groups under 5 visible + counter</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Always use circular avatars (rounded-full)</span>
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
                <span>Don't use square or rounded-rectangle avatars</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid showing full names inside small avatars</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use status indicators without clear meaning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid stacking more than 5-6 avatars visibly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use notification badges for non-urgent info</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}