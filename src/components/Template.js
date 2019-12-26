import React from 'react'
import PropTypes from 'prop-types'

const innerHTML = (__html) => ({ dangerouslySetInnerHTML: { __html } })

export const Template = ({ head, data, files, children }) => (
  <html {...head.htmlAttributes.toComponent()}>
    <head>
      {head.meta.toComponent()}
      {head.title.toComponent()}
      {head.link.toComponent()}
      {files.css.map((href) => (
        <link key={href} rel='stylesheet' href={href} />
      ))}
    </head>
    <body {...head.bodyAttributes.toComponent()}>
      <div id='app'>{children}</div>
      <script {...innerHTML(`window._ssr = ${JSON.stringify(data || {})};`)} />
      <script src='https://cdn.polyfill.io/v2/polyfill.min.js' />
      {files.js.map((src) => (
        <script key={src} async src={src} />
      ))}
    </body>
  </html>
)

Template.propTypes = {
  head: PropTypes.objectOf(
    PropTypes.shape({
      toString: PropTypes.func.isRequired,
      toComponent: PropTypes.func.isRequired,
    })
  ).isRequired,
  files: PropTypes.shape({
    css: PropTypes.arrayOf(PropTypes.string).isRequired,
    js: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  data: PropTypes.shape({
    config: PropTypes.object,
    initialData: PropTypes.object,
    userLang: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
}
