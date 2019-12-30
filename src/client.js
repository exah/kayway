import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { DataProvider, createDataStore } from 'react-universal-data'
import Pages from './pages'

ReactDOM.hydrate(
  <DataProvider value={createDataStore(window._ssr.data)}>
    <HelmetProvider>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </HelmetProvider>
  </DataProvider>,
  document.getElementById('app')
)
