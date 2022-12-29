//Program for finding date between range using if-else
var prompt = require("prompt-sync")();
let day = prompt("Enter day: ");
let month = prompt("Enter month in form of 1-12: ");
if (month >= 3 && month <= 6 && day >= 1 && day <= 31) 
{
  if ((month == 3 && day < 20) || (month == 6 && day > 20) || (month == 4 && day == 31)) 
  {
    console.log("false");
  } 
  else
  {
    console.log("true");
  }
} 
else 
{
  console.log("false");
}