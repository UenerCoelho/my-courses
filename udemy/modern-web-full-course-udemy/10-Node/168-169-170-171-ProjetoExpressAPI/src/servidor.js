const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./db')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(dataBase.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = dataBase.salvarProduto({
    name: req.body.name,
    price: req.body.price
  })
  res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = dataBase.salvarProduto({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price
  })
  res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = dataBase.excluirProduto(req.params.id)
  res.send(produto)
})

app.listen(porta, () => {
  console.log(`Servidor ESTÁ executando na porta ${porta}`)
})