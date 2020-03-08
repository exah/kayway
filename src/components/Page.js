import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Blocks } from './Blocks'
import { Container } from './Container'
import { pagePropType } from '../prop-types'

export const Page = ({ value }) =>
  value ? (
    <>
      <Helmet>
        <title>{value.title}</title>
      </Helmet>
      <Container>
        <Blocks value={value.blocks} />
      </Container>
    </>
  ) : null

Page.propTypes = {
  value: pagePropType,
}
