import React from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { Projects } from '../components'
import { pagePropType } from '../prop-types'
import { withPage } from '../utils'

const VectorsPage = ({ page }) =>
  page ? (
    <>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <Projects value={page.projects} bg='pink05' />
    </>
  ) : null

VectorsPage.propTypes = {
  page: pagePropType,
}

VectorsPage.getInitialProps = async () => ({
  page: await fetchPage(CONTENTFUL.PAGES.VECTORS),
})

export default withPage(VectorsPage)
