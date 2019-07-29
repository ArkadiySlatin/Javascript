'use strict';

let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц (введите число)", "");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Введите число", "");
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: true
};

function chooseExpenses() {
    for ( let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null  && (typeof(b)) != null
            && a != '' && b != '' && a.length < 20 && b.length < 20) {
            appData.expenses[a] = b;
            
        } else {
            alert("Не правильно введены данные");
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget /30).toFixed();
    alert("Бюджет на каждый день составляет: " + appData.moneyPerDay + " руб.");
}
detectDayBudget();

function detecLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Cредний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detecLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome + " рублей");

    }
}
checkSavings();

function chooseOptExpenses() {
    let num = 1;
    for ( let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов", '');
           
        if ((typeof(a)) === 'string' && (typeof(a)) != null  && a != ''  && a.length < 20) {
            appData.optionalExpenses[num] = a;
                        
        } else {
            alert("Не правильно введены данные");
            i--;
        }
        num = num + 1;
    }
}
chooseOptExpenses();











