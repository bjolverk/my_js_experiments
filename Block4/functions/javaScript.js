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


function done(){
    console.log("Я прошёл третий урок");
}

learnJS("JavaScript", done); //Внимание! У done нет скобок

/*
learnJS("JavaScript", function(){
    console.log("Я прошёл третий урок");
});
*/

function theEnd(){
    console.log("Я прошёл третий урок");
}

learnJS("JavaScript", theEnd);

