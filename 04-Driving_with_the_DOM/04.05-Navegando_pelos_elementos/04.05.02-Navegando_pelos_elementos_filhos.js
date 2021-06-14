// Navegando pelos elementos
// childNodes children

const elementChide = document.querySelector('body')

console.log(elementChide.childNodes)

// O children é um HTMLCollection, confira pelo devtools do browser
console.log(elementChide.children)

/* Para o firstChild firstElementChild, verifique se seu editor de código está com o código "editor.formatOnSave": true, se estiver true, ele vai pular uma linha no código e deixar um child text na linha vazia, por isso o first childe sempre vai ser text.
exemplo de erro:
neste sempre o first childe do body será text
<body> 
  <header></header>
</body>

neste sempre não, será o header
<body><header></header><body>
*/
console.log(elementChide.firstElementChild)

// lastChild lastElementChild

console.log(elementChide.lastElementChild)