class User {
  private _password: string = "12365"
  public info: string
  constructor(info: string){
      this.info = info
  }

  get password(): string { 
      return "****" 
  }
  set password(newPasswd: string) {
      this._password = newPasswd
  }
}

const user = new User("info")
console.log(user.password)

class abc extends User{
  constructor(info: string){
      super(info)
  }
}

const abd = new abc("info")
console.log(abd.info)
console.log(abd.password)


// interface 
interface a {
  prop1: string,
  prop2: number,
}
interface b extends a {
  prop3: boolean
}
const obj: b  = {
  prop1: "a",
  prop2: 18,
  prop3: false
}

// calss implements interface
interface inf {
  name: string;
  age: number;
  fn<T>(a: T, b: T): T;
}

class MyClass implements inf {
  name: string;
  age: number;
  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
  fn<T>(a: T, b: T): T {
      if (typeof a === 'number' && typeof b === 'number') {
          return (a + b) as T;
      } else if (typeof a ==='string' && typeof b ==='string') {
          return (a + b) as T;
      }else{
         console.log("still need to define operator +") 
      }
      return a
  }
}

const myclass = new MyClass("a",18)
console.log("calss implements interface")
const res = myclass.fn(1,2)
console.log(res)


//abstract class 
// 抽象类中的抽象方法必须在子类中重写
abstract class Animal {
  abstract name : string
  abstract age: number
  abstract MakeSound(): void
  move(){
      console.log("move")
  }
}
class cat extends Animal {
  name: string = "Dog"
  age:number = 2
  MakeSound() {
      console.log("woof")
  }
}

interface abcdf {
  
}
