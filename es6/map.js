let arr = [
  ['a', 1],
  ['b', 2],
  ['c', 3]
];
let map = new Map(arr);
// map.clear(); 清空map
// map.delete('a'); 参数为数据的key值 返回值为删除是否成功
// map.get('a'); 参数为数据的key值 返回值为value
// map.has('a'); 参数为数据的key值 返回值为是否含有这一项
// map.set(key,val); 参数为key和value 返回值为map本身
console.log(map.get('a'));