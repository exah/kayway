import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Header, Page } from '../components'

function Pages(props) {
  return (
    <Page title='Home' palette='graphics'>
      <Header />
    </Page>
  )
}

export default hot(Pages)
