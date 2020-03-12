import React from 'react'
import PropTypes from 'prop-types'
import { Box, Image } from 'pss-components'
import { assetPropType } from '../prop-types'
import { getRatio, getOptimizedFileUrl } from '../utils'

export function AssetImage({ src, progressive, quality, size, ...rest }) {
  const ratio = getRatio(src)
  const filter = progressive ? 'progressive' : null
  const side = ratio < 1 ? 'h' : 'w'

  const linkOriginal = getOptimizedFileUrl(src, {
    fl: filter,
    q: quality,
    [side]: size,
  })

  const linkRetina = getOptimizedFileUrl(src, {
    fl: filter,
    q: quality,
    [side]: size * 2,
  })

  return (
    <Box ratio={ratio} {...rest}>
      <Image
        src={linkOriginal}
        srcSet={`${linkRetina} 2x`}
        width='100%'
        loading='lazy'
      />
    </Box>
  )
}

AssetImage.propTypes = {
  src: assetPropType.isRequired,
  progressive: PropTypes.bool,
  quality: PropTypes.number,
  size: PropTypes.number,
}
