import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { useFetchData } from 'react-universal-data'
import { Box } from 'pss-components'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { Blocks } from './Blocks'
import { Container } from './Container'
import { FadeTransition } from './FadeTransition'
import { JumpButton } from './JumpButton'

export function Page({ slug }) {
  const { isReady, result: page } = useFetchData(fetchPage, slug)

  return (
    <FadeTransition in={isReady}>
      <Box>
        {isReady ? (
          <>
            <Helmet>
              <title>{page.title}</title>
            </Helmet>
            <Container>
              <Blocks value={page.blocks} />
              {Boolean(page.jumpGroup && page.jumpLabel) && (
                <JumpButton
                  to={`#${page.jumpGroup.slug}`}
                  scrollOffset={200}
                  maxWidth={196}
                  mb={3}
                >
                  {page.jumpLabel}
                </JumpButton>
              )}
            </Container>
          </>
        ) : null}
      </Box>
    </FadeTransition>
  )
}

Page.propTypes = {
  slug: PropTypes.oneOf(Object.values(CONTENTFUL.PAGES)),
}
