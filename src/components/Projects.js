import React from 'react'
import PropTypes from 'prop-types'
import { Box, Feed } from 'pss-components'
import { projectPropType } from '../prop-types'
import { AssetImage } from './AssetImage'
import { Caption } from './Caption'

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
            size={Math.round(1100 / columns)}
            quality={85}
            progressive
          />
          <Caption value={item} />
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
