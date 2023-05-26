exports.swap = function (arr, i, j) {
  if (i === j) return
  arr[i] += arr[j]
  arr[j] = arr[i] - arr[j]
  arr[i] -= arr[j]
}

exports.calcTime = function (func, params) {
  const start = new Date().valueOf()
  const res = func(params)
  const end = new Date().valueOf()
  return [(end - start) / 1000 + 's', test(res)]
}

exports.makeArr = function (times) {
  const arr = []
  const length = times + 1
  for (let i = 1; i < length; i++) {
    arr.push(Number((Math.random() * times).toFixed(0)))
  }
  return arr
}

function test(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false
  }
  return true
}

exports.copyArr = function (arr) {
  return JSON.parse(JSON.stringify(arr))
}
