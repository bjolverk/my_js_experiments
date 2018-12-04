let startCalculation = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    inputsAll = document.getElementsByClassName('expenses-item'),
    expensesBtnApprove = document.getElementsByTagName('button')[0],
    optionalBtnApprove = document.getElementsByTagName('button')[1],
    calculateBtn = document.getElementsByTagName('button')[2],
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    possibleIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checkbox'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('year-value'),
    monthValue = document.querySelector('month-value'),
    dayValue = document.querySelector('.day-value');

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
        savings: true,
        chooseExpences: function(){
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
            }
        },
        detectDayBudget: function(){
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
        },
        detectLevel: function() {
            if (appData.moneyPerDay < 100) {
                console.log("Минимальный уровень достатка");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень дохода");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Высокий уровень дохода");
            } else {
                console.log("Ошибка");
            }
        },
        checkSavings: function() {
            if (appData.savings==true) {
                let save= +prompt("Какова сумма накоплений?"),
                    persent = +prompt("Под какой процент?");
                    appData.monthIcome = save/100/12*persent;
                alert("Месячный доход с вашего депозита:" + appData.monthIcome);
            }
        },
        chooseOptExpenses: function() {
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
                }
            } else{
                console.log("Как хотите");
            }
        },
        chooseIncome: function(){
            let isCorrect = false;
            while(!isCorrect){
                let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
                if( (typeof(items)) == "string" && isNaN(parseInt(items)) && (items !="") && (items != null)){ // Не понимаю, как тут сделать проверку на ввод строки.
                    appData.income = items.split(', '); // Делим строку на члены массива, для разбиения используем запятую.
                    appData.income.push(prompt("Может что-то еще?")); // Задаём вопрос о забытом и добавляем его в массив
                    appData.income.sort(); // Сортируем массив.
                    isCorrect = true;
                }else{
                    console.log("Вы ввели не корректное значение");
                }
    
                
    
            }
          
            /*
            for(let i= 0; i<appData.income.length; i++){
                alert("Способ заработка номер " + (i+1) + " " + appData.income[i] );
            }
            */
           for(let i in appData.income){
               console.log("Способ заработка номер " + (parseInt(i)+ 1) + " " + appData.income[i] );
           }
        }
    
    };
    
    
    
    
    
    
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
    //console.log(appData);