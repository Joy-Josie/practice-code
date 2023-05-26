function sleep(time = 2) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log('promise resolved')
      resolve()
    }, time * 1000)
  )
}

const promiseCreatorList = [sleep, sleep, sleep]

function all(list) {
  list.reduce((memo, current) => {
    return memo.then(current)
  }, Promise.resolve())
}

all(promiseCreatorList)
