function getPreco(imposto = 0, moeda = 'RS') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro1 = { preco: 49990, desc: 0.20}
const carro2 = { preco: 60000, desc: 0.20}

console.log(getPreco.call(carro1))
console.log(getPreco.apply(carro2))

console.log(getPreco.call(carro1, 0.17, '$'))
console.log(getPreco.apply(carro2, [0.17, '$']))