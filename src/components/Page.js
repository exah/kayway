import React from 'react'
import { Helmet } from 'react-helmet-async'
import { pagePropType } from '../prop-types'
import { Blocks } from './Blocks'
import { Container } from './Container'
import { JumpButton } from './JumpButton'

export const Page = ({ value }) =>
  value ? (
    <>
      <Helmet>
        <title>{value.title}</title>
      </Helmet>
      <Container>
        <Blocks value={value.blocks} />
        {Boolean(value.jumpGroup && value.jumpLabel) && (
          <JumpButton
            to={`#${value.jumpGroup.slug}`}
            scrollOffset={200}
            maxWidth={196}
            mb={3}
          >
            {value.jumpLabel}
          </JumpButton>
        )}
      </Container>
    </>
  ) : null

Page.propTypes = {
  value: pagePropType,
}
