/*
    Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) /3;;

    classificação;
      - Média < 5, reprovado;
      - Média = 5 e <= 7, dependência;
      - Média > 7, Aprovado;
*/

const testGrade1 = 1
const testGrade2 = 6
const testGrade3 = 7
const gradeAverage = (testGrade1 + testGrade2 + testGrade3) / 3

console.log('Sua média é: ' + gradeAverage.toFixed(1))

if (gradeAverage < 5) {
  console.log('Nota menor que 5 está: Reprovado!')
} else if (gradeAverage == 5 || gradeAverage <= 7) {
  console.log('Nota entre 5 e 7 está: Dependência!')
} else if (gradeAverage > 7) {
  console.log('Nota naior que 7 está: Aprovado!')
} else {
  console.log('Nota inválida!')
}
