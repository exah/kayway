import React from 'react'
import { Flex, Box } from 'pss-components'
import { ROUTES } from '../constants'
import { Logo } from './Logo'
import { RouteLink } from './RouteLink'

export const Header = ({ children, ...rest }) => (
  <Box tm='auto' transition='color 0.3s' {...rest}>
    <Flex>
      <RouteLink to={ROUTES.HOME} mx='auto' pt={2}>
        <Logo mr='-20px' />
      </RouteLink>
    </Flex>
    {children}
  </Box>
)
