// Atribuído ao objeto pessoa -> João
const pessoa = { nome: 'João'};
console.log('1', pessoa)
console.log('Primeira Atribuição: ', pessoa.nome)

// Reatribuído -> pedro
pessoa.nome = 'Pedro';
console.log('2', pessoa)
console.log('Segunda Atribuição: ', pessoa.nome)

// Congelando a atribuição acima para não ser mais alterada
Object.freeze(pessoa);

// Tentado reatribuir, mas não será alterado por causa da linha acima
pessoa.nome = 'Maria';
console.log('3', pessoa);
console.log('Terceira Atribuição: ', pessoa.nome)