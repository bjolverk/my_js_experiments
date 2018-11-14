/*
let num = 20;

function showFirstMessage(params) {
    alert(params);
    num = 10;
}

showFirstMessage("Hello World");

console.log(num);
*/

function calc(a, b){
    return(a + b);
}

console.log(calc(3,4));

console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();

console.log(anotherNum);