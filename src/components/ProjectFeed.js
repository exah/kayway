import React from 'react'
import PropTypes from 'prop-types'
import { projectPropType } from '../prop-types'
import { Box, Feed, AssetImage } from '../components'

export const ProjectFeed = ({ projects = [], bg }) => (
  <Box p={5}>
    <Feed space={5} grid={6} column={{ all: 6, sm: 3 }}>
      {projects.map((item, index) => (
        <Feed.Item key={index}>
          <AssetImage src={item.picture} bg={bg} />
        </Feed.Item>
      ))}
    </Feed>
  </Box>
)

ProjectFeed.propTypes = {
  bg: PropTypes.string,
  projects: PropTypes.arrayOf(projectPropType),
}
