import config from 'config'
import React from 'react'
import { isResponseError } from 'ya-fetch'
import { HelmetProvider } from 'react-helmet-async'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { getInitialData } from 'react-universal-data'
import { Template } from './components'
import Pages from './pages'

function serverRender(stats) {
  return async (req, res, next) => {
    const lang = req.language || config.languages[0]
    const context = { status: 200, url: null }

    const appElement = (
      <StaticRouter location={req.url} context={context}>
        <HelmetProvider context={context}>
          <Pages />
        </HelmetProvider>
      </StaticRouter>
    )

    try {
      const data = await getInitialData(appElement)
      const html = renderToString(
        <Template
          head={context.helmet}
          files={stats.files}
          config={config.public}
          data={data}
          lang={lang}
        >
          {appElement}
        </Template>
      )

      if (context.url) {
        res.redirect(302, context.url)
        console.log(`Redirecting... '${req.path}' -> '${context.url}'`)
      } else {
        res.status(context.status)
        res.write('<!DOCTYPE html>')
        res.write(html)
        res.end()
      }
    } catch (error) {
      console.log('Render failed')
      console.error(error)

      const status = isResponseError(error)
        ? error.response.status
        : context.status || 500

      res.status(status)
      next(error)
    }
  }
}

export default serverRender
