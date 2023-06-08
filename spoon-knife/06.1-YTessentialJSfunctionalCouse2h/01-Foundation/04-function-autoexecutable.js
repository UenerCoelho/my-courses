// Função auto-executável, ou função imediatamente executável
(function (a, b, c) {
  'use strict'
  d = a + (b - c);
  console.log( `Result: ${d}`)
  let e = 10 * d;
  console.log(e);
})(1, 3, 2);

// Para que 2 ou mais funções auto-executáveis funcionem é necessário finalizar com ponto e vírgula ";" no final da função
(function (a, b, c) {
  d = a + (b - c);
  console.log( `Result: ${d}`)
  let e = 100 * d;
  console.log(e);
})(1, 3, 2);

// Função arrow auto-executável
(() => {
  console.log('Função arrow auto-executável de uma linha!');
})();

// Função arrow auto-executável de uma linha só
(() =>  console.log('Função arrow auto-executável de uma linha só!'))();