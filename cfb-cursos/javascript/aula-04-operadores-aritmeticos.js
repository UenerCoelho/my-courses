/* Operadores Aritméticos
    + Adição
    - Subtração
    / Divisão
    * Multiplicação
    % Módulo (Resto da Divisão)
    ++ ou += Incremento
    -- ou -= Decremento
*/
let num1 = 50
let num2 = 10
console.log('Soma: ', num1 + num2)
console.log('Subtração: ', num1 - num2)
console.log('Divisão: ', num1 / num2)
console.log('Divisão /=: ', (num1 /= num2))
console.log('Multiplicação: ', num1 * num2)
console.log('Multiplicação *=: ', (num1 *= num2))
console.log('Modulo (Resto divisão de 50/10): ', num1 % num2)
num1++
++num2
console.log(`Incremento ++: num1++ = ${num1}, ++num2 = ${num2}`)
num1--
num1--
num1--
--num2
--num2
--num2
console.log(`Decremento --: num1-- = ${num1}, --num2 =  ${num2}`)
console.log(
  `Incremento +=: num1 += 100 = ${(num1 += 100)}, 200 += num2 =${(num2 += 200)}`
)
console.log(
  `Incremento +=: num1 -= 10 = ${(num1 -= 10)}, 20 -= num2 =${(num2 -= 20)}`
)
