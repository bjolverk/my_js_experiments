function first() {
    setTimeout( function(){
        console.log(1);
    }, 10 );
}
function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log("Я учу " + lang);
    callback();
}

<<<<<<< HEAD
function done(){
    console.log("Я прошёл третий урок");
}

learnJS("JavaScript", done); //Внимание! У done нет скобок
=======
/*
learnJS("JavaScript", function(){
    console.log("Я прошёл третий урок");
});
*/

function theEnd(){
    console.log("Я прошёл третий урок");
}

learnJS("JavaScript", theEnd);
>>>>>>> 9f5cb88bb347cb1b2e2d4650070a8c06097ac3c2
