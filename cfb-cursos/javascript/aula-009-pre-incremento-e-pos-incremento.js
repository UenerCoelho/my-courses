let n = 10
console.log(n++) // neste caso do pós incremento, não vai incrementar, pois ele incrementa após chamar a variável, por isso o resultado ainda será o anterior
console.log(n) // agora se colocarmos n em um console.log, será incrementado, pois ele pega o q foi feito no pós incremento acima
console.log(++n) // já no pré incremento ele incrementa primeiro, de pois chama a variável

// O mesmo valeria parra decremento
console.log(n--) // pós decremento, e como acima não decrementará
console.log(n) // para aparecer preciso chamar após a ação acima
console.log(--n) // pré decremento

// Podemo concatenar numero com strings também
console.log(n++ + '' + --n)
