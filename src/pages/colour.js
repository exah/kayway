import React from 'react'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { Page } from '../components'
import { pagePropType } from '../prop-types'
import { withInitialProps } from '../utils'

const ColourPage = ({ page }) => <Page value={page} />

ColourPage.propTypes = {
  page: pagePropType,
}

ColourPage.getInitialProps = async () => ({
  page: await fetchPage(CONTENTFUL.PAGES.COLOUR),
})

export default withInitialProps(ColourPage)
