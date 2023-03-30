exports.swap = function (arr, i, j) {
  arr[i] += arr[j]
  arr[j] = arr[i] - arr[j]
  arr[i] -= arr[j]
}

exports.calcTime = function (func, params) {
  const start = new Date().valueOf()
  const res = func(params)
  const end = new Date().valueOf()
  console.log(test(res))
  return end - start
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
