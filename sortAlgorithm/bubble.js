const { swap } = require('./utils.js')

exports.bubbleSort = function (arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
      }
    }
  }
  return arr
}
