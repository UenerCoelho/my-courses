function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
};

let opção;

do {
  opção = getInteiroAleatorioEntre(-1, 10);
  console.log(`A opção escolhida foi: ${opção}.`);
} while (opção != -1);

console.log('Até a próxima!');