const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://check.noctf.ru/',
      secure: false,
      changeOrigin: true,
      headers: {
        Connection: 'keep-alive',
      },
    })
  )
}
