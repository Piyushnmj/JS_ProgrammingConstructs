//Power of 2
var prompt = require("prompt-sync")();
let number = prompt("Enter a number: ");
var result=1;
for(var i = 0; i < number; i++)
{
    result=result*2;
    console.log(`${2} ^ ${i+1} = ${result}`);
}