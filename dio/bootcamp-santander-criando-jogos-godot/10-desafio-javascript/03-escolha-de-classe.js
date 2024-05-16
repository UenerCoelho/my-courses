/*  Entrada
      A entrada será o nome da classe escolhida.

    Saída
      A saída esperada é uma mensagem informando a classe escolhida dentre as três opções: Guerreiro, Mago e Arqueiro. Por exemplo, caso tenha escolhido Guerreiro, deverá imprimir “Você escolheu a classe Guerreiro!”. Caso a entrada seja diferente de uma dessas três classes, deverá retornar a mensagem: “Classe inválida! Escolha entre Guerreiro, Mago ou Arqueiro.”
*/
const classe = 'Mago'

// TODO: Implemente os demais casos para a resolução do desafio
switch (classe) {
  case 'Guerreiro':
    console.log('Você escolheu a classe Guerreiro!')
    break
  case 'Mago':
    console.log('Você escolheu a classe Mago!')
    break
  case 'Arqueiro':
    console.log('Você escolheu a classe Arqueiro!')
    break
  default:
    console.log('Classe inválida! Escolha entre Guerreiro, Mago ou Arqueiro.')
    break
}
