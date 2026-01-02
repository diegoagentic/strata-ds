import { Check, X, TrendingUp, TrendingDown, ArrowUp, ArrowDown, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function DataVisualizationView() {
  // Sample data for charts
  const timeSeriesData = [
    { name: 'Jan', revenue: 4200, users: 2400, sessions: 3200 },
    { name: 'Feb', revenue: 5100, users: 3200, sessions: 4100 },
    { name: 'Mar', revenue: 4800, users: 2800, sessions: 3800 },
    { name: 'Apr', revenue: 6200, users: 4200, sessions: 5200 },
    { name: 'May', revenue: 7100, users: 5100, sessions: 6100 },
    { name: 'Jun', revenue: 6800, users: 4800, sessions: 5800 },
    { name: 'Jul', revenue: 8200, users: 6200, sessions: 7200 },
  ];

  const barData = [
    { name: 'Product A', sales: 4000, target: 3800 },
    { name: 'Product B', sales: 3000, target: 3200 },
    { name: 'Product C', sales: 5000, target: 4500 },
    { name: 'Product D', sales: 2780, target: 3000 },
    { name: 'Product E', sales: 4890, target: 4200 },
  ];

  const pieData = [
    { name: 'Desktop', value: 45, color: '#6366f1' },
    { name: 'Mobile', value: 35, color: '#8b5cf6' },
    { name: 'Tablet', value: 15, color: '#10b981' },
    { name: 'Other', value: 5, color: '#f59e0b' },
  ];

  const sparklineData = [
    { value: 20 }, { value: 35 }, { value: 28 }, { value: 42 }, 
    { value: 38 }, { value: 55 }, { value: 48 }
  ];

  const heatmapData = [
    { hour: '00:00', mon: 10, tue: 12, wed: 8, thu: 15, fri: 20, sat: 25, sun: 18 },
    { hour: '04:00', mon: 5, tue: 8, wed: 6, thu: 10, fri: 15, sat: 22, sun: 16 },
    { hour: '08:00', mon: 45, tue: 50, wed: 48, thu: 52, fri: 55, sat: 30, sun: 25 },
    { hour: '12:00', mon: 65, tue: 70, wed: 68, thu: 72, fri: 75, sat: 60, sun: 55 },
    { hour: '16:00', mon: 80, tue: 85, wed: 82, thu: 88, fri: 90, sat: 70, sun: 65 },
    { hour: '20:00', mon: 50, tue: 55, wed: 52, thu: 58, fri: 75, sat: 85, sun: 80 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Data Visualization
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Chart components for dashboards, metrics, and observability with consistent styling.
        </p>
      </div>

      {/* KPI Metric Cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          KPI Metric Cards
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Key performance indicators with inline sparklines and trend indicators.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Metric Card 1 - Positive */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                Total Revenue
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-950/40 rounded-full">
                <ArrowUp className="w-3 h-3 text-emerald-600 dark:text-emerald-500" />
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  12.5%
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
              $45,231
            </div>
            <ResponsiveContainer width="100%" height={40}>
              <AreaChart data={sparklineData}>
                <Area type="monotone" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.2} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Metric Card 2 - Negative */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                Active Users
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-950/40 rounded-full">
                <ArrowDown className="w-3 h-3 text-red-600 dark:text-red-500" />
                <span className="text-xs font-semibold text-red-700 dark:text-red-400">
                  5.2%
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
              8,242
            </div>
            <ResponsiveContainer width="100%" height={40}>
              <AreaChart data={[...sparklineData].reverse()}>
                <Area type="monotone" dataKey="value" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Metric Card 3 - Positive */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                Conversion Rate
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-emerald-100 dark:bg-emerald-950/40 rounded-full">
                <ArrowUp className="w-3 h-3 text-emerald-600 dark:text-emerald-500" />
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  8.1%
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
              3.24%
            </div>
            <ResponsiveContainer width="100%" height={40}>
              <AreaChart data={sparklineData.map(d => ({ value: d.value * 0.8 }))}>
                <Area type="monotone" dataKey="value" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Metric Card 4 - Neutral */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                Avg. Session
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                <Activity className="w-3 h-3 text-zinc-600 dark:text-zinc-400" />
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  0.3%
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
              4m 32s
            </div>
            <ResponsiveContainer width="100%" height={40}>
              <AreaChart data={sparklineData.map(d => ({ value: d.value * 1.2 }))}>
                <Area type="monotone" dataKey="value" stroke="#71717a" fill="#71717a" fillOpacity={0.2} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Line Charts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Line Charts
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Time series data visualization for tracking trends and patterns.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="mb-6">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              Revenue & User Growth
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Monthly performance metrics comparison
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" opacity={0.1} />
              <XAxis 
                dataKey="name" 
                stroke="#71717a" 
                fontSize={12}
                tickLine={false}
              />
              <YAxis 
                stroke="#71717a" 
                fontSize={12}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '6px',
                  fontSize: '12px',
                }}
                labelStyle={{ color: '#e4e4e7' }}
              />
              <Legend 
                wrapperStyle={{
                  fontSize: '12px',
                  paddingTop: '20px',
                }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#6366f1" 
                strokeWidth={2}
                dot={{ fill: '#6366f1', r: 4 }}
                activeDot={{ r: 6 }}
                name="Revenue"
              />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ fill: '#10b981', r: 4 }}
                activeDot={{ r: 6 }}
                name="Users"
              />
              <Line 
                type="monotone" 
                dataKey="sessions" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: '#8b5cf6', r: 4 }}
                activeDot={{ r: 6 }}
                name="Sessions"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Charts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Bar Charts
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Comparative analysis and performance tracking across categories.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="mb-6">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              Product Performance vs Target
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Actual sales compared to quarterly targets
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" opacity={0.1} />
              <XAxis 
                dataKey="name" 
                stroke="#71717a" 
                fontSize={12}
                tickLine={false}
              />
              <YAxis 
                stroke="#71717a" 
                fontSize={12}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '6px',
                  fontSize: '12px',
                }}
                labelStyle={{ color: '#e4e4e7' }}
              />
              <Legend 
                wrapperStyle={{
                  fontSize: '12px',
                  paddingTop: '20px',
                }}
              />
              <Bar dataKey="sales" fill="#6366f1" radius={[4, 4, 0, 0]} name="Actual Sales" />
              <Bar dataKey="target" fill="#a5b4fc" radius={[4, 4, 0, 0]} name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Area Charts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Area Charts
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Stacked visualizations showing volume and cumulative trends.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="mb-6">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              Traffic Sources Over Time
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Stacked area showing contribution by source
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" opacity={0.1} />
              <XAxis 
                dataKey="name" 
                stroke="#71717a" 
                fontSize={12}
                tickLine={false}
              />
              <YAxis 
                stroke="#71717a" 
                fontSize={12}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '6px',
                  fontSize: '12px',
                }}
                labelStyle={{ color: '#e4e4e7' }}
              />
              <Legend 
                wrapperStyle={{
                  fontSize: '12px',
                  paddingTop: '20px',
                }}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stackId="1" 
                stroke="#6366f1" 
                fill="#6366f1" 
                fillOpacity={0.6}
                name="Revenue"
              />
              <Area 
                type="monotone" 
                dataKey="users" 
                stackId="1" 
                stroke="#10b981" 
                fill="#10b981" 
                fillOpacity={0.6}
                name="Users"
              />
              <Area 
                type="monotone" 
                dataKey="sessions" 
                stackId="1" 
                stroke="#8b5cf6" 
                fill="#8b5cf6" 
                fillOpacity={0.6}
                name="Sessions"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie/Donut Charts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Pie & Donut Charts
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Distribution and proportion visualizations for categorical data.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="mb-6">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                Device Distribution
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                User traffic by device type
              </p>
            </div>
            <div className="flex items-center gap-8">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={(entry) => `${entry.value}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#18181b',
                      border: '1px solid #3f3f46',
                      borderRadius: '6px',
                      fontSize: '12px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                      {item.name}
                    </span>
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
            <div className="mb-6">
              <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                Traffic Sources
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Visitor acquisition channels
              </p>
            </div>
            <div className="flex items-center gap-8">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#18181b',
                      border: '1px solid #3f3f46',
                      borderRadius: '6px',
                      fontSize: '12px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                      {item.name}
                    </span>
                    <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap for Observability */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Heatmap (Observability)
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Activity patterns and system load visualization across time periods.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6">
          <div className="mb-6">
            <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              Server Activity by Day & Hour
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Request volume heatmap showing peak usage times
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="flex gap-1 mb-2">
                <div className="w-16"></div>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="flex-1 text-center text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    {day}
                  </div>
                ))}
              </div>
              {heatmapData.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1 mb-1">
                  <div className="w-16 text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center">
                    {row.hour}
                  </div>
                  {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => {
                    const value = row[day as keyof typeof row] as number;
                    const intensity = value / 100;
                    return (
                      <div
                        key={day}
                        className="flex-1 h-12 rounded transition-all hover:ring-2 hover:ring-zinc-900 dark:hover:ring-zinc-50 cursor-pointer group relative"
                        style={{
                          backgroundColor: intensity > 0.7 
                            ? '#6366f1' 
                            : intensity > 0.4 
                            ? '#8b5cf6' 
                            : intensity > 0.2 
                            ? '#a5b4fc' 
                            : '#e0e7ff',
                          opacity: 0.3 + (intensity * 0.7),
                        }}
                        title={`${value} requests`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-50">
                            {value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Less</span>
                <div className="flex gap-1">
                  {[0.2, 0.4, 0.6, 0.8, 1].map((intensity, idx) => (
                    <div
                      key={idx}
                      className="w-4 h-4 rounded"
                      style={{
                        backgroundColor: '#6366f1',
                        opacity: 0.3 + (intensity * 0.7),
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">More</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Sparklines */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Sparklines
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Compact inline charts for quick metric visualization in tables and lists.
        </p>
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
                  Metric
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
                  Current
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
                  Change
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
                  Trend (7 days)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Page Views
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  24,583
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    +12.3%
                  </span>
                </td>
                <td className="px-6 py-4">
                  <ResponsiveContainer width={100} height={30}>
                    <AreaChart data={sparklineData}>
                      <Area type="monotone" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.3} strokeWidth={1.5} />
                    </AreaChart>
                  </ResponsiveContainer>
                </td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Bounce Rate
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  42.5%
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-700 dark:text-red-400">
                    <TrendingDown className="w-4 h-4" />
                    -3.2%
                  </span>
                </td>
                <td className="px-6 py-4">
                  <ResponsiveContainer width={100} height={30}>
                    <AreaChart data={[...sparklineData].reverse()}>
                      <Area type="monotone" dataKey="value" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} strokeWidth={1.5} />
                    </AreaChart>
                  </ResponsiveContainer>
                </td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Avg. Session
                </td>
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  4m 32s
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    +5.8%
                  </span>
                </td>
                <td className="px-6 py-4">
                  <ResponsiveContainer width={100} height={30}>
                    <AreaChart data={sparklineData.map(d => ({ value: d.value * 1.1 }))}>
                      <Area type="monotone" dataKey="value" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} strokeWidth={1.5} />
                    </AreaChart>
                  </ResponsiveContainer>
                </td>
              </tr>
            </tbody>
          </table>
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
                <span>Use consistent color palette across all charts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Include clear labels, legends, and tooltips</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Choose the right chart type for your data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Make charts responsive and mobile-friendly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use sparklines for quick metric comparisons</span>
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
                <span>Don't use 3D effects or unnecessary decorations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid using too many colors in a single chart</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't truncate Y-axis to mislead comparisons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid pie charts for more than 5-6 categories</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't overload dashboards with too many charts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
