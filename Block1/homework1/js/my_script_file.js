'using strict'

//В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:

var money,
    time;
/*
 ·      Первая будет спрашивать "Ваш бюджет на месяц?"

 ·      Вторая "Введите дату в формате YYYY-MM-DD"*/

money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

/*Создать объект appData, который будет содержать такие данные:

    ·      бюджет (передаем сюда переменную из п.2)

    ·      данные времени - timeData (передаем сюда переменную из п.2)

    ·      объект с обязательными расходами - expenses (смотри пункт 4)

    ·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)

    ·      массив данных с доп. доходом - income (оставляем пока пустым)

    ·      свойство savings (выставляем его как false)*/

let appData={
    budget : money,
    timeData : time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
}

/*
Задать пользователю по 2 раза вопросы:

    “Введите обязательную статью расходов в этом месяце”

    “Во сколько обойдется?”*/

let mandatoryItemOfExpenditure,
    amountOfExpenses;

mandatoryItemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце", "");
amountOfExpenses = +prompt("Во сколько обойдется?");
appData.expenses[mandatoryItemOfExpenditure] = amountOfExpenses;

mandatoryItemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце", "");
amountOfExpenses = +prompt("Во сколько обойдется?");
appData.expenses[mandatoryItemOfExpenditure] = amountOfExpenses;

//Проверяем
//console.log(appData);

// Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)

alert("Ваш бюджет на 1 день: "+ Math.round(appData.budget / 30,2));

