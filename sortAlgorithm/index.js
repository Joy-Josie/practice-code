const { bubbleSort } = require('./bubble.js')
const { insertionSort } = require('./insertion.js')
const { calcTime, copyArr } = require('./utils.js')
const { mergeSort } = require('./merge')

function makeArr(times) {
  const arr = []
  const length = Number((Math.random() * times).toFixed(0))
  for (let i = 1; i < length; i++) {
    arr.push(Number((Math.random() * times).toFixed(0)))
  }
  return arr
}
const testArr = makeArr(100000)

console.log(calcTime(bubbleSort, copyArr(testArr)))
console.log(calcTime(insertionSort, copyArr(testArr)))
console.log(calcTime(mergeSort, copyArr(testArr)))
