/*  Descrição do Desafio
      Você está desenvolvendo um sistema para um jogo de combate onde os jogadores acumulam dinheiro ao longo dos rounds e no início de cada round devem comprar um item ou economizar para rounds futuros. No início da partida, o jogador possui um saldo inicial. Durante o jogo, o saldo do jogador é ajustado de acordo com o resultado de cada round: se o jogador ganhar, o saldo aumenta em 15%, se o jogador perder, o saldo aumenta em apenas 5%, e se for um round bônus, o saldo aumenta em 20%. Sua tarefa é criar um método que determine se um jogador deve comprar um item ou economizar com base no saldo atual.

    Entrada
      A entrada será composta por três valores: o primeiro valor será um número inteiro representando o saldo inicial do jogador; o segundo valor será "ganhou" se o jogador ganhou o último round, "perdeu" se o jogador perdeu o último round ou “bônus” se for um round bônus; o terceiro valor será um número inteiro representando o custo do item que o jogador deseja comprar neste round.

    Saída
      Imprima a mensagem "Comprar" se o jogador tiver saldo suficiente para comprar o item, caso contrário deve retornar "Economizar".
*/

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const saldoInicial = 98
const resultadoUltimoRound = 'perdeu'
const custoItem = 120

function decidirCompraOuEconomizar(
  saldoInicial,
  resultadoUltimoRound,
  custoItem
) {
  let novoSaldo

  // TODO: Implemente a lógica para ajustar o saldo de acordo com o resultado do último round
  if (resultadoUltimoRound === 'ganhou') {
    novoSaldo = saldoInicial + saldoInicial * 0.15
  } else if (resultadoUltimoRound === 'bônus') {
    novoSaldo = saldoInicial + saldoInicial * 0.2
  } else {
    novoSaldo = saldoInicial + saldoInicial * 0.05
  }
  // Utilizamos a função JavaScript Math.round() para arredondar um número para o inteiro mais próximo.
  novoSaldo = Math.round(novoSaldo)

  // TODO: Implemente a lógica para verificar se o saldo é suficiente para comprar o item
  if (novoSaldo >= custoItem) {
    console.log('Comprar')
  } else {
    console.log('Economizar')
  }
}

// TODO: Chame a função para imprimir o resultado
decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem)
