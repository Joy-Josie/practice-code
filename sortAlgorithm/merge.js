exports.mergeSort = arr => {
  process(arr, 0, arr.length - 1)
  return arr
}

function process(arr, l, r) {
  if (l === r) {
    return
  }
  const mid = Math.floor((l + r) / 2)
  process(arr, l, mid)
  process(arr, mid + 1, r)
  merge(arr, l, r, mid)
}

function merge(arr, l, r, mid) {
  const tempArr = []
  let pl = l,
    pr = mid + 1
  while (pl <= mid && pr <= r) {
    tempArr.push(arr[pl] <= arr[pr] ? arr[pl++] : arr[pr++])
  }
  while (pl <= mid) {
    tempArr.push(arr[pl++])
  }
  while (pr <= r) {
    tempArr.push(arr[pr++])
  }
  for (let i = 0; i <= r - l; i++) {
    arr[l + i] = tempArr[i]
  }
}
