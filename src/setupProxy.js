const target = Number(process.env.ONLINE)
  ? process.env.API
  : process.env.OFFLINE_API
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
