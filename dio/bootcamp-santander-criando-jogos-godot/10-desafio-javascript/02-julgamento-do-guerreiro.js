const userName = 'Nome do Guerreiro'
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const level = 40

// TODO: Implemente a condição necessária para a exibição de cada mensagem
if (level >= 40) {
  console.log(
    'Parabéns, valente ' + userName + '! Sua coragem e habilidade são notáveis!'
  )
} else if (level >= 30 && level < 40) {
  console.log('Quase lá, ' + userName + '! Continue treinando!')
} else {
  console.log('Ainda é cedo, jovem ' + userName + '. Treine mais!')
}
