/* 
Выражения всегда возвращают какие-то значения.
e.g. когда интерпритатор видит выражение, то он сначала 
вычисляет его значение и заменяет выражение его значением.
Если введем в консоль 96+4, то интерпритатор покажет 100.
*/

/*
Выражения (Expression Statement) бывают простыми и сложными (первичными и составными).
Простые выражения (Primary Expressions) не включают в себя другие выражения.
К ним относятся: */
 
cherry; // identifier
4234234; // literal
this; // некоторые* key words

342+3124; // There are two operands - 342 and 3124. It is Binary Expression.
+314; // There is only one operand - 314. It is Unary Expression.

/* A side effect is anything a method does besides computing and returning a value. 
Any change of instance or class field values is a side effect, 
as is drawing something on the screen, writing to a file or a network connection.
Strictly speaking, a "function" is defined as not having side effects - which is 
why Java uses the word "method" instead. A real function with no return value would be pointless.
Obviously, a method that does not have a return value must have 
some sort of side effect that justifies its existence. 
Set methods are an example - the side effect is changing the object's internal state.
*/

var cherry
cherry = 96+4;
console.log(cherry)