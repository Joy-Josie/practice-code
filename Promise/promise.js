class Promise {
  constructor(handleFunc) {
    this.status = 'pending'
    this.value = undefined
    this.fulfilledList = []
    this.rejectedList = []
    this.count = 0

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

  triggerReject(val) {
    // 当前的promise状态已经变成了rejected，要执行后续的操作
    setTimeout(() => {
      if (this.status !== 'pending') return
      if (val instanceof Promise) {
        val.then(
          value => { },
          err => { }
        )
      } else {
        // resolve方法传入的是普通值
        this.status = 'rejected'
        this.value = val
        this.triggerRejected(val)
      }
    })
  }

  triggerRejected(val) {
    this.rejectedList.forEach(item => item(val))
    this.rejectedList = []
  }

  then(onFulfilled, onRejected) {
    const { value, status } = this
    this.count++

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

      function onFinalRejected(val) {
        if (typeof onRejected !== 'function') {
          onNextRejected(val)
        } else {
          let res
          try {
            res = onRejected(val)
          } catch (err) {
            onNextRejected(err)
          }
          if (res instanceof Promise) {
            res.then(onNextFulfilled, onNextRejected)
          } else {
            onNextFulfilled(res)
          }
        }
      }
      console.log(status, this.count)
      switch (status) {
        case 'pending': {
          this.fulfilledList.push(onFinalFulfilled)
          this.rejectedList.push(onFinalRejected)
          break
        }
        case 'fulfilled': {
          onFinalFulfilled(value)
          break
        }
        case 'rejected': {
          onFinalRejected(value)
          break
        }
      }
    })
  }

  catch(onRejected) {

  }

  static resolve(val) {
    if (val instanceof Promise) return val
    return new Promise(resolve => resolve(val))
  }

  static reject(val) {
    return new Promise((res, reject) => reject(val))
  }

  static all(list) {
    return new Promise((resolve, reject) => {
      let count = 0
      const values = []
      for (const [i, promiseinstance] of list.entries()) {
        Promise.resolve(promiseinstance)
          .then(
            res => {
              values[i] = res
              count++
              if (count === list.length) resolve(values)
            },
            err => {
              values[i] = err
              count++
              if (count === list.length) reject(err)
            }
          )
      }
    })
  }

  static race(list) {
    return new Promise((resolve, reject) => {
      list.forEach(item => {
        Promise.resolve(item)
          .then(
            res => {
              resolve(res)
            },
            err => {
              reject(err)
            }
          )
      })
    })
  }
}