let num = 10

let n1 = 5
let resto

/* Abaixo temos a seguinte lógica
  se (?) o resto for true retorna 'Par' se for false retorna 'Impar', no caso do operador ternário, a primeira opção após o ? (exclamação) é true e após : (doi pontos) é false.
  Teste lógico : se verdadeiro : se falso
*/
resto = num % 2 ? 'Par' : 'Impar'
console.log(resto)

// Abaixo foi feita a negação do resultado, por isso se o resultado for true será negado para false e vice e versa.
resto = !(num % 2) ? 'Par' : 'Impar'
console.log(resto)

let maiorMenor = num < n1 ? 'Verdadeiro' : 'Falso'
console.log(maiorMenor)
