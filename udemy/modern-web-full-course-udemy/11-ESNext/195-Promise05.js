function workOrNot(value, errorChance) {
  return new Promise((resolve, reject) => {
    try {
      con.log('feito pra gerar erro')
      if (Math.random() < errorChance) {
        reject('Ocorreu um erro!')
      } else {
        resolve(value)
      }
    } catch (e) {
      reject(e)
    }
  })
}

workOrNot('Testando...', 0.5)
  .then(value => `Valor: ${value}`)
  .then(
    v => consol.log(v)
    // err => console.log(`Erro específico: ${err}`)
  )
  .then(() => console.log('Quase Fim!'))
  .catch(err => console.log(`Erro Geral: ${err}`))
  .then(() => console.log('Fim!'))
