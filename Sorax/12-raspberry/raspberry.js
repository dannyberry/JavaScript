/* Синтаксис функции:
function functionName(argument) {
	body...
	return ...
}
*/


/* Function Declaration Statement */
function raspberry(ingredient) {
	return "I want raspberry with " + ingredient;
}

/* Function Definition Expression */
/* Так же называется Анонимной функцией.
Это обычная инструкция объявления с инициализацией,
и в конце должна стоять semicolon. */
var myRaspberry = function(ingredient) {
	console.log(arguments);
	console.log("The second argument is", arguments[2])
	console.log("Number of arguments:",arguments.length)
	return "I want raspberry with " + ingredient;
};

console.log(raspberry("cream"));
console.log(myRaspberry("cream", raspberry(), 25));
/* Зная, что возвращает функция, можно сразу вызывать
различные методы нашего объекта */
console.log(myRaspberry("cream").toUpperCase()); 
console.log(""); 

/* Т.к. функции это объекты, мы можем передавать функции
в функции в качестве аргументов, а так же возвращать
функции из функций.
Это может использоваться для реализации CallBack'ов.
Для передачи функции которая будет выполнена после выполнения
функции, в которую она передаётся.

Не разобрался, зачем нужны CallBack'и.*/


/* Расчёт килокалорий на основе белков, жиров и углеводов */
var kcal = function food(foodName,protein, fat, carbs){
	console.log(arguments);
    return foodName + " has ~" + (((protein*4.1)+(fat*9.3)+(carbs*4.1)).toPrecision(4)) + " kcal"
};
console.log(kcal("Strawberry jam",.5, .2, 54.3)); 
console.log(""); 

/* Функция может быть сразу вызванна после определенния.
Называется Self-invoking anonymous function.
В этом случае мы присваиваем результат функции переменной! */
var orange = (function(friut) {
	return "My favourite friut is " + friut
}("orange"));

console.log(orange); 
