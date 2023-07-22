console.log(`Aula 8.1.1-Operadore_Condicional_Ternario

`)

// Condição então Valor 1, se não Valor 2
// Condition ? value1 : value2

// Exemplos
let pao = true
let queijo = true

const niceBreakfast = pao || (!queijo) ? 'Café Top' : 'Café Ruim'

console.log(niceBreakfast)

// Maior de 18

let age = 16

const canDrive = age >= 18 ? "Can Drive" : "Can't Drive"

console.log(canDrive)