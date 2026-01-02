import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Input } from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        inputSize: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
        type: {
            control: 'select',
            options: ['text', 'password', 'email', 'number'],
        }
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text here...',
    },
};

export const WithLabelAndDescription: Story = {
    render: (args) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
            <Input {...args} type="email" id="email" placeholder="Email" />
            <p className="text-[0.8rem] text-[var(--muted-foreground)]">Enter your email address.</p>
        </div>
    ),
    args: {
    }
}

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled input',
        disabled: true,
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div className="flex flex-col gap-4 w-[300px]">
            <Input {...args} inputSize="sm" placeholder="Small Input" />
            <Input {...args} inputSize="md" placeholder="Medium Input" />
            <Input {...args} inputSize="lg" placeholder="Large Input" />
        </div>
    ),
};
