class BaseRouter {
  constructor() {
    this.routes = {}
    window.addEventListener('load', this.refresh.bind(this)) // 处理页面首次加载
    window.addEventListener('hashchange', this.refresh.bind(this))// 处理页面hash变化
  }

  route(path, callback) {
    // 像this.routescun存储path以及callback的对应关系
    this.routes[path] = callback || function () { }
  }

  refresh() {
    // 刷新页面
    const hash = `/${location.hash.slice(1) || ''}`
    this.routes[hash]()
  }

}

const body = document.querySelector('body')

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
