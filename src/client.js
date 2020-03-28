import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { hydrateInitialData } from 'react-universal-data'
import Pages from './pages'

hydrateInitialData(window._ssr.data)

ReactDOM.hydrate(
  <HelmetProvider>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('app')
)
