/*
    Ela bore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const price = 1000
const debitDiscount = 10
const pixDiscount = 15
const increaseValue = 2
const twice = 2
const plots = 9
const checkout = 3

function debit(price, discount = 10) {
  return price - price * (discount / 100)
}

function pix(price, discount = 15) {
  return price - price * (discount / 100)
}

function overTwice(price, increaseValue) {
  increase = price * (increaseValue / 100)
  return price + increase
}

function plotsNumbers(price = 100, plots = 3) {
  price = price / plots
  return price + overTwice(price, increaseValue)
}

if (checkout == 1) {
  console.log(
    'Pagamento no Débito, você pagará ' +
      debit(price, debitDiscount) +
      ', Desconto de 10%, de um total de R$' +
      price
  )
} else if (checkout == 2) {
  console.log(
    'Pagamento no PIX, você pagará ' +
      pix(price, pixDiscount) +
      ', Desconto de 15%, de um total de R$' +
      price
  )
} else if (checkout == 3) {
  console.log(
    'Pagamento a prazo, você pagará ' +
      plots +
      ' parcelas de R$' +
      plotsNumbers(price, plots).toFixed(2) +
      ', com um acréscimo de ' +
      increaseValue +
      '%'
  )
} else {
  console.log(
    `Pagamento em ${twice} vezes em parcelas de R$${
      price / twice
    }, de um total de R$${price}.`
  )
}
