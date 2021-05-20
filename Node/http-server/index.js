const myApp = require('./myApp')

const app = new myApp()

app.on('/', (req, res) => {
  res.setHeader('content-type', 'text/html;charset=utf-8')
  res.end('这是首页')
})

app.on('/home', (req, res) => {
  res.end('这是home页')
})

app.run(80, () => {
  console.log('服务已启动：http://127.0.0.1')
})
