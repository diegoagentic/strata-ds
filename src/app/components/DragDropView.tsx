import { Check, X, GripVertical, Plus, Trash2, Archive, Clock } from 'lucide-react';
import { useState } from 'react';

export function DragDropView() {
  const [sortableItems, setSortableItems] = useState([
    { id: 1, title: 'Homepage redesign', priority: 'High' },
    { id: 2, title: 'Mobile app updates', priority: 'Medium' },
    { id: 3, title: 'Blog post creation', priority: 'Low' },
    { id: 4, title: 'Analytics dashboard', priority: 'High' },
  ]);

  const [kanbanBoard] = useState({
    todo: [
      { id: 1, title: 'Design new landing page', assignee: 'Sarah' },
      { id: 2, title: 'Update brand guidelines', assignee: 'Mike' },
    ],
    inProgress: [
      { id: 3, title: 'Build component library', assignee: 'Emma' },
    ],
    done: [
      { id: 4, title: 'User research interviews', assignee: 'Alex' },
      { id: 5, title: 'Prototype v1', assignee: 'Sarah' },
    ],
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Drag & Drop
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Interactive drag and drop components for reordering, organizing, and moving content.
        </p>
      </div>

      {/* Sortable List */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Sortable List
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Reorderable list items with drag handles for manual sorting.
        </p>
        
        <div className="max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {sortableItems.map((item) => (
              <div
                key={item.id}
                className="px-4 py-3 flex items-center gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-move group"
              >
                <GripVertical className="w-5 h-5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Priority: {item.priority}
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  item.priority === 'High' 
                    ? 'bg-red-100 dark:bg-red-950/40 text-red-800 dark:text-red-400'
                    : item.priority === 'Medium'
                    ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400'
                    : 'bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400'
                }`}>
                  {item.priority}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
          💡 Drag items by the handle icon to reorder the list
        </p>
      </div>

      {/* Kanban Board */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Kanban Board
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Multi-column board for dragging cards between different states.
        </p>
        
        <div className="grid grid-cols-3 gap-4">
          {/* To Do Column */}
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
            <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">To Do</h3>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded-full">
                  {kanbanBoard.todo.length}
                </span>
              </div>
            </div>
            <div className="p-3 space-y-2 min-h-[300px]">
              {kanbanBoard.todo.map((card) => (
                <div
                  key={card.id}
                  className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md p-3 cursor-move hover:shadow-md transition-shadow"
                >
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    {card.title}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">
                      {card.assignee}
                    </span>
                  </div>
                </div>
              ))}
              <button className="w-full px-3 py-2 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Add Card
              </button>
            </div>
          </div>

          {/* In Progress Column */}
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
            <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">In Progress</h3>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded-full">
                  {kanbanBoard.inProgress.length}
                </span>
              </div>
            </div>
            <div className="p-3 space-y-2 min-h-[300px]">
              {kanbanBoard.inProgress.map((card) => (
                <div
                  key={card.id}
                  className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md p-3 cursor-move hover:shadow-md transition-shadow"
                >
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    {card.title}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">
                      {card.assignee}
                    </span>
                  </div>
                </div>
              ))}
              <button className="w-full px-3 py-2 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Add Card
              </button>
            </div>
          </div>

          {/* Done Column */}
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
            <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">Done</h3>
                <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded-full">
                  {kanbanBoard.done.length}
                </span>
              </div>
            </div>
            <div className="p-3 space-y-2 min-h-[300px]">
              {kanbanBoard.done.map((card) => (
                <div
                  key={card.id}
                  className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md p-3 cursor-move hover:shadow-md transition-shadow"
                >
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    {card.title}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                    <span className="text-xs text-zinc-600 dark:text-zinc-400">
                      {card.assignee}
                    </span>
                  </div>
                </div>
              ))}
              <button className="w-full px-3 py-2 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Add Card
              </button>
            </div>
          </div>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
          💡 Drag cards between columns to change their status
        </p>
      </div>

      {/* File Drop Zone */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          File Drop Zone
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Drag and drop area for uploading files with visual feedback.
        </p>
        
        <div className="max-w-2xl">
          <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-md p-12 text-center hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all cursor-pointer group">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
              <svg className="w-8 h-8 text-zinc-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-1">
              Drop files here or click to upload
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              PNG, JPG, PDF up to 10MB
            </p>
          </div>

          {/* Files preview */}
          <div className="mt-4 space-y-2">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/40 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 truncate">
                  design-mockup-final.png
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  2.4 MB
                </div>
              </div>
              <button className="p-2 text-zinc-400 dark:text-zinc-500 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950/40 rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 truncate">
                  project-specs.pdf
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  1.8 MB
                </div>
              </div>
              <button className="p-2 text-zinc-400 dark:text-zinc-500 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drag to Actions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Drag to Actions
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Drag items to action zones for bulk operations like delete or archive.
        </p>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Items to drag */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
              Email Inbox
            </h3>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md divide-y divide-zinc-200 dark:divide-zinc-800">
              {[
                { id: 1, sender: 'Sarah Chen', subject: 'Project update' },
                { id: 2, sender: 'Marketing Team', subject: 'Newsletter draft' },
                { id: 3, sender: 'Alex Park', subject: 'Meeting notes' },
              ].map((email) => (
                <div
                  key={email.id}
                  className="px-4 py-3 cursor-move hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50 text-sm">
                    {email.sender}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    {email.subject}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action zones */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
              Drop Zones
            </h3>
            
            <div className="border-2 border-dashed border-red-300 dark:border-red-800 rounded-md p-6 text-center hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer">
              <Trash2 className="w-6 h-6 text-red-600 dark:text-red-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-red-900 dark:text-red-100">
                Delete
              </div>
              <div className="text-xs text-red-700 dark:text-red-300 mt-1">
                Drop here to delete
              </div>
            </div>

            <div className="border-2 border-dashed border-blue-300 dark:border-blue-800 rounded-md p-6 text-center hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors cursor-pointer">
              <Archive className="w-6 h-6 text-blue-600 dark:text-blue-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                Archive
              </div>
              <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                Drop here to archive
              </div>
            </div>

            <div className="border-2 border-dashed border-amber-300 dark:border-amber-800 rounded-md p-6 text-center hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors cursor-pointer">
              <Clock className="w-6 h-6 text-amber-600 dark:text-amber-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                Snooze
              </div>
              <div className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                Drop here to snooze
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
          💡 Drag emails from the inbox to action zones to perform bulk operations
        </p>
      </div>

      {/* Nested Sortables */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Nested Sortable Lists
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Hierarchical lists with draggable parent and child items.
        </p>
        
        <div className="max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {/* Parent item 1 */}
            <div>
              <div className="px-4 py-3 flex items-center gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-move group">
                <GripVertical className="w-5 h-5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 flex-shrink-0" />
                <div className="flex-1 font-semibold text-zinc-900 dark:text-zinc-50">
                  Design System
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">3 items</span>
              </div>
              <div className="pl-12 bg-zinc-50 dark:bg-zinc-950/50 divide-y divide-zinc-200 dark:divide-zinc-800">
                <div className="px-4 py-2 flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-move group">
                  <GripVertical className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 flex-shrink-0" />
                  <div className="flex-1 text-sm text-zinc-700 dark:text-zinc-300">
                    Colors & Typography
                  </div>
                </div>
                <div className="px-4 py-2 flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-move group">
                  <GripVertical className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 flex-shrink-0" />
                  <div className="flex-1 text-sm text-zinc-700 dark:text-zinc-300">
                    Components Library
                  </div>
                </div>
                <div className="px-4 py-2 flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-move group">
                  <GripVertical className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 flex-shrink-0" />
                  <div className="flex-1 text-sm text-zinc-700 dark:text-zinc-300">
                    Documentation
                  </div>
                </div>
              </div>
            </div>

            {/* Parent item 2 */}
            <div>
              <div className="px-4 py-3 flex items-center gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-move group">
                <GripVertical className="w-5 h-5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 flex-shrink-0" />
                <div className="flex-1 font-semibold text-zinc-900 dark:text-zinc-50">
                  Marketing Materials
                </div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">2 items</span>
              </div>
              <div className="pl-12 bg-zinc-50 dark:bg-zinc-950/50 divide-y divide-zinc-200 dark:divide-zinc-800">
                <div className="px-4 py-2 flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-move group">
                  <GripVertical className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 flex-shrink-0" />
                  <div className="flex-1 text-sm text-zinc-700 dark:text-zinc-300">
                    Brand Assets
                  </div>
                </div>
                <div className="px-4 py-2 flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-move group">
                  <GripVertical className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 flex-shrink-0" />
                  <div className="flex-1 text-sm text-zinc-700 dark:text-zinc-300">
                    Social Media Templates
                  </div>
                </div>
              </div>
            </div>

            {/* Parent item 3 */}
            <div className="px-4 py-3 flex items-center gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-move group">
              <GripVertical className="w-5 h-5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 flex-shrink-0" />
              <div className="flex-1 font-semibold text-zinc-900 dark:text-zinc-50">
                Development Resources
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">0 items</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
          💡 Drag parent items to reorder sections, or child items within their section
        </p>
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
                <span>Provide clear visual feedback during drag operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Use drag handles for better control and discoverability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Highlight valid drop zones when dragging items</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Show preview or ghost element during drag</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">•</span>
                <span>Provide alternative methods for touch/mobile devices</span>
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
                <span>Don't make entire large areas draggable (use handles)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid drag interactions for critical actions without confirmation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't allow dragging to invalid or destructive zones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Avoid nested drag operations more than 2 levels deep</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                <span>Don't forget keyboard accessibility alternatives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
