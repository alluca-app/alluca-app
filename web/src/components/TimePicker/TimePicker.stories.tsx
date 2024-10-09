// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import TimePicker from './TimePicker'

const meta: Meta<typeof TimePicker> = {
  component: TimePicker,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TimePicker>

export const Primary: Story = {}
