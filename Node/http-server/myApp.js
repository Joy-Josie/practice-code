const http = require('http')
const path = require('path')
const url = require('url')

class myApp {
  constructor() {
    this.server = http.createServer()
    this.reqEvent = {}
    this.server.on('request', (req, res) => {
      // 解析路径
      const pathObj = url.parse(req.url)
      if (pathObj.path in this.reqEvent) {
        this.reqEvent[pathObj.path](req, res)
      } else {
        res.setHeader('content-type', 'text/html;charset=utf-8')
        res.end('<h1>404!页面找不到</h1>')
      }
    })
  }

  on(url, callback) {
    this.reqEvent[url] = callback
  }

  run(port, callback) {
    this.server.listen(port, callback)
  }
}

module.exports = myApp
