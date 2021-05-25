console.log(`Aula 11.3-Celsius_to_Fahrenheit

`)

/*
    ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/

// transformDegree('50F')
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  // Fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }
  // Fluxo ideal, F=>C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
  let degreeSing = 'C'

  // Fluxo Alternativo, C=>F
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9 / 5 + 32
    degreeSing = 'F'
  }

  return formula(updatedDegree) + degreeSing
}

try {
  console.log(transformDegree('10C'))
  console.log(transformDegree('50F'))
  console.log(transformDegree('80C'))
  console.log(transformDegree('30F'))
  console.log(transformDegree('1000C'))
} catch (error) {
  console.log(error.message)
}