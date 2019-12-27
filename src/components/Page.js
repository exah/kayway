import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { Box, ThemeDefaults } from 'pss-components'
import { GlobalStyles } from './GlobalStyles'
import { Providers } from './Providers'
import { RobotoMonoFont } from './RobotoMonoFont'

export const Page = ({ palette, ...rest }) => (
  <Providers>
    <Helmet>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Helmet>
    <RobotoMonoFont />
    <GlobalStyles />
    <ThemeDefaults palette={palette}>
      <Box minHeight='100%' bg='page' {...rest} />
    </ThemeDefaults>
  </Providers>
)

Page.propTypes = {
  palette: PropTypes.string.isRequired,
  children: PropTypes.node,
}
