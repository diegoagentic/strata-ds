import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';
import { Bold, Italic, Underline } from 'lucide-react';

const meta = {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toolbar: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <span className="text-sm text-gray-500">Toolbar Group</span>
            <ButtonGroup>
                <Button variant="primary">Save</Button>
                <Button variant="primary">Preview</Button>
                <Button variant="primary">Publish</Button>
            </ButtonGroup>
        </div>
    )
};

export const Pagination: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <span className="text-sm text-gray-500">Pagination/Select Group</span>
            <ButtonGroup>
                <Button variant="outline">Day</Button>
                <Button variant="outline">Week</Button>
                <Button variant="outline">Month</Button>
                <Button variant="primary">Year</Button>
            </ButtonGroup>
        </div>
    )
};

export const EditorToolbar: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <span className="text-sm text-gray-500">Icon Toolbar</span>
            <ButtonGroup>
                <Button variant="outline" size="icon"><Bold className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Italic className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Underline className="h-4 w-4" /></Button>
            </ButtonGroup>
        </div>
    )
};
