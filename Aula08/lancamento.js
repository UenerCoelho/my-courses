class Lancamento {

  constructor (categoria, tipo, valor) {
    if (tipo !== "receita" && tipo !== "despesa") {
      throw new Error('Laçamento inválido: Tipo deve ser receita ou despesa.')
    }
    if (valor <= 0) {
      throw new Erro('Lançamento Inválido: Valor deve ser maior que zero.')
    }
    if (categoria === "") {
      throw new Error('Lançamento Inválido: A Categoria é obrigatória.')
    }
    this.categoria = categoria
    this.tipo = tipo
    this.valor = valor
  }

  getValorString () {
    // operador ternário
    return (this.tipo === 'despesa') ? this.valor * -1 : this.valor
  }
}