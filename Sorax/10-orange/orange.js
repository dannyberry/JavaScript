/* if (выражение) {инструкция} */

/* if распростроняется только на первую инструкцию без фигурных скобок! */
if (true) console.log("Orange is orange!");
if (false) console.log("Orange is blue...");

/* if распростроняется только на первую инструкцию без фигурных скобок! */
var orange = 3;

if (orange > 3) {
	orange *= 3
	console.log(orange)
} else if (orange === 3) {
	orange += 3
	console.log(orange)
} else {
	orange += 3
	console.log(orange)
}
console.log("");

var name = "Steve", project;

if (name === "Pavel") {
	project = "Telegram";
} else if (name === "Sergey") {
	project = "Google";
} else if (name === "Steve") {
	project = "Apple";
} else {
	project = "Not found";
}
console.log(project)
console.log("");

/*switch (выражение) {
	case выражение: инструкция
	case выражение: инструкция
	default: инструкция
}*/

name = "Pavel"
switch (name) {
	case "Pavel": project = "Telegram"; console.log(project);  break;
	case "Steve": project = "Apple"; console.log(project); break;
	case "Sergey": project = "Google"; console.log(project); break;
	default: project = "Not found"; console.log(project); break;
}