'use strict';

var leftBorderWidth = 1; // Глобальная переменная

let second = 2; // Локальная переменная
const pi = 3.14; // Константа


console.log(4 / 0);
console.log("infinity" * 9);

//console.log(something); // Когда чего- то нет, тип= null
let something1;
console.log(typeof(something1)); // Когда есть, но не присвоено значение- undefined


let persone ={
    name : "John",
    age : 25,
    isMarried : false
};

console.log(persone.name); // Обращаемся к объекту, как к объекту
console.log(persone["name"]); // Не хорошо, но можно обращаться как к массиву

let arr = [
    "plum.png",
    "orange.jpg",
    "apple.bmp"
];

console.log(arr[0]);

//alert("Hello, World!");

//let answer = confirm("Are you here?");
//console.log(answer);
//let answer = +prompt("Ест ли Вам 18", "Да");
// console.log(typeof(answer));
// console.log("arr" + " - object");
// console.log(4 + " - object");
let incr = 10,
    decr = 10;

// incr++;
// decr--;
console.log(++incr);
console.log(decr--);

console.log(5 % 2);

console.log("2" === 2);

let isChecked = true,
    isClose = true;

console.log(isChecked && isClose);

