console.log(`Aula 10.1-For

`)
// for - Estrutura de repetição
// break - encerra a execução do loop
// continue - pula a execução do momento

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i)
}

for (let f = 1; f <= 10; f++) {
  if (f === 9) {
    continue;
  }

  console.log(f)
}