import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Layout } from 'pss-components'
import { GlobalStyles } from './GlobalStyles'
import { Providers } from './Providers'
import { RobotoMonoFont } from './RobotoMonoFont'

export const App = (props) => (
  <Providers>
    <Helmet>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Helmet>
    <RobotoMonoFont />
    <GlobalStyles />
    <Layout flexDirection='column' minHeight='100%' {...props} />
  </Providers>
)
