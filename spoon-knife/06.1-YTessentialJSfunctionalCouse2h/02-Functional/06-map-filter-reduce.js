const students = [
  { name: 'Jake', score: 6.4 },
  { name: 'Susan', score: 8.6 },
  { name: 'Emma', score: 9.4 },
  { name: 'Peter', score: 9.1 }
]

const greatScore = students => students.score >= 9
const getScore = element => element.score
const media = (accumulator, element, index, array) => {
  if( index === array.length - 1) {
    return (accumulator + element) / array.length
  } else {
    return accumulator+ element
  }
}

console.log(
  students
    .filter(greatScore)
    .map(getScore)
    .reduce(media)
);