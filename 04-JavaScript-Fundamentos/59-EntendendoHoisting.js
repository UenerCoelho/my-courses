/* Conceito de Hoisting
    * Hoisting significa içamento, e é justamente o que acontece no código abaixo, onde a variável a foi declarada abaixo do primeiro console.log(), mas o hoisting vai iça-la pra cima para que possa aparecer no console.log() de cima. No entanto, o resultado será undefined, pois a atribuição da variável acontece depois do primeiro console.log();
*/

console.log('a = ', a);// a = undefined
var a = 2;
console.log('a =', a);// 2

/* Por debaixo dos panos o Javascript fez:
    var a;
    console.log('a = ', a);
    a = 2;
    console.log('a = ', a);
*/

// Se for declarado uma variável com let não ocorre o efeito de içamento.

console.log('b = ', b);// ReferenceError: b is not defined
let a = 2;
console.log('b =', b);// 2