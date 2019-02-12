const proxy = require('http-proxy-middleware');

module.exports = (app) => {
    const backend = 'http://localhost:5000'
    app.use(proxy('/api/**', {target: backend, changeOrigin: true}))
    app.use(proxy('/auth/*', {target: backend, changeOrigin: true}))
}