console.log(`Aula 11.2-Fluxo_de_caixa_familiar

`)
/*
    ### Sistema de gastos Familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo
    array:
        * receitas: []
        * despesas: []

    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a familia está com
    saldo positivo ou negativo, seguido do valor do saldo

*/


let family = {
  incomes: [200, 200, 250, 220, 120, 250, 200, 170, 300, 300, 300, 400, 350, 200, 150, 200, 250, 250, 150, 250, 150, 872],
  expenses: [500, 100, 500, 240, 160, 800, 395, 340, 240, 100, 600, 150, 100]
}

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value
  }
  return total
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0

  let balanceText = "negativo"

  if (itsOk) {
    balanceText = "positivo"
  }

  console.log(`
  Seu saldo é: ${balanceText}
  Você recebeu: ${calculateIncomes}, 
  e deve: ${calculateExpenses}
  Seu saldo atual é: R$ ${total.toFixed(2)}`)
}

calculateBalance()