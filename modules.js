const names = require("./hello");
const sayHi = require("./utils");
const data = require("./alternativeexport");

console.log(data);

sayHi("susan");
sayHi(names.peter);
sayHi(names.john);
