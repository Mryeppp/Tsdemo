"use strict";
class User {
    constructor(info) {
        this._password = "12365";
        this.info = info;
    }
    get password() {
        return "****";
    }
    set password(newPasswd) {
        this._password = newPasswd;
    }
}
const user = new User("info");
console.log(user.password);
class abc extends User {
    constructor(info) {
        super(info);
    }
}
const abd = new abc("info");
console.log(abd.info);
console.log(abd.password);
const obj = {
    prop1: "a",
    prop2: 18,
    prop3: false
};
class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    fn(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return (a + b);
        }
        else if (typeof a === 'string' && typeof b === 'string') {
            return (a + b);
        }
        else {
            console.log("still need to define operator +");
        }
        return a;
    }
}
const myclass = new MyClass("a", 18);
console.log("calss implements interface");
const res = myclass.fn(1, 2);
console.log(res);
//abstract class 
// 抽象类中的抽象方法必须在子类中重写
class Animal {
    move() {
        console.log("move");
    }
}
class cat extends Animal {
    constructor() {
        super(...arguments);
        this.name = "Dog";
        this.age = 2;
    }
    MakeSound() {
        console.log("woof");
    }
}
