import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from '../../components/application-ui/banner';
import { BANNER_VARIANT_OPTIONS } from '../../utils/story-variants';

const meta = {
  title: '2. Application UI/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Banner displays a prominent, full-width message bar typically placed at the top of a page or section. Use it for site-wide announcements, maintenance notices, or important alerts. Supports info, success, warning, and error variants with an optional dismiss button.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [...BANNER_VARIANT_OPTIONS],
      description: 'The semantic variant controlling the banner color scheme.',
      table: { category: 'Appearance' },
    },
    dismissible: {
      control: 'boolean',
      description: 'When true, renders a close button that allows the user to dismiss the banner.',
      table: { category: 'Behavior' },
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is an informational banner message.',
    variant: 'info',
  },
};

export const Warning: Story = {
  args: {
    children: 'This is a warning banner.',
    variant: 'warning',
    dismissible: true,
  },
};

export const Error: Story = {
  args: {
    children: 'An error occurred.',
    variant: 'error',
    dismissible: true,
  },
};
