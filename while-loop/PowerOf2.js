//Power Of 2
var prompt = require('prompt-sync')();
let n =prompt("Enter a number: ");
var result = "";
var i = 1;
while (i <= n && Math.pow(2, i) < 256) {
  result += "2 ^ " + i + " = " + Math.pow(2, i) + "\n";
  i++;
}
console.log(result);