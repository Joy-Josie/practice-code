class Promise {
  constructor(handleFunc) {
    this.status = 'pending'
    this.value = undefined
    this.fulfilledList = []
    this.rejectedList = []

    handleFunc(this.triggerResolve.bind(this), this.triggerReject.bind(this))
  }

  triggerResolve(val) {
    // 当前的promise状态已经变成了resolved，要执行后续的操作
    setTimeout(() => {
      if (this.status !== 'pending') return
      if (val instanceof Promise) {
        val.then(
          value => { },
          err => { }
        )
      } else {
        // resolve方法传入的是普通值
        this.status = 'fulfilled'
        this.value = val
        this.triggerFulfilled(val)
      }
    })
  }

  triggerFulfilled(val) {
    this.fulfilledList.forEach(item => item(val))
    this.fulfilledList = []
  }

  triggerReject() {
    // 当前的promise状态已经变成了rejected，要执行后续的操作
    setTimeout(() => {

    }, 0)
  }

  then(onFulfilled, onRejected) {
    const { value, status } = this

    return new Promise((onNextFulfilled, onNextRejected) => {
      function onFinalFulfilled(val) {
        if (typeof onFulfilled !== 'function') {
          onNextFulfilled(val)
        } else {
          const res = onFulfilled(val)
          if (res instanceof Promise) {
            res.then(onNextFulfilled, onNextRejected)
          } else {
            onNextFulfilled(res)
          }
        }
      }

      switch (status) {
        case 'pending': {
          this.fulfilledList.push(onFinalFulfilled)
          this.rejectedList.push(onRejected)
          break
        }
      }
    })
  }

  static resolve() {

  }

  static reject() {

  }

  static all() {

  }

  static race() {

  }
}

const promise = new Promise(function (resolve, reject) {
  resolve('aaa')
})

const promise1 = new Promise(function (resolve) {
  resolve(promise)
})

promise
  .then(function (str) { console.log(str); return promise1 })
  .then(function (str) { console.log(str) })
