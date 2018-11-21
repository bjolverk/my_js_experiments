<<<<<<< HEAD
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

=======
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
>>>>>>> 9f5cb88bb347cb1b2e2d4650070a8c06097ac3c2
delete options.bool;

console.log(options);

<<<<<<< HEAD
for(let key in options){
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
};
=======
for (let key in options){
    console.log('Свойство ' +  key + ' имеет значение ' + options[key]);
};

console.log(Object.keys(options).length);
>>>>>>> 9f5cb88bb347cb1b2e2d4650070a8c06097ac3c2
