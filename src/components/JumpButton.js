import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Flex, Text, Link } from 'pss-components'
import { listen } from '../utils'
import { Arrow } from './Arrow'
import { SlideTransition } from './SlideTransition'

export function JumpButton({ children, to, scrollOffset = null, ...rest }) {
  const [isHidden, setHidden] = useState(null)

  useEffect(() => {
    if (scrollOffset === null) return

    function handleScroll() {
      setHidden(window.scrollY > scrollOffset)
    }

    handleScroll()
    return listen(window, 'scroll', handleScroll, { passive: true })
  }, [scrollOffset])

  function handleClick(event) {
    const element = document.querySelector(to)

    if (element) {
      event.preventDefault()

      window.scrollTo({
        top: element.offsetTop,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Box
      position='fixed'
      left='50%'
      bottom='0%'
      transform='translate(-50%)'
      width='100%'
      {...rest}
    >
      <SlideTransition in={!isHidden}>
        <Box>
          <Link href={to} onClick={handleClick}>
            <Button variant='floating' width='100%'>
              <Flex justifyContent='center'>
                <Text variant='nav'>{children}</Text>
                <Box ml={1}>
                  <Box position='absolute'>
                    <Arrow
                      transform='rotate(90deg) translate(-2px, 0)'
                      width={18}
                    />
                  </Box>
                </Box>
              </Flex>
            </Button>
          </Link>
        </Box>
      </SlideTransition>
    </Box>
  )
}

JumpButton.propTypes = {
  to: PropTypes.string,
  scrollOffset: PropTypes.number,
}
