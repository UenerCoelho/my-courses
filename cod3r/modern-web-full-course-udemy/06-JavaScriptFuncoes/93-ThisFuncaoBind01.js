const pessoa = {
  saudação: 'Bom dia!',
  falar() {
    console.log(this.saudação)
  }
};

pessoa.falar();

const falar = pessoa.falar
falar() // Sem o uso do 'bind' essa linha gera conflito de paradigma: funcional e 00

// Usando o 'bind'
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()