let number = '1'
console.log(number === '1')

// =   é atribuição
// ==  é para comparar o valor
// === é para comparar o valor e o formato do conteúdo

let marca = 'Apple'
console.log(marca === 'Apple')
console.log(marca !== 'Apple')
console.log(marca !== 'Samsung')

let cpfLocked = '123.456.789-00'
let userCPF = '001.234.567-89'
let blockedUser = cpfLocked === userCPF
console.log('O usuário está barrado? ' + blockedUser)

blockedUser = cpfLocked !== userCPF
console.log('O usuário está barrado? ' + blockedUser)
