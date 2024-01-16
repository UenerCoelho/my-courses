/*
    Ela bore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const price = 1000.0
const debit = price * 0.1
const pix = price * 0.15
const twice = 2
const paymentMethod = 9
const overTwice = price * 0.1
const checkout = twice
if (checkout == debit) {
  console.log('Pagamento a Vista, preço: ' + price - debit)
} else if (checkout == pix) {
  console.log('Pagamento no PIX, pagará o preço: ' + price - pix)
} else if (checkout == paymentMethod) {
  const payment = price / paymentMethod + overTwice
  console.log(
    `Pagamento a prazo, você pagará ${paymentMethod} parcelas de R$${payment.toFixed(
      2
    )}, com um acréscimo de ${overTwice}%`
  )
} else {
  console.log(`Pagamento em ${twice} vezes em parcelas de R$${price / twice}`)
}
