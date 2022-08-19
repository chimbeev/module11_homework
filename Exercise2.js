/*Напишите функцию, которая принимает на входе любое число (но не больше 1 000), 
определяет, является ли оно простым, и выводит, простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. 
Проверяем, делится ли число inputNumber на какое-либо из чисел до него j.
Eсли делится, то это inputNumber не простое.
Eсли не делится, то inputNumber простое число */

function simpleNumber (inputNumber) {
    
    if (inputNumber > 1000) {console.log("Данные неверны. Надо меньше 1000."); return;};
    if (inputNumber == 0 || inputNumber == 1) { console.log("Числа 0 и 1 не являются простыми числами"); return; };
    
    for (let j = 2; j < inputNumber; j++) { // проверяем делится ли число на какое-либо из чисел до него j.
        if (inputNumber % j == 0) {console.log (`${inputNumber} - число не простое`); return}; // не подходит, берём следующее
    }

    console.log(`${inputNumber} - простое число`); // простое число
}

simpleNumber(13);
simpleNumber(16);
simpleNumber(0);
simpleNumber(1209);

