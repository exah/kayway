import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'pss-components'
import { textBlockPropType } from '../prop-types'
import { Markdown } from './Markdown'

export const TextBlock = ({ space, value }) => (
  <Flex m={space} flexDirection={{ all: 'column', md: 'row-reverse' }}>
    <Box flex='0 0 auto' width={{ all: 1, md: 0.5, lg: 0.635 }}>
      <Markdown value={value.primary} />
    </Box>
    <Box
      flex='1 1 auto'
      mt={{ all: 2, md: 0 }}
      mr={{ ...space, all: 0, sm: 0 }}
      minWidth={0}
    >
      <Markdown value={value.secondary} />
    </Box>
  </Flex>
)

TextBlock.propTypes = {
  space: PropTypes.objectOf(PropTypes.number),
  value: textBlockPropType,
}
