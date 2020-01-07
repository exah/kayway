import React from 'react'
import { css } from '@emotion/core'
import { ThemeProvider } from 'pss-components'
import { PALETTES } from '../constants'

const gap = 16
const base = 16
const line = 1.1875

const rem = (num) => num / base + 'rem'

const breakpoint = {
  mobile: 375,
  tablet: 650,
  desktop: 1024,
}

const media = {
  xs: `(max-width: ${breakpoint.mobile}px)`,
  sm: `(min-width: ${breakpoint.mobile + 1}px)`,
  md: `(min-width: ${breakpoint.tablet + 1}px)`,
  xl: `(min-width: ${breakpoint.desktop + 1}px)`,
}

const fontSize = {
  base,
  default: rem(base),
  caption: rem(13),
}

const fontFamily = {
  monospace: `'Roboto Mono', monospace`,
}

const space = [0, gap / 2, gap, gap * 1.5, gap * 2, gap * 3]

const color = {
  white: '#ffffff',
  black: '#000000',
  grey00: '#f1f1f1',
  pink00: '#fff4f4',
  pink05: '#ff8099',
  pink10: '#fe5979',
}

const palette = {
  [PALETTES.DEFAULT]: {
    fg: color.black,
    bg: color.white,
  },
  [PALETTES.VECTORS]: {
    fg: color.pink10,
    bg: color.white,
  },
}

const theme = {
  breakpoint,
  media,
  space,
  color,
  palette,
  fontFamily,
  fontSize,
  textStyle: {
    base: css`
      font-family: ${fontFamily.monospace};
      font-size: ${fontSize.default}px;
      line-height: 1.1;
    `,
    default: css`
      font-size: 1rem;
      line-height: ${line};
    `,
    caption: css`
      font-size: ${rem(fontSize.caption)};
      line-height: ${line};
    `,
  },
  Link: css`
    text-decoration: none;
  `,
}

export const Theme = (props) => <ThemeProvider theme={theme} {...props} />
