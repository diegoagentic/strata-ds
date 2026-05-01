import type { Meta, StoryObj } from '@storybook/react';
import { OrderTracking, ProgressTracker } from '../../components/application-ui/tracking';
import type { TrackingStep } from '../../components/application-ui/tracking';

const meta = {
  title: '2. Application UI/Tracking',
  component: OrderTracking,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tracking provides visual step-by-step progress indicators for multi-stage workflows. OrderTracking displays a vertical timeline with complete, current, and upcoming step states along with optional descriptions and dates. ProgressTracker renders a horizontal bar with dot indicators showing progress across numbered steps.',
      },
    },
  },
  argTypes: {
    steps: {
      description: 'Array of step objects defining the tracking timeline. Each step has an id, name, status (complete/current/upcoming), and optional description and date.',
      table: { category: 'Content' },
    },
    className: {
      description: 'Additional CSS classes to apply to the tracking container.',
      control: 'text',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof OrderTracking>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps: TrackingStep[] = [
  { id: '1', name: 'Order placed', description: 'Your order has been confirmed', status: 'complete', date: 'Mar 1' },
  { id: '2', name: 'Processing', description: 'Preparing your order', status: 'complete', date: 'Mar 2' },
  { id: '3', name: 'Shipped', description: 'On its way to you', status: 'current', date: 'Mar 3' },
  { id: '4', name: 'Delivered', status: 'upcoming' },
];

export const Default: Story = {
  args: {
    steps,
  },
};

export const ProgressTrackerStory: StoryObj = {
  name: 'Progress Tracker',
  render: () => (
    <div className="w-[400px] py-8">
      <ProgressTracker currentStep={2} totalSteps={5} />
    </div>
  ),
};
