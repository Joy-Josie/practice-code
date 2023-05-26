const { swap } = require('./utils.js')

exports.heapSort = (arr) => {
  process(arr)
  return arr
}

function process(arr) {
  // 初始化数组，使其为大根堆
  initHeap(arr)
  let heapSize = arr.length
  while (heapSize > 1) {
    swap(arr, 0, --heapSize)
    heapify(arr, 0, heapSize)
  }
}

function initHeap(arr) {
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i)
  }
  // for (let i = arr.length - 1; i > 0; i--) {
  //   heapify(arr, i, arr.length)
  // }
}

function getParentIndex(index) {
  return Math.floor((index - 1) / 2)
}

function heapInsert(arr, index) {
  while (arr[index] > arr[getParentIndex(index)]) {
    swap(arr, index, getParentIndex(index))
    index = getParentIndex(index)
  }
}

function heapify(arr, index, heapSize) {
  let left = index * 2 + 1
  // 若存在子元素
  while (left < heapSize) {
    // 求当前小树最大值
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left
    largest = arr[largest] > arr[index] ? largest : index
    // 若当前值已经为最大值，则已是最大根堆跳出循环
    if (largest === index) {
      break
    }
    // 若子元素最大值大于当前值，交换当前值和子元素最大值
    swap(arr, largest, index)
    index = largest
    left = index * 2 + 1
  }
}
