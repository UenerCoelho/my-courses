console.log(`Aula 7.2.2-Manipuland_Arrays

`)

// Manipulando Arrays
let techs = ['html', 'css', 'js']

// Adicionar um item no fim
techs.push('node.js')

// adicionar no começo
techs.unshift("sql")

// remover do fim
// techs.pop() // se repetir esta linha de codigo, vai removendo até acabar, do fim para o começo.

// remover do começo
// techs.shift() // se repetir esta linha de codigo, vai removendo até acabar, a partir do inicio.

// pegar somente alguns elementos do array
// console.log(techs.slice(1, 2))

// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')

console.log(techs, index)
techs.splice(index, 1)
console.log(techs)