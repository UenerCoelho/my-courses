console.log(`Aula 8.0.1-Expressoes_e_Operadores

`)

/*
    Expressoes e Operadores
      - Expressions
      - Operators
         * Binary
         * Unary
         * Ternary
*/

// Expression, levando em consideração a Função abaixo, precisa fechar com ";", somente nestes casos
let number = 1;

// Expressão de uma função "Auto Executável"
(function() {
  console.log('Expressão de uma Função Auto Executável')
})()

// Operador Binário
console.log(number + 1)

// Operador Unário com Incremento
console.log(++number)

// Operador Unário com Decremento
console.log(--number)

// Operador Ternário Verdadeiro (true)
console.log(true ? 'Verdadeiro' : 'Falso')

// Operador Ternário Falso (false)
console.log(false ? 'Verdadeiro' : 'Falso')