'using strict';

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
    while (isNaN(money) || money=="" || money==null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();




let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}



function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let need =  prompt("Введите обязательную статью расходов в этом месяце", ""),
            coast = +prompt("Во сколько обойдется?");
        if( (typeof(need))==='string' && (typeof(need))!=null && (typeof(coast)) !==null 
        && need !="" && coast != "" && need.length < 50){
            console.log("done!");
            appData.expenses[need]=coast;
        } else {
            console.log("Данные не корректны");
            i--;
        }
    };
}

chooseExpences();

function chooseOptExpenses() {
    userAnswer = confirm("Будут ли у Вас дополнительные траты?");
    if(userAnswer){
        for(let i = 0; i < 3; i++){
            let need =  prompt("Введите необязательную статью расходов в этом месяце", ""),
            coast = +prompt("Во сколько обойдется?");

            if( (typeof(need))==='string' && (typeof(need))!=null && (typeof(coast)) !==null 
            && need !="" && coast != "" && need.length < 50){
            console.log("done!");
            appData.expenses[need]=coast;
        }
    } else{
        console.log("Как хотите");
    }
}
/*
let a= 0;
while(a < 2){
    let need =  prompt("Введите обязательную статью расходов в этом месяце", ""),
    coast = +prompt("Во сколько обойдется?");
    if( (typeof(need))==='string' && (typeof(need))!=null && (typeof(coast)) !==null
    && need !="" && coast != "" && need.length < 50){
        console.log("done!");
        appData.expenses[need]=coast;
        a++;
    } else {
        console.log("Данные не корректны");
        a--;
    }
}
*/
/*
let a= 0;
do{
    let need =  prompt("Введите обязательную статью расходов в этом месяце", ""),
    coast = +prompt("Во сколько обойдется?");
    if( (typeof(need))==='string' && (typeof(need))!=null && (typeof(coast)) !==null
    && need !="" && coast != "" && need.length < 50){
        console.log("done!");
        appData.expenses[need]=coast;
        a++;
    } else {
        console.log("Данные не корректны");
        a--;
    }

}while(a < 2);
*/
// appData.moneyPerDay = Math.round(appData.budget / 30);
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
    
}
detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень дохода");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень дохода");
    } else {
        console.log("Ошибка");
    }
}
detectLevel();

//console.log(appData);


function checkSavings(params) {
    if (appData.savings==true) {
        let save= +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");

        appData.monthIcome = save/100/12*persent;
        alert("Месячный доход с вашего депозита:" + appData.monthIcome);
    }
}