import React from 'react'
import { Box } from 'pss-components'

export const Arrow = (props) => (
  <Box
    as='svg'
    width='49px'
    height='8px'
    viewBox='0 0 49 8'
    preserveAspectRatio='xMaxYMid slice'
    fill='currentColor'
    {...props}
  >
    <path d='M48.3536 3.64644C48.5488 3.8417 48.5488 4.15829 48.3536 4.35355L45.1716 7.53553C44.9763 7.73079 44.6597 7.73079 44.4645 7.53553C44.2692 7.34027 44.2692 7.02369 44.4645 6.82842L46.7929 4.5L0 4.5V3.5L46.7929 3.5L44.4645 1.17157C44.2692 0.976307 44.2692 0.659724 44.4645 0.464462C44.6597 0.269199 44.9763 0.269199 45.1716 0.464462L48.3536 3.64644Z' />
  </Box>
)
