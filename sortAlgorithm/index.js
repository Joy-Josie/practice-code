const { bubbleSort } = require('./bubble')
const { insertionSort } = require('./insertion')
const { calcTime, copyArr, makeArr } = require('./utils')
const { mergeSort } = require('./merge')
const { quickSort } = require('./quick')
const { heapSort } = require('./heap')
const { bucketSort } = require('./bucket')

const testArr = makeArr(1000000)
// const testArr = [109, 102, 12, 23, 28, 23, 3, 89, 309, 103]

console.log('length', testArr.length)
// console.log(calcTime(bubbleSort, copyArr(testArr)))
// console.log(calcTime(insertionSort, copyArr(testArr)))
console.log(calcTime(mergeSort, copyArr(testArr)))
console.log(calcTime(quickSort, copyArr(testArr)))
console.log(calcTime(heapSort, copyArr(testArr)))
console.log(calcTime(bucketSort, copyArr(testArr)))
