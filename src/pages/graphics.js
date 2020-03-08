import React from 'react'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { Page } from '../components'
import { pagePropType } from '../prop-types'
import { withInitialProps } from '../utils'

const GraphicsPage = ({ page }) => <Page value={page} />

GraphicsPage.propTypes = {
  page: pagePropType,
}

GraphicsPage.getInitialProps = async () => ({
  page: await fetchPage(CONTENTFUL.PAGES.GRAPHICS),
})

export default withInitialProps(GraphicsPage)
