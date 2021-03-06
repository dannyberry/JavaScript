/*	Натуральные числа: 1, 2, 3; 
	Рациональные: 1/4, 3/5; 
	Иррациональные: 3,3333...(беконечная дробь), корень из 2, число пи, число е;
	Вещественные: 3.45, 2.0;
В языке JavaScript вещественные и целые числа относятся к одному типу данных.
Для них нет отдельных типов данных. Все числа в языке JavaScript - вещественные.

Числовой тип данных позволяется представить целые числа в диапазоне от -2^53 до 2^53
Вне этого диапазона чисел теряется точность.
*/
console.log("console.log(15) =", (15));
console.log(""); 
/* Шестнадцатеричная система счисления — позиционная система счисления по целочисленному основанию 16. 
В качестве цифр этой системы счисления обычно используются цифры от 0 до 9 и латинские буквы от A до F. 
*/
console.log("console.log(0xeee4f) =", (0xeee4f));
console.log("console.log(0X45CC4459245424) =", (0X45CC4459245424));
console.log("");
/* Восьмеричная система счисления — позиционная целочисленная система счисления с основанием 8. 
Для представления чисел в ней используются цифры от 0 до 7.
*/
console.log("console.log(0341) =", (0341));

console.log("console.log(03418) =", (03418));	/* Десятичное, потому что число содержит цифры больше 7, 
												   а это недопустимо в восьмеричной системе счисления.
												   Считается как десятичное. */

console.log(""); 

console.log("console.log(14.32) =", (14.32));
console.log("console.log(.499) =", (.499)); // Ноль можно опускать
console.log("console.log(1.44e3) =", (1.44e3)); // Экспонента
console.log("console.log(3.22E-3)", (3.22E-3));
console.log("");

/* 	Для преобразования вещественных чисел из одной формы в другую
у объекта number есть несколько полезных методов.

Wrapper Objects - объекты обёртки для простых типов.
*/

/*	Создадим объект-обёртку с помощью конструктора Number()
Функция, которая создаёт новые объекты называются конструктором,
и её принято называть с большой буквы.
*/
var N = new Number(1337);
console.log("var N = new Number(1337);");
console.log("typeof of N is", (typeof N)); 

var n = 7331;
console.log("var n = 7331;");
console.log("typeof of n is", (typeof n)); 
console.log("");

/* Теперь нам доступны некоторые методы этого объекта.
Мы можем преобразовать значение в форму с плавающей точкой*/

console.log(N.toFixed(5)); // Метод toFixed. Аргументы - количество знаков после точки.

// Методы можно вызывать не только у объектов, но и переменных и литералов содержащих значение простых типов.

console.log(n.toFixed(3));  // Метод toFixed. Аргументы - количество знаков после точки.
console.log(5 .toFixed(2)); /* Пробел стоит потому, что точка будет относится к числовому литералу 
							   и после точки интерпретатор ожидает увидеть цифру */
console.log(N.toExponential(2)); 
console.log("");

// JavaScript округляет в большую сторону.
n = 15.25;
console.log(n); 
console.log("n =", (n = 14.25)); 
console.log("console.log(n.toPrecision(3)) = ", (n.toPrecision(3))); 
console.log(""); 

/* 	Это работает не с объектами только потому, что интерпретатор создаёт соответствующие объекты-обёртки "на лету".
	Т.е берёться значение n и создаётся объект Number с этим значением, затем вызывается метод .toFixed() 
	этого объекта, и значение, которое возвращает этот метод является значением всего нашего выражения.
	А сам объект Number уничтожается сражу же после того, как интерпретатор вычислит значение выражения.
	Именно по этой причине простые значения могут вести себя как объекты.
	Гораздо удобнее вызывать методы сразу у простых переменных. 

	НО после выполнения метода простое значение не поменяет своего вида, т.е. создаётся некая ссылка, 
	которая копирует оригинальную переменную, видоизменяя только копию, показывая её и забывая.
	Исходная переменная остаётся нетронутой.
*/

console.log("console.log(n) =", (n)); 
console.log("console.log(N) =", (N)); // Не знаю, как вывести объект в консоли в таком же виде, как и простое значение.
console.log("");



// #Арифметические операторы

// Унарные
console.log("UNARY"); 
console.log("console.log(+10) =", (+10)); 
console.log("console.log(-10) =", (-10)); 
console.log("");
// Операторы инкремента (increment) и декремент (decrement).
console.log("n = 5;"); 
n = 5;

// Префиксный (prefix) инкремент - стоит до переменной. 
// Сначала изменяет значение и затем возвращает.
console.log("console.log(++n)"); 
console.log(++n);
console.log("console.log(--n)"); 
console.log(--n);
console.log("");

// Постфиксный (postfix) инкремент - стоит до переменной. 
// Сначала возвращает значение и только потом изменяет!
console.log("console.log(n++)"); 
console.log(n++);
console.log("console.log(n)"); 
console.log(n);

console.log("console.log(n--)"); 
console.log(n--);
console.log("console.log(n)"); 
console.log(n);
console.log("");

//Бинарные операторы
console.log("BINARY"); 
console.log("console.log(6+4) =", (6+4)); 
console.log("console.log(4-8) =", (4-8)); 

console.log("console.log(12*0.5) =", (12*0.5)); 
console.log("console.log(16/13) =", (16/3)); 
console.log("console.log(16%3) =", (16%3)); // Остаток от деления
console.log("");

console.log("n =", (n = 10)); 

console.log("n += 2 ->", (n += 2));
console.log("n -= 4 ->", (n -= 4));
console.log("n *= 3 ->", (n *= 3));
console.log("n /= 6 ->", (n /= 6));
console.log("n %= 2 ->", (n %= 2));
console.log("");

// Операторы отношения

console.log("4 > 5 ->", (4 > 5));
console.log("5 < 2 ->", (5 < 2));
console.log("10 >= 10 ->", (10 >= 10));
console.log("5 <= 10 ->", (5 <= 10));
console.log("");

/* Оператор === требует, чтобы переменные были одного типа, 
когда как оператору == достаточно совпадения значений. 
На практике лучше использовать === */
console.log("console.log(10 === 10) ->", (10 === 10));
console.log("console.log(10 !== 10) ->", (10 !== 10));
console.log("console.log(10 === '10') ->", 10 === "10");
console.log("console.log(10 !== '10') ->", (10 !== "10"));
console.log("");

console.log("console.log(10 == 10) ->", (10 == 10));
console.log("console.log(10 != 10) ->", (10 != 10));
console.log("console.log(10 == '10') ->", (10 == "10"));
console.log("console.log(10 != '10') ->", (10 != "10"));
console.log("");

/* Объект Math предоставляет методы для более сложных математических
операций: извлечение квадратного корня, возведения в степень и т.д. */
console.log("console.log(Math.sqrt(16)) =", (Math.sqrt(16))); // Корень
console.log("console.log(Math.pow(2, 5)) =", (Math.pow(2, 5))); // Возведение в степень. 2^5
console.log("");

// Математические константы:
console.log("Math.PI =", (Math.PI)); // Возведение в степень. 2^5
console.log("Math.E =", (Math.E)); // Возведение в степень. 2^5

/* JavaScript не выдаст ошибку при выходе за пределы диапазона чисел,
который обеспечивает числовой тип данных. Вернётся значение Infinity. 
Бесконечность - числовое значение */
console.log("");
console.log(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000); 
console.log(1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000); 
console.log(-1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000); 
console.log("console.log(typeof Infinity)", (typeof Infinity));
console.log(typeof Infinity);
console.log("");
console.log("Underflow");
console.log(.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001); 
console.log("");

console.log("console.log(5/0) =", (5/0));
console.log("console.log(-5/0) =", (-5/0));
console.log("console.log(0/0) =", (0/0));
console.log("console.log(Infinity/Infinity) =", (Infinity/Infinity));
console.log("console.log(Math.sqrt(-16)) =", (Math.sqrt(-16)));

// Проблема языков использующих вещественные числа
console.log("console.log(0.2 + 0.1) =", (0.2 + 0.1));
console.log("console.log(10000000000000003 + 4) =", (10000000000000003 + 4)); // Квадрилионы - больше 15 нулей.