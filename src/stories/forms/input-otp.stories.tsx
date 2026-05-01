import type { Meta, StoryObj } from '@storybook/react';
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/forms/input-otp';

const meta = {
  title: '4. Forms/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'InputOTP renders a series of individual digit/character input slots for one-time password or verification code entry. Use it for authentication flows, two-factor verification, or any fixed-length code input. Supports configurable length, grouped slots with separators, and automatic focus advancement.',
      },
    },
  },
  argTypes: {
    maxLength: {
      control: 'number',
      description: 'The total number of character slots in the OTP input.',
      table: { category: 'Behavior' },
    },
  },
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};
