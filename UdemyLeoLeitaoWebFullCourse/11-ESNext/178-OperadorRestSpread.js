/*** 
    * Operador ... Rest(juntar)/spread(espalhar)
***/

// Usando Rest com parâmetro de função
function restOperator(...numbers) {
  let total = 0
  numbers.forEach(n => total += n)
  return total
}
console.log(restOperator(2, 3, 4, 5));

// Usando Spread com Objeto
const employee = { name: 'Maria', salary: 12345.67 }
const clone = { active: true, ...employee }
console.log(clone);

// Usando Spread com Array
const groupA = ['João', 'Pedro', 'Glória']
const finalGroup = ['Maria', ...groupA, 'Rafaela']
console.log(finalGroup);