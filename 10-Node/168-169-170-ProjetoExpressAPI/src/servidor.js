const porta = 3003

const express = require('express')
const app = express()
const dataBase = require('./db')

app.get('/produtos', (req, res, next) => {
  res.send(dataBase.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(dataBase.getProdutos(req.params.id))
})

app.post('/produto', (req, res, next) => {
  const produto = dataBase.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco
  })
  res.send(produto)
})

app.listen(porta, () => {
  console.log(`Servidor ESTÁ executando na porta ${porta}`)
})