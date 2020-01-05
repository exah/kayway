import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouteMatch, useHistory } from 'react-router'
import { ScrollSnapItem } from './ScrollSnap'

const on = (target, ...args) => {
  target.addEventListener(...args)
  return () => target.removeEventListener(...args)
}

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
      }
    }

    return on(parent, 'scroll', handleScroll, { passive: true })
  }, [elementRef, history, isMatched])

  useEffect(() => {
    const element = elementRef.current
    const prevMatched = prevMatchedRef.current

    element.style.display = ''
    prevMatchedRef.current = isMatched

    if (isMatched) {
      switch (prevMatched) {
        // on mount
        case undefined:
          return element.scrollIntoView()
        // on update
        case false:
          return element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [elementRef, prevMatchedRef, isMatched])

  return (
    <ScrollSnapItem
      ref={elementRef}
      style={{ display: isHiddenOnMount ? 'none' : '' }}
      {...rest}
    >
      {isMatched && <Comp />}
    </ScrollSnapItem>
  )
}

ScrollSnapRoute.propTypes = {
  path: PropTypes.string,
  as: PropTypes.elementType,
}