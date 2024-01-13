/* 
    Faça um programa parra calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:
      1 - Preço do combustível
      2 - Gasto médio de combustível do carro por KM
      3 - Distância em KM da Viagem
    
      Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const fuelPrice = 3.5
const KilometerPerLiter = 10
const distance = 356
const result = (distance / KilometerPerLitre) * fuelPrice
console.log(result)
