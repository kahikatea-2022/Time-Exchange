import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRedux } from '../../testUtils'
import WaitIndicator from './WaitIndicator'

test('Wait indicator image displays when waiting state is true', () => {
  renderWithRedux(<WaitIndicator />, {
    initialState: {
      waiting: true,
    },
  })
  const image = screen.getByRole('img')
  expect(image.className).toBe('wait-indicator')
})

test('Wait indicator does not show anything when waiting state is false', () => {
  renderWithRedux(<WaitIndicator />, {
    initialState: {
      waiting: false,
    },
  })
  const image = screen.queryByRole('img')
  expect(image).toBeNull()
})