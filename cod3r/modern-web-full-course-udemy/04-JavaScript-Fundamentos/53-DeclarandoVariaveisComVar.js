// Se a variável estiver no escopo globa, fora dde uma função, mesmo que esteja dentro de um bloco de código, ainda será possível alterá-la, mesmo esta no escopo global.

var numero = 1;
{
  var numero = 2;
  console.log('Dentro do bloco de código = ', numero); // 2
}
console.log('Fora do bloco de código = ', numero); // 2


// podemos ter varias variáveis com mesmo nome, desde que esteja cada uma no seu próprio escope local, e fora do escopo global.
