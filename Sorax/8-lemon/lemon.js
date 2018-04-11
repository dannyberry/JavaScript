// Null и Undefined означают отсутствие значения.

console.log("typeof null is", typeof null);
console.log("typeof undefined is", typeof undefined);
console.log("");

var lemon;
console.log("var lemon;\ntypeof lemon is", typeof lemon); // Значение неинициализированной переменной - undefined

var obj = {};
console.log("var obj = {};\nobj.property is", obj.property); // Попытка обращения к несуществующему свойству объекта.

var massive = [4, 3, 1];
console.log("var massive = [4, 3, 1];\nmassive[3] is", massive[3]); // Попытка обращения к несуществующему свойству объекта

function tasteOfLemon(taste) {
	return "Lemon is " + taste + "!";
}

console.log('tasteOfLemon("sour") =', tasteOfLemon("sour"));
console.log('tasteOfLemon() =', tasteOfLemon()); // Обращение к функции без аргумента

function smellOfLemon(smell) {} // Если функция ничего не возвращает, то возвращаемым значением будет undefined
console.log('function smellOfLemon(smell) {}\n\
smellOfLemon("zest") =', smellOfLemon("zest"));

// Some magic

console.log("null == undefined ->", null == undefined);
console.log("null === undefined ->", null === undefined); // Обращение к функции без аргумента
