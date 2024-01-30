const studentsGrades = []

studentsGrades.push(5)
studentsGrades.push(7)
studentsGrades.push(8)
studentsGrades.push(2)
studentsGrades.push(5)
studentsGrades.push(8)

let sum = 0

for (let index = 0; index < studentsGrades.length; index++) {
  const grades = studentsGrades[index]
  sum = sum + grades
}

const medium = sum / studentsGrades.length
console.log(medium.toFixed(2))
