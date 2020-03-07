import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouteMatch, useHistory } from 'react-router'
import { on } from '../utils'
import { ScrollSnapItem } from './ScrollSnap'
import { FadeTransition } from './FadeTransition'

export function ScrollSnapRoute({ path, as: Comp, ...rest }) {
  const elementRef = useRef()
  const prevMatchedRef = useRef()
  const history = useHistory()
  const match = useRouteMatch(path)

  const isMatched = match !== null
  const isMounted = prevMatchedRef.current !== undefined
  const isHiddenOnMount = !isMounted && !isMatched

  useEffect(() => {
    if (isMatched) return

    const element = elementRef.current
    const parent = element.parentNode

    function handleScroll() {
      const parentRect = parent.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()

      if (
        elementRect.left === parentRect.left &&
        elementRect.right === parentRect.right
      ) {
        history.push(path)
        window.scroll({ top: 0 })
      }
    }

    return on(parent, 'scroll', handleScroll, { passive: true })
  }, [elementRef, history, isMatched])

  useEffect(() => {
    const element = elementRef.current
    const parent = element.parentNode
    const prevMatched = prevMatchedRef.current

    element.style.display = ''
    prevMatchedRef.current = isMatched

    if (isMatched) {
      const scrollIntoView = (options) =>
        parent.scroll({ left: element.offsetLeft, ...options })

      switch (prevMatched) {
        // on mount
        case undefined: {
          scrollIntoView()
          break
        }
        // on update
        case false: {
          scrollIntoView({ behavior: 'smooth' })
          break
        }
      }

      return on(window, 'resize', () => scrollIntoView(), { passive: true })
    }
  }, [elementRef, prevMatchedRef, isMatched])

  return (
    <ScrollSnapItem
      ref={elementRef}
      style={{ display: isHiddenOnMount ? 'none' : '' }}
      {...rest}
    >
      <FadeTransition in={isMatched}>
        <Comp />
      </FadeTransition>
    </ScrollSnapItem>
  )
}

ScrollSnapRoute.propTypes = {
  path: PropTypes.string,
  as: PropTypes.elementType,
}
