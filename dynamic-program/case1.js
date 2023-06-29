const calcTime = function (func, params) {
  const start = new Date().valueOf()
  console.log(func(params))
  const end = new Date().valueOf()
  console.log((end - start) / 1000 + 's')
}

function process(str) {
  calcTime(getTransWays, str)
  calcTime(dynamicPlanning, str)
}

function getTransWays(str, i = 0) {
  if (i === str.length) {
    return 1
  }
  const num = Number(str.slice(i, i + 2))
  if (num > 24 || num < 10) {
    return getTransWays(str, i + 1)
  } else {
    return getTransWays(str, i + 2) + getTransWays(str, i + 1)
  }
}

function dynamicPlanning(str) {
  const len = str.length
  const dp = Array(len + 1).fill(0)
  dp[len] = 1
  for (let j = len - 1; j >= 0; j--) {
    const num = Number(str.slice(j, j + 2))
    if (num > 24 || num < 10) {
      dp[j] = dp[j + 1]
    } else {
      dp[j] = dp[j + 2] + dp[j + 1]
    }
  }
  return dp[0]
}

process('1111111111111111112312312423897989723471091723507123912498212912849')
