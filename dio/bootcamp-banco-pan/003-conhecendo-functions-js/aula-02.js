function imcCalculation(weight, height) {
  return weight / Math.pow(height, 2)
}

function imcClassification(imc, personName) {
  if (imc < 18.5) {
    return `${personName} seu IMC é: ${imc.toFixed(
      2
    )}, e você está Abaixo do peso`
  } else if (imc >= 18.5 && imc <= 25) {
    return `${personName} seu IMC é: ${imc.toFixed(2)}, seu Peso está Normal.`
  } else if (imc > 25 && imc <= 30) {
    return `${personName} seu IMC é: ${imc.toFixed(
      2
    )}, você está Acima ddo Peso.`
  } else if (imc > 30 && imc <= 40) {
    return `${personName} seu IMC é: ${imc.toFixed(2)}, você é Obeso.`
  } else {
    return `${personName} seu IMC é: ${imc.toFixed(
      2
    )}, você está com Obesidade Grave.`
  }
}

//Main
;(function () {
  const personName = 'Uener'
  const weight = 150
  const height = 1.84
  const imc = imcCalculation(weight, height)

  console.log(imcClassification(imc, personName))
})()
