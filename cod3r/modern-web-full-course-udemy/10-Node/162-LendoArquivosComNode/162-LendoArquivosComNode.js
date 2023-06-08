// "fs" é um modulo de file system pré-instalado no NodeJS
const fs = require('fs')

const path = __dirname + '/file.json'

// Sync Read...
const content = fs.readFileSync(path, 'utf-8')
console.log(content)

// aSync read...
fs.readFile(path, 'utf-8', (err, content1) => {
  const config = JSON.parse(content1)
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./file.json')
console.log(config.db)

fs.readdir(__dirname, (err, file) => {
  console.log(`
  
  Conteúdo da pasta...`)
  console.log(file)
})