import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'pss-components'
import { useRouteMatch } from 'react-router-dom'
import { Arrow } from './Arrow'

const DIRECTIONS = { LEFT: Symbol('👈'), RIGHT: Symbol('👉') }
const TRANSFORMS = { [DIRECTIONS.LEFT]: 'rotate(180deg)' }
const TRANSITION = 'opacity 0.3s'

function NavItem({ path, prevPath, nextPath, children }) {
  const match = useRouteMatch({ path: path, strict: true })
  const prevMatch = useRouteMatch({ path: prevPath, strict: true })
  const nextMatch = useRouteMatch({ path: nextPath, strict: true })

  let direction = null
  if (prevPath == null) {
    direction = DIRECTIONS.LEFT
  } else if (nextPath == null) {
    direction = DIRECTIONS.RIGHT
  }

  return (
    <>
      {direction && (
        <Arrow
          transform={TRANSFORMS[direction]}
          transition={TRANSITION}
          opacity={prevMatch || match ? 0 : 1}
        />
      )}
      <Box flex='0 0 auto' px={1} mx='auto'>
        {children}
      </Box>
      {direction && (
        <Arrow
          transform={TRANSFORMS[direction]}
          transition={TRANSITION}
          opacity={nextMatch || match ? 0 : 1}
        />
      )}
    </>
  )
}

NavItem.propTypes = {
  path: PropTypes.string,
  prevPath: PropTypes.string,
  nextPath: PropTypes.string,
}

const getPath = (input) => input?.props.to

export const Nav = ({ children, ...rest }) => (
  <Flex p={3} alignItems='center' {...rest}>
    {React.Children.toArray(children).map((child, index, src) => (
      <NavItem
        key={getPath(child)}
        path={getPath(child)}
        prevPath={getPath(src[index - 1])}
        nextPath={getPath(src[index + 1])}
      >
        {child}
      </NavItem>
    ))}
  </Flex>
)

Nav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}
