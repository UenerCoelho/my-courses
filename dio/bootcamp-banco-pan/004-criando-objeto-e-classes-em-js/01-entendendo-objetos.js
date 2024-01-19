const person = {
  name: 'Uener Coelho Rodrigues',
  age: 40,
  gender: 'Masculino',
  height: 1.84,
  //Funções dentro de um objeto, chama-se método
  description: function () {
    console.log(
      `Meu nome é ${this.name}, minha altura é ${this.height}, minha idade é ${this.age} e meu sexo é ${this.gender}!`
    )
  }
}

person.work = function () {
  console.log(`Meu trabalho é ser programador`)
}

console.log(person.name)
console.log(person.age)
console.log(person.gender)
console.log(person.height)
console.log(person)
person.description()
person.work()

const attribute = 'age'

console.log(person[attribute])
console.log(person['name'])
console.log(person['gender'])
console.log(person['height'])
