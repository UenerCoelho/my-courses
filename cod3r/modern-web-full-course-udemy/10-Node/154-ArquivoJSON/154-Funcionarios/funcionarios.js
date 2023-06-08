const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

// Buscando Chineses
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalaraio = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  // console.log(funcionarios)

  // Mulher Chinesa com menor salário
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .filter(menorSalaraio)

  console.log(func);
});