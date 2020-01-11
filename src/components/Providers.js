import React from 'react'
import { MatchMediaProvider } from 'pss-components'
import { Theme } from './Theme'

export const Providers = ({ children }) => (
  <Theme>
    <MatchMediaProvider>{children}</MatchMediaProvider>
  </Theme>
)
