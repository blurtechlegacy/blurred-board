const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://check.noctf.ru',
      secure: false,
      changeOrigin: true,
      headers: {
        Connection: 'keep-alive',
      },
    })
  )
}
