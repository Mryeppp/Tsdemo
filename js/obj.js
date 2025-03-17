// 对象
/**
 * 数据类型
 * 原始值
 *  1.数值 Number
 *  2.大整数 Bigint
 *  3.字符串 String
 *  4.布尔值 Boolean
 *  5.未定义 Undefined
 *  6.空 Null
 *  7.符号 Symbol

 * 对象 Object
 */

let Mysymbol = Symbol()
let obj_01 = {
    name: "obj_01",
    age: 18,
    [Mysymbol]:Symbol('这是Symbol属性'), //Symbol属性
		//Symbol属性要带[] //普通属性：Mysymbol: Symbol("这是一个普通属性"),
    sayName: function () {
        console.log(this.name);
    },
    getInfo: function() {
        return {
            mysymbol: this[Mysymbol], //访问Symbol属性也需要用括号而不能用.
            name: this.name,
            age: this.age
        };

    }
};
for(let propnames in obj_01){
	console.log(propnames,obj_01[propnames])
	
}

// Info = obj_01.getInfo()
// console.log(Info)
// console.log(typeof(obj_01[Mysymbol]))
console.log("----------")

let obj_02 = {
  [Symbol()]: "Symbol属性是不可枚举的属性",
  name: "obj_02",
  age: 17,
  [Mysymbol]: Symbol("同样不可以枚举"),
  sayName: function () {
    console.log(this.name);
  },
  getInfo: function() {
    return {
      mysymbol: this[Mysymbol],
      name: this.name,
      age: this.age, 
    };
  }
};
// 枚举 for-in
for(let propnames in obj_02){
    //console.log(1) // 执行4次，因为有4个属性可以枚举
    console.log(propnames,obj_02[propnames]) //获得所有属性名，以及属性值
    //再次展示了.和[]的区别，
        /**
        * []访问属性值时，[]中放的时变量
        * .访问属性值时，.后应该写的是具体的属性名
        * propnames不是属性名，而是变量。所以用[]才能访问属性值
        */
}

info = obj_02.getInfo()
console.log(info)
console.log(typeof(obj_02.Mysymbol))