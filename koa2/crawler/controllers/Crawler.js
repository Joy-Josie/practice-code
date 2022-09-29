const { startProcess } = require('../libs/utils')

class Crawler {
  crawlSliderData() {
    startProcess({
      path: '../crawlers/slider',
      async message(data) {
        console.log(data)
      },
      async exit(code) {
        console.log(code)
      },
      async error(err) {
        console.log(err)
      }
    })
  }
}

module.exports = new Crawler()
