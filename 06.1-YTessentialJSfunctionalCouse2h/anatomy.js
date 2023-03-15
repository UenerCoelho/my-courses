// Function declaration


// Esta função não recebe parmetro e tbm não retorna nada
function sayHello() {
  console.log('Hello!');
}

let x= sayHello()
console.log(x)

// Function Declaration com parâmetro e retorno

function sayHelloTo(name) {
  console.log('Hello ' + name);
}

sayHelloTo('Uener')
sayHelloTo() //Retornará 'undefined'

function literals() {
  return 'String literals'
}

// Forma 1 de mostrar uma "function declaration literal" no console.log()
let showLiteralsFunction = literals()
console.log(showLiteralsFunction + ' Forma 1')

// Forma 2 de mostrar uma "function declaration literal" no console.log()
console.log(literals() + ' Forma 2');

// Function Declaration que recebe parâmetro e retorna algo
function receiveReturn(name) {
  return `Hi ${name}!`
}

console.log(receiveReturn('Uener'));