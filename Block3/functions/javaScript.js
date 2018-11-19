/*
let num = 20;

function showFirstMessage(params) {
    alert(params);
    num = 10;
}

showFirstMessage("Hello World");

console.log(num);
*/
/*
function calc(a, b){ //Такую функцию можно вызывать до определения
    return(a + b);
}
*/
/*
let calc = function(a, b){ //А такую- нет. Даже если через var
    return(a + b);
}
*/
let calc = (a, b) => a + b ; // Краткая запись предыдущего!
console.log(calc(3,4));

console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();

console.log(anotherNum);

let str = "Test";

console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

/*
var counter = (function () {
    var current = 0;
    return function () {
      current++;
      return current;
    }
  })();
  
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
  console.log(counter()); // 4
*/
/*
function createCounter(){
    let counter = 0;
    let myFunction = function(){
        return ++counter;
    }
    return myFunction;
}
let increment = createCounter();

for(let i=0; i<10; i++){
    let c = increment();
    console.log(c);
}
*/

function counter() {
    let i = 2;
    return function(){
        return i=Math.pow(i, 5);
    }
}
let a = counter();
console.log(a());
console.log(a());
console.log(a());
console.log(a());