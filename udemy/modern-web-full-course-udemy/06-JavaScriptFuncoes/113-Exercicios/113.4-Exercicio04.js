function dividir(dividendo, divisor) {
  const divide = dividendo / divisor
  const resto = divisor % 2
  return `Resultado = ${divide} e o Resto = ${resto}`
}

console.log(dividir(8, 2))