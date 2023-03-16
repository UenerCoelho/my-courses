// Anonymous function
(function (a, b, c) {
  return a + b + c
})

// Function expression a partir de uma função anonima
var sum = function (a, b) {
  return a + b
}

console.log(sum(7, 59));

result = sum (5, 9)
console.log(result);

const constSum = sum
console.log(constSum(5, 9));

let x = 3
console.log(x);
x = sum
console.log(x(11, 16));