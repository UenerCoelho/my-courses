console.log(`Aula 9.4-Throw_e_Try/Catch

`)

// Throw (Disparar ou Lançar)
// Try (tentar)
// Catch (Capturar)
/*
  Significa que tentaremos (try) executar um bloco de código,
  e caso de erro, será disparado (throw) o erro, e assim,
  podemos capturar-lo (catch) em nossa aplicação
*/

// throw
function sayMyName(name = '') {
  if (name === '') {
    // throw new Error("Nome é obrigatório")
    // ou
    throw 'Nome é obrigatório'
  }

  console.log('depois do erro')
}

// try...catch

try {
  sayMyName()

} catch (e) {
  console.log(e)
}

console.log('após o try...catch')
