//Find Max and Min number
var prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter value a: "));
let b = parseInt(prompt("Enter value b: "));
let c = parseInt(prompt("Enter value c: "));
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;
maximum = minimum = result1;
if (maximum < result2)
{
    maximun = result2;
}
else if (result2 < minimum) 
{
    minimum = result2;
}
else if (maximum < result3)
{
    maximun = result3;
}
else if (result3 < minimum) 
{
    minimum = result3;
}
else if (maximum < result4)
{
    maximun = result4;
}
else if (result4 < minimum)
{
    minimum = result4;
}
console.log("Value of Expression 1: " + result1);
console.log("Value of Expression 2: " + result2);
console.log("Value of Expression 3: " + result3);
console.log("Value of Expression 4: " + result4);
console.log("The minimum number is : " + minimum);
console.log("The maximum number is : " + maximum);