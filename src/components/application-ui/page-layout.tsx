import { useNavigate } from 'react-router-dom';
import { Layout } from './layout';
import type { ReactNode } from 'react';
import { ActionCenterActionConfigMap, ActionCenterActionHandler, ActionCenterDataState } from './action-center/types';


export interface NavItem {
  label: string;
  icon: ReactNode;
  path: string;
}

export interface PageLayoutProps {
  heading: ReactNode;
  subheading?: ReactNode;
  headerActions?: ReactNode;
  navItems?: NavItem[];
  /** Current active nav item label for sidebar highlighting. When not provided, derived from route. */
  activeTab?: string;
  logoLight?: string;
  logoDark?: string;
  headingClassName?: string;
  children: ReactNode;
  onLogout?: () => void;
  onNavigateToWorkspace?: () => void;
  actionCenterActionConfigMap?: ActionCenterActionConfigMap;
  onActionCenterActionExecute?: ActionCenterActionHandler;
  actionCenterDataState?: ActionCenterDataState;
  /** Passed through to Layout / ExperiencesNavbar. */
  hideActionCenter?: boolean;
  /** Passed through to Layout / ExperiencesNavbar. */
  hideQuickActions?: boolean;
}

export function PageLayout({
  heading,
  subheading,
  headerActions,
  navItems = [],
  activeTab,
  logoLight,
  logoDark,
  headingClassName,
  children,
  onLogout = () => {
    /* default no-op */
  },
  onNavigateToWorkspace = () => {
    /* default no-op */
  },
  actionCenterActionConfigMap,
  onActionCenterActionExecute,
  actionCenterDataState,
  hideActionCenter = false,
  hideQuickActions = false,
}: PageLayoutProps) {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    // If the input is a path, navigate directly
    if (page.startsWith('/')) {
      navigate(page);
      return;
    }

    // Find the item by label
    const item = navItems.find((nav) => nav.label === page);
    if (item) {
      navigate(item.path);
    } else {
      console.warn(`Navigation item not found for label: ${page}`);
    }
  };

  return (
    <Layout
      heading={heading}
      headingClassName={headingClassName}
      subheading={subheading}
      headerActions={headerActions}
      navItems={navItems.map((item) => ({
        label: item.label,
        icon: item.icon,
        path: item.path,
      }))}
      activeTab={activeTab}
      onLogout={onLogout}
      onNavigateToWorkspace={onNavigateToWorkspace}
      onNavigate={handleNavigation}
      actionCenterActionConfigMap={actionCenterActionConfigMap}
      onActionCenterActionExecute={onActionCenterActionExecute}
      actionCenterDataState={actionCenterDataState}
      logoLight={logoLight}
      logoDark={logoDark}
      hideActionCenter={hideActionCenter}
      hideQuickActions={hideQuickActions}
    >
      {children}
    </Layout>
  );
}
