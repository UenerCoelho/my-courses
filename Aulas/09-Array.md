# Array no JavaScript

- Arrays são objetos especiais que oferecem meios para acessar e manipula suas propriedades por meio de índices.

## Como criar Array

- Existem duas formas:

  1. Forma mais simples e mais direta de se criar um array, depois adicionamos elementos ao array e os acessamos através do indices dentro das chaves:
      ```js
          var car = [];
            a[0] = 'Ka';
            a[1] = 'Corsa';
            b[2] = 'Pálio';
      ```
  2. Esta forma é um pouco diferente, podemos cria-lo inline, e ja termos um array inicializado:
      ```js
          var car = ['Ka', 'Corsa', 'Pálio'];
      ```
  3. Outra maneira de se criar um array é
      ```js
          // Possibilidade 1, através do new array. Também pode ser criado inline.
          var car = new array('Ka', 'Corsa', 'Pálio'); 

          // Possibilidade 2, através do new array Declarando um tamanho inicial para o array, mas inicia com os indices vazios.
          var car = new array(10);
      ```
      * Não podemos esquecer que o array não tem tamanho fixo e o tamanho inicial é apenas uma forma de inicialização.
  
## API do Array
- Lista de usos:
  * concat -> Junta dois arrays, retornando a cópia dos dois
  * every -> Retorna tru se todos os elementos atenderem a função
  * filter -> Filtra o array com base em uma função de filtro
  * forEach -> Percorre o array, invocando uma função para cada elemento
  * indexOf -> Retorna o índice do primeiro elemento encontrado
  * join -> Cria uma String customizada com todos os elementos do array
  * lastIndexOf -> Retorna o índice do ultimo elemento encontrado
  * map -> Transforma os elementos em um array
  * pop -> Remove o último elemento do array, retornando-o
  * push -> Adiciona um elemento no array, retornando o length
  * reduce -> Acumula os elementos de um array
  * reverse -> Inverte a ordem dos elementos do array
  * shift -> Remove o primeiro elemento do array, retornando-o
  * some -> Retorna true se um dos elementos atender a função
  * slice -> Seleciona uma parte do array, retornando-a
  * sort -> Ordena os elementos do array com base em uma função
  * splice -> Adiciona ou remove elementos de uma posição específica
  * toString -> Converte o array em uma String
  * unShift -> Adiciona elementos no início do array
  * valueOf -> Retorna o próprio array
  
 ### Algumas possibilidades de uso do Array
  - valueOf:
      ```js
          var car = ['Ka', 'Corsa', 'Pálio'];

          car.valueOf(); // [ 'Ka', 'Corsa', 'Pálio' ]

          car; // [ 'Ka', 'Corsa', 'Pálio' ]
      ```
  - toString:
      ```js
          car.toString(); // 'Ka,Corsa,Pálio'
      ```
  - length:
      ```js
          car.length; // 3, retorna a quantidade de itens no array

          car; // [ 'Ka', 'Corsa', 'Pálio']
      ```
  - push:
      ```js
          car.push('Gol'); // 4
          car; // [ 'Ka', 'Corsa', 'Pálio', 'Gol']