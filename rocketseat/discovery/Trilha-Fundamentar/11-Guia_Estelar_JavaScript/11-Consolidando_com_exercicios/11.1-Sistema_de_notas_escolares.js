console.log(`Aula 11.1-Sistema_de_notas_escolares

`)

/*
    ### Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipa A B C

    * de 90 pra cima - A
    * entre 80 - 89  - B
    * entre 70 - 79  - C
    * entre 60 - 69  - D
    * entre 50 - 59  - E
    * menor que 40   - F

*/

// let nota;

function getScore(nota) {
  let notaA = nota >= 90 && nota <= 100
  let notaB = nota >= 80 && nota <= 89
  let notaC = nota >= 70 && nota <= 79
  let notaD = nota >= 60 && nota <= 69
  let notaE = nota >= 50 && nota <= 59
  let notaF = nota >= 0 && nota <= 49
  let finalScore;

  if (notaA) {
    finalScore = 'Nota A'
  } else if (notaB) {
    finalScore = 'Nota B'
  } else if (notaC) {
    finalScore = 'Nota C'
  } else if (notaD) {
    finalScore = 'Nota D'
  } else if (notaE) {
    finalScore = 'Nota E'
  } else if (notaF) {
    finalScore = 'Nota F'
  } else {
    finalScore = 'Nota Inválida'
  }

  return finalScore
}

console.log(getScore(88))
console.log(getScore(77))
console.log(getScore(56))
console.log(getScore(34))
console.log(getScore(-1))
console.log(getScore(65))
console.log(getScore(60))
console.log(getScore(80))
console.log(getScore(1000))
console.log(getScore(100))
