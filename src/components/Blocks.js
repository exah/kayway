import React from 'react'
import PropTypes from 'prop-types'
import { CONTENTFUL } from '../constants'
import { groupPropType } from '../prop-types'
import { Group } from './Group'

export const Blocks = ({ value }) =>
  value.map((item) => {
    switch (item.contentType) {
      case CONTENTFUL.CONTENT_TYPES.GROUP: {
        return <Group key={item.id} value={item} />
      }
      default: {
        return null
      }
    }
  })

Blocks.propTypes = {
  value: PropTypes.arrayOf(groupPropType),
}
