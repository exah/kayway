import React from 'react'
import PropTypes from 'prop-types'
import { withData } from 'react-universal-data'
import { Box, FadeTransition } from '../components'

export const withInitialProps = (Comp) => {
  const LoadingComp = (props) => (
    <FadeTransition in={!props.isLoading}>
      <Box>{props.isLoading ? null : <Comp {...props} />}</Box>
    </FadeTransition>
  )

  LoadingComp.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  }

  return withData(Comp.getInitialProps)(LoadingComp)
}
