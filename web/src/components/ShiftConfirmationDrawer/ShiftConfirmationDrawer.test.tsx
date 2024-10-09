import { render } from '@redwoodjs/testing/web'

import ShiftConfirmationDrawer from './ShiftConfirmationDrawer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShiftConfirmationDrawer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShiftConfirmationDrawer />)
    }).not.toThrow()
  })
})
