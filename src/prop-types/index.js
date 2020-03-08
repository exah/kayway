import PropTypes from 'prop-types'
import { CONTENTFUL } from '../constants'

export const imagePropType = PropTypes.shape({
  width: PropTypes.number,
  height: PropTypes.number,
})

export const filePropTypes = PropTypes.shape({
  contentType: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  details: PropTypes.shape({
    image: imagePropType,
    size: PropTypes.number,
  }),
})

export const assetPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  file: filePropTypes.isRequired,
})

export const projectPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  contentType: PropTypes.oneOf([CONTENTFUL.CONTENT_TYPES.PROJECT]),
  slug: PropTypes.string.isRequired,
  picture: assetPropType.isRequired,
  caption: PropTypes.string,
})

export const groupPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  contentType: PropTypes.oneOf([CONTENTFUL.CONTENT_TYPES.GROUP]),
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(projectPropType),
  showTitle: PropTypes.bool,
  columns: PropTypes.number,
})

export const textBlockPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  contentType: PropTypes.oneOf([CONTENTFUL.CONTENT_TYPES.BLOCK_TEXT]),
  slug: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
})

export const pagePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  contentType: PropTypes.oneOf([CONTENTFUL.CONTENT_TYPES.PAGE]),
  slug: PropTypes.oneOf(Object.values(CONTENTFUL.PAGES)),
  title: PropTypes.string.isRequired,
  blocks: PropTypes.arrayOf(
    PropTypes.oneOfType([groupPropType, textBlockPropType])
  ),
})
