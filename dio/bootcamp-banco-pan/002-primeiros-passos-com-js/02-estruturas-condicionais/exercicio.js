/* 
  Faça um programa para calcular o valor de uma viagem.

  Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da Gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por Kilometers;
    5 - Distancia em Kilometers da viagem;
  
  Imprima no console o valor que será gasto para realizar esta viagem.
*/

const etanol = 3.49
const gasolina = 5.89
const diesel = 6.49
let fuelType = gasolina
let literConsumption
const distance = 900
let fuelPrice
let spentTravel

if (fuelType === etanol) {
  literConsumption = 9
  fuelPrice = 3.49
} else if (fuelType === gasolina) {
  literConsumption = 15
  fuelPrice = 5.89
} else {
  console.log('Combustível Errado, selecione Gasolina ou Etanol!')
}

spentTravel = (distance / literConsumption) * fuelPrice
console.log(spentTravel.toFixed(2))
