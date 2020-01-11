import PropTypes from 'prop-types'

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
  id: PropTypes.string,
  title: PropTypes.string,
  file: filePropTypes.isRequired,
})

export const projectPropType = PropTypes.shape({
  name: PropTypes.string,
  slug: PropTypes.string.isRequired,
  picture: assetPropType.isRequired,
  caption: PropTypes.string,
})
