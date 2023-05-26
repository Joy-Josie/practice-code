Function.prototype.myBind = myBind

function myBind(obj, ...args) {
  console.log('bind', this)
  if (obj instanceof Object) {
    obj.fn = this
  } else {
    obj = {}
    obj.fn = this
  }
  return () => {
    return obj.fn(...args)
  }
}

function fn(a, b, c) {
  console.log(this)
  console.log(a, b, c)
  return c
}

const cb = fn.myBind({ x: 123123 }, 1, 2, 3)
cb()
