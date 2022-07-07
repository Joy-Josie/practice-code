const { swap } = require('./utils.js')

exports.insertionSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i - j] < arr[i - j - 1]) swap(arr, i - j, i - j - 1)
      else break
    }
  }
  return arr
}
