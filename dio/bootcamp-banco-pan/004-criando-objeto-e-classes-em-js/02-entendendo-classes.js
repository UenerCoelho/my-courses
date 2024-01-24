class Person {
  name
  age
  bornYear

  constructor(name, age) {
    this.name = name
    this.age = age
    this.bornYear = 2024 - age
  }

  selfDescription() {
    console.log(
      `Meu nome é ${this.name} e minha idade é ${this.age}, nascido em ${this.bornYear}.`
    )
  }
}

function comparePeople(person1, person2) {
  if (person1.age > person2.age) {
    console.log(`${person1.name} é mais velho(a) que ${person2.name}.`)
  } else if (person1.age < person2.age) {
    console.log(`${person2.name} é mais velho(a) que ${person1.name}.`)
  } else {
    console.log(`${person1.name} e ${person2.name} tem a mesma idade.`)
  }
}

const person1 = new Person('Uener', 40)
const person2 = new Person('Catia', 36)

comparePeople(person1, person2)
