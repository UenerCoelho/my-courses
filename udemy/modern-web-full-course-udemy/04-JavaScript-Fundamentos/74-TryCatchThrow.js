function tratarErroELancar(erro) {
  throw new Erro('...');
};

function imprimirNomeGritado(obj) {
  try {
  console.log(obj.name.toUpperCase() + '!!!');
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('Finally');
  }
};

var obj = { name: 'Roberto' };
imprimirNomeGritado(obj);


var obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);