/* Funciona como a tabela verdade dos operadores lógicos
  -> No caso do And (&) para cada bite equivalente e retorna o bit equivalente 0 e 1 = 0 e 1 e 1 = 1, 0 e 0 = 0
  -> No caso do OR (|) mesmo não sendo equivalente sempre retornará 1, 1 ou 1 = 1, 1 ou 0 = 1, 0 ou 1 = 1 e 0 ou 0 = 0
  Sendo que 1 = true e 0 = false
  -> No caso do SOR (OR exclusivo) retornará 1 onde tiver 1, mas se tiver equivalência retorna zero ou seja 1 sor 1 = 0, 0 sor 1 = 1, 1 sor 0 = 1 e 0 sor 0 = 0
*/
let n1 = 13
let n2 = 14
let resAnd = n1 & n2
let resPipe = n1 | n2
let resSor = n1 ^ n2

console.log(resAnd)
console.log(resPipe)
console.log(resSor)
