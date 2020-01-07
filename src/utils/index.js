import { withData } from 'react-universal-data'

export const withPage = (Comp) => withData()(Comp)

export const randomBetween = (min, max, base = 100) =>
  Math.floor((Math.random() * (max - min + 1) + min) * base) / base
