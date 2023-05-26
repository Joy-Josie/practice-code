import { track, trigger } from './effect'

export const enum ReactiveFlags {
  IS_REACTIVE = '__v_isReactive'
}

export const mutableHandler = {
  get(target, key, recevier) {
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true
    }
    track(target, 'get', key)
    // 去代理对象上取值，就走get
    return Reflect.get(target, key, recevier)
  },
  set(target, key, value, recevier) {
    const oldValue = target[key]
    const result = Reflect.set(target, key, value, recevier)
    if (oldValue !== value) {
      trigger(target, 'set', key, value, oldValue)
    }
    // 去代理对象上设置值，执行set
    return result
  }
}
