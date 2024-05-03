// OR (||) ao menos uma condição precisa ser true, ou o resultado será falso
// O personagem só poderá sair sem chuva ou com proteção

let tempo = 'sol'
let item = 'guarda-chuva'
let podeSair = tempo !== 'chuva' || item === 'guarda-chuva'
console.log('O personagem pode sair? ' + podeSair)
