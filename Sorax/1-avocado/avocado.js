//Если парсер может создать синтаксическое дерево скрипта, то в нашем скрипте нет ошибок.

/*
Expression statement -> Expression -> Identifier -> It is name "avocado"
Using this identifier we trying to return the value of our avocado.
But avocado is not defined, and, consequently, RefferenceError - Ошибка упоминания :(
*/
avocado  


/*
Block statement (because of curly brackets).
name - identifier
"avocado" - literal
*/
{name:"avocado"}