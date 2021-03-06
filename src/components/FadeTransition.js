import React from 'react'
import { Transition } from './Transition'

const ENTER = {
  opacity: [0, 1],
}

const EXIT = {
  opacity: [1, 0],
}

export const FadeTransition = (props) => (
  <Transition enter={ENTER} exit={EXIT} {...props} />
)
