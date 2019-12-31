import styled from '@emotion/styled'
import { Flex, Box } from 'pss-components'

export const ScrollSnap = styled(Flex)`
  scroll-snap-type: x mandatory;

  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
`

export const ScrollSnapItem = styled(Box)`
  scroll-snap-align: start;

  flex: 0 0 auto;
  width: 100%;
`
