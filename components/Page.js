import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Box } from 'pss-components'
import { GlobalStyles } from './GlobalStyles'
import { Providers } from './Providers'
import { RobotoMonoFont } from './RobotoMonoFont'

export const Page = ({ title, ...rest }) => (
  <Providers>
    <Head>
      <title>{title}</title>
    </Head>
    <RobotoMonoFont />
    <GlobalStyles />
    <Box minHeight='100%' {...rest} />
  </Providers>
)

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}
