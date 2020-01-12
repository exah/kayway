import React from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { pagePropType } from '../prop-types'
import { Box, Projects } from '../components'
import { withPage } from '../utils'

const VectorsPage = ({ page }) => (
  <Box>
    {page && (
      <>
        <Helmet>
          <title>{page.title}</title>
        </Helmet>
        <Projects value={page.projects} bg='pink05' />
      </>
    )}
  </Box>
)

VectorsPage.propTypes = {
  page: pagePropType,
}

VectorsPage.getData = async () => ({
  page: await fetchPage(CONTENTFUL.PAGES.VECTORS),
})

export default withPage(VectorsPage)
