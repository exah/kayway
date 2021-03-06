const config = require('config')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const requestLanguage = require('express-request-language')
const webpackUniversalAndHot = require('@exah/webpack-universal-hot-middleware')
const webpackConfig = require(config.paths.root + '/webpack.config.js')

const app = express()

app.use(bodyParser.json())
app.use(compression({ threshold: 0 }))
app.use(requestLanguage({ languages: config.languages }))

const WEEK = 1000 * 60 * 60 * 24 * 7

app.use(
  express.static(config.paths.public, {
    maxAge: config.isDev ? 0 : WEEK,
  })
)

app.use(
  webpackUniversalAndHot({
    webpackConfig,
    isDev: config.isDev,
    isHot: true,
    clientEntry: 'main',
    serverEntry: 'server',
    clientStatsFileName: 'clientStats.json',
    serverStatsFileName: 'serverStats.json',
  })
)

app.listen(config.port, () =>
  console.log(`> Server started at ${config.siteUrl}`)
)
