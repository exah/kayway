import React from 'react'
import { Box, Image } from 'pss-components'
import { assetPropType } from '../prop-types'
import { getRatio, getFileUrl } from '../utils'

export const AssetImage = ({ src, ...rest }) => (
  <Box ratio={getRatio(src)} {...rest}>
    <Image src={`${getFileUrl(src)}`} width='100%' />
  </Box>
)

AssetImage.propTypes = {
  src: assetPropType.isRequired,
}
