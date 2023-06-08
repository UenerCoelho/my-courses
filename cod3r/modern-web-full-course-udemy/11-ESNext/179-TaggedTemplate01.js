/*** Tagged Templates - 
    * Tem o objetivo de processar o template dentro de uma função
***/
function tagged(parts, ...values) {
  console.log(parts);
  console.log(values);
  return 'Outra String'
}

const student = 'Gui'
const situation = 'Aprovado'
console.log(tagged `${student} está ${situation}.`);
console.log(`${student} está ${situation}.`);