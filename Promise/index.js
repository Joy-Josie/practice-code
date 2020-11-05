let promise = new Promise((res, rej) => {
  res()
})

promise.then(function () { console.log('first then') })
promise.then(function () { console.log('second then') })