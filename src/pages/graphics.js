import React from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { Projects } from '../components'
import { pagePropType } from '../prop-types'
import { withPage } from '../utils'

const GraphicsPage = ({ page }) =>
  page ? (
    <>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <Projects value={page.projects} bg='white' />
    </>
  ) : null

GraphicsPage.propTypes = {
  page: pagePropType,
}

GraphicsPage.getInitialProps = async () => ({
  page: await fetchPage(CONTENTFUL.PAGES.GRAPHICS),
})

export default withPage(GraphicsPage)
