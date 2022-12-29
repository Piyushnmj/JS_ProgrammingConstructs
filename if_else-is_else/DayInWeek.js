//Given date find the week day
var prompt = require("prompt-sync")();
let day = prompt("Enter the day between 0 and 7: ");
if(day == 0)
{
    console.log("Sunday");
}
else if(day == 1)
{
    console.log("Monday");
}
else if(day == 2)
{
    console.log("Tuesday");
}
else if(day == 3)
{
    console.log("Wednesday");
}
else if(day == 4)
{
    console.log("Thursday");
}
else if(day == 5)
{
    console.log("Friday");
}
else if(day == 6)
{
    console.log("Saturday");
}
else
{
    console.log("Invalid day");
}