class BaseRouter {
  constructor() {
    this.routes = {}
    // location.hash  Hash的方式
    this.go(location.pathname)
    console.log(location)
  }

  go(path) {
    // 跳转并执行对应的callback
    window.history.pushState({ path }, null, path)
    const cb = this.routes[path]
    cb && cb()
  }

  _bindPopState() {
    // 演示一下popstate事件触发后，会发生什么
    window.addEventListener('popstate', e => {
      const path = e.state && e.state.path
      this.route.routes[path] && this.routes[path]()
    })
  }

  route(path, callback) {
    this.routes[path] = callback || function () { }
  }

}

const body = document.querySelector('body')
const container = document.querySelector('.container')

function changeBgColor(color) {
  body.style.backgroundColor = color
}

const Router = new BaseRouter()

Router.route('/', function () {
  changeBgColor('white')
})

Router.route('/green', function () {
  changeBgColor('green')
})

Router.route('/gray', function () {
  changeBgColor('gray')
})

container.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    e.preventDefault()
    Router.go(e.target.getAttribute('href'))
  }
})