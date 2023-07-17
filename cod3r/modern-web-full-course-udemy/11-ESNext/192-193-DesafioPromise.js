const fs = require('fs')
const path = require('path')

function readFile(contentPath) {
  return new Promise(resolve => {
    fs.readFile(contentPath, function (_, content) {
      resolve(content.toString())
    })
    // console.log('Depois de ler')
  })
}

const contentPath = path.join(__dirname, '192-DesafioPromise.txt')

readFile(contentPath)
  // .then(linhas => console.log(linhas[1]))
  // .then(linhas => console.log(linhas.length))
  .then(content => content.split('\n'))
  .then(linhas => linhas.join(','))
  .then(content => `O valor final é: ${content}`)
  .then(console.log)
