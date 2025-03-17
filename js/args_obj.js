// 函数作为参数
// 对象可以作为参数传递 传递的是变量的值(对象的内存地址)
const fn = (a = {
  name: "A",
  age: 17
}) => {
  console.log(a);
  a.age = 18
  console.log(a);
  
}
fn()
fn()
