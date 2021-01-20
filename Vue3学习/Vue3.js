// vue3中响应式原理：利用Proxy对象对数据进行拦截

function isObject(obj) {
  return typeof obj === "object" || obj === null;
}

function reactive(obj) {
  if (typeof obj != "object" && obj != null) {
    return obj;
  }
  return new Proxy(obj, {
    get(target, key, receiver) {
      const res = Reflect.get(...arguments);
      console.log(`获取${key}：${res}`);

      return isObject(res) ? reactive(res) : res;
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(...arguments);
      console.log(`设置${key}：${value}`);
      return res;
    },
    deleteProperty(target, key) {
      const res = Reflect.deleteProperty(...arguments);
      console.log(`删除${key}`);
      return res;
    },
  });
}

const react = reactive({ foo: "foo", bar: { a: 1 } });
// 1.获取
react.foo;
// 2.修改
react.foo = "boo";
// 3.删除
delete react.foo;
// 4.新增
react.baz = "baz";
// 5.嵌套对象
react.bar.a;
