//Given date find the week day
var prompt = require("prompt-sync")();
let day = parseInt(prompt("Enter the day between 0 and 7: "));
switch (day)
{
case 0:
    console.log("Sunday");
    break;
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
default:
    console.log("Enter a valid date");
    break;
}