import React from 'react'
import PropTypes from 'prop-types'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { projectPropType } from '../prop-types'
import { ProjectFeed } from '../components'
import { withPage } from '../utils'

const GraphicsPage = ({ projects = [] }) => (
  <ProjectFeed projects={projects} bg='white' />
)

GraphicsPage.propTypes = {
  projects: PropTypes.arrayOf(projectPropType),
}

GraphicsPage.getData = async () => {
  const page = await fetchPage(CONTENTFUL.PAGE_SLUGS.GRAPHICS)

  return {
    title: page.title,
    projects: page.projects,
  }
}

export default withPage(GraphicsPage)
