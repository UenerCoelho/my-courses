/* Funciona como a tabela verdade dos operadores lógicos
  -> No caso do And (&) para cada bite equivalente e retorna o bit equivalente 0 e 1 = 0 e 1 e 1 = 1, 0 e 0 = 0
  -> No caso do OR (|) mesmo não sendo equivalente sempre retornará 1, 1 ou 1 = 1, 1 ou 0 = 1, 0 ou 1 = 1 e 0 ou 0 = 0
  Sendo que 1 = true e 0 = false
  -> No caso do SOR (OR exclusivo) retornará 1 onde tiver 1, mas se tiver equivalência retorna zero ou seja 1 sor 1 = 0, 0 sor 1 = 1, 1 sor 0 = 1 e 0 sor 0 = 0
*/
let n1 = 10
let n2 = 20
let nN = 32
let n = 4
let resAnd = n1 & n2
let resPipe = n1 | n2
let resSor = n1 ^ n2
let bitWiseLeft1 = n1 << 1 // Desloca 1 bit para esquerda, dobrando o valor inicial
let bitWiseLeft2 = n1 << 2 // Desloca 2 bit para esquerda, dobra 2x o valor inicial
let bitWiseLeftN = nN << n // Desloca n bit para esquerda, onde `n` seria o valor da dobra desejado, se colocarmos 1 dobra 1x, se colocarmos 2 dobra 2x, e assim sucessivamente
let bitWiseRight1 = n2 >> 1 // Desloca 1 bit para direita, reduzindo o valor inicial pela metade
let bitWiseRight2 = n2 >> 2 // Desloca 2 bit para direita, dividindo o valor inicial por 4
let bitWiseRightN = nN >> n // Desloca n bit para direita, onde `n` seria o valor da divide desejado, se colocarmos 1 divide 1x, se colocarmos 2 divide 2x, e assim sucessivamente
console.log(resAnd)
console.log(resPipe)
console.log(resSor)
console.log('1 BitWise para Esquerda: ', bitWiseLeft1)
console.log('2 BitWise para Esquerda: ', bitWiseLeft2)
console.log(`${n} BitWise de ${nN} para Esquerda: `, bitWiseLeftN)
console.log('1 BitWise para Direita: ', bitWiseRight1)
console.log('2 BitWise para Direita: ', bitWiseRight2)
console.log(`${n} BitWise de ${nN} para Direita: `, bitWiseRightN)
