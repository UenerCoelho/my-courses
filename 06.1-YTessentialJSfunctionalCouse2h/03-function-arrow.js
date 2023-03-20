// Arrow Function is always anonymous
const arrowFn1 = (n) => {
  return n +1
}

const arrowFn2 = n => {
  return n + 1
}

// No caso abaixo, por não haver o par de chaves {} o 'return' está implícito, desde que fique na mesma linha
const arrowFn3 = n => n + 1

// No caso abaixo, por não haver chaves {} e por haver 2 parâmetros, eles devem ficar entre parenteses, e como acima o 'return' está implícito
const arrowFn31 = (a, b) => a + b

console.log(arrowFn1(1));
console.log(arrowFn2(4));
console.log(arrowFn3(2));
console.log(arrowFn31(2, 10));