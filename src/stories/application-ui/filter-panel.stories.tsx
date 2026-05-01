import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDown } from 'lucide-react';
import {
  FilterPanel,
  FilterPanelHeader,
  FilterPanelHeaderTitle,
  FilterPanelOption,
  FilterPanelSection,
  FilterPanelSectionContent,
  FilterPanelSectionTrigger,
} from '@/components/application-ui/filter-panel';
import { Checkbox } from '@/components/forms/checkbox';

const meta = {
  title: '2. Application UI/FilterPanel',
  component: FilterPanel,
  tags: ['autodocs'],
} satisfies Meta<typeof FilterPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sidebar: Story = {
  args: { mode: 'sidebar' },
  render: (args) => (
    <FilterPanel {...args}>
      <FilterPanelHeader>
        <FilterPanelHeaderTitle>Filters</FilterPanelHeaderTitle>
      </FilterPanelHeader>

      <FilterPanelSection>
        <FilterPanelSectionTrigger data-state="open">
          Status
          <ChevronDown className="size-4 transition-transform" />
        </FilterPanelSectionTrigger>
        <FilterPanelSectionContent>
          <FilterPanelOption>
            <Checkbox id="f-status-open" />
            <label htmlFor="f-status-open" className="text-sm">
              Open
            </label>
          </FilterPanelOption>
          <FilterPanelOption>
            <Checkbox id="f-status-closed" />
            <label htmlFor="f-status-closed" className="text-sm">
              Closed
            </label>
          </FilterPanelOption>
        </FilterPanelSectionContent>
      </FilterPanelSection>
    </FilterPanel>
  ),
};

export const Sheet: Story = {
  args: { mode: 'sheet' },
  render: Sidebar.render,
};
