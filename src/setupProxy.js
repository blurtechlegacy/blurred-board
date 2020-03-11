const target = process.env.API
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target,
      secure: false,
      changeOrigin: true,
      headers: {
        Connection: 'keep-alive',
      },
    })
  )
}
