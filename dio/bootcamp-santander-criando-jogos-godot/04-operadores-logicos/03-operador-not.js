// NOT (!) Negação
let tempo = 'chuva'
let result = tempo !== 'chuva'
console.log('O tempo é diferente de "chuva"? ' + result)
console.log('O tempo é diferente de "chuva"? ' + !result)

let hora = 8

result = tempo !== 'chuva' && hora > 6
console.log('O tempo é diferente de "chuva"? ' + result)

result = !(tempo !== 'chuva') && hora > 6
console.log('O tempo é diferente de "chuva"? ' + result)
