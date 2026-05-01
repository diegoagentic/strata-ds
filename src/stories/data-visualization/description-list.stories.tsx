import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionList, DescriptionTerm, DescriptionDetails } from '../../components/data-visualization/description-list';

const meta = {
  title: '3. Data Visualization/DescriptionList',
  component: DescriptionList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'DescriptionList displays key-value pairs in a structured, readable layout using semantic HTML dl/dt/dd elements. Use it for profile details, order summaries, or any structured metadata. It features responsive grid alignment and automatic dividers between rows.',
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional CSS classes to apply to the description list container.',
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[500px]">
      <DescriptionList>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
          <DescriptionTerm>Full Name</DescriptionTerm>
          <DescriptionDetails>Margot Foster</DescriptionDetails>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
          <DescriptionTerm>Email</DescriptionTerm>
          <DescriptionDetails>margot@example.com</DescriptionDetails>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
          <DescriptionTerm>Role</DescriptionTerm>
          <DescriptionDetails>Backend Developer</DescriptionDetails>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
          <DescriptionTerm>Salary</DescriptionTerm>
          <DescriptionDetails>$120,000</DescriptionDetails>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
          <DescriptionTerm>About</DescriptionTerm>
          <DescriptionDetails>
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
            cillum culpa consequat.
          </DescriptionDetails>
        </div>
      </DescriptionList>
    </div>
  ),
};

export const TwoItems: Story = {
  name: 'Compact (Two Items)',
  render: () => (
    <div className="w-[500px]">
      <DescriptionList>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
          <DescriptionTerm>Status</DescriptionTerm>
          <DescriptionDetails>Active</DescriptionDetails>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
          <DescriptionTerm>Last Login</DescriptionTerm>
          <DescriptionDetails>March 12, 2026</DescriptionDetails>
        </div>
      </DescriptionList>
    </div>
  ),
};
