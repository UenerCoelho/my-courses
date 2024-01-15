/*
    O IMC  é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC
    IMC = peso / (altura * altura)

    elabore um algoritmo que dado o peso e a altura de um add=ulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição?
    - Abaixo de 18.5 -> Abaixo do Peso;
    - Entre 18.5 e 25 -> Peso normal;
    - Entre 25 e 30 Acima do Peso;
    - Entre 30 3 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

const personName = 'Uener'
const weight = 150
const width = 1.84
// const imc = weight / (width * width)
const imc = weight / Math.pow(width, 2)

if (imc < 18.5) {
  console.log(
    `${personName} seu IMC é: ${imc.toFixed(2)}, e você está Abaixo do peso`
  )
} else if (imc >= 18.5 && imc <= 25) {
  console.log(
    `${personName} seu IMC é: ${imc.toFixed(2)}, seu Peso está Normal.`
  )
} else if (imc > 25 && imc <= 30) {
  console.log(
    `${personName} seu IMC é: ${imc.toFixed(2)}, você está Acima ddo Peso.`
  )
} else if (imc > 30 && imc <= 40) {
  console.log(`${personName} seu IMC é: ${imc.toFixed(2)}, você é Obeso.`)
} else {
  console.log(
    `${personName} seu IMC é: ${imc.toFixed(2)}, você está com Obesidade Grave.`
  )
}
