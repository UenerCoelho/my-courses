// O BREAK, é uma expressão que vai gerar uma interrupção na execução, quando o programa encontrar o Break ele encerra o loop e para a execução do programa.
let nBreak = 0
let max = 100

while (nBreak <= max) {
  console.log('Valor de nBreak = ' + nBreak)
  if (nBreak >= 10) {
    break
  }
  nBreak++
}
console.log('Fim do programa (break)')
// O CONTINUE, ele para somente aquela iteração de dentro do loop, e pula para proxima iteração.
let nContinue = 0
let maxContinue = 100
let pares = 0
for (let i = nContinue; i < maxContinue; i++) {
  console.log('Valor de n = ' + i)
  if (i % 2 != 0) {
    continue // aqui ele vai verificar de se é impar e vai pular e contar somente os pares
  }
  pares++
}

console.log('Quantidade de números pares é: ' + pares)
console.log('Fim do programa (continue).')
