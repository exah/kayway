import config from 'config'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { getInitialData } from 'react-universal-data'
import { Template } from './components'
import Pages from './pages'

function serverRender(stats) {
  return (req, res, next) => {
    const userLang = req.language || config.languages[0]
    const context = { status: 200, statusText: 'OK' }

    const appElement = (
      <StaticRouter location={req.url} context={context}>
        <HelmetProvider context={context}>
          <Pages />
        </HelmetProvider>
      </StaticRouter>
    )

    return getInitialData(appElement)
      .then((preloaded) => {
        const html = renderToString(
          <Template
            head={context.helmet}
            data={{ config: config.public, preloaded, userLang }}
            files={stats.files}
          >
            {appElement}
          </Template>
        )

        if (context.url) {
          res.redirect(302, context.url)
          console.log(`Redirecting... '${req.path}' -> '${context.url}'`)
        } else {
          res.status(200)
          res.write('<!DOCTYPE html>')
          res.write(html)
          res.end()
        }
      })
      .catch((error) => {
        console.log('Prefetch failed')
        console.error(error)

        res.status(error.status || 500)
        next(error)
      })
  }
}

export default serverRender
