// Um função é um trecho de código, nomeado, onde poderá ser utilizado onde quisermos.

// Função sem Retorno
function imprimirSoma(a, b) {
  console.log(a + b);
};

imprimirSoma(2, 8);

// Função com Retorno, nesta função foi passa 1 como valor padrão de 'b' (referente ao ES6)
function soma(a, b = 1) {
  return a + b;
};

console.log(soma(2, 3));
console.log(soma(2)); //neste cenário, foi passado somente um argumento dos 2, mas como foi setado 1 de valor padrão de 'b', ela somou 2 + 1.