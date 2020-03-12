import React from 'react'
import PropTypes from 'prop-types'
import { projectPropType } from '../prop-types'
import { Box, Feed, AssetImage } from '../components'

export const Projects = ({ value, grid = 6, columns = 2, space, ...rest }) => (
  <Box m={space}>
    <Feed
      space={space}
      grid={grid}
      column={{ all: grid, sm: grid / columns }}
      {...rest}
    >
      {value.map((item) => (
        <Feed.Item key={item.id}>
          <AssetImage
            src={item.picture}
            bg='white'
            size={550}
            quality={85}
            progressive
          />
        </Feed.Item>
      ))}
    </Feed>
  </Box>
)

Projects.propTypes = {
  bg: PropTypes.string,
  grid: PropTypes.number,
  columns: PropTypes.number,
  space: PropTypes.objectOf(PropTypes.number),
  value: PropTypes.arrayOf(projectPropType).isRequired,
}
