import { useState, useEffect } from 'react';
import { Moon, Sun, ChevronRight } from 'lucide-react';
import { OverviewView } from './components/OverviewView';
import { APIViewImproved } from './components/APIViewImproved';
import { MCPView } from './components/MCPView';
import { ArchitectureAnalysisView } from './components/ArchitectureAnalysisView';
import { ColorsView } from './components/ColorsView';
import { TypographyView } from './components/TypographyView';
import { DataTablesView } from './components/DataTablesView';
import { PageHeadingsView } from './components/PageHeadingsView';
import { FileUploadView } from './components/FileUploadView';
import { RoadmapView } from './components/RoadmapView';
import { SpacingView } from './components/SpacingView';
import { StatsView } from './components/StatsView';
import { BordersView } from './components/BordersView';
import { ShadowsView } from './components/ShadowsView';
import { ButtonsView } from './components/ButtonsView';
import { BadgesView } from './components/BadgesView';
import { AvatarsView } from './components/AvatarsView';
import { DividersView } from './components/DividersView';
import { NavbarsView } from './components/NavbarsView';
import { AlertsView } from './components/AlertsView';
import { StackedListsView } from './components/StackedListsView';
import { AppShellsView } from './components/AppShellsView';
import { ActionPanelsView } from './components/ActionPanelsView';
import { ModalsView } from './components/ModalsView';
import { SlideOversView } from './components/SlideOversView';
import { FeedsView } from './components/FeedsView';
import { DescriptionsView } from './components/DescriptionsView';
import { FormLayoutsView } from './components/FormLayoutsView';
import { InputGroupsView } from './components/InputGroupsView';
import { SelectsView } from './components/SelectsView';
import { BreadcrumbsView } from './components/BreadcrumbsView';
import { DropdownsView } from './components/DropdownsView';
import { DragDropView } from './components/DragDropView';
import { DataVisualizationView } from './components/DataVisualizationView';
import { FigmaExportGuide } from './components/FigmaExportGuide';
import { AdminPanel } from './components/AdminPanel';

type ViewType = 
  | 'overview'
  | 'api'
  | 'mcp'
  | 'admin'
  | 'roadmap'
  | 'colors'
  | 'spacing'
  | 'typography'
  | 'borders'
  | 'shadows'
  | 'app-shells'
  | 'page-headings'
  | 'navbars'
  | 'buttons'
  | 'badges'
  | 'avatars'
  | 'dividers'
  | 'action-panels'
  | 'data-tables'
  | 'stacked-lists'
  | 'feeds'
  | 'stats'
  | 'descriptions'
  | 'form-layouts'
  | 'input-groups'
  | 'selects'
  | 'file-upload'
  | 'modals'
  | 'slide-overs'
  | 'alerts'
  | 'breadcrumbs'
  | 'dropdowns'
  | 'drag-drop'
  | 'data-visualization'
  | 'figma-export-guide';

interface NavItem {
  id: ViewType;
  label: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('overview');
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navSections: NavSection[] = [
    {
      title: 'Developer Tools',
      items: [
        { id: 'api', label: 'REST API' },
        { id: 'mcp', label: 'Model Context Protocol' },
      ],
    },
    {
      title: 'Foundations',
      items: [
        { id: 'roadmap', label: 'System Overview' },
        { id: 'colors', label: 'Color & Transparency' },
        { id: 'spacing', label: 'Spacing/Grid' },
        { id: 'typography', label: 'Typography' },
        { id: 'borders', label: 'Borders & Radius' },
        { id: 'shadows', label: 'Elevation & Shadows' },
      ],
    },
    {
      title: 'Application UI',
      items: [
        { id: 'buttons', label: 'Buttons' },
        { id: 'badges', label: 'Badges' },
        { id: 'avatars', label: 'Avatars' },
        { id: 'dividers', label: 'Dividers' },
        { id: 'app-shells', label: 'App Shells' },
        { id: 'page-headings', label: 'Page Headings' },
        { id: 'navbars', label: 'Navbars' },
        { id: 'action-panels', label: 'Action Panels' },
      ],
    },
    {
      title: 'Lists & Data',
      items: [
        { id: 'data-tables', label: 'Data Tables' },
        { id: 'stacked-lists', label: 'Stacked Lists' },
        { id: 'feeds', label: 'Feeds' },
        { id: 'stats', label: 'Stats' },
        { id: 'descriptions', label: 'Descriptions' },
      ],
    },
    {
      title: 'Forms',
      items: [
        { id: 'form-layouts', label: 'Layouts' },
        { id: 'input-groups', label: 'Input Groups' },
        { id: 'selects', label: 'Selects' },
        { id: 'file-upload', label: 'File Upload (OCR)' },
      ],
    },
    {
      title: 'Overlays',
      items: [
        { id: 'modals', label: 'Modals' },
        { id: 'slide-overs', label: 'Slide-overs' },
        { id: 'alerts', label: 'Alerts' },
      ],
    },
    {
      title: 'Navigation',
      items: [
        { id: 'breadcrumbs', label: 'Breadcrumbs' },
        { id: 'dropdowns', label: 'Dropdowns' },
      ],
    },
    {
      title: 'Interactions',
      items: [
        { id: 'drag-drop', label: 'Drag & Drop' },
      ],
    },
    {
      title: 'Data Visualization',
      items: [
        { id: 'data-visualization', label: 'Data Visualization' },
      ],
    },
    {
      title: 'Export',
      items: [
        { id: 'figma-export-guide', label: 'Figma Export Guide' },
      ],
    },
    {
      title: 'Admin',
      items: [
        { id: 'admin', label: 'Admin Panel' },
      ],
    },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'overview':
        return <OverviewView />;
      case 'api':
        return <APIViewImproved />;
      case 'mcp':
        return <MCPView />;
      case 'colors':
        return <ColorsView />;
      case 'typography':
        return <TypographyView />;
      case 'data-tables':
        return <DataTablesView />;
      case 'page-headings':
        return <PageHeadingsView />;
      case 'file-upload':
        return <FileUploadView />;
      case 'roadmap':
        return <RoadmapView />;
      case 'spacing':
        return <SpacingView />;
      case 'stats':
        return <StatsView />;
      case 'borders':
        return <BordersView />;
      case 'shadows':
        return <ShadowsView />;
      case 'buttons':
        return <ButtonsView />;
      case 'badges':
        return <BadgesView />;
      case 'avatars':
        return <AvatarsView />;
      case 'dividers':
        return <DividersView />;
      case 'navbars':
        return <NavbarsView />;
      case 'alerts':
        return <AlertsView />;
      case 'stacked-lists':
        return <StackedListsView />;
      case 'app-shells':
        return <AppShellsView />;
      case 'action-panels':
        return <ActionPanelsView />;
      case 'breadcrumbs':
        return <BreadcrumbsView />;
      case 'dropdowns':
        return <DropdownsView />;
      case 'drag-drop':
        return <DragDropView />;
      case 'modals':
        return <ModalsView />;
      case 'slide-overs':
        return <SlideOversView />;
      case 'feeds':
        return <FeedsView />;
      case 'descriptions':
        return <DescriptionsView />;
      case 'form-layouts':
        return <FormLayoutsView />;
      case 'input-groups':
        return <InputGroupsView />;
      case 'selects':
        return <SelectsView />;
      case 'data-visualization':
        return <DataVisualizationView />;
      case 'figma-export-guide':
        return <FigmaExportGuide />;
      case 'admin':
        return <AdminPanel />;
      default:
        return (
          <div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              {currentView.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400">
              Component documentation coming soon...
            </p>
            <div className="mt-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-12 text-center">
              <div className="text-6xl mb-4">🚧</div>
              <p className="text-zinc-500 dark:text-zinc-400">
                This section is under construction
              </p>
            </div>
          </div>
        );
    }
  };

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <aside className="w-[280px] bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col fixed h-full">
        {/* Logo Header */}
        <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-zinc-800 dark:bg-zinc-700 rounded-md flex items-center justify-center">
              <span className="text-zinc-50 font-bold text-lg">ST</span>
            </div>
            <div>
              <div className="font-bold text-zinc-900 dark:text-zinc-50">
                Strata v1.0
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                White Label DS
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {/* Overview */}
          <div className="mb-6">
            <button
              onClick={() => setCurrentView('overview')}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-semibold transition-colors relative ${
                currentView === 'overview'
                  ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-zinc-800 dark:before:bg-zinc-50 before:rounded-r'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-50'
              }`}
            >
              Overview
            </button>
          </div>

          {/* Nav Sections */}
          {navSections.map((section, idx) => (
            <div key={idx} className="mb-6">
              <div className="px-3 mb-2 text-xs uppercase tracking-wider font-bold text-zinc-500 dark:text-zinc-400">
                {section.title}
              </div>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-semibold transition-colors relative ${
                      currentView === item.id
                        ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-zinc-800 dark:before:bg-zinc-50 before:rounded-r'
                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Theme Toggle Footer */}
        <div className="px-3 py-4 border-t border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              showToast();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-md text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
          >
            {darkMode ? (
              <>
                <Sun className="w-4 h-4" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" />
                Dark Mode
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[280px] overflow-y-auto">
        <div className="max-w-[1280px] mx-auto p-12">
          {renderView()}
        </div>
      </main>

      {/* Toast Notification */}
      {toastVisible && (
        <div className="fixed bottom-6 right-6 bg-zinc-900 dark:bg-zinc-800 text-zinc-50 rounded-md shadow-lg p-4 flex items-center gap-3 border border-zinc-700">
          <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="text-sm font-semibold">Theme updated successfully</span>
        </div>
      )}
    </div>
  );
}

export default App;