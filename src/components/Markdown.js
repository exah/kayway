import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { compiler } from 'markdown-to-jsx'
import { Image, Link, List, Text } from 'pss-components'

const P = (props) => <Text as='p' mb={2} variant='default' {...props} />
const H = (props) => <P as='h1' {...props} />
const H1 = (props) => <H as='h1' mb={4} {...props} />
const H2 = (props) => <H as='h2' mb={3} {...props} />
const H3 = (props) => <H as='h3' mb={2} {...props} />
const H4 = (props) => (
  <H as='h4' mt={{ [`${Text} + &`]: 5 }} mb={1} variant='caption' {...props} />
)
const H5 = (props) => <H as='h5' mb={1} {...props} />
const H6 = (props) => <H as='h6' mb={1} {...props} />
const Ul = (props) => <List as='ul' {...props} />
const Ol = (props) => <List as='ol' {...props} />
const Img = (props) => <Image width='100%' {...props} />

export function Markdown({ value }) {
  return useMemo(
    () =>
      compiler(value, {
        overrides: {
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
          a: Link,
          p: P,
          ul: Ul,
          ol: Ol,
          li: List.Item,
          img: Img,
        },
      }),
    [value]
  )
}

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
}
