// var fn1 = () => "test function()";
//
// var fn2 = (a, b) => a + b;
//
// console.log(fn2(1, 5));
//
// var fn4 = (a, b) => {
//     var m = a + 2;
//     return m * b;
// };
//
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getMessage() {
//         console.log(this.name + " is " + this.age + " years old!");
//     }
//     static showInfo() {
//         console.log(this.name + " is show info!");
//     }
// }
//
// class Cat extends Animal {
//     constructor(name, age, color) {
//         super(name, age);
//         this.color = color;
//     }
//     getName() {
//         console.log('cat color is ' + this.color);
//     }
// }

// var cat = new Animal("SanZhang", 18);
// cat.getMessage();

// var catMan = new Cat("joms", 90, "red");
// catMan.getName();
// catMan.getMessage();


// template string

// var name = "cat";
// var age = "11";
//
// var str = `${name} is ${age} years old!`;
// console.log(str);

import {a,b} from './module';
import asyncAction from './module2';
console.log(b(1,2));
new asyncAction().sayHello();
