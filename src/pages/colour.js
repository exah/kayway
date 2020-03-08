import React from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { Blocks } from '../components'
import { pagePropType } from '../prop-types'
import { withPage } from '../utils'

const ColourPage = ({ page }) =>
  page ? (
    <>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <Blocks value={page.blocks} />
    </>
  ) : null

ColourPage.propTypes = {
  page: pagePropType,
}

ColourPage.getInitialProps = async () => ({
  page: await fetchPage(CONTENTFUL.PAGES.COLOUR),
})

export default withPage(ColourPage)
