import React from 'react'
import { fetchPage } from '../api'
import { CONTENTFUL } from '../constants'
import { Page } from '../components'
import { pagePropType } from '../prop-types'
import { withInitialProps } from '../utils'

const ContactsPage = ({ page }) => <Page value={page} />

ContactsPage.propTypes = {
  page: pagePropType,
}

ContactsPage.getInitialProps = async () => ({
  page: await fetchPage(CONTENTFUL.PAGES.CONTACTS),
})

export default withInitialProps(ContactsPage)
