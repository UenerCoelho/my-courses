// Lê os valores de entrada:
const valorSalario = parseFloat(gets())
const valorBeneficio = parseFloat(gets())

// Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario)
// Calcula e imprime a Saída (com 2 casa decimais):
const saida = valorSalario - valorImposto + valorBeneficio
print(saida.toFixed(2))

//Função útil para p caculo do imposto (baseado nas alíquotas).
function calcularImposto(salario) {
  let aliquota
  if (salario >= 0 && salario <= 1100) {
    aliquota = 0.05
  }
  // ToDo Criar as demais condições das alíquotas.
  else if (salario >= 1100.01 && salario <= 2500) {
    aliquota = 0.1
  } else {
    aliquota = 0.15
  }
  return aliquota * salario
}
