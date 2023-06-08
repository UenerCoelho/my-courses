// Classe
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('Cátia');
p1.falar()

// Função Construtora
const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  };
};

const p2 = criarPessoa('Uener');
p2.falar();