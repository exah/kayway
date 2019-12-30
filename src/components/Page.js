import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { Layout, ThemeDefaults } from 'pss-components'
import { GlobalStyles } from './GlobalStyles'
import { Providers } from './Providers'
import { RobotoMonoFont } from './RobotoMonoFont'
import { Header } from './Header'

export const Page = ({ palette, children, ...rest }) => (
  <Providers>
    <Helmet>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Helmet>
    <RobotoMonoFont />
    <GlobalStyles />
    <ThemeDefaults palette={palette}>
      <Layout flexDirection='column' minHeight='100%' {...rest}>
        <Header />
        {children}
      </Layout>
    </ThemeDefaults>
  </Providers>
)

Page.propTypes = {
  palette: PropTypes.string.isRequired,
  children: PropTypes.node,
}
