/* В JavaScript нет разницы, какие кавычки использовать
в отличии от некоторых языков программирования */

console.log("Grape sting");
console.log('Another grape string')

console.log('The 3. "grape" string') // Если требуется поставить кавычки внутри строки
console.log("The 4. \"grape\" string")// Экранирование

console.log("One slash \\ Or two?")// Два слэша

console.log("Number of symbols in this string is", "Number of symbols in this string is".length);

console.log("Grape could damage your eyes, \
\nbut there is one positive fact: \
\nYou'll never see my code!"); // Перенос строки	

console.log("I will miss you, grape. \
\n\tll miss you, grape.. \
\n\t\tiss you, grape..."); // Табуляция

console.log("")
var grape = "Green grape is a sweety bomb";
/* Строки - неизменяемый тип в языке JavaScript.
Никакие методы не могут изменить исходную строку,
Они просто возвращают новую строку. */

// Канкатинация - сложение строк
console.log(grape + " and I like it.");
console.log("")

console.log("1. symbol is", grape.charAt(0)); //Возвращает символ в строке, который стоит под определённым индексом
console.log("Last symbol is", grape.charAt(grape.length - 1)); //Возвращает последний символ в строке.
// Строки могут интерпретироваться как массивы
console.log("4. symbol is", grape[4]); 
console.log("")

console.log(grape.substring(6)); // Получение строки с заданного символа и до конца.

/* Два параметра - получение строки с заданного символа и до заданного символа.
Метод slice позволяет начинать с конца, потому как может принимать значения с минусом. */
console.log(grape.substring(0,11), grape.slice(-4)); 
console.log(grape.substr(17,11)); // // Получение строки с заданного символа и до количества .
console.log("")

console.log(grape); 
console.log("\"e\" has position number", grape.indexOf("e")); // Поиск подстроки в строке. Возвращает номер позиции в строке.
console.log("\"e\" from the end of sentence has position number", grape.lastIndexOf("e")); // Поиск подстроки в строке с конца строки.
console.log("\"is\" has position number", grape.indexOf("is")); // Слова так же могут использоваться.
console.log("")

// Чтобы изменить исходную строку нужно использовать следующий метод:
grape = grape.replace("a sweety", "the sweetiest")// Замена подстроки в исходной строке.
console.log(grape);

/* Данный метод принимает в качестве аргумента какой-либо разделитель.
Используя этот разделитель разбивает строку на массив. Мы используем
пробел в качестве разделителя, поэтому отдельными элементами массива
будут являтся отдельные слова нашего предложения */
console.log(grape.split(" "));	
console.log("")
console.log(grape.toUpperCase());	// Метод приведения к верхнему регистру
console.log(grape.toLowerCase());	// Метод приведения к нижнему регистру