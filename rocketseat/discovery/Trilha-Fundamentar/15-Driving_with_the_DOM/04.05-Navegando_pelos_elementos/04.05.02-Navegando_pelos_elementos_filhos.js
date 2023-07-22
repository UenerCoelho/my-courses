// Navegando pelos elementos
// childNodes children

const element = document.querySelector('body')
const elementFirst = document.querySelector('body')
const elementLast = document.querySelector('body')

console.log(element.childNodes)

// firstChild levará em consideração os espaços vazios, como quebra de linha
console.log(elementFirst.firstChild)

// firstElementChild não levará em consideração os espaços vazios
console.log(elementFirst.firstElementChild)

// lastChild levará em consideração os espaços vazios, como quebra de linha
console.log(elementLast.lastChild)
// lastElementChild não levará em consideração os espaços vazios
console.log(elementLast.lastElementChild)