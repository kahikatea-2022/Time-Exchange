import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import { render } from '@testing-library/react'
import reducer from './reducers'
import '@testing-library/jest-dom/extend-expect'

export * from '@testing-library/react'

export function renderWithRedux(
  ui,
  {
    initialEntries = ['/'],
    route = '/',
    initialState,
    store = createStore(reducer, initialState),
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <Router initialEntries={initialEntries} initialIndex={0}>
          <Routes>
            <Route path={route} element={ui} />
          </Routes>
        </Router>
      </Provider>
    ),
    store,
  }
}
