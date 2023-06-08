// Armazenamento de uma função em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);
// Função arrow sendo atribuída numa variável
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 4));

// Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(5, 6));