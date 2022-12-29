//Factorial of a number
var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter the number: "));
let result=1;
for(var i = 1; i <= number; i++)
{
    result*=i;
}
console.log("Factorial of number " + number + " = " + result)