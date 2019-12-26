import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'pss-components'
import NextLink from 'next/link'

const NavLinkBase = ({ className, children, forwarded, ...rest }) => (
  <NextLink {...rest} {...forwarded}>
    <a className={className}>{children}</a>
  </NextLink>
)

NavLinkBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  forwarded: PropTypes.shape({ as: PropTypes.string }),
}

export const NavLink = ({ href, as, ...rest }) => (
  <Link as={NavLinkBase} forwarded={{ href, as }} {...rest} />
)

NavLink.propTypes = {
  href: PropTypes.string,
  as: PropTypes.string,
}
