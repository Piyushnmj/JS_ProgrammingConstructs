//Prime number within a range
var prompt = require("prompt-sync")();
let start = prompt("Enter the start number: ");
let end = prompt("Enter the end number: ");
let flag;
var result = "The prime numbers between " + start + " and " + end + "\n[ ";
if (start == 1) {
  start++;
}
if (start == 2) {
  result += start + " ";
}
if (start % 2 == 0) {
  start++;
}
for (let i = start; i <= end; i += 2) {
  flag = 0;
  for (let j = 2; j * j <= i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    result += i + " ";
  }
}
result += "]";
console.log(result);