/* Для объявления переменных используется ключевое слово var (Variable).
Далее указывается идентификатор, который является именем нашей переменной.
Инструкция с ключевым словом var называется инструкцией объявления (Declaration Statement).
Способы объявления переменных:
*/

var dragonfruit; // ,_dragonfruit, $dragonfruit


// Можно сразу же инициализировать переменные. Т.е задать первичные значения переменным.
var cherry = 8, blackberry = 5;

/* Данные в программе могут быть разных типов.
Простые (Primitive) и объектные (Object).
*/
 
// Простые:
var myNumber = 444, // 			Число; 					Литерал
	myString = "Avocado", // 	Строка; 				Литерал
	myBool = true, // 			Логическое значение; 	Литерал
	myNull = null, // 			Отсутствие значения; 	Литерал
	myUndef = undefined // 		Отсутствие значения; 	Идентификатор

// Верблюжья аннотация (CamelCase) - принятый стиль в языке JavaScript.

console.log(myNumber); 	console.log(typeof myNumber);
console.log("");
console.log(myString); 	console.log(typeof myString);
console.log("");
console.log(myBool); 	console.log(typeof myBool);
console.log("");
console.log(myNull);	console.log(typeof myNull); // Объект, но известная ошибка. Нелогично.
console.log("");
console.log(myUndef);	console.log(typeof myUndef);
console.log(""); 
console.log(myUndef);	console.log(typeof typeof myUndef);

/* Некоторые считают, что существует только три типа данных. Null Undefined и Object.
Примитивные значения могут вести себя как объекты, но они не являются объектами.
Wrapper Objects - Объекты обёртки
*/
console.log(""); 
console.log("dragonfruit".toUpperCase());
console.log(""); 

// Объектные типы:

var obj = {name:"dragonfruit"}, // Объект
	array = [1,2,3], // Массив
	regexp = /w+/g, // Регулярные выражения
	func = function(){}; //Функции

console.log(obj); 		console.log(typeof obj);
console.log("");
console.log(array); 	console.log(typeof array);
console.log("");
console.log(regexp); 	console.log(typeof regexp);
console.log("");
console.log(func);		console.log(typeof func); 	// Еще одна особенность оператора typeof*
console.log("");

/* JavaScript - язык с динамической типизацией. 
Тип переменной определяется автоматически интерпретатором, в зависимости от
присвоевонного значения. 
Переменные в JavaScript не имеют типа (Untyped).
*/

/* Типы в языке JavaScript можно разделить на изменяемые (mutable) и неизменяемые (immutable).
Все простые типы - immutable.
В объектах же можно менять их атрибуты: 
*/

obj.name = "cherry";
console.log(obj); 
array[1] = 5;
console.log(array);

var a, b, c , d;
a = b = c = d = 10; // d = 10 -> c = 10 -> b = 10 -> a = 10
