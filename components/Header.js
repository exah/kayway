import React from 'react'
import { Flex, Box } from 'pss-components'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { NavLink } from './NavLink'

export const Header = (props) => (
  <Box fg='header' bg='auto' {...props}>
    <Flex>
      <NavLink href='/' mx='auto' pt={2}>
        <Logo mr='-20px' />
      </NavLink>
    </Flex>
    <Nav>
      <NavLink href='/contacts'>Контакты</NavLink>
      <NavLink href='/graphics'>Графика</NavLink>
      <NavLink href='/illustrations'>Вектор</NavLink>
    </Nav>
  </Box>
)
