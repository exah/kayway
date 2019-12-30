/** @jsx jsx */
import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { jsx, css } from '@emotion/core'
import { Flex, Box } from 'pss-components'

export const ScrollSnap = (props) => (
  <Flex
    {...props}
    overflow='scroll hidden touch'
    css={css`
      scroll-snap-type: x mandatory;
    `}
  />
)

function ScrollSnapItem({ active, ...props }) {
  const elementRef = useRef()
  const prevActiveRef = useRef()

  useEffect(() => {
    const element = elementRef.current
    const prevActive = prevActiveRef.current

    element.style.display = ''
    prevActiveRef.current = active

    if (active) {
      switch (prevActive) {
        // on mount
        case undefined:
          return element.scrollIntoView()
        // on update
        case false:
          return element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [elementRef, prevActiveRef, active])

  const isHiddenOnMount =
    prevActiveRef.current === undefined && active === false

  return (
    <Box
      {...props}
      ref={elementRef}
      flex='0 0 auto'
      width='100%'
      style={{
        display: isHiddenOnMount ? 'none' : '',
      }}
      css={css`
        scroll-snap-align: start;
      `}
    />
  )
}

ScrollSnapItem.propTypes = {
  active: PropTypes.bool,
}

ScrollSnap.Item = ScrollSnapItem
