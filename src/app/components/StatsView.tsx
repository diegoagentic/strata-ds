import { TrendingUp, TrendingDown, Activity, Users, DollarSign, ShoppingCart } from 'lucide-react';
import { CodeViewer } from './CodeViewer';

export function StatsView() {
  // Code examples for Key Metrics Stats
  const keyMetricsReact = `import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from 'lucide-react';

export function KeyMetricsGrid() {
  const stats = [
    {
      label: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'indigo'
    },
    {
      label: 'Revenue',
      value: '$45,231',
      change: '+8.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'emerald'
    },
    {
      label: 'Orders',
      value: '1,234',
      change: '-3.1%',
      trend: 'down',
      icon: ShoppingCart,
      color: 'rose'
    },
    {
      label: 'Conversion',
      value: '3.24%',
      change: '+0.4%',
      trend: 'up',
      icon: Activity,
      color: 'amber'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
        const trendColor = stat.trend === 'up' 
          ? 'text-emerald-600 dark:text-emerald-400' 
          : 'text-red-600 dark:text-red-400';
        
        return (
          <div key={index} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={\`w-10 h-10 bg-\${stat.color}-100 dark:bg-\${stat.color}-900/30 rounded-md flex items-center justify-center\`}>
                <Icon className={\`w-5 h-5 text-\${stat.color}-600 dark:text-\${stat.color}-400\`} />
              </div>
              <div className={\`flex items-center gap-1 \${trendColor} text-sm font-semibold\`}>
                <TrendIcon className="w-4 h-4" />
                {stat.change}
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              {stat.value}
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}`;

  const keyMetricsHTML = `<!-- Key Metrics Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- Stat Card 1 -->
  <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
    <div class="flex items-center justify-between mb-4">
      <div class="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-md flex items-center justify-center">
        <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        12.5%
      </div>
    </div>
    <div class="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">2,543</div>
    <div class="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">Total Users</div>
  </div>

  <!-- Stat Card 2 -->
  <div class="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
    <div class="flex items-center justify-between mb-4">
      <div class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-md flex items-center justify-center">
        <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        8.2%
      </div>
    </div>
    <div class="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">$45,231</div>
    <div class="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">Revenue</div>
  </div>
</div>`;

  const keyMetricsCSS = `/* Stats Card Styles */
.stat-card {
  background-color: #ffffff;
  border: 1px solid #e4e4e7;
  border-radius: 0.375rem;
  padding: 1.5rem;
}

.stat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.stat-icon-wrapper {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon-indigo {
  background-color: #e0e7ff;
  color: #4f46e5;
}

.stat-icon-emerald {
  background-color: #d1fae5;
  color: #059669;
}

.stat-icon-rose {
  background-color: #ffe4e6;
  color: #e11d48;
}

.stat-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.stat-trend {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.stat-trend-up {
  color: #059669;
}

.stat-trend-down {
  color: #dc2626;
}

.stat-value {
  font-size: 1.875rem;
  font-weight: 700;
  color: #18181b;
  margin-bottom: 0.25rem;
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: #71717a;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .stat-card {
    background-color: #18181b;
    border-color: #27272a;
  }
  
  .stat-icon-indigo {
    background-color: rgba(79, 70, 229, 0.3);
    color: #a5b4fc;
  }
  
  .stat-icon-emerald {
    background-color: rgba(5, 150, 105, 0.3);
    color: #6ee7b7;
  }
  
  .stat-icon-rose {
    background-color: rgba(225, 29, 72, 0.3);
    color: #fda4af;
  }
  
  .stat-trend-up {
    color: #6ee7b7;
  }
  
  .stat-trend-down {
    color: #ef4444;
  }
  
  .stat-value {
    color: #fafafa;
  }
  
  .stat-label {
    color: #a1a1aa;
  }
}`;

  const keyMetricsPrompt = `# AI PROMPT: Generate Stats/Metrics Component

## CONTEXT
You are creating statistics and metrics display components for the Strata DS White Label design system - a high-density, enterprise-grade white label system using Zinc color scale and Tailwind CSS.

## REQUIREMENTS

### Visual Design
- Card background: white (light) / zinc-900 (dark)
- Border: 1px solid zinc-200 (light) / zinc-800 (dark)
- Border radius: rounded-md (6px)
- Padding: 24px (p-6)
- Grid layout: Responsive 1/2/4 columns

### Card Structure
1. **Header**: Icon + Trend indicator
2. **Value**: Large, bold primary metric
3. **Label**: Small, uppercase descriptive text

### Icon Section
- Size: 40x40px (w-10 h-10)
- Background: Colored with opacity (e.g., indigo-100)
- Icon size: 20x20px (w-5 h-5)
- Border radius: rounded-md (6px)
- Semantic colors: indigo, emerald, rose, amber

### Trend Indicator
- Position: Top right of card
- Size: 16x16px icon + percentage text
- Colors: emerald (up), red (down)
- Font size: 14px (text-sm)
- Font weight: 600 (font-semibold)

### Value Display
- Font size: 30px (text-3xl)
- Font weight: 700 (font-bold)
- Color: zinc-900 (light) / zinc-50 (dark)
- Margin bottom: 4px (mb-1)
- Format: Numbers with commas, currency symbols

### Label
- Font size: 12px (text-xs)
- Text transform: uppercase
- Letter spacing: tracking-wider
- Font weight: 700 (font-bold)
- Color: zinc-500 (light) / zinc-400 (dark)

### Grid Layout
- Mobile: 1 column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2)
- Desktop: 4 columns (lg:grid-cols-4)
- Gap: 24px (gap-6)

### Semantic Colors
- **Indigo**: Users, accounts, general metrics
- **Emerald**: Revenue, positive growth
- **Rose**: Orders, transactions
- **Amber**: Conversion, percentages
- **Blue**: Activity, engagement

### Accessibility
- Clear visual hierarchy
- High contrast text
- Semantic HTML structure
- ARIA labels for trend indicators
- Screen reader friendly number formatting

### Technical Specs
- Use Tailwind CSS utility classes
- Support dark mode with dark: prefix
- Use lucide-react icons
- Maintain 8px spacing grid
- Responsive grid system

## CODE STRUCTURE
\`\`\`tsx
import { TrendingUp, TrendingDown, Users } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ComponentType;
  colorScheme: 'indigo' | 'emerald' | 'rose' | 'amber';
}

export function StatCard({ label, value, change, trend, icon: Icon, colorScheme }: StatCardProps) {
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  const trendColor = trend === 'up' 
    ? 'text-emerald-600 dark:text-emerald-400' 
    : 'text-red-600 dark:text-red-400';
  
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={\`w-10 h-10 bg-\${colorScheme}-100 dark:bg-\${colorScheme}-900/30 rounded-md flex items-center justify-center\`}>
          <Icon className={\`w-5 h-5 text-\${colorScheme}-600 dark:text-\${colorScheme}-400\`} />
        </div>
        <div className={\`flex items-center gap-1 \${trendColor} text-sm font-semibold\`}>
          <TrendIcon className="w-4 h-4" />
          {change}
        </div>
      </div>
      <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
        {value}
      </div>
      <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
        {label}
      </div>
    </div>
  );
}
\`\`\`

## USAGE EXAMPLES
- Dashboard KPIs
- Analytics summaries
- Performance metrics
- E-commerce stats
- User engagement metrics

## DO'S
✓ Use clear, concise labels
✓ Format numbers appropriately (commas, currency)
✓ Show trend direction visually
✓ Use semantic colors consistently
✓ Maintain visual hierarchy

## DON'TS
✗ Don't overcrowd with too many stats
✗ Don't use vague labels
✗ Don't omit trend context
✗ Don't mix different stat card styles
✗ Don't forget responsive layout

## DESIGN TOKENS
- Card Padding: 24px
- Icon Size: 40x40px (container), 20x20px (icon)
- Value Font Size: 30px
- Label Font Size: 12px
- Grid Gap: 24px

Generate the component following these specifications exactly.`;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Stats & Metrics
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          High-density statistical displays with trend indicators and sparklines.
        </p>
      </div>

      {/* Primary Stats Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-md flex items-center justify-center">
                <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                12.5%
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              2,543
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
              Total Users
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-md flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                8.2%
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              $45,231
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
              Revenue
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-md flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              </div>
              <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm font-semibold">
                <TrendingDown className="w-4 h-4" />
                3.1%
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              1,234
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
              Orders
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/30 rounded-md flex items-center justify-center">
                <Activity className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                5.7%
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              87.5%
            </div>
            <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
              Uptime
            </div>
          </div>
        </div>
      </div>

      {/* Compact Stats */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Compact Layout
        </h2>
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md divide-y divide-zinc-200 dark:divide-zinc-800">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 mb-1">
                Page Views
              </div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                125,432
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                +15.3%
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                vs last month
              </div>
            </div>
          </div>

          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 mb-1">
                Bounce Rate
              </div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                32.8%
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                -2.4%
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                vs last month
              </div>
            </div>
          </div>

          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400 mb-1">
                Avg Session Duration
              </div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                4m 32s
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                +8.1%
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                vs last month
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Progress Indicators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Sales Target
              </div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                75%
              </div>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mb-2">
              <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              $75,000 of $100,000 goal
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Project Completion
              </div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                92%
              </div>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mb-2">
              <div className="bg-emerald-600 dark:bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }} />
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              23 of 25 tasks completed
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Storage Usage
              </div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                68%
              </div>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mb-2">
              <div className="bg-amber-600 dark:bg-amber-500 h-2 rounded-full" style={{ width: '68%' }} />
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              68 GB of 100 GB used
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Team Capacity
              </div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                45%
              </div>
            </div>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 mb-2">
              <div className="bg-rose-600 dark:bg-rose-500 h-2 rounded-full" style={{ width: '45%' }} />
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              9 of 20 team members available
            </div>
          </div>
        </div>
      </div>

      {/* Mini Stats Grid */}
      <div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Quick Stats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Active', value: '1,429', color: 'emerald' },
            { label: 'Pending', value: '234', color: 'amber' },
            { label: 'Declined', value: '48', color: 'red' },
            { label: 'Draft', value: '89', color: 'zinc' },
            { label: 'Archived', value: '567', color: 'zinc' },
            { label: 'Total', value: '2,367', color: 'indigo' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-4 text-center"
            >
              <div className={`text-2xl font-bold mb-1 ${
                stat.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                stat.color === 'amber' ? 'text-amber-600 dark:text-amber-400' :
                stat.color === 'red' ? 'text-red-600 dark:text-red-400' :
                stat.color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' :
                'text-zinc-600 dark:text-zinc-400'
              }`}>
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Viewer */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Code Examples
        </h2>
        <CodeViewer
          title="Key Metrics Stats"
          react={keyMetricsReact}
          html={keyMetricsHTML}
          css={keyMetricsCSS}
          prompt={keyMetricsPrompt}
          enableFigmaExport={true}
          figmaSpecs={{
            cardPadding: '24px',
            iconSize: '40x40px (container), 20x20px (icon)',
            valueFontSize: '30px',
            labelFontSize: '12px',
            gridGap: '24px',
          }}
          figmaTokens={{
            colors: {
              'stat-card-bg-light': '#ffffff',
              'stat-card-bg-dark': '#18181b',
              'stat-border-light': '#e4e4e7',
              'stat-border-dark': '#27272a',
              'stat-value-light': '#18181b',
              'stat-value-dark': '#fafafa',
              'stat-label-light': '#71717a',
              'stat-label-dark': '#a1a1aa',
              'stat-trend-up': '#059669',
              'stat-trend-down': '#dc2626',
            },
            spacing: {
              'stat-padding': '24px',
              'stat-gap': '24px',
              'icon-margin': '16px',
            },
            typography: {
              'value-size': '30px',
              'value-weight': '700',
              'label-size': '12px',
              'label-weight': '700',
            },
          }}
        />
      </div>
    </div>
  );
}