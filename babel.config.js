const config = require('config')

module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: false, modules: false }],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-optional-chaining', { loose: true }],
    ['@babel/plugin-transform-runtime', { useESModules: true }],
    ['emotion', { sourceMap: config.isDev, autoLabel: config.isDev }],
  ],
}
