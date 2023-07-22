console.log("Aula 6.3-Retornando_valores_dentro_da_funcao ")

// Function expression or Function anonymous
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)