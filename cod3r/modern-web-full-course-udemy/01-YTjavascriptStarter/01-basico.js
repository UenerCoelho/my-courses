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
      // Estritamente Relacionais
      console.log(`Relational Operators: ${2 === 2}`);
      console.log(`Relational Operators: ${2 !== 2}`);
      console.log(`Relational Operators: ${2 === '2'}`);
      console.log(`Relational Operators: ${2 !== '2'}`);


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
  /* Ternary Operator = é uma atribuição condicional onde 
    o interrogação '?' representa as operações em 'true' e 
    2 pontos ':' representa operações em 'false'.
  */
  let temGrana = true
  let temCia = true
  let vamosSair = temGrana && temCia
  const simbora = vamosSair ? 'Bóóóraaa' : 'Que Trista =('
  console.log(simbora);

  console.log(`
      ##############################################
      `);
// Control structure
  const aluno = 'Uener', nota = 10
  if(nota < 7) {
    console.log(`${aluno} precisa estudar mais e jogar menos!`)
  } else if (nota === 10) {
    console.log(`${aluno} é um aluno excepcional!`)
  } else if (nota > 7) {
    console.log(`${aluno} é um aluno acima da média!`)
  } else {
    console.log(`${aluno} Alcançou a Média!`)
  }

  const resultTernário = 
    nota < 7 ? 
    `${aluno} você precisa Estudar mais` : 
    nota == 10 ? 
    `${aluno} sua nota é excepcional!` : 
    nota > 7 ? 
    `${aluno} você é um aluno acima da Média` : 
    `${aluno} Você alcançou a média`
  
  console.log(resultTernário)

  for(let index = 0; index < 100; index += 10) {
    console.log(index)
  }

  console.log(`
      ##############################################
      `);
// Arrays
  const notas = [ 6.5, 7.7, 8.1, 9.7 ]
  // Forma 01 de consultar/Utilizar itens no Array
    for(let index = 0; index < notas.length; index++) {
      console.log(notas[index])
    }
  console.log(' ');
  // Forma 02  de consultar/Utilizar itens no Array
    for(let nota of notas) {
      console.log(nota)
    }
  console.log(' ');
  // Forma 03  de consultar/Utilizar itens no Array
    notas.forEach(nota => console.log(nota * 2))

    console.log(`
    ##############################################
    `);
// Functions
  function sum(a, b) {
    console.log(a + b);
  }
  sum(3, 4)
  sum(3, 4, 5, 6, 7) // Neste caso, por haver mais parâmetros que o pedido, o Javascript vai apenas ignorar o restante e somar apenas os pedidos.
  //sum(3) //Neste caso, falta parâmetro, por o(s) que falta(m) sera(ão)  tidos como 'undefined' assim o resultado será 'NaN' pois qualquer número somado a 'undefined' será um 'NaN'

  // Para evitar o ocorrido assim, colocamos uma condicional para impedir um calculo com valores 'undefined'
  function sum1(a, b) {
    if(b == undefined) {
      b = 10
    }
    console.log(a + b);
  }
  sum1(2)
  // Outra maneiro de corrigir o problema acima
  function sum2(a, b) {
    console.log((a || 0) + (b || 0));
  }
  sum2(2)
  // Outra maneiro de corrigir o problema acima
  function sum3(a = 1, b = 1) {
    console.log(a + b);
  }
  sum3()

  // Chamando um function através de uma function
  function executar(fn) {
    if(typeof fn === 'function') {
      console.log('Chamando function fn')
      fn(100, 1)
    }
  }
  // Aqui está chamando a função sum3
  executar(sum3)

  console.log('Subtraindo...');
  function subtrair(a = 1, b = 1) {
    return a - b
  }
  let y = subtrair(100, 30)
  console.log(y);
  y += 10
  console.log(y);
  y -= 2
  console.log(y);
  y *= 2
  console.log(y);
  y /= 5
  console.log(y);

  // Function Declaration
    function multi1(a, b) {
      return a * b
    }
    console.log('Function Declaration result: ', multi1(2, 4));
  // Function Expression
    function multi2(a, b) {
      return a * b
    }
    console.log('Function Expression result: ', multi2(3, 6));

  console.log(`
  ##############################################
  `);
// Objects