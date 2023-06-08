// Operadores Unários

let num1 = 1;
let num2 = 2;

num1++; // forma pós-fixada
console.log(num1);
--num1; // Forma pré-fixada, possui uma prioridade maior que a pós-fixada
console.log(num1);

console.log(++num1 === num2--); // neste caso o resultado será true, pois a forma pre-fixada no num1 executa antes da comparação, por isso, no ato da comparação, o num2 ainda tinha o valor 2, e só depois da comparação passou a ser decrementado e ter valor 1
