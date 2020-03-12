import React from 'react'
import { Transition } from './Transition'

const ENTER = {
  translateY: ['100%', '0%'],
  opacity: [0, 1],
}

const EXIT = {
  translateY: ['0%', '100%'],
  opacity: [1, 0],
}

export const SlideTransition = (props) => (
  <Transition enter={ENTER} exit={EXIT} {...props} />
)
