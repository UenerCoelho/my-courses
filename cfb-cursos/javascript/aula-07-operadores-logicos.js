/* Operadores Lógicos
    ! NOT (Negação)
    || OR (Ou)
    && and (e)
*/
let n1 = 1
let n2 = 2
let n3 = 3
let n4 = 4

console.log('Operador NOT, ou negação')
// quando geramos true o resultado será false, ou seja !true =  false
console.log(
  `
  `,
  '(1 == 1) o resultado é: ',
  n1 == n1,
  ', mas a negação !(1 == 1), o resultado é: ',
  !(n1 == n1)
)
// Quando negarmos false o resultado será true, ou seja !false = true
console.log(
  `
  `,
  '(1 != 1) o resultado é: ',
  n1 != n1,
  ', mas a negação !(1 != 1), o resultado é: ',
  !!(n1 != n1)
)
// Quando negamos duplamente ( com dois sinais de !!) então o resulta sempre será o inicial, pois negamos a negação, se negarmos duplamente um resultado true, negaremos true que será false, depois negaremos false e voltará a ser true ou seja !!true é true.
console.log(
  `
  `,
  '(1 == 1) o resultado é: ',
  n1 == n1,
  ', mas dupla negação !!(1 == 1), o resultado é: ',
  !!(n1 == n1),
  `
  `
)

console.log('Tabela verdade do AND "&&"')
// * Quando compramos 'true' com 'true', o resultado é 'true'
console.log(
  `
  `,
  'Quando comparamos "true" com "ture", o resultado é "true"',
  `
  `,
  ' Ex.: (1 < 2), o resultado é: ',
  n1 < n2,
  ', e (4 > 1), o resultado é: ',
  n4 > n1,
  ', então (1 < 2) && (4 > 1), o resultado é: ',
  n1 < n2 && n4 > n1
)

// * Quando compramos 'true' com 'false', o resultado é 'false'
console.log(
  `
  `,
  'Quando comparamos "true" com "false", o resultado é "false"',
  `
  `,
  ' Ex.: (1 < 2), o resultado é: ',
  n1 < n2,
  ', e (4 < 1), o resultado é: ',
  n4 < n1,
  ', então (1 < 2) && (4 < 1), o resultado é: ',
  n1 < n2 && n4 < n1
)

// * Quando compramos 'false' com 'true', o resultado é 'false'
console.log(
  `
  `,
  'Quando comparamos "false" com "true", o resultado é "false"',
  `
  `,
  ' Ex.: (1 > 2), o resultado é: ',
  n1 > n2,
  ', e (4 > 1), o resultado é: ',
  n4 > n1,
  ', então (1 > 2) && (4 > 1), o resultado é: ',
  n1 > n2 && n4 > n1
)

// * Quando compramos 'false' com 'false', o resultado é 'false'
console.log(
  `
  `,
  'Quando comparamos "false" com "false", o resultado é "false"',
  `
  `,
  ' Ex.: (1 > 2), o resultado é: ',
  n1 > n2,
  ', e (4 < 1), o resultado é: ',
  n4 < n1,
  ', então (1 > 2) && (4 < 1), o resultado é: ',
  n1 > n2 && n4 < n1
)
console.log('')
console.log('Tabela verdade do OR "||"')
// * Quando compramos 'true' com 'true', o resultado é 'true'
console.log(
  `
  `,
  'Quando comparamos "true" com "true", o resultado é "true"',
  `
  `,
  ' Ex.: (1 < 2), o resultado é: ',
  n1 < n2,
  ', e (4 > 3), o resultado é: ',
  n4 > n3,
  ', então (1 < 2) || (4 > 3), o resultado é: ',
  n1 < n2 || n4 > n3
)

// * Quando compramos 'true' com 'false', o resultado é 'true'
console.log(
  `
  `,
  'Quando comparamos "true" com "false", o resultado é "true"',
  `
  `,
  ' Ex.: (1 < 2), o resultado é: ',
  n1 < n2,
  ', e (4 < 3), o resultado é: ',
  n4 < n3,
  ', então (1 < 2) || (4 < 3), o resultado é: ',
  n1 < n2 || n4 < n3
)

// * Quando compramos 'false' com 'true', o resultado é 'true'
console.log(
  `
  `,
  'Quando comparamos "false" com "true", o resultado é "true"',
  `
  `,
  ' Ex.: (1 > 2), o resultado é: ',
  n1 > n2,
  ', e (4 > 3), o resultado é: ',
  n4 > n3,
  ', então (1 > 2) || (4 > 3), o resultado é: ',
  n1 > n2 || n4 > n3
)

// * Quando compramos 'false' com 'false', o resultado é 'false'
console.log(
  `
  `,
  'Quando comparamos "false" com "false", o resultado é "false"',
  `
  `,
  ' Ex.: (1 > 2), o resultado é: ',
  n1 > n2,
  ', e (4 < 3), o resultado é: ',
  n4 < n3,
  ', então (1 > 2) || (4 < 3), o resultado é: ',
  n1 > n2 || n4 < n3
)
