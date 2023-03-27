// Variables (var, let e const)
var a = 1
let b = 2
const c = a + b
const d = a - b

console.log(c);
console.log(d);
console.log(`
      ##############################################
      `);
// Operators
  // 1. Unary Operators
    let aU = 3
    // Postfixed
    aU++
    console.log('Unary Operators Postfixed: '+aU);
    aU--
    console.log('Unary Operators Postfixed: '+aU);
    console.log(`
    ##############################################
    `);
    // Prefixed
    ++aU
    console.log('Unary Operators Prefixed: '+aU);
    --aU
    console.log('Unary Operators Prefixed: '+aU);

    console.log(`
    ##############################################
    `);
  // 2. Binary Operator
    // 2-1. Arithmetic
      let aA = 557
      // Infixed
      let xA = aA % 3
      console.log('Binary Operator - Arithmetic infixed: '+xA)
      xA = aA + 3
      console.log('Binary Operator - Arithmetic infixed: '+xA)
      xA = aA - 3
      console.log('Binary Operator - Arithmetic infixed: '+xA)
      xA = aA * 3
      console.log('Binary Operator - Arithmetic infixed: '+xA)
      xA = aA / 3
      console.log('Binary Operator - Arithmetic infixed: '+xA)

      console.log(`
      ##############################################
      `);
      // 2-2. Relational (Bigger then >, Less than <, greater than or equal to >=, Less than or equal to <=, Different !=, Equal ==)
      console.log(`Relational Operators: ${3 > 2}`);
      console.log(`Relational Operators: ${3 < 2}`);
      console.log(`Relational Operators: ${3 >= 2}`);
      console.log(`Relational Operators: ${3 <= 2}`);
      console.log(`Relational Operators: ${3 != 2}`);
      console.log(`Relational Operators: ${3 == 2}`);

      console.log(`
      ##############################################
      `);
      // 2-3. Logical
      console.log(`Logical Operators: ${!(3 > 2)}`);
      console.log(`Logical Operators: ${!(3 < 2)}`);
      console.log(`Logical Operators: ${!(3 >= 2)}`);
      console.log(`Logical Operators: ${!(3 <= 2)}`);
      console.log(`Logical Operators: ${!(3 != 2)}`);
      console.log(`Logical Operators: ${!(3 == 2)}`);
      console.log(`Logical Operators: ${(!'teste')}`);
      console.log(`Logical Operators: ${(!!'teste')}`);
      console.log(`Logical Operators: ${(!' ')}`);
      console.log(`Logical Operators: ${(!!' ')}`);
      let temSol = true, estouComDinheiro = true
      let vouSair = temSol && estouComDinheiro
      console.log('');
      console.log('Vou sair se tiver com sol e dinheiro: '+vouSair);
      temSol = false, estouComDinheiro= true
      // Por ser uma expressão com '&&' então todas a partes precisam ser atendidas como 'true'
      vouSair = temSol && estouComDinheiro
      console.log('Vou sair se tiver com sol e dinheiro: '+vouSair);
      temSol = true, estouComDinheiro = false
      vouSair
      console.log(`
      ##############################################
      `);
    // 2-4. Assignment
      let aaA = 1
      console.log('Binary Operator - Assignment: ' + aaA);
      aaA += 1
      console.log('Binary Operator - Assignment: ' + aaA);
      aaA *= 9
      console.log('Binary Operator - Assignment: ' + aaA);
      aaA -= 10
      console.log('Binary Operator - Assignment: ' + aaA);
      aaA /= 3
      console.log('Binary Operator - Assignment: ' + aaA);
      console.log(`
      ##############################################
      `);
// Control structure

// Functions

// Objects