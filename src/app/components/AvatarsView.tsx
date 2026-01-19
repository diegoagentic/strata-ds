import { Check, Plus } from 'lucide-react';
import { CodeViewer } from './CodeViewer';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function AvatarsView() {
  const avatarSizesReact = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarSizes() {
  return (
    <div className="flex flex-wrap items-end gap-6">
      <Avatar size="xs">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="2xl">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}`;

  const avatarSizesHTML = `<!-- Avatar Sizes -->
<div class="flex flex-wrap items-end gap-6">
  <!-- Small (xs) -->
  <span class="relative flex shrink-0 overflow-hidden rounded-full size-6 text-xs">
    <img class="aspect-square size-full" src="..." />
    <span class="bg-zinc-100 dark:bg-zinc-800 flex size-full items-center justify-center rounded-full">CN</span>
  </span>
  
  <!-- Medium (md) - Default -->
  <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 text-sm">
    <img class="aspect-square size-full" src="..." />
    <span class="bg-zinc-100 dark:bg-zinc-800 flex size-full items-center justify-center rounded-full">CN</span>
  </span>
  
  <!-- Large (xl) -->
  <span class="relative flex shrink-0 overflow-hidden rounded-full size-16 text-lg">
    <img class="aspect-square size-full" src="..." />
    <span class="bg-zinc-100 dark:bg-zinc-800 flex size-full items-center justify-center rounded-full">CN</span>
  </span>
</div>`;

  const avatarSizesCSS = `@theme {
  --color-zinc-100: #f4f4f5;
  --color-zinc-800: #27272a;
}

/* Base Avatar */
.avatar {
  position: relative;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 9999px;
}

/* Sizes */
.avatar-xs { width: 1.5rem; height: 1.5rem; font-size: 0.75rem; }
.avatar-md { width: 2.5rem; height: 2.5rem; font-size: 0.875rem; }
.avatar-xl { width: 4rem; height: 4rem; font-size: 1.125rem; }
`;

  const avatarSizesPrompt = `# AI PROMPT: Generate Avatar Component
## CONTEXT
Profile image component with fallback support.

## API
\`\`\`tsx
<Avatar size="xs" | "sm" | "md" | "lg" | "xl" | "2xl">
  <AvatarImage src="..." />
  <AvatarFallback>Initials</AvatarFallback>
</Avatar>
\`\`\`

## SPECS
- Radius: Full
- Fallback: Centered text, zinc-100/zinc-800 bg
- Sizes:
  - xs: size-6 (24px)
  - sm: size-8 (32px)
  - md: size-10 (40px)
  - lg: size-12 (48px)
  - xl: size-16 (64px)
  - 2xl: size-24 (96px)`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Avatars
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          User profile images with fallbacks and multiple sizes.
        </p>
      </div>

      {/* Avatar Sizes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Sizes
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          6 size variations available.
        </p>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8">
          <div className="flex flex-wrap items-end gap-8">
            <div className="flex flex-col items-center gap-2">
              <Avatar size="xs">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <code className="text-xs text-zinc-500">xs</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="sm">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <code className="text-xs text-zinc-500">sm</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="md">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <code className="text-xs text-zinc-500">md</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <code className="text-xs text-zinc-500">lg</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="xl">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <code className="text-xs text-zinc-500">xl</code>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar size="2xl">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <code className="text-xs text-zinc-500">2xl</code>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <CodeViewer
            title="Avatar Sizes"
            react={avatarSizesReact}
            html={avatarSizesHTML}
            css={avatarSizesCSS}
            prompt={avatarSizesPrompt}
            enableFigmaExport={true}
            figmaSpecs={{
              width: '24px - 96px',
              height: '24px - 96px',
              borderRadius: '9999px',
            }}
            figmaTokens={{
              colors: {
                'avatar-bg-fallback': '#f4f4f5',
              },
              spacing: { 'avatar-md': '40px' }
            }}
          />
        </div>
      </div>

      {/* Avatar Types */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
            <h3 className="text-sm font-medium text-zinc-500 mb-4">Image</h3>
            <div className="flex gap-4">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://github.com/leerob.png" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Fallback */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
            <h3 className="text-sm font-medium text-zinc-500 mb-4">Fallback (Initials)</h3>
            <div className="flex gap-4">
              <Avatar size="lg">
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarFallback className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                  OK
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Status Indicators
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Composition example with status badge.
        </p>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8">
          <div className="flex gap-8">
            <div className="relative">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white dark:border-zinc-900 bg-emerald-500" />
            </div>

            <div className="relative">
              <Avatar size="lg">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white dark:border-zinc-900 bg-amber-500" />
            </div>

            <div className="relative">
              <Avatar size="lg">
                <AvatarImage src="https://github.com/leerob.png" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white dark:border-zinc-900 bg-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Add Button */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Interactive
        </h2>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-3 hover:space-x-0 transition-all">
              <Avatar className="border-2 border-white dark:border-zinc-900">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white dark:border-zinc-900">
                <AvatarImage src="https://github.com/leerob.png" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white dark:border-zinc-900">
                <AvatarFallback>+3</AvatarFallback>
              </Avatar>
            </div>
            <button className="size-10 rounded-full border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <Plus className="size-4 text-zinc-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-6 rounded-full bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center">
              <Check className="size-4 text-white" />
            </div>
            <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">Do's</h3>
          </div>
          <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
            <li>• Use "md" size (40px) for most lists and tables.</li>
            <li>• Always provide a fallback (initials) for when images fail.</li>
            <li>• Use status indicators for real-time contexts.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}