function fn() {
 console.log(1) 
}
console.log(typeof fn)  //function
fn()


//声明函数的三种方式 函数声明 函数表达式 箭头函数

//函数声明
function fn01(a,b) {
 console.log(a+b) 
}
//函数表达式 const修饰居多，因为函数也是对象
const fn02 = function(a,b){ 
 console.log(a+b) 
}
//箭头函数
const fn03 = (a,b) => {
  console.log(a+b)
}
fn01(4,5)
fn02(4,6)
fn03(4,7)
