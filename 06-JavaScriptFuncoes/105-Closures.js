// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externamente à função

// Contexto léxico em ação

const x = 'Variável Global'

function fora() {
  const x = 'Variável Local'
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora() 
console.log(minhaFuncao())