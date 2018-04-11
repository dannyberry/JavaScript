/* В языке JavaScript есть автоматическая конвертация типов.
Если интерпретатор ожидает увидеть значение определенного типа,
то любое значение будет автоматически приведенно к этому типу. */

/* Если одним из операндов оператора + является строка, то другой операнд
преобразуется в строку. */
console.log('20 + "5" =', 20 + "5", '\ntypeof (20 + "5") is', typeof (20 + "5"));
/* Однако если оператором окажется -, то операнды преобразуются в число */
console.log('"20" - 5 =', "20" - 5, '\ntypeof ("20" - 5) is', typeof ("20" - 5));
/* И не важно, один из операторов является строкой или оба. */
console.log('"5" - "20" =', "5" - "20", '\ntypeof ("5" - "20") is', typeof ("5" - "20"));
console.log("");

/* Оператор * будет пытаться преобразовать любые значения в числа */
console.log('"4" * "6" =', "4" * "6", '\ntypeof ("4" * "6") is', typeof ("4" * "6"));
/* Если преобразование выполнить невозможно -> NaN */
console.log('"4" * "mango" =', "4" * "mango", '\ntypeof ("4" * "mango") is', typeof ("4" * "mango"));
console.log("");

/* Оператор сравнения на равенство (==) так же автоматически 
преобразовывает, поэтому мы можем сравнивать разные типы. */
console.log('"5" == 5 ->', "5" == 5, '\ntypeof ("5" == 5) is', typeof ("5" == 5));
/* Преобразование зависит от типов операндов, поэтому 
поведение этого оператора сложнее предсказать, нежели ===. 
Например, при сравнении строки содержащей 0 со значением false, то результатом будет true.
Вроде бы всё логично, так как false и есть 0. */
console.log('"0" == false ->', "0" == false, '\ntypeof ("0" == false) is', typeof ("0" == false));
/* Однако при преобразовании строки содержащей 0 в boolean, 
результатом будет true, потому что любое значение, 
преобразованное в boolean, будет возвращать true,
за исключениев тех самых 5 значений.
	
	Boolean(undefined);
	Boolean(null);
	Boolean(0)
	Boolean(NaN);
	Boolean("");

Получается абсурд, ибо true не равно false */
console.log('"0" is', Boolean("0"), ', but (true == false) is', true == false);
console.log("wut?"); 
/* Однако если мы сравним пустую строку, которая при преобразовании в boolean
вернёт значение false, то выражение будет true. */
console.log('"" == false ->', "" == false);
/* Так же логично, что false это 0, и при сравнении 0 и false предсказуемо должно быть true */
console.log('0 == false ->', 0 == false);
console.log("");

/* В данном случае сравнение ==  приводит обе части к числу. 
Строка "5" преобразуется в число 5, true преобразуется в единицу. 
Следовательно сравнение приводится к виду 5 == 1, что естественно false﻿*/
console.log('"5" == true ->', "5" == true);

console.log("");
/* Напомню себе, что null и undefined равны только null и undefined */
console.log("null == false ->", null == false);
console.log("null == true ->", null == true);
console.log("undefined == false ->", undefined == false);
console.log("undefined == true ->", undefined == true);
console.log("null == undefined ->", null == undefined);
console.log("");

/* Помимо автоматических преобразований существуют явные 
преобразования (Explicit conversions). Для этого используются
конструкторы соответсвующих типов. 

С помощью конструктора Number можно перевести любое значение 
в числовой тип. */
console.log('Number("925") =', Number("925"), '\ntypeof Number("925") is', typeof (Number("925"))); 
/* Пару эксперементов */
console.log('Number("925 hello") =', Number("925 hello"), '\ntypeof Number("925 hello") is', typeof (Number("925 hello"))); 
/* Знак пробела не учитывается и преобразование происходит без проблем*/
console.log('Number("925 ") =', Number("925 "), '\ntypeof Number("925 ") is', typeof (Number("925 "))); 
console.log("");

/* С помощью конструктора String можно перевести любое значение 
в строковый тип. */
console.log('String(642) =', String(642), '\ntypeof String(642) is', typeof (String(642))); 
console.log("");

/* С помощью конструктора Boolean можно перевести любое значение 
в логический (булевый) тип. */
console.log('Boolean(1) =', Boolean(1), '\ntypeof Boolean(1) is', typeof (Boolean(1))); 
console.log("");

/* Для преобразования в различные типы можно так же использовать операторы.
НО можно НЕ значит НУЖНО! Код может быть чище и короче, но в разы менее понятен. */

/* Числовой тип переводится в логический тип с помощью оператора ! (логическое отрицание).
Одного оператора достаточно, чтобы преобразовать значение в логический тип.
Два логических отрицания приводят к исходному значению */
console.log('!!5 =', !!5);
console.log('!!0 =', !!0);
console.log("");
/* Cледовательно можно запись Boolean(null) идентична !!null */

/* Преобразование значения в строку */
console.log('543 + "" =', 543 + "", '\ntypeof (543 + "") is', typeof (543 + ""));
console.log("");

/* Преобразование значения в число используется УНАРНЫЕ операторы + и - 
Пустые символы в строке полностью игнорируются. */
console.log('+"999" =', +"999", '\ntypeof (+"999") is', typeof (+"999"));
console.log('-"999" =', -"999", '\ntypeof (-"999") is', typeof (-"999"));
/* Неочевидно, но пустая строка преобразуется в 0 */
console.log('+"" is', +"", '\ntypeof (+"") is', typeof (+""));
/* Логические значения так же можно преобразовывать в числа */
console.log('+true is', +true, '\ntypeof (+true) is', typeof (+true));
console.log('+false is', +false, '\ntypeof (+false) is', typeof (+false));
console.log("");

/* Метод toString так же преобразует значения в строковый тип */
var mango = 2550;
console.log('var mango = 2550;\nmango.toString() =', mango.toString(), '\ntypeof (mango.toString()) is', typeof (mango.toString()));
console.log('typeof mango is', typeof mango);

/* Метод toString в качестве аргумента принимает основание системы счисления */
console.log('mango.toString(16) =', mango.toString(16), '\nmango.toString(8) =', mango.toString(8), '\nmango.toString(2) =', mango.toString(2));
console.log('false.toString() =', false.toString(), '\ntypeof (false.toString()) =', typeof (false.toString()));
console.log("");

/* Преобразование строки в число.
Используются две глобальные функции parseInt. и parseFloat.
Строка может содержать любые символы, помимо числовых, которые будут игнорироваться
ВНИМАНИЕ! Перед числом недопустимы все символы, кроме пробелов */
console.log('parseInt("16 mango") =', parseInt("16 mango"), '\nparseInt("16 mango + 19 kiwi") =', parseInt("16 mango + 19 kiwi"));
/* Вторым параметром так же может быть основание системы счисления */
console.log('parseInt("11", 8) =', parseInt("11", 8));
/* Непонятное для меня поведение... */
console.log('parseInt("8", 2) =', parseInt("8", 2));
/* Вещественные числа!*/
console.log('parseFloat("16.5") =', parseFloat("16.5"));
console.log("");

/* Объявляем переменную и инициализируем её значением простого типа.
И обратимся к несуществующему свойству.*/
mango = 5;
console.log(mango.value);
/* Результат - undefined. Это просто подтверждение тому,
что переменная была преобразована в объект.
ИСКЛЮЧЕНИЕМ являются null и undefined. У них нет объектов-обёрток.
	mango = null;
	console.log(mango.value);
Результатом будет TypeError.*/



