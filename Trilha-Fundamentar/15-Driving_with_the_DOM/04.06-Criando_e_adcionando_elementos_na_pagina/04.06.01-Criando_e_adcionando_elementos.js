// Criando e Adicionando Elementos no HTML

// createElement
const div = document.createElement('div')
div.innerText = "Element Added"

const body = document.querySelector('body')
// prepend adicionando antes
// body.prepend(div)

// append adicionado depois
body.append(div)