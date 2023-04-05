// ES8: Object.values/Object.entries
const object = { a: 1, b: 2, c: 3 }
console.log(Object.values(object));
console.log(Object.entries(object));

// Melhorias da Notação Literal
const person = 'Catia'
const talk = {
  person,
  ola() {
    return 'Oi gente!'
  }
}

console.log(talk.person, talk.ola());

// Classe
class Animal {}

// Herança de classe
class Cachorro extends Animal {
  falar() {
    return 'Au au'
  }
}

console.log(new Cachorro().falar())