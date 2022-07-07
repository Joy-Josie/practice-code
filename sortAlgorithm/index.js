const { bubbleSort } = require('./bubble.js')
const { insertionSort } = require('./insertion.js')
const { calcTime } = require('./utils.js')

function makeArr() {
  const arr = []
  const length = Number((Math.random() * 100000).toFixed(0))
  for (let i = 1; i < length; i++) {
    arr.push(Number((Math.random() * 100000).toFixed(0)))
  }
  return arr
}

console.log(calcTime(bubbleSort, makeArr()))
console.log(calcTime(insertionSort, makeArr()))
