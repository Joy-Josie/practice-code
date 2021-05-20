// 1. 数组不能进行二进制数据的操作
// 2. js数组不想java、python等语言效率高
// 3. buffer内存空间开辟出固定大小的内存

const str = 'helloworld'
let buf = Buffer.from(str)
console.log(buf)
console.log(buf.toString())

// 开辟一个空的buffer(缓存区)
const buf1 = Buffer.alloc(10)
buf1[0] = 10
console.log(buf1)
