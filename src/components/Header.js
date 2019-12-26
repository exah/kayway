import React from 'react'
import { Flex, Box, Link } from 'pss-components'
import { Link as RouterLink } from 'react-router-dom'
import { Logo } from './Logo'
import { Nav } from './Nav'

export const Header = (props) => (
  <Box fg='header' bg='auto' {...props}>
    <Flex>
      <Link as={RouterLink} to='/' mx='auto' pt={2}>
        <Logo mr='-20px' />
      </Link>
    </Flex>
    <Nav>
      <Link as={RouterLink} to='/contacts'>
        Контакты
      </Link>
      <Link as={RouterLink} to='/graphics'>
        Графика
      </Link>
      <Link as={RouterLink} to='/illustrations'>
        Вектор
      </Link>
    </Nav>
  </Box>
)
