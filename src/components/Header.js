import React from 'react'
import { Flex, Box } from 'pss-components'
import { Container } from './Container'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { RouteLink } from './RouteLink'

export const Header = ({ children, ...rest }) => (
  <Box tm='auto' transition='color 0.3s' {...rest}>
    <Container>{children}</Container>
  </Box>
)

export const HeaderLogo = (props) => (
  <Flex>
    <RouteLink mx='auto' pt={2} {...props}>
      <Logo />
    </RouteLink>
  </Flex>
)

Header.Logo = HeaderLogo
Header.Nav = Nav
