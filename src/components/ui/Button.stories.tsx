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
            options: ['sm', 'md', 'lg', 'xl'],
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
