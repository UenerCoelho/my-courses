// While é utilizado quando temos uma quantidade de execução indefinida, ou seja, quando não sabemos o fim das possibilidades.

let n = 0

while (n <= 10) {
  console.log(n)
  n++
}

let nFatorial = 7
let fatorial = 1

while (nFatorial >= 1) {
  fatorial *= nFatorial // fatorial = fatorial * n
  nFatorial--
}

console.log(fatorial)
