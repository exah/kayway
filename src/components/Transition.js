import React from 'react'
import PropTypes from 'prop-types'
import anime from 'animejs'
import * as RTG from 'react-transition-group'

const ANIMATION_DONE = 'animation::done'

const triggerAnimationDone = (node) =>
  node.dispatchEvent(new window.Event(ANIMATION_DONE))

const animationDoneListener = (node, done) =>
  node.addEventListener(ANIMATION_DONE, function listener(event) {
    node.removeEventListener(ANIMATION_DONE, listener)
    done(event)
  })

function animate({ targets, ...options }) {
  anime({
    targets,
    complete: () => {
      triggerAnimationDone(targets)
    },
    ...options,
  })
}

export const Transition = ({
  duration = 400,
  delay = 0,
  easing = 'easeInOutQuad',
  enter = null,
  exit = null,
  ...rest
}) => (
  <RTG.Transition
    addEndListener={animationDoneListener}
    onEnter={(node) => {
      animate({
        targets: node,
        duration,
        delay,
        easing,
        ...enter,
      })
    }}
    onExit={(node) => {
      animate({
        targets: node,
        duration,
        delay,
        easing,
        ...exit,
      })
    }}
    unmountOnExit
    {...rest}
  />
)

Transition.propTypes = {
  duration: PropTypes.number,
  delay: PropTypes.number,
  easing: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  enter: PropTypes.object,
  exit: PropTypes.object,
}
