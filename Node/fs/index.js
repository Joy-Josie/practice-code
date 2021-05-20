const fs = require('fs')

let fd = fs.openSync('hello.txt', 'r')
console.log(fd)
const buffer = Buffer.alloc(20)

// 异步读取文件方法的封装
function fsRead(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, { flag: 'r', encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

fsRead('hello.txt').then((res) => {
  console.log(res, '1')
})

let content = fs.readFileSync('hello.txt', { flag: 'r', encoding: 'utf-8' })
console.log(content, '2')
