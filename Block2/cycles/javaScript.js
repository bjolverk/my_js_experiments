let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}
console.log("-------------------------");

do {
    console.log(num);
    console.log("-------------------------");
    num++;
}while(num < 55);


for(let i = 1; i <= 100; i++){
    if(i % 3 == 0){
        continue;
    }
    console.log(i);
}
let a=3, b =2;
console.log( "ёжик" > "яблоко");