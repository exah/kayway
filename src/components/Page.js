import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Blocks } from '../components'
import { pagePropType } from '../prop-types'

export const Page = ({ value }) =>
  value ? (
    <>
      <Helmet>
        <title>{value.title}</title>
      </Helmet>
      <Blocks value={value.blocks} />
    </>
  ) : null

Page.propTypes = {
  value: pagePropType,
}
