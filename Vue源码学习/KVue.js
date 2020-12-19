// 定义KVue构造函数
class KVue {
  constructor(options) {
    // 保存选项
    this.$options = options

    // 传入data
    this.$data = options.data

    // 响应化处理
    this.observe(this.$data)
  }

  observe(value) {
    if (!value || typeof value !== 'object') {
      return;
    }

    // 遍历value
    Object.keys(value).forEach(key => {
      // 响应式处理
      this.defineReactive(value, key, value[key])
    })
  }

  defineReactive(obj, key, val) {
    // 递归遍历
    this.observe(val);

    // 给obj的每一个key定义拦截
    Object.defineProperty(obj, key, {
      get() {
        return val;
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal
          console.log(`${key}属性更新了`)
        }
      }
    })
  }
}