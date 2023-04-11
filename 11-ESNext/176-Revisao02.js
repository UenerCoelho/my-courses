/*** Arrow Function
    * quando não temos o corpo da função, declarado dentro de chaves, é uma função chamada implicitamente
***/
const sum = (a, b) => a + b
console.log(sum(1, 20));

/*** Arrow Function (this
   *  o this está Associado ao local a função foi escrita
***/
// No caso abaixo, o this da arrow function lexico1 sempre vai apontar para exports ou module.exports
const lexico1 = () => console.log(this === exports)

// mesmo se for de maneira forçada, ainda apontará para exports, ou module.exports
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

/*** Parâmetros default
    * quando não for passado, for passado um parâmetro undefined 
***/
function defaultParams(texto = 'Uener') {
  console.log(texto);
}

defaultParams()
defaultParams(undefined)
// mas quando passado um params nullo será nullo tbm o resultado
defaultParams(null)

/*** Operador rest
    * no contexto de Array ou objeto será mais comumente chamado de Operador Spreed
***/
function restOperator(...numbers) {
  let total = 0
  numbers.forEach(n => total += n)
  return total
}
console.log(restOperator(2, 3, 4, 5));