const pilotos = [ 'Piloto1', 'Piloto2', 'Piloto3', 'Piloto4' ] ;
pilotos.pop(); // Remove o último items do array
console.log(pilotos);

pilotos.push('PilotoAdicionado'); // Adiciona item no final do array
console.log(pilotos);

pilotos.shift(); // Remove o primeiro items do array
console.log(pilotos);

pilotos.unshift('PilotoAdicionadoNoInicio'); // Adiciona item no começo do array
console.log(pilotos);

// O splice pode adicionar e remover elemento
// Adicionando
pilotos.splice(2, 0, 'PilotoNovo', 'Piloto4'); // Adiciona ao índice 2, remove 0
console.log(pilotos);

// Remover
pilotos.splice(3, 1); // remove um item no índice 3
console.log(pilotos);

const novosPilotos = pilotos.slice(2); // Cria um novo Array a partir do índice 2
console.log(novosPilotos);

const novosPilotos2 = pilotos.slice(1, 4); // Cria um novo array do índice 1 ao 4, mas o 4 índice não entra no novo array
console.log(novosPilotos2);