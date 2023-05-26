const { swap } = require('./utils.js')

exports.quickSort = (arr) => {
  process(arr, 0, arr.length - 1)
  return arr
}

function process(arr, l, r) {
  // 数组长度小于等于0 直接退出
  if (l >= r) return

  // 取数组最后一位作为基准值
  const num = arr[r]

  // 小于num的区间指针pl，大于num的区间指针pr，用于遍历数组的指针i
  let pl = l - 1,
    pr = r,
    i = l

  // 遍历指针小于最右侧区间则继续遍历
  while (i < pr) {
    // 若i位置小于num，小于num区间指针右移，
    if (arr[i] < num) {
      swap(arr, i++, ++pl)
    } else if (arr[i] === num) {
      i++
    } else {
      swap(arr, i, --pr)
    }
  }
  swap(arr, pr, r)
  process(arr, l, pl)
  process(arr, pr, r)
}
