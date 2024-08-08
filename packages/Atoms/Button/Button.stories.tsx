import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'outline', 'ghost'],
      control: { type: 'select' },
    },
    theme: {
      options: ['default', 'secondary', 'destructive', 'accept', 'normal'],
      control: { type: 'select' },
    },
    size: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    theme: 'default',
    icon: false,
    children: 'Button',
    disabled: false,
  },
}
