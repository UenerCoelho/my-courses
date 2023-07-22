const numbers = [1, 2, 3, 4, 5, 6]

const anonymousFunction = numbers.map(function (element) {
  return element * 2
})

const arrowFunction = numbers.map((element) => {
  return element * 3
})

const arrowShortFunction = numbers.map(element => {
  return element * 4
})

const arrowTinyFunction = numbers.map( element => element * 5)


console.log([{numbers}, {anonymousFunction}, {arrowShortFunction}, {arrowTinyFunction}
]);

const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Susan', score: 8.6 },
  { name: 'Emma', score: 9.4 },
  { name: 'Peter', score: 9.1 }
]

const arrowGetScore = element => element.score

const result = students
    .map(arrowGetScore)
    .map(Math.ceil)

console.log(students, result);
