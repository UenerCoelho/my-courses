console.log(`Aula 10.4-For_in

`)

// for...in 

let person = {
  name: 'Uener',
  age: '37',
  weight: 80
}

for (let property in person) {
  console.log(property)
}

for (let property in person) {
  console.log(person[property])
}

for (let property in person) {
  console.log(person.name, person.age, person.weight)
}

for (let property in person) {
  console.log(person)
}