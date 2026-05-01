import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/application-ui/avatar';
import { AVATAR_SIZE_OPTIONS } from '../../utils/story-variants';

const meta = {
  title: '2. Application UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Avatar renders a user profile image with an automatic fallback to initials when the image is unavailable. Use it to represent users or entities throughout the UI. Supports multiple sizes (xs through 2xl) and fallback variants including default, muted, and gradient styles.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [...AVATAR_SIZE_OPTIONS],
      description: 'Controls the diameter of the avatar.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="User avatar"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback variant="default">AB</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback variant="muted">CD</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarFallback variant="gradient">EF</AvatarFallback>
      </Avatar>
    </div>
  ),
};
