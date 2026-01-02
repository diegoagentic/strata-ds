import { Search, Filter, Plus } from 'lucide-react';

export function DataTablesView() {
  const tableData = [
    {
      id: 1,
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      status: 'Active',
      role: 'Member',
    },
    {
      id: 2,
      name: 'Courtney Henry',
      title: 'Designer',
      status: 'Active',
      role: 'Admin',
    },
    {
      id: 3,
      name: 'Tom Cook',
      title: 'Director of Product',
      status: 'Offline',
      role: 'Member',
    },
    {
      id: 4,
      name: 'Whitney Francis',
      title: 'Copywriter',
      status: 'Active',
      role: 'Member',
    },
    {
      id: 5,
      name: 'Leonard Krasner',
      title: 'Senior Designer',
      status: 'Active',
      role: 'Owner',
    },
    {
      id: 6,
      name: 'Floyd Miles',
      title: 'Principal Designer',
      status: 'Offline',
      role: 'Member',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Data Tables
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          High-density table patterns with tight spacing for enterprise data display.
        </p>
      </div>

      {/* Table Card */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-sm">
        {/* Header Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search members..."
                className="pl-9 pr-4 py-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-sm text-zinc-900 dark:text-zinc-50 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              />
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-md text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
            <Plus className="w-4 h-4" />
            Add Asset
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-50 dark:bg-zinc-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Role
                </th>
                <th className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {tableData.map((row, index) => (
                <tr
                  key={row.id}
                  className={`hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors ${
                    index % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-50/50 dark:bg-zinc-900/50'
                  }`}
                >
                  <td className="px-6 py-3 whitespace-nowrap text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {row.name}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
                    {row.title}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        row.status === 'Active'
                          ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
                    {row.role}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-right text-sm">
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Showing <span className="font-semibold text-zinc-900 dark:text-zinc-50">6</span> of{' '}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">24</span> results
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-zinc-300 dark:border-zinc-700 rounded text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 border border-zinc-300 dark:border-zinc-700 rounded text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
