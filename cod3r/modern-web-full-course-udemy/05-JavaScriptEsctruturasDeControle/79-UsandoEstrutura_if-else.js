const imprimirResultado = function(nota) {
  if(nota >= 7) {
    console.log('Aprovado!')
  }else {
    console.log('Reprovado!')
  };
};

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // Pelo fato do JavaScript ser fracamente tipo, este resultado deveria gerar um erro, mas, por baixo dos panos, vai testar, só que, como é uma String, não conseguirá comparar e vai gerar o resultado falso, neste caso, 'Reprovado'