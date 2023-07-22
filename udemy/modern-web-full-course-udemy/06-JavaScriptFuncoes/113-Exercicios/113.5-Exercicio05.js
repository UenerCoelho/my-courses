function mostrarDinheiro(valorEmDecimal) {
  valor = `R$ ${valorEmDecimal.toFixed(2).toString().replace(".", ",")}`
  console.log(valor)
}

mostrarDinheiro(0.1 + 0.2)
mostrarDinheiro(0.2 + 0.3)
mostrarDinheiro(0.3 + 0.4)
mostrarDinheiro(0.4 + 0.5)
mostrarDinheiro(0.5 + 0.6)