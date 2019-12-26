import React from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from 'pss-components'

export const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        :root {
          ${theme.textStyle.base}
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        html,
        body,
        #app {
          height: 100%;
        }
      `}
    />
  )
}
