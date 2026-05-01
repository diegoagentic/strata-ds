import type { Meta, StoryObj } from '@storybook/react';
import { AlertTriangle, CheckCircle2, Info, ShieldAlert } from 'lucide-react';
import { InfoBanner } from '@/components/application-ui/info-banner';

const meta = {
  title: '2. Application UI/InfoBanner',
  component: InfoBanner,
  tags: ['autodocs'],
  args: {
    title: 'Order sync status',
    description: 'Last successful sync was 2 minutes ago.',
    dismissible: true,
  },
} satisfies Meta<typeof InfoBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoTone: Story = {
  args: { tone: 'info', icon: <Info className="size-4" /> },
};

export const SuccessTone: Story = {
  args: { tone: 'success', icon: <CheckCircle2 className="size-4" />, title: 'All changes saved' },
};

export const WarningTone: Story = {
  args: { tone: 'warning', icon: <AlertTriangle className="size-4" />, title: 'Validation warning' },
};

export const DangerTone: Story = {
  args: { tone: 'danger', icon: <ShieldAlert className="size-4" />, title: 'Action blocked' },
};
