import React from 'react'
import PropTypes from 'prop-types'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { projectPropType } from '../prop-types'
import { ProjectFeed } from '../components'
import { withPage } from '../utils'

const VectorsPage = ({ projects = [] }) => (
  <ProjectFeed projects={projects} bg='pink05' />
)

VectorsPage.propTypes = {
  projects: PropTypes.arrayOf(projectPropType),
}

VectorsPage.getData = async () => {
  const page = await fetchPage(CONTENTFUL.PAGE_SLUGS.VECTORS)

  return {
    title: page.title,
    projects: page.projects,
  }
}

export default withPage(VectorsPage)
