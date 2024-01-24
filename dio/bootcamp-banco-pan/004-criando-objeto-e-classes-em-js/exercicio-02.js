/*
  Crie uma classe para representar pessoas.
  - Para cada pessoa teremos os atributos nome, peso e altura.
  - As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
  - Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura, peça ao José para dizer o valor do seu IMC
*/
;(function () {
  class Person {
    personName
    personWeight
    personHeight
    personImc

    constructor(name, weight, height) {
      this.personName = name
      this.personWeight = weight
      this.personHeight = height
      this.personImc = weight / (height * height)
    }

    imcClassification() {
      if (this.personImc < 18.5) {
        return 'estou abaixo do peso'
      } else if (this.personImc >= 18.5 && this.personImc <= 25) {
        return 'meu imc está normal'
      } else if (this.personImc > 25 && this.personImc <= 30) {
        return 'estou acima do peso'
      } else if (this.personImc > 30 && this.personImc <= 40) {
        return 'sou Obeso'
      } else {
        return 'estou com obesidade grave'
      }
    }
    imcTalking() {
      console.log(
        `Meu nome é ${this.personName} meu peso é ${
          this.personWeight
        }kg, minha altura é ${
          this.personHeight
        }m e meu IMC é ${this.personImc.toFixed(
          2
        )} e ${this.imcClassification()}`
      )
    }
  }

  const person1 = new Person('José', 70, 1.75)
  person1.imcTalking()
})()
