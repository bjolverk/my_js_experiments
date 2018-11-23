let soldier ={
    health:400,
    armor:100
};

let john = {
    health:100
};

john.__proto_=soldier;

console.log(john);
console.log(john.armor);