// Prevenir que o Objeto se Estendido
const produto = Object.preventExtensions({
  nome: 'Qualquer', preço: 1.99, tag: 'promoção'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descrição = 'Borracha escolar Branca';
delete produto.tag;
console.log(produto);

// Selando o Objeto
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);