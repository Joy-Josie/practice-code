let promise1 = new Promise(function (resolve, reject) {
  console.log('promise1 entered')
  setTimeout(function () {
    resolve()
  }, 1000)
})

promise1
  .then(function () {
    return new Promise(function (resolve) {
      console.log('promise1 resolved')
      setTimeout(resolve, 1000)
    })
  })
  .then(function () {
    console.log('promise2 resolved')
  })