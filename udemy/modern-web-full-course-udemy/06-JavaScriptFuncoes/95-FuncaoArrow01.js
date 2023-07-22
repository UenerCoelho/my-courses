// Metodo Normal
let dobro = function(a) {
  return 2 * a;
}

// Arrow Function 1
dobro = (a) => {
  return 2 * a;
}

// Arrow Function Reduzida, mas tem retorno implícito
dobro = a => 2 * a;
console.log(dobro(Math.PI)); 

// Exemplo de funções sem parâmetros
// Método Normal
let ola = function () {
  return 'Olá!';
}

ola = () => 'Olá';

// No caso de um função sem parâmetro podemos fazer assim:
ola = _ => 'Olá!';
console.log(ola());