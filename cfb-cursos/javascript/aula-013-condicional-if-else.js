let num = 99

if (num > 10) {
  console.log('numeral maior que 10')
  // Aninhamento de IF
  if (num > 50) {
    console.log('numeral maior que 50')
    if (num < 100 && num > 55) {
      console.log('numeral menor que 100')
    }
  }
} else if (num < 10) {
  console.log('numeral menor que 10')
} else {
  console.log('numeral igual a 10')
}
