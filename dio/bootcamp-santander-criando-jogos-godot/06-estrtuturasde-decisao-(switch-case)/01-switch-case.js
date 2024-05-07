// Estrutura de decisão
// Switch/case/break/default

let fruit = 'mamão'

switch (fruit) {
  case 'laranja':
    console.log('Suco de Laranja')
    break

  case 'banana':
  case 'mamão':
    console.log('Vitamina de Banana e mamão')
    break

  case 'maçã':
  case 'morango':
    console.log('Suco de Maçã com morango')
    break

  default:
    console.log('Suco de genérico')
    break
}
