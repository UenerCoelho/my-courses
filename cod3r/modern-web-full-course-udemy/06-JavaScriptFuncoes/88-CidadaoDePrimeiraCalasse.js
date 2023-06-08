/* # Função em JS é:
    -> First-Class Object (Citizens)
    ou
    -> High-order function    
*/

// Função literal
function fun1() { };

// Armazenar função em Variável
const fun2 = function() { };
var fun21 = function() { };
let fun22 = function() { };

// Armazenar função em Array
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3));

// Armazenar função em um atributo de objeto
const obj = {};
obj.falar = function () { return 'Opa' };
console.log(obj.falar());

// Passar função como parâmetro de outra função
function run(fun) {
  fun()
};

run(function () { console.log('Executando...')});

// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
};

soma(2, 3)(4);

const soma2 = soma(2, 3);
soma2(4);
