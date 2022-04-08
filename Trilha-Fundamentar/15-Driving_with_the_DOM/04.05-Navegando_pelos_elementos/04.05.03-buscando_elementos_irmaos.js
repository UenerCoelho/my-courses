// Navegando pelos Elementos
const elementNext = document.querySelector('body header')
const elementPrevious = document.querySelector('body script')


// nextSibling sempre levará em consideração o espaço vazio, como quebras de linha
console.log(elementNext.nextSibling)

// nextElementSibling sempre pega os elementos
console.log(elementNext.nextElementSibling)


// previousSibling leva em consideração espaços vazio
console.log(elementPrevious.previousSibling)


// previousElementSibling não leva em consideração espaços vazios
console.log(elementPrevious.previousElementSibling)

