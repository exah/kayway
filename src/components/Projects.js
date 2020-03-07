import React from 'react'
import PropTypes from 'prop-types'
import { projectPropType } from '../prop-types'
import { Box, Feed, AssetImage } from '../components'

export const Projects = ({
  value,
  space = { all: 2, sm: 3, md: 4, lg: 5 },
  bg,
  ...rest
}) => (
  <Box p={space}>
    <Feed space={space} grid={6} column={{ all: 6, sm: 3 }} {...rest}>
      {value.map((item) => (
        <Feed.Item key={item.id}>
          <AssetImage
            src={item.picture}
            bg={bg}
            size={1600}
            quality={90}
            progressive
          />
        </Feed.Item>
      ))}
    </Feed>
  </Box>
)

Projects.propTypes = {
  bg: PropTypes.string,
  space: PropTypes.objectOf(PropTypes.number),
  value: PropTypes.arrayOf(projectPropType).isRequired,
}
