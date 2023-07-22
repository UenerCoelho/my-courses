// Manipulando elementos pelos atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('header')

// console.log(headerID.getAttribute('id'))

header.removeAttribute('id')
header.setAttribute('class', 'header new-attribute')

console.log(headerID.getAttribute('class'))
