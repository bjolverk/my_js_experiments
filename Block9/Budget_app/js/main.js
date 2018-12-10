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
    //checkSavings = document.getElementById('savings'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    title = document.getElementsByClassName('title')[0],
    titleOther = document.querySelector('.title');
    

    'using strict';
    //title.style.fontSize="25px";
    //titleOther.style.fontSize = "100px"; // Вот как это делается!
    console.log(title);
    let money,
        time;
    


    startCalculation.addEventListener('click', function(){
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        money = +prompt("Ваш бюджет на месяц?");
        while (isNaN(money) || money=="" || money==null) {
            money = +prompt("Ваш бюджет на месяц?");
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value =  new Date(Date.parse(time)).getDate();
    });

    expensesBtnApprove.addEventListener('click', function(){
        let sum= 0;
        for (let i = 0; i < inputsAll.length; i++) {
            let need =  inputsAll[i].value,
                coast = inputsAll[++i].value;
            if( (typeof(need))==='string' && (typeof(need))!=null && (typeof(coast)) !==null 
            && need !="" && coast != "" && need.length < 50){
                console.log("done!");
                appData.expenses[need]=coast;
                sum += +coast;
                        } else {
                console.log("Данные не корректны");
                i--;
            }
        }
        expensesValue.textContent = sum;
    });
    
    optionalBtnApprove.addEventListener('click', function(){
        for (let i =0; i < optionalExpenses.length; i++){
            let opt = optionalExpenses[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });
    
    calculateBtn.addEventListener('click', function() {

        if(appData.budget != undefined){
            /*
            let newSum = 0;
            for(let key in appData.expenses){
                newSum += +appData.expenses[key];
            }*/
            //let newSum = + expensesValue.textContent;
            appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                levelValue.textContent ="Минимальный уровень достатка";
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent ="Средний уровень дохода";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent ="Высокий уровень дохода";
            } else {
                levelValue.textContent ="Ошибка";
            }
    }else{
        daybudgetValue.textContent  = "Ошибка";
    }
    });

    possibleIncome.addEventListener('input', function () {  // Можно change
        let items = possibleIncome.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function(){
        if(appData.savings == true){
            appData.savings = false;
        }else{
            appData.savings=true;
        }
    });

    sumValue.addEventListener('input', function(){
        if(appData.savings == true){
            let sum = + sumValue.value,
                percent = +percentValue.value;

            appData.monthIcome = sum/100/12*percent;
            appData.yearIcome = sum/100*percent;


            monthSavingsValue.textContent = appData.monthIcome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIcome.toFixed(1);

        }
    });

    percentValue.addEventListener('input', function(){
        if(appData.savings == true){
            let sum = + sumValue.value,
                percent = +percentValue.value;

            appData.monthIcome = sum/100/12*percent;
            appData.yearIcome = sum/100*percent;


            monthSavingsValue.textContent = appData.monthIcome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIcome.toFixed(1);
        }
    });

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
        chooseExpences: function(){
           
        },
        detectDayBudget: function(){
            
            alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
        },
        detectLevel: function() {
           
        },
        checkSavings: function() {
            if (appData.savings==true) {
                let save= +prompt("Какова сумма накоплений?"),
                    persent = +prompt("Под какой процент?");
                    appData.monthIcome = save/100/12*persent;
                alert("Месячный доход с вашего депозита:" + appData.monthIcome);
            }
        },/*
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
        },*/
        /*
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
          //for(let i in appData.income){
            //   console.log("Способ заработка номер " + (parseInt(i)+ 1) + " " + appData.income[i] );
           //}
        //}
    
};