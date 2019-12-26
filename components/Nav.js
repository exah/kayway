import React, { useMemo } from 'react'
import { Flex, Box } from 'pss-components'
import { Arrow } from './Arrow'

const NavItem = (props) => (
  <Flex
    p={3}
    flex='1 0 auto'
    justifyContent='space-between'
    alignItems='center'
  >
    <Arrow transform='rotate(180deg)' />
    <Box mx='auto' px={1} {...props} />
    <Arrow />
  </Flex>
)

function Nav(props) {
  const children = useMemo(() => React.Children.toArray(props.children), [
    props.children,
  ])

  return (
    <Flex px={3} {...props}>
      {children.map((child, index) => (
        <NavItem key={child.key}>{child}</NavItem>
      ))}
    </Flex>
  )
}

export { Nav }
