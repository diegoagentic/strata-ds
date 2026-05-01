export type Priority = 'high' | 'medium' | 'low';
export type NotificationType =
  | 'discrepancy'
  | 'invoice'
  | 'payment'
  | 'approval'
  | 'system'
  | 'shipping'
  | 'announcement'
  | 'live_chat';

export interface Action {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

export type ActionCenterActionKey = string;

export interface ActionCenterActionConfig {
  label?: string;
}

export type ActionCenterActionConfigMap = Partial<
  Record<ActionCenterActionKey, ActionCenterActionConfig>
>;

export interface ActionCenterActionExecution {
  openView?: 'chat';
}

export interface Notification {
  id: string;
  type: NotificationType;
  priority: Priority;
  title: string;
  message: string;
  meta: string;
  timestamp: string;
  unread: boolean;
  actions: Action[];
}

export type ActionCenterDataState =
  | {
      status: 'loading';
    }
  | {
      status: 'error';
      error: string;
    }
  | {
      status: 'success';
      items: Notification[];
    };

export interface ActionCenterActionPayload {
  notification: Notification;
  action: Action;
  actionKey: ActionCenterActionKey;
}

export type ActionCenterActionHandler = (
  payload: ActionCenterActionPayload
) => ActionCenterActionExecution | void;

export function normalizeActionCenterActionKey(
  label: string
): ActionCenterActionKey {
  return label
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export interface NotificationTab {
  id: string;
  label: string;
  count: number;
  icon: React.ElementType;
  colorTheme: {
    activeBg: string;
    activeText: string;
    activeBorder: string;
    badgeBg: string;
    badgeText: string;
  };
  filter: (n: Notification) => boolean;
}
