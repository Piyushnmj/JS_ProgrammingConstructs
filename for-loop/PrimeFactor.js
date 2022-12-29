//Prime Factor
var prompt = require("prompt-sync")();
let number = prompt("Enter the number: ");
var result = " ";
while (number % 2 == 0) 
{
  result += 2 + " ";
  number /= 2;
}
for (let i = 3; i * i <= number; i++) {
  while (number % i == 0) 
  {
    result += i + " ";
    number /= i;
  }
}
if (number > 2) 
{
  result += number;
}
console.log(result);