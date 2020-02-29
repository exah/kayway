import React from 'react'
import { Transition } from './Transition'

export const FadeTransition = (props) => (
  <Transition
    enter={{ opacity: [0, 1] }}
    exit={{ opacity: [1, 0] }}
    {...props}
  />
)
