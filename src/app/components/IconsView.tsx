import { useState } from 'react';
import {
  // Navigation
  ArrowLeft, ArrowRight, ArrowUpRight, ArrowDownLeft, ChevronDown, ChevronUp,
  ChevronLeft, ChevronRight, ChevronsUpDown, MoveRight, Menu, LogOut, Home,
  // Actions
  Plus, Pencil, SquarePen, Trash2, Copy, Download, Upload, Send, Share2,
  RefreshCw, Search, Filter, Eye, EyeOff, Maximize2, X, Check, Printer,
  // Status & Feedback
  CheckCircle2, AlertCircle, AlertTriangle, Info, Bell, ShieldCheck, BadgeCheck,
  Clock, Star, Zap, XCircle,
  // Content & Documents
  FileText, FileCheck, FileSearch, FileBarChart, ClipboardCheck, ClipboardList,
  Paperclip, Archive, QrCode,
  // Communication
  Mail, MessageSquare, Megaphone,
  // Commerce & Business
  DollarSign, CreditCard, ShoppingCart, ShoppingBag, Tag, Box, Truck, Layers,
  Building2, MapPin, Globe, Users, User,
  // Data & Analytics
  BarChart3, TrendingUp, TrendingDown, Server, LayoutGrid,
  // AI & Technology
  Sparkles, Cloud, CloudUpload, Wrench,
  // UI Elements
  Calendar, Key, Smartphone, ImageIcon,
} from 'lucide-react';

// Icon categories based on actual UI-Dealer usage
const iconCategories = [
  {
    name: 'Navigation',
    description: 'Wayfinding and directional icons for menus, breadcrumbs, and navigation patterns.',
    icons: [
      { component: ArrowLeft, name: 'ArrowLeft', usage: 'Back navigation' },
      { component: ArrowRight, name: 'ArrowRight', usage: 'Forward, next step' },
      { component: ArrowUpRight, name: 'ArrowUpRight', usage: 'External links, outgoing' },
      { component: ArrowDownLeft, name: 'ArrowDownLeft', usage: 'Incoming, receiving' },
      { component: ChevronDown, name: 'ChevronDown', usage: 'Dropdowns, expand' },
      { component: ChevronUp, name: 'ChevronUp', usage: 'Collapse, close' },
      { component: ChevronLeft, name: 'ChevronLeft', usage: 'Previous' },
      { component: ChevronRight, name: 'ChevronRight', usage: 'Next, drill-in' },
      { component: ChevronsUpDown, name: 'ChevronsUpDown', usage: 'Sort, select toggle' },
      { component: MoveRight, name: 'MoveRight', usage: 'Transfer, move' },
      { component: Menu, name: 'Menu', usage: 'Hamburger menu' },
      { component: LogOut, name: 'LogOut', usage: 'Sign out' },
      { component: Home, name: 'Home', usage: 'Home, dashboard' },
    ],
  },
  {
    name: 'Actions',
    description: 'Interactive icons for buttons, toolbars, and user-triggered operations.',
    icons: [
      { component: Plus, name: 'Plus', usage: 'Create, add new' },
      { component: Pencil, name: 'Pencil', usage: 'Edit inline' },
      { component: SquarePen, name: 'SquarePen', usage: 'Edit form/detail' },
      { component: Trash2, name: 'Trash2', usage: 'Delete, remove' },
      { component: Copy, name: 'Copy', usage: 'Duplicate, clipboard' },
      { component: Download, name: 'Download', usage: 'Download file' },
      { component: Upload, name: 'Upload', usage: 'Upload file' },
      { component: Send, name: 'Send', usage: 'Submit, send' },
      { component: Share2, name: 'Share2', usage: 'Share, export' },
      { component: RefreshCw, name: 'RefreshCw', usage: 'Refresh, sync' },
      { component: Search, name: 'Search', usage: 'Search, find' },
      { component: Filter, name: 'Filter', usage: 'Filter results' },
      { component: Eye, name: 'Eye', usage: 'Show, preview' },
      { component: EyeOff, name: 'EyeOff', usage: 'Hide, toggle visibility' },
      { component: Maximize2, name: 'Maximize2', usage: 'Expand, fullscreen' },
      { component: X, name: 'X', usage: 'Close, dismiss' },
      { component: Check, name: 'Check', usage: 'Confirm, select' },
      { component: Printer, name: 'Printer', usage: 'Print document' },
    ],
  },
  {
    name: 'Status & Feedback',
    description: 'Communicate state, progress, and system responses to users.',
    icons: [
      { component: CheckCircle2, name: 'CheckCircle2', usage: 'Success, completed', color: 'text-success' },
      { component: AlertCircle, name: 'AlertCircle', usage: 'Error, critical', color: 'text-error' },
      { component: AlertTriangle, name: 'AlertTriangle', usage: 'Warning, caution', color: 'text-warning' },
      { component: Info, name: 'Info', usage: 'Information, help', color: 'text-info' },
      { component: Bell, name: 'Bell', usage: 'Notifications' },
      { component: ShieldCheck, name: 'ShieldCheck', usage: 'Verified, secure' },
      { component: BadgeCheck, name: 'BadgeCheck', usage: 'Certified, approved' },
      { component: Clock, name: 'Clock', usage: 'Time, pending, history' },
      { component: Star, name: 'Star', usage: 'Favorite, rating' },
      { component: Zap, name: 'Zap', usage: 'Quick action, instant' },
      { component: XCircle, name: 'XCircle', usage: 'Failed, rejected' },
    ],
  },
  {
    name: 'Content & Documents',
    description: 'Represent files, documents, and clipboard operations.',
    icons: [
      { component: FileText, name: 'FileText', usage: 'Document, quote, order' },
      { component: FileCheck, name: 'FileCheck', usage: 'Approved document' },
      { component: FileSearch, name: 'FileSearch', usage: 'Search documents' },
      { component: FileBarChart, name: 'FileBarChart', usage: 'Report, analytics doc' },
      { component: ClipboardCheck, name: 'ClipboardCheck', usage: 'Task complete, checklist' },
      { component: ClipboardList, name: 'ClipboardList', usage: 'To-do, punch list' },
      { component: Paperclip, name: 'Paperclip', usage: 'Attachment' },
      { component: Archive, name: 'Archive', usage: 'Archive, storage' },
      { component: QrCode, name: 'QrCode', usage: 'QR code, scan' },
    ],
  },
  {
    name: 'Communication',
    description: 'Messaging, email, and notification icons.',
    icons: [
      { component: Mail, name: 'Mail', usage: 'Email, inbox' },
      { component: MessageSquare, name: 'MessageSquare', usage: 'Chat, comments' },
      { component: Megaphone, name: 'Megaphone', usage: 'Announcements' },
    ],
  },
  {
    name: 'Commerce & Business',
    description: 'Icons for the furniture/dealer industry workflows.',
    icons: [
      { component: DollarSign, name: 'DollarSign', usage: 'Price, payment, revenue' },
      { component: CreditCard, name: 'CreditCard', usage: 'Payment method' },
      { component: ShoppingCart, name: 'ShoppingCart', usage: 'Cart, order' },
      { component: ShoppingBag, name: 'ShoppingBag', usage: 'Purchase' },
      { component: Tag, name: 'Tag', usage: 'Label, category, SKU' },
      { component: Box, name: 'Box', usage: 'Product, inventory item' },
      { component: Truck, name: 'Truck', usage: 'Shipping, delivery, logistics' },
      { component: Layers, name: 'Layers', usage: 'Stacks, layers, groups' },
      { component: Building2, name: 'Building2', usage: 'Company, dealer, office' },
      { component: MapPin, name: 'MapPin', usage: 'Location, address' },
      { component: Globe, name: 'Globe', usage: 'Global, web, international' },
      { component: Users, name: 'Users', usage: 'Team, group, clients' },
      { component: User, name: 'User', usage: 'Person, profile' },
    ],
  },
  {
    name: 'Data & Analytics',
    description: 'Charts, metrics, and data representation.',
    icons: [
      { component: BarChart3, name: 'BarChart3', usage: 'Charts, analytics' },
      { component: TrendingUp, name: 'TrendingUp', usage: 'Growth, positive trend' },
      { component: TrendingDown, name: 'TrendingDown', usage: 'Decline, negative trend' },
      { component: Server, name: 'Server', usage: 'Database, server, ERP' },
      { component: LayoutGrid, name: 'LayoutGrid', usage: 'Grid view, dashboard' },
    ],
  },
  {
    name: 'AI & Technology',
    description: 'Icons for AI features, automation, and tech integrations.',
    icons: [
      { component: Sparkles, name: 'Sparkles', usage: 'AI-powered, smart feature', color: 'text-ai' },
      { component: Cloud, name: 'Cloud', usage: 'Cloud service, sync' },
      { component: CloudUpload, name: 'CloudUpload', usage: 'Upload to cloud' },
      { component: Wrench, name: 'Wrench', usage: 'Settings, maintenance, tools' },
      { component: Calendar, name: 'Calendar', usage: 'Date, schedule' },
      { component: Key, name: 'Key', usage: 'Authentication, access' },
      { component: Smartphone, name: 'Smartphone', usage: 'Mobile, device' },
      { component: ImageIcon, name: 'ImageIcon', usage: 'Image, photo, media' },
    ],
  },
];

const sizeGuide = [
  { size: 16, className: 'h-4 w-4', usage: 'Inline text, badges, compact buttons' },
  { size: 20, className: 'h-5 w-5', usage: 'Standard buttons, form elements, nav items' },
  { size: 24, className: 'h-6 w-6', usage: 'Section headers, card titles, toolbar icons' },
  { size: 32, className: 'h-8 w-8', usage: 'Empty states, feature highlights, onboarding' },
];

export function IconsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const copyToClipboard = (text: string, iconName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const filteredCategories = iconCategories.map(cat => ({
    ...cat,
    icons: cat.icons.filter(icon =>
      icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      icon.usage.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(cat => cat.icons.length > 0);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Icons</h1>
        <p className="mt-2 text-muted-foreground">
          Lucide React is the official icon library for Strata. All icons are 24px SVGs with consistent stroke widths.
        </p>
      </div>

      {/* Installation */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Installation</h2>
        <div className="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 font-mono text-sm text-zinc-100">
          <span className="text-zinc-500">$</span> npm install lucide-react
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Usage:</p>
          <div className="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 font-mono text-sm text-zinc-100 space-y-1">
            <div><span className="text-ai">import</span> {'{'} Sparkles, CheckCircle2 {'}'} <span className="text-ai">from</span> <span className="text-success">'lucide-react'</span>;</div>
            <div></div>
            <div><span className="text-zinc-500">// Standard size (20px for buttons)</span></div>
            <div>{'<'}<span className="text-warning">Sparkles</span> <span className="text-info">className</span>=<span className="text-success">"h-5 w-5 text-ai"</span> /{'>'}</div>
            <div></div>
            <div><span className="text-zinc-500">// With semantic color</span></div>
            <div>{'<'}<span className="text-warning">CheckCircle2</span> <span className="text-info">className</span>=<span className="text-success">"h-5 w-5 text-success"</span> /{'>'}</div>
          </div>
        </div>
        <div className="flex items-start gap-2 p-3 bg-warning-light dark:bg-warning/10 border border-warning/20 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-foreground">Migration Note</p>
            <p className="text-muted-foreground">Heroicons (<code className="text-xs bg-muted px-1 rounded">@heroicons/react</code>) has been deprecated in Strata. All projects must use Lucide React.</p>
          </div>
        </div>
      </div>

      {/* Sizing Guide */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Sizing Guide</h2>
        <p className="text-muted-foreground">Use Tailwind classes for consistent sizing. Icons inherit the current text color.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sizeGuide.map(({ size, className, usage }) => (
            <div key={size} className="bg-card border border-border rounded-xl p-5 text-center space-y-3">
              <div className="flex justify-center">
                <Sparkles className={`${className} text-ai`} />
              </div>
              <div>
                <div className="font-mono text-sm font-medium text-foreground">{className}</div>
                <div className="text-xs text-muted-foreground mt-1">{size}px — {usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Branded Icon Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Branded Color Usage</h2>
        <p className="text-muted-foreground">Icons inherit <code className="text-xs bg-muted px-1 rounded">currentColor</code>. Use semantic color tokens for accessibility.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Status icons */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h3 className="font-semibold text-foreground text-sm">Status Icons</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-success-light dark:bg-success/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Success</div>
                  <div className="text-xs text-muted-foreground font-mono">text-success <span className="text-zinc-400">#098400</span></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-warning-light dark:bg-warning/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Warning</div>
                  <div className="text-xs text-muted-foreground font-mono">text-warning <span className="text-zinc-400">#b27d00</span></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-error-light dark:bg-error/10 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-error" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Error</div>
                  <div className="text-xs text-muted-foreground font-mono">text-error <span className="text-zinc-400">#d20322</span></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-info-light dark:bg-info/10 flex items-center justify-center">
                  <Info className="h-5 w-5 text-info" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Info</div>
                  <div className="text-xs text-muted-foreground font-mono">text-info <span className="text-zinc-400">#2164d1</span></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-ai-light dark:bg-ai/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-ai" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">AI Feature</div>
                  <div className="text-xs text-muted-foreground font-mono">text-ai <span className="text-zinc-400">#8b5cf6</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand buttons */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h3 className="font-semibold text-foreground text-sm">Icons in Branded Buttons</h3>
            <div className="space-y-3">
              <button className="flex items-center gap-2 bg-brand-300 dark:bg-brand-500 text-zinc-900 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-brand-400 dark:hover:bg-brand-600/50 transition-colors">
                <Plus className="h-5 w-5" />
                Create Quote
              </button>
              <button className="flex items-center gap-2 bg-ai text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-ai/90 transition-colors">
                <Sparkles className="h-5 w-5" />
                AI Diagnosis
              </button>
              <button className="flex items-center gap-2 bg-card border border-border text-foreground px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-muted transition-colors">
                <Download className="h-5 w-5" />
                Export PDF
              </button>
              <button className="flex items-center gap-2 bg-error text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-error/90 transition-colors">
                <Trash2 className="h-5 w-5" />
                Delete Order
              </button>
            </div>
            <div className="flex items-start gap-2 p-3 bg-error-light dark:bg-error/10 border border-error/20 rounded-lg mt-2">
              <XCircle className="h-4 w-4 text-error shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Never</strong> use brand-300/400 as icon color on white backgrounds — contrast ratio is 1.8:1 (FAIL). Use <code className="bg-muted px-1 rounded">text-zinc-900</code> for icons on brand backgrounds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Icon Gallery</h2>
        <p className="text-muted-foreground">
          {iconCategories.reduce((sum, cat) => sum + cat.icons.length, 0)} icons organized by category. Click to copy the import.
        </p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search icons by name or usage..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ai/20 focus:border-ai/50 transition-colors"
          />
        </div>
      </div>

      {/* Icon Grid by Category */}
      {filteredCategories.map((category) => (
        <div key={category.name} className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {category.icons.map(({ component: Icon, name, usage, color }) => (
              <button
                key={name}
                onClick={() => copyToClipboard(`<${name} className="h-5 w-5" />`, name)}
                className="group relative bg-card border border-border rounded-xl p-4 hover:border-ai/50 hover:shadow-sm transition-all text-center space-y-2"
              >
                <div className="flex justify-center">
                  <Icon className={`h-6 w-6 ${color || 'text-foreground'} group-hover:text-ai transition-colors`} />
                </div>
                <div className="text-xs font-mono font-medium text-foreground truncate">{name}</div>
                <div className="text-[10px] text-muted-foreground truncate">{usage}</div>
                {copiedIcon === name && (
                  <div className="absolute inset-0 bg-success/10 border-2 border-success rounded-xl flex items-center justify-center">
                    <span className="text-xs font-bold text-success">Copied!</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Do's and Don'ts */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-success-light dark:bg-success/10 border border-success/20 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <h3 className="font-semibold text-foreground">Do</h3>
            </div>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-success mt-0.5 shrink-0" /> Use <code className="bg-white/50 dark:bg-white/10 px-1 rounded text-xs">h-5 w-5</code> for standard buttons and inputs</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-success mt-0.5 shrink-0" /> Use semantic colors: <code className="bg-white/50 dark:bg-white/10 px-1 rounded text-xs">text-success</code>, <code className="bg-white/50 dark:bg-white/10 px-1 rounded text-xs">text-ai</code></li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-success mt-0.5 shrink-0" /> Pair Sparkles with <code className="bg-white/50 dark:bg-white/10 px-1 rounded text-xs">text-ai</code> for AI features</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-success mt-0.5 shrink-0" /> Use <code className="bg-white/50 dark:bg-white/10 px-1 rounded text-xs">text-zinc-900</code> for icons on brand backgrounds</li>
              <li className="flex items-start gap-2"><Check className="h-4 w-4 text-success mt-0.5 shrink-0" /> Import only the icons you need (tree-shakeable)</li>
            </ul>
          </div>
          <div className="bg-error-light dark:bg-error/10 border border-error/20 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-error" />
              <h3 className="font-semibold text-foreground">Don't</h3>
            </div>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2"><X className="h-4 w-4 text-error mt-0.5 shrink-0" /> Use <code className="bg-white/50 dark:bg-white/10 px-1 rounded text-xs">@heroicons/react</code> — deprecated in Strata</li>
              <li className="flex items-start gap-2"><X className="h-4 w-4 text-error mt-0.5 shrink-0" /> Use brand-300/400 as icon color on light backgrounds (contrast FAIL)</li>
              <li className="flex items-start gap-2"><X className="h-4 w-4 text-error mt-0.5 shrink-0" /> Mix icon libraries in the same component</li>
              <li className="flex items-start gap-2"><X className="h-4 w-4 text-error mt-0.5 shrink-0" /> Use inline SVGs when a Lucide equivalent exists</li>
              <li className="flex items-start gap-2"><X className="h-4 w-4 text-error mt-0.5 shrink-0" /> Use hardcoded hex colors on icons — use tokens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
