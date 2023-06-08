/* => Tabela Verdade
  # Operador && (and) => todos os operandos, tem que ser verdadeiro, para que o resultado seja verdadeiro, basta um ser falso para que o resultado seja falso
      -> true && true => true
      -> true && false => false
      -> false && ? => false
  
  #  Operador || (ou) => se o primeiro operando for verdadeiro, o resultado será verdadeiro, mas se o primeiro for falso o resultado dará verdadeiro se o segundo for verdadeiro e falso se for falso, no caso do operador || ele para a verificação quando encontra valor true.
      -> true || ? => true
      -> false || true => true
      -> false || false => false
      -> false || true || false -> true
  
  # Operador XOR (^ ou != (ou-exclusivo)) =>  sempre será diferentes, o ou-exclusivo pode ser simulado com o operador diferente !=
      -> true xor true => false
      -> false xor true => true
      -> true xor false => true
      -> false xor false => false
  
  # Operador ! (negação) => a negação de qualquer valor sempre será seu oposto
      -> !true => false
      -> !false => true
*/

function compras(trabalho1, trabalho2) {
  // Operador OU (||)
  const comprarSorvete = trabalho1 || trabalho2;

  // Operador and (&&)
  const comprarTv50 = trabalho1 && trabalho2;
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise XOR

  // Operador ou-exclusivo (XOR) pode ser simulado com operador diferente (!=)
  const comprarTv32 = trabalho1 != trabalho2; 

  // Operador Unário negação (!)
  const manterSaudável = !comprarSorvete;

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudável };
};

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));