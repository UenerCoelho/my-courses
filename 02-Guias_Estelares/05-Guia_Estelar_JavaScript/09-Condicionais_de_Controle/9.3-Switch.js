console.log(`Aula 9.3-Switch

`)

// let expression = 'a'

// switch (expression) {
//   case 'a':
//     // Codigo expressão a
//     console.log('a')
//     break
//   case 'b':
//     // Codigo expressão b
//     console.log('b')
//     break
//   default:
//     console.log('default')
//     break
// }

function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('não implementado')
      break
  }

  return result

}

console.log(calculate(4, '+', 8))
console.log(calculate(4, '-', 8))
console.log(calculate(4, '*', 8))
console.log(calculate(4, '/', 8))
console.log(calculate(4, '%', 8))