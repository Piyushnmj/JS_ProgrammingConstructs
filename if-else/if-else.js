//To find min and max using if else
var value = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
console.log("Number 1 is : " + value);
var min = value;
var max = value;
for (let i = 2; i <= 10; i++) 
{
  //gives a 3 digit random number
  var randomNum = Math.floor(Math.random() * (999 - 100)) + 100;
  console.log("Number " + i + " is : " + randomNum);
  if (randomNum <= min) 
  {
    min = randomNum;
  } 
  else if (randomNum >= max) 
  {
    max = randomNum;
  }
}
console.log("The minimum number is : " + min);
console.log("The maximum number is : " + max);