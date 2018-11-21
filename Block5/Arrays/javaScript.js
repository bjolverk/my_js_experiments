/*
let options = {
    width : 1024,
    height : 1024,
    name : "test"
};

console.log(options.name);
options.bool = false;
options.colors={
    border:"black",
    bg:"red"

};

// let obj = new Object();

options = {
    width: 1024,
    height:1024,
    name:"test"
};

console.log(options.name);

options.bool = false;

options.colors = {
    border:"black",
    bg:"red"
};

delete options.bool;

console.log(options);

for(let key in options){
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
};

for (let key in options){
    console.log('Свойство ' +  key + ' имеет значение ' + options[key]);
};

console.log(Object.keys(options).length);

let arr = [1,2,3,4,5];

//arr[99]= 99;

console.log(arr.length);

console.log(arr);

arr.pop();

console.log(arr);

arr.push("5");

console.log(arr);

arr.shift();

console.log(arr);

arr.unshift("1");

console.log(arr);

//for(let i=0; i <arr.length; i++ ){
//    console.log(arr[i]);
//}
arr.forEach(function(item, i, mass){ //тот самый callback
    console.log(i + ': ' + item + " (массив: " + mass + ")");
});

let mass = [1, 3, 4, 6, 7];

for(let key of mass){ // in = Ключи массива
    console.log(key); //of = Значения массива
}
*/
/*
let ans = prompt("", ""),
    arr = [];

arr = ans.split(",");
console.log(arr);
*/
/*
let arr = ["aawe", 'zzz', 'pp', 'rqa'],
    i = arr.join(', ');
console.log(i);
*/
/*
let arr = ["aawe", 'zzz', 'pp', 'rqa'],
    i = arr.sort();
console.log(i);
*/

let arr = [1, 15, 4],
    i = arr.sort(compareNum);
function compareNum(a, b){
    return a - b;
}
console.log(i);