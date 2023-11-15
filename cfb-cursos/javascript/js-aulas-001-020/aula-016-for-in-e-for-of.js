//  para o loop FOR existem 2 variações, que são FOR IN e FOR OF, e serão tratadas neste documento

const objs = document.getElementsByTagName('div')
let num = [10, 20, 30, 40, 50]

for (let i = 0; i < num.length; i++) {
  console.log('Valores de i na posição: ' + i + ' é: ' + num[i])
}

// FOR IN - itera diretamente com a posição, não com os elementos dentro dela
for (n in num) {
  console.log('Valores de n na posição: ' + n + ' é: ' + num[n])
}

// FOR OF - itera com os elementos dentro de cada posição, não com as posições do FOR
for (n of num) {
  console.log(n)
}

// FOR IN e FOR OF - trabalhando com coleções de elementos
for (o in objs) {
  console.log(o)
}
for (o of objs) {
  console.log(o)
}
