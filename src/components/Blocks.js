import React from 'react'
import PropTypes from 'prop-types'
import { CONTENTFUL } from '../constants'
import { groupPropType, textBlockPropType } from '../prop-types'
import { TextBlock } from './TextBlock'
import { Group } from './Group'

export const Blocks = ({ space = { all: 2, sm: 3, md: 4, lg: 5 }, value }) =>
  value.map((item) => {
    switch (item.contentType) {
      case CONTENTFUL.CONTENT_TYPES.GROUP: {
        return <Group key={item.id} value={item} space={space} />
      }
      case CONTENTFUL.CONTENT_TYPES.BLOCK_TEXT: {
        return <TextBlock key={item.id} value={item} space={space} />
      }
      default: {
        return null
      }
    }
  })

Blocks.propTypes = {
  space: PropTypes.objectOf(PropTypes.number),
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([groupPropType, textBlockPropType])
  ),
}
