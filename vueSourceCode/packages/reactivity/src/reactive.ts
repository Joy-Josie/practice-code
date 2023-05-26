import { isObj } from '@vue/shared'
import { mutableHandler, ReactiveFlags } from './baseHandler'

// 1) 将数据转化成响应式数据，只能做对象代理
const reactiveMap = new WeakMap() // key只能是对象

export function reactive(target) {
  // 实现同一个对象代理多次，返回同一个代理
  if (!isObj(target)) {
    return
  }

  // 代理对象再次被代理，可以直接返回
  if (target[ReactiveFlags.IS_REACTIVE]) {
    return target
  }

  // 并没有重新定义属性，只是代理，在取值的时候会调用get，在赋值的时候会调用set
  const existingProxy = reactiveMap.get(target)

  // 判断当前对象是否已经响应式处理过
  if (existingProxy) {
    return existingProxy
  }

  // 第一次普通对象代理，通过new Proxy代理一次
  // 下次传入的是proxy，通过看是否有get方法，判断是否代理过

  const proxy = new Proxy(target, mutableHandler)
  reactiveMap.set(target, proxy)
  return proxy
}
