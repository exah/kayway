import React from 'react'
import { Box, Flex, Link } from 'pss-components'
import { projectPropType } from '../prop-types'
import { Arrow } from './Arrow'

export function Caption({ value }) {
  if (!value.caption) return null

  return (
    <Link href={value.url} target='_blank'>
      <Flex bg='white' px={2} py={1} alignItems='center'>
        <Box flex='1 1 auto' mr={1}>
          {value.caption}
        </Box>
        {value.url && <Arrow />}
      </Flex>
    </Link>
  )
}

Caption.propTypes = {
  value: projectPropType.isRequired,
}
