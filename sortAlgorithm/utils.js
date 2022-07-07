exports.swap = function (arr, i, j) {
  arr[i] += arr[j]
  arr[j] = arr[i] - arr[j]
  arr[i] -= arr[j]
}

exports.calcTime = function (func, params) {
  const start = new Date().valueOf()
  console.log(func(params))
  const end = new Date().valueOf()
  console.log(start, end)
  return end - start
}
