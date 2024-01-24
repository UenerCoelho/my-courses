;(function () {
  const cartShop = {
    price: 1000,
    debitDiscount: 10,
    pixDiscount: 15,
    increaseValue: 10,
    twice: 2,
    plots: 9,
    checkoutWays: {
      debit: 1,
      pix: 2
    },
    // checkout: this.checkoutWays[debit],

    debit: function () {
      return this.price - this.price * (this.debitDiscount / 100)
    },

    pix: function () {
      return this.price - this.price * (this.pixDiscount / 100)
    },

    overTwice: function () {
      increase = this.price * (this.increaseValue / 100)
      return this.price + increase
    },

    plotsNumbers: () => {
      price = this.price / this.plots
      return price + overTwice()
    }
  }
  // if (cartShop.checkout == debit) {
  //   console.log(
  //     'Pagamento no Débito, você pagará ' +
  //       debit() +
  //       ', Desconto de 10%, de um total de R$' +
  //       cartShop.price
  //   )
  // }
  console.log(pix())
})()
