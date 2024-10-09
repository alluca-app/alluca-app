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

import TempAgencyWorker from './TempAgencyWorker'

const meta: Meta<typeof TempAgencyWorker> = {
  component: TempAgencyWorker,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TempAgencyWorker>

export const Primary: Story = {}
