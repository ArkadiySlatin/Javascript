'use strict';

let money = +prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false
};

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
/* Второй вариент цикла */
/* let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof(a)) === 'string' && (typeof(a)) != null  && (typeof(b)) != null
        && a != '' && b != '' && a.length < 20 && b.length < 20) {
        i++;
        appData.expenses[a] = b;
        
        } else {
            alert("Не правильно введены данные");
            
        }
} */
/* Третий вариант цикла */
/* let i = 0;
do {let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof(a)) === 'string' && (typeof(a)) != null  && (typeof(b)) != null
    && a != '' && b != '' && a.length < 20 && b.length < 20) {
    i++;
    appData.expenses[a] = b;
    
    } else {
        alert("Не правильно введены данные");
    }
} while (i < 2); */

appData.moneyPerDay = appData.budget /30;
alert("Бюджет на каждый день составляет: " + appData.moneyPerDay + " руб.");








