// Criando o próprio 'forEach'
Array.prototype.meuForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  };
};

const meuArray = [ 'item1', 'item2', 'item3', 'item4' ];

meuArray.meuForEach(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
})