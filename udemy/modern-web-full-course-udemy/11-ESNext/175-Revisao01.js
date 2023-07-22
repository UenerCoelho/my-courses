// let e const
{// Escopo de Bloco
  var a = 2
  let b = 3

  console.log('Dentro do Escopo: ', a)
  console.log('Dentro do Escopo: ', b)
}

// var pode ser chamada dentro e fora do escopo
console.log('Fora de Escopo: ', a);
// let abaixo não será chama de for da escopo e dará erro
// console.log('Fora de Escopo: ', b);

// TemplateString abrindo e fechando crase
const produto = 'iPad'
console.log(`${produto} é caro!`);

// Destructuring
// Desestruturando uma string a partir de um Array
const [l, e, ...trans] = 'Cod3r'
console.log(l, e, trans);
const [...des] = 'Cod3r'
console.log(des);

// Desestruturando array a partir de array
const [x, y] = [1, 2]
console.log(x, y);

// Desestruturando atributos de objetos
const { idade: i, nome: n } = { nome: 'Catia', idade: 35 }
console.log(i, n);
