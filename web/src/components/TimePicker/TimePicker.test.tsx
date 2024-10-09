import { render } from '@redwoodjs/testing/web'

import TimePicker from './TimePicker'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TimePicker', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimePicker />)
    }).not.toThrow()
  })
})
