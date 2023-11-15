// While e Do While
// no While primeiro é realizado o teste lógico, se retornar false, não será executado,dessa forma, não temos a garantia que o comando será executado, pois se começar como falso, já termina o algoritmo.

let nWhile = 11
while (nWhile < 10) {
  console.log('Teste, executado n = ' + nWhile) // resultado falso, pois n não é menor que 10
  nWhile++
  if (nWhile >= 10) {
    console.log('n >= 10, resultado falso')
  }
}
console.log('Fim do programa.')
// no Do While a primeiro é realizado é a execução dos comandos, e depois é que será realizado o teste, mesmo que no teste ele inicie como falso, assim eu tenho a garantia da execução dos comando, ao menos uma vez.

let nWhile1 = 1
do {
  console.log('Teste, executado n = ' + nWhile1) // resultado falso, pois n não é menor que 10
  nWhile1++
  if (nWhile1 >= 10) {
    console.log('n >= 10, resultado falso')
  }
} while (nWhile < 10)
console.log('Fim do programa.')
