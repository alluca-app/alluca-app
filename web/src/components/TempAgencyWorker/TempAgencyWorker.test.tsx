import { render } from '@redwoodjs/testing/web'

import TempAgencyWorker from './TempAgencyWorker'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TempAgencyWorker', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TempAgencyWorker />)
    }).not.toThrow()
  })
})
