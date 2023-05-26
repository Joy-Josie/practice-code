// 保存当前effect
export let activeEffect = undefined

class ReactiveEffect {
  public parent = null // 存储当前effect父节点
  public deps = []
  public active = true // 这个effect默认是激活状态
  constructor(public fn) {}
  // 执行effect
  run() {
    // 非激活的状态，只需要执行函数，不需要收集依赖
    if (!this.active) {
      return this.fn()
    }

    // 依赖收集  核心就是将当前effect和属性关联起来
    try {
      // 存储当前effect父节点
      this.parent = activeEffect
      // 当稍后调用取值操作的时候 就可以获取到这个全局的activeEffect
      activeEffect = this
      return this.fn()
    } finally {
      activeEffect = this.parent
    }
  }
}

export function effect(fn) {
  // 这里fn可以根据状态变化重新执行，effect可以嵌套

  const _effect = new ReactiveEffect(fn) // 创建响应式的effect

  _effect.run()
}

// 一个effect对应多个属性， 一个属性对应多个effect
const targetMap = new WeakMap()
export function track(target, type, key) {
  if (!activeEffect) return
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  let shouldTrack = !dep.has(activeEffect)
  if (shouldTrack) {
    dep.add(activeEffect)
    activeEffect.deps.push(dep)
  }
}

export function trigger(target, type, key, value, oldValue) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  effects &&
    effects.forEach((effect) => {
      // 在执行effect的时候，可能又要执行自己，需要屏蔽掉，避免无限调用
      if (effect !== activeEffect) effect.run()
    })
}
