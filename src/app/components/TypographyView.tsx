import { Check, X, Sun, Moon } from 'lucide-react';
import { CopyButton } from './CopyButton';
import { useState } from 'react';

export function TypographyView() {
  const [previewMode, setPreviewMode] = useState<'light' | 'dark'>('light');

  const typeScales = [
    {
      primitive: 'display-lg',
      token: 'typography-display-large',
      size: '36px / 2.25rem',
      lineHeight: '40px / 2.5rem',
      weight: '700 (Bold)',
      usage: 'Large page titles, hero headings',
      className: 'text-4xl font-bold',
      sample: 'Display Large',
      primary: true,
    },
    {
      primitive: 'heading-1',
      token: 'typography-heading-1',
      size: '30px / 1.875rem',
      lineHeight: '36px / 2.25rem',
      weight: '700 (Bold)',
      usage: 'Page headings, section titles',
      className: 'text-3xl font-bold',
      sample: 'Heading 1',
      primary: true,
    },
    {
      primitive: 'heading-2',
      token: 'typography-heading-2',
      size: '24px / 1.5rem',
      lineHeight: '32px / 2rem',
      weight: '700 (Bold)',
      usage: 'Subsection headings, card titles',
      className: 'text-2xl font-bold',
      sample: 'Heading 2',
      primary: true,
    },
    {
      primitive: 'heading-3',
      token: 'typography-heading-3',
      size: '20px / 1.25rem',
      lineHeight: '28px / 1.75rem',
      weight: '700 (Bold)',
      usage: 'Component headings, labels',
      className: 'text-xl font-bold',
      sample: 'Heading 3',
    },
    {
      primitive: 'subtitle',
      token: 'typography-subtitle',
      size: '18px / 1.125rem',
      lineHeight: '28px / 1.75rem',
      weight: '600 (Semibold)',
      usage: 'Section subtitles, emphasized text',
      className: 'text-lg font-semibold',
      sample: 'Subtitle',
    },
    {
      primitive: 'body-base',
      token: 'typography-body-base',
      size: '16px / 1rem',
      lineHeight: '24px / 1.5rem',
      weight: '400 (Regular)',
      usage: 'Body copy, paragraph text',
      className: 'text-base',
      sample: 'Body Base',
      primary: true,
    },
    {
      primitive: 'body-sm',
      token: 'typography-body-small',
      size: '14px / 0.875rem',
      lineHeight: '20px / 1.25rem',
      weight: '400 (Regular)',
      usage: 'Secondary body text, descriptions',
      className: 'text-sm',
      sample: 'Body Small',
      primary: true,
    },
    {
      primitive: 'caption',
      token: 'typography-caption',
      size: '12px / 0.75rem',
      lineHeight: '16px / 1rem',
      weight: '700 (Bold)',
      usage: 'Labels, captions, metadata',
      className: 'text-xs uppercase tracking-wider font-bold',
      sample: 'CAPTION',
    },
  ];

  const fontWeights = [
    { primitive: '400', token: 'font-weight-regular', name: 'Regular', usage: 'Body text, default content', className: 'font-normal' },
    { primitive: '500', token: 'font-weight-medium', name: 'Medium', usage: 'Emphasized text, button labels', className: 'font-medium' },
    { primitive: '600', token: 'font-weight-semibold', name: 'Semibold', usage: 'Subtitles, secondary headings', className: 'font-semibold', primary: true },
    { primitive: '700', token: 'font-weight-bold', name: 'Bold', usage: 'Headings, important text', className: 'font-bold', primary: true },
  ];

  return (
    <div>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            Typography
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Inter font family type scale with semantic tokens for consistent text hierarchy.
          </p>
        </div>
        
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
          <button
            onClick={() => setPreviewMode('light')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all ${ 
              previewMode === 'light'
                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
            }`}
          >
            <Sun className="w-4 h-4" />
            Light Mode
          </button>
          <button
            onClick={() => setPreviewMode('dark')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold text-sm transition-all ${ 
              previewMode === 'dark'
                ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
            }`}
          >
            <Moon className="w-4 h-4" />
            Dark Mode
          </button>
        </div>
      </div>

      {/* Font Family */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Font Family
        </h2>
        {/* Preview Container with forced mode */}
        <div className={previewMode === 'dark' ? 'dark' : ''}>
          <div className={`rounded-xl p-6 transition-colors duration-300 ${
            previewMode === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'
          }`}>
            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md p-6 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                    Primary Typeface
                  </div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    Inter
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-4">
                    A contemporary sans-serif optimized for screen readability with excellent OpenType features.
                  </p>
                  <code className="text-xs font-mono bg-zinc-100 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded border border-transparent dark:border-zinc-700">
                    font-family-base: 'Inter', system-ui, sans-serif
                  </code>
                </div>
                <div className="text-6xl font-bold text-zinc-300 dark:text-zinc-600">
                  Aa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Type Scale */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Type Scale
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          8-level hierarchy for text sizing and line-height. Primary scales (Display, H1, H2, Body Base, Body Small) cover 90% of use cases.
        </p>
        
        {/* Preview Container with forced mode */}
        <div className={previewMode === 'dark' ? 'dark' : ''}>
          <div className={`rounded-xl p-6 transition-colors duration-300 ${
            previewMode === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'
          }`}>
            <div className="space-y-3">
              {typeScales.map((scale) => (
                <div
                  key={scale.primitive}
                  className={`bg-white dark:bg-zinc-800 border rounded-md p-6 transition-all duration-300 ${
                    scale.primary
                      ? 'border-zinc-300 dark:border-zinc-600'
                      : 'border-zinc-200 dark:border-zinc-700'
                  }`}
                >
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* Visual Sample */}
                <div className="col-span-3">
                  <div className={`${scale.className} text-zinc-900 dark:text-zinc-100`}>
                    {scale.sample}
                  </div>
                </div>

                {/* Primitive */}
                <div className="col-span-2">
                  <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                    Primitive
                  </div>
                  <code className="text-sm font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                    {scale.primitive}
                  </code>
                </div>

                {/* Token */}
                <div className="col-span-2">
                  <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                    Token
                  </div>
                  <code className="text-xs font-mono bg-zinc-100 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded border border-transparent dark:border-zinc-700">
                    {scale.token}
                  </code>
                </div>

                {/* Specs */}
                <div className="col-span-2">
                  <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                    Size / Line Height
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-300">
                    {scale.size}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-300">
                    LH: {scale.lineHeight}
                  </div>
                </div>

                {/* Copy Button */}
                <div className="col-span-2 flex justify-center">
                  <CopyButton
                    formats={[
                      { label: 'PX', value: scale.size.split(' / ')[0], description: 'Pixel value' },
                      { label: 'REM', value: scale.size.split(' / ')[1], description: 'REM value' },
                      { label: 'Token', value: scale.token, description: 'Design system token' },
                      { label: 'CSS Class', value: scale.className, description: 'Tailwind CSS class' },
                      { label: 'Primitive', value: scale.primitive, description: 'Primitive token reference' },
                    ]}
                    size="sm"
                  />
                </div>

                {/* Badge */}
                <div className="col-span-1 flex justify-end">
                  {scale.primary && (
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-100 bg-zinc-200 dark:bg-zinc-600 px-2 py-1 rounded whitespace-nowrap border border-transparent dark:border-zinc-500">
                      Primary
                    </span>
                  )}
                </div>
              </div>

              {/* Usage */}
              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                  Usage
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-300">{scale.usage}</span>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>

      {/* Font Weights */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Font Weights
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          4 weight variations for emphasis and hierarchy. Semibold (600) and Bold (700) are most commonly used.
        </p>
        
        {/* Preview Container with forced mode */}
        <div className={previewMode === 'dark' ? 'dark' : ''}>
          <div className={`rounded-xl p-6 transition-colors duration-300 ${
            previewMode === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fontWeights.map((weight) => (
                <div
                  key={weight.primitive}
                  className={`bg-white dark:bg-zinc-800 border rounded-md p-5 transition-all duration-300 ${
                    weight.primary
                      ? 'border-zinc-300 dark:border-zinc-600'
                      : 'border-zinc-200 dark:border-zinc-700'
                  }`}
                >
              <div className="flex items-center justify-between mb-4">
                <div className={`text-2xl text-zinc-900 dark:text-zinc-100 ${weight.className}`}>
                  {weight.name}
                </div>
                <div className="flex items-center gap-2">
                  <CopyButton
                    formats={[
                      { label: 'Value', value: weight.primitive, description: 'Font weight value' },
                      { label: 'Token', value: weight.token, description: 'Design system token' },
                      { label: 'CSS Class', value: weight.className, description: 'Tailwind CSS class' },
                    ]}
                    size="sm"
                  />
                  {weight.primary && (
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-100 bg-zinc-200 dark:bg-zinc-600 px-2 py-1 rounded border border-transparent dark:border-zinc-500">
                      Primary
                    </span>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                    Primitive
                  </div>
                  <code className="text-sm font-mono text-zinc-900 dark:text-zinc-100">
                    {weight.primitive}
                  </code>
                </div>
                
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                    Token
                  </div>
                  <code className="text-xs font-mono bg-zinc-100 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded border border-transparent dark:border-zinc-700">
                    {weight.token}
                  </code>
                </div>
                
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                    Usage
                  </div>
                  <span className="text-sm text-zinc-600 dark:text-zinc-300">{weight.usage}</span>
                </div>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>

      {/* Text Colors */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Text Colors
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Semantic text color tokens for consistent contrast and hierarchy.
        </p>
        
        <div className="grid grid-cols-1 gap-3">
          {[
            { 
              name: 'Primary Text',
              token: 'text-primary',
              light: 'zinc-900',
              dark: 'zinc-50',
              usage: 'Headings, primary content',
              primary: true
            },
            { 
              name: 'Secondary Text',
              token: 'text-secondary',
              light: 'zinc-600',
              dark: 'zinc-400',
              usage: 'Body text, descriptions',
              primary: true
            },
            { 
              name: 'Tertiary Text',
              token: 'text-tertiary',
              light: 'zinc-500',
              dark: 'zinc-500',
              usage: 'Captions, metadata, disabled',
            },
            { 
              name: 'Placeholder Text',
              token: 'text-placeholder',
              light: 'zinc-400',
              dark: 'zinc-600',
              usage: 'Form placeholders, empty states',
            },
          ].map((textColor) => (
            <div
              key={textColor.token}
              className={`bg-white dark:bg-zinc-900 border rounded-md p-5 flex items-center gap-6 ${
                textColor.primary
                  ? 'border-zinc-800 dark:border-zinc-600'
                  : 'border-zinc-200 dark:border-zinc-800'
              }`}
            >
              <div className="w-48">
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                  {textColor.name}
                </div>
                <code className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded">
                  {textColor.token}
                </code>
              </div>

              <div className="w-64">
                <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                  Light / Dark Mode
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {textColor.light} / {textColor.dark}
                </div>
              </div>

              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                  Usage
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{textColor.usage}</span>
              </div>

              {textColor.primary && (
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">
                  Primary
                </span>
              )}
            </div>
          ))}
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
                <span>Use display-lg, heading-1, and heading-2 for primary page hierarchy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Maintain consistent line-height for optimal readability (1.5x font size)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use semibold (600) for emphasized text and bold (700) for headings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Apply text-secondary for body content and descriptions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use caption style for labels, tags, and metadata</span>
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
                <span>Don't create custom font sizes outside the defined scale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid using more than 3 type scales in a single component</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use font weights below 400 or above 700 for UI elements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid ALL CAPS except for labels and captions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't use text-primary on light backgrounds or text-secondary on dark backgrounds</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}