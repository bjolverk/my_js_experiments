'using strict'

var money,
    time;


money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData={
    budget : money,
    timeData : time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
}



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

appData.moneyPerDay = Math.round(appData.budget / 30);

alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
//console.log(appData);
if( appData.moneyPerDay < 100 ){
    console.log("Минимальный уровень достатка");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень дохода");
} else if(appData.moneyPerDay > 2000){
    console.log("Высокий уровень дохода");
} else{
    console.log("Ошибка");
}
