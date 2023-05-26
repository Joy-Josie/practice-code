exports.bucketSort = (arr) => {
  const maxDigit = getMaxDigit(arr)
  process(arr, maxDigit)
  return arr
}

function getMaxDigit(arr) {
  let max,
    maxDigit = 0
  for (let i = 0; i < arr.length - 1; i++) {
    max = Math.max(arr[i], arr[i + 1])
  }
  while (max >= 1) {
    max = max / 10
    maxDigit++
  }
  return maxDigit
}

function process(arr, maxDigit, radix = 10) {
  let j = 0
  const tempArr = new Array(arr.length).fill(0)
  for (let i = 0; i < maxDigit; i++) {
    const count = new Array(radix).fill(0)
    for (j = 0; j < arr.length; j++) {
      const num = getDigit(arr[j], i)
      count[num]++
    }
    for (j = 1; j < count.length; j++) {
      count[j] += count[j - 1]
    }
    for (j = arr.length - 1; j >= 0; j--) {
      const num = getDigit(arr[j], i)
      tempArr[count[num] - 1] = arr[j]
      count[num]--
    }
    for (j = 0; j < arr.length; j++) {
      arr[j] = tempArr[j]
    }
  }
}

function getDigit(value, index) {
  return parseInt((value % 10 ** (index + 1)) / 10 ** index)
}
