// Aula 5.4_Object

let name, age, isHuman

name = "Uener"
age = 18
isHuman = true

// Multiplos Argumentos na Função
// console.log(name, age, isHuman)

// Escrita de Textos Variáveis, concatenando valores
// console.log('O ' + name + ' têm ' + age + ' anos.')

// Interpolando Valores com Template literals or Template Strings, tbm conhecido como crase (``).
// console.log(`o ${name} tem ${age} anos.`)

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`Pergunta: O ${person.name} têm ${person.age} anos, pesa ${person.weight}, mas ele é uma Adminitrador?`)
console.log(`Resposta: ${person.isAdmin}`)