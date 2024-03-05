// Variável do tipo objeto sem previsibilidade
let produto: object = {
  nome:'Uener',
  cidade:'Cuiabá',
  end: 'Rua tal, SN'
}

// Objeto formatado, com shape
type produtoLoja = {
  nome: string;
  price: number;
  quantidade: number;
}

let produtoVenda: produtoLoja = {
  nome: 'Chinelo',
  price: 1.99,
  quantidade: 100
}