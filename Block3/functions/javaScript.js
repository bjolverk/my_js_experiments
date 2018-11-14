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