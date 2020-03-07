import React from 'react'
import PropTypes from 'prop-types'
import { Box, Image } from 'pss-components'
import { assetPropType } from '../prop-types'
import { getRatio, getOptimizedFileUrl } from '../utils'

export function AssetImage({ src, progressive, quality, size, ...rest }) {
  const ratio = getRatio(src)
  const link = getOptimizedFileUrl(src, {
    fl: progressive ? 'progressive' : null,
    q: quality,
    [ratio < 1 ? 'h' : 'w']: size,
  })

  return (
    <Box ratio={ratio} {...rest}>
      <Image src={link} width='100%' />
    </Box>
  )
}

AssetImage.propTypes = {
  src: assetPropType.isRequired,
  progressive: PropTypes.bool,
  quality: PropTypes.number,
  size: PropTypes.number,
}
