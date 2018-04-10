// Любое значение в JavaScript можно преобразовать в логическое
console.log(Boolean(5));

// После преобразования все значения будут возвращать истину, заисключением
console.log("Boolean(undefined) =", Boolean(undefined));
console.log("Boolean(null) =", Boolean(null));
console.log("Boolean(0) =", Boolean(0));
console.log("Boolean(NaN) =", Boolean(NaN));
console.log('Boolean("") =', Boolean(""));

var s = "0";

if (s) {
	console.log("Condition is true!");
}
else {
	console.log("Condition is false!");
}
 
console.log("true && false ->", true && false); // Возвращает истину только когда оба операнда инстинны.
console.log("true || false ->", true || false); // Возвращает истину когда один из операндов истинный.
console.log("!true ->", !true); // Логическое отрицание
console.log("!false ->", !false); 

// Способы приминения && and ||

/* Выражение в правой части логического && будет вычисляться только
в том случае, когда левый операнд ложный.
Если левый операнд истинный, то значение правого операнда вычислять нет смысла */

var kiwi = 0,
	isKiwi = 1;

isKiwi && (kiwi = 4); // Если isKiwi истинно, то только тогда kiwi присваевается 4
console.log("isKiwi =", isKiwi, "kiwi =", kiwi, "isKiwi && (kiwi = 4) ->", isKiwi && (kiwi = 4));

var kiwiString = "";
var anotherKiwiString = kiwiString || "I am green vegetable"; // Если kiwiString ложно, то присвоится правая часть ИЛИ (||)

console.log(anotherKiwiString); 

