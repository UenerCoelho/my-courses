const students = ['Uener', 'Catia', 'David', 'Leonardo', 'Rhinata']

// Adiciona mais um itens na lista, ao final.
students.push('Rodrigo')
console.log(students)

// Troca o item [6] da lista pelo valor recebido, neste caso, como não existe um item 6, é adicionado.
students[6] = 'Orcino'
console.log(students)

// Remove o ultimo item da lista
students.pop()
console.log(students)

// Remove o primeiro item da lista
students.shift()
console.log(students)

console.log(' ')
console.log('Notas num Array')

const studentsGrade = []

studentsGrade.push(5)
studentsGrade.push(7)
studentsGrade.push(8)
studentsGrade.push(2)
studentsGrade.push(5)

console.log(studentsGrade)

// Tamanho do Array
console.log(studentsGrade.length)

// Somando as Notas
const gradeSum =
  studentsGrade[0] +
  studentsGrade[1] +
  studentsGrade[2] +
  studentsGrade[3] +
  studentsGrade[4]
console.log('Media do aluno: ' + gradeSum / 5)
