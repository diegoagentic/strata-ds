import { Plus, Settings, Download, Trash } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg', 'xl', 'icon'],
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost Button',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Destructive Button',
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div className="flex items-center gap-4">
            <Button {...args} size="sm">Small</Button>
            <Button {...args} size="md">Medium</Button>
            <Button {...args} size="lg">Large</Button>
            <Button {...args} size="xl">Extra Large</Button>
        </div>
    ),
    args: {
        variant: 'primary',
    },
};

export const IconButtons: Story = {
    render: () => (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <span className="text-sm font-medium text-gray-500">Primary</span>
                <div className="flex gap-2">
                    <Button size="icon" variant="primary"><Plus className="h-4 w-4" /></Button>
                    <Button size="icon" variant="primary"><Settings className="h-4 w-4" /></Button>
                    <Button size="icon" variant="primary"><Download className="h-4 w-4" /></Button>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-sm font-medium text-gray-500">Ghost</span>
                <div className="flex gap-2">
                    <Button size="icon" variant="ghost"><Plus className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost"><Settings className="h-4 w-4" /></Button>
                    <Button size="icon" variant="ghost"><Download className="h-4 w-4" /></Button>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-sm font-medium text-gray-500">Destructive</span>
                <div className="flex gap-2">
                    <Button size="icon" variant="destructive"><Trash className="h-4 w-4" /></Button>
                    <Button size="icon" variant="destructive"><Trash className="h-4 w-4" /></Button>
                </div>
            </div>
        </div>
    )
};
