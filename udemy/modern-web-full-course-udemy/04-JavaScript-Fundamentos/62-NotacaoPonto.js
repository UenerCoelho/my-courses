console.log(typeof console); // object
console.log(Math.ceil(6.1)); // 7

const obj1 = {};
obj1.nome = 'Bola';
// obj1['nome'] = 'Bola'; // semelhante a linha acima
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
  // Arrow function
  this.exec = () => {
    console.log('Exec...')
  }
  // Semelhante a linha acima, mas feita normalmente
  this.func = function() {
    console.log('Exec Func...')
  }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();
obj2.func();