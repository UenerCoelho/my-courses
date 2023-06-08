const moduloA = require ('../../152-ModuloA');
const moduloB = require ('../152-ModuloB');

console.log(moduloA.ola);
console.log(moduloB.boaNoite());

// const saudacao = require('saudacao');
// console.log(saudacao.ola);

// const http = require('http');
// http.createServer((req, res) => {
//   res.write('Bom dia!');
//   res.end();
// }).listen(8080);

const pastaC = require('./152-PastaC')
console.log(pastaC.ola2);