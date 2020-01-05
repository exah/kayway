import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link } from 'pss-components'

export const RouteLink = (props) => <Link as={ReactRouterLink} {...props} />
