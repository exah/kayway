import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Box, ThemeDefaults } from 'pss-components'
import { GlobalStyles } from './GlobalStyles'
import { Providers } from './Providers'
import { RobotoMonoFont } from './RobotoMonoFont'

export const Page = ({ title, palette, ...rest }) => (
  <Providers>
    <Head>
      <title>{title}</title>
    </Head>
    <RobotoMonoFont />
    <GlobalStyles />
    <ThemeDefaults palette={palette}>
      <Box minHeight='100%' bg='page' {...rest} />
    </ThemeDefaults>
  </Providers>
)

Page.propTypes = {
  title: PropTypes.string.isRequired,
  palette: PropTypes.string.isRequired,
  children: PropTypes.node,
}
