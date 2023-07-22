const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = element => element > 0 
const greaterThan = element => element > 3
const even = element => element % 2 === 0

console.log(numbers.filter(element => element > 0));
console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(greaterThan));
console.log(numbers.filter(even));

const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Susan', score: 8.6 },
  { name: 'Emma', score: 9.4 },
  { name: 'Peter', score: 9.1 }
]

const greaterScore = students => students.score >= 9

console.log(students.filter(greaterScore));