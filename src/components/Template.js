import React from 'react'
import PropTypes from 'prop-types'

export const Template = ({ head, files, config, data, lang, children }) => (
  <html lang={lang} {...head.htmlAttributes.toComponent()}>
    <head>
      {head.meta.toComponent()}
      {head.title.toComponent()}
      {head.link.toComponent()}
      {files.css.map((href) => (
        <link key={href} href={href} rel='stylesheet' />
      ))}
    </head>
    <body {...head.bodyAttributes.toComponent()}>
      <div id='app'>{children}</div>
      <script
        dangerouslySetInnerHTML={{
          __html: `window._ssr = ${JSON.stringify({ data, config, lang })};`,
        }}
      />
      <script src='https://cdn.polyfill.io/v2/polyfill.min.js' />
      {files.js.map((src) => (
        <script key={src} src={src} async />
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
  config: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
