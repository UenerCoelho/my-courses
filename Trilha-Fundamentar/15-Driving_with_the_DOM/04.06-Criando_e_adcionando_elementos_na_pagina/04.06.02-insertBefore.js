// Adicionando elementos
const div = document.createElement('div')
div.innerText = "Element Added"

// insertBefore
const body = document.querySelector('body')

// const script = body.querySelector('script')
// body.insertBefore(div, script)

// Simulando o insertAfter
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)