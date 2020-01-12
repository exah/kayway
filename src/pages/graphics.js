import React from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { pagePropType } from '../prop-types'
import { Box, Projects } from '../components'
import { withPage } from '../utils'

const GraphicsPage = ({ page }) => (
  <Box>
    {page && (
      <>
        <Helmet>
          <title>{page.title}</title>
        </Helmet>
        <Projects value={page.projects} bg='white' />
      </>
    )}
  </Box>
)

GraphicsPage.propTypes = {
  page: pagePropType,
}

GraphicsPage.getData = async () => ({
  page: await fetchPage(CONTENTFUL.PAGES.GRAPHICS),
})

export default withPage(GraphicsPage)
