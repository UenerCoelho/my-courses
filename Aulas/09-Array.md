# Array no JavaScript

- Arrays são objetos especiais que oferecem meios para acessar e manipula suas propriedades por meio de índices.

## Como criar Array

- Existem duas formas:

  1. Forma mais simples e mais direta de se criar um array, depois adicionamos elementos ao array e os acessamos através do indices dentro das chaves:
     ```js
     var car = []
     a[0] = 'Ka'
     a[1] = 'Corsa'
     b[2] = 'Pálio'
     ```
  2. Esta forma é um pouco diferente, podemos cria-lo inline, e ja termos um array inicializado:
     ```js
     var car = ['Ka', 'Corsa', 'Pálio']
     ```
  3. Outra maneira de se criar um array é

     ```js
     // Possibilidade 1, através do new array. Também pode ser criado inline.
     var car = new array('Ka', 'Corsa', 'Pálio')

     // Possibilidade 2, através do new array Declarando um tamanho inicial para o array, mas inicia com os indices vazios.
     var car = new array(10)
     ```

     - Não podemos esquecer que o array não tem tamanho fixo e o tamanho inicial é apenas uma forma de inicialização.

## API do Array

- Lista de usos:
  - concat -> Junta dois arrays, retornando a cópia dos dois
  - every -> Retorna tru se todos os elementos atenderem a função
  - filter -> Filtra o array com base em uma função de filtro
  - forEach -> Percorre o array, invocando uma função para cada elemento
  - indexOf -> Retorna o índice do primeiro elemento encontrado
  - join -> Cria uma String customizada com todos os elementos do array
  - lastIndexOf -> Retorna o índice do ultimo elemento encontrado
  - map -> Transforma os elementos em um array
  - pop -> Remove o último elemento do array, retornando-o
  - push -> Adiciona um elemento no final do array, retornando o length
  - reduce -> Acumula os elementos de um array
  - reverse -> Inverte a ordem dos elementos do array
  - shift -> Remove o primeiro elemento do array, retornando-o
  - some -> Retorna true se um dos elementos atender a função
  - slice -> Seleciona uma parte do array, retornando-a
  - sort -> Ordena os elementos do array com base em uma função
  - splice -> Adiciona ou remove elementos de uma posição específica
  - toString -> Converte o array em uma String
  - unShift -> Adiciona elementos no início do array
  - valueOf -> Retorna o próprio array

### Algumas possibilidades de uso do Array

- valueOf:

  ```js
  var car = ['Ka', 'Corsa', 'Pálio']

  car.valueOf() // [ 'Ka', 'Corsa', 'Pálio' ]

  car // [ 'Ka', 'Corsa', 'Pálio' ]
  ```
- toString:

  ```js
  car.toString() // 'Ka,Corsa,Pálio'
  ```
- length:

  ```js
  car.length // 3, retorna a quantidade de itens no array

  car // [ 'Ka', 'Corsa', 'Pálio']
  ```
- push:
  ```js
  car.push('Gol') // 4
  car // [ 'Ka', 'Corsa', 'Pálio', 'Gol']
  ```
- pop:
  ```js
  car.pop() // 'Gol'
  car // [ 'Ka', 'Corsa', 'Pálio']
  ```
- unshift:
  ```js
  car.unshift('Gol') // 4
  car // [ 'Gol', 'Ka', 'Corsa', 'Pálio']
  ```
- shift:
  ```js
  car.shift() //'Ka'
  car // [ 'Corsa', 'Pálio']
  ```
- indexOf:
  ```js
  car.indexOf('Corsa') // 1
  ```
- splice:

  ```js
  car.splice(1, 1) // [ 'Corsa' ] //remove um array apenas na posição 1 ex.: car.splice(posição, quantidade)

  car.splice(1, 1, 'Sonic') // [ 'Corsa' ]
  car // [ 'Ka', 'Sonic', 'Palio' ]

  car.splice(1, 0, 'Corsa') // [ ]
  car // [ 'Ka', 'Corsa', 'Sonic', 'Palio' ]
  ```
- forEach:
    ```js
    car.forEach(function (element) {
      console.log(element)
    })

    /* Resultado, mas sairá direto no terminal, sem estar comentado
    Ka
    Corsa
    Sonic
    Pálio
    */

    // For convencional

    for(var i=0; i< car.length; i++) {
      console.log(car[i]);
    }
    /* Resultado idêntico, mas sairá direto no terminal, sem estar comentado
    Ka
    Corsa
    Sonic
    Pálio
    */

    // Somando preço com forEach
    var car = [];

      car[0] = {brand: 'Ford', price: 14000};
      car[1] = {brand: 'Chevrolet', price: 15000};
      car[2] = {brand: 'Fiat', price: 16000};
      car[3] = {brand: 'Volkswagem', price: 17000};
    
    var total = 0;

    car.forEach(function(element) {
      total += element.price;
    });

    console.log(total); // 62000

  ```
- filter:
    ```js
    var car = [];

      car[0] = {brand: 'Ford', model: 'Ka'};
      car[1] = {brand: 'Chevrolet', model: 'Corsa'};
      car[2] = {brand: 'Fiat', model: 'Pálio'};
      car[3] = {brand: 'Volkswagem', model: 'Gol'};

      car.filter(function (element) {
        return element.brand === 'Ford';
      });

      // [{ brand: 'Ford', model: 'Ka' }]

      // Usando o forEach
      var carFord = [];
      car.forEach(function(element) {
        if (element.brand === 'Ford')  carFor.push(element);
      });

      console.log(carFord); // [ { brand: 'Ford', model: 'Ka' }]

      // outra maneira, mais elegante =]
      var carFord = car.filter(function(element) {
        return element.brand === 'Ford';
      });

      console.log(carFord); // [ { brand: 'Ford', model: 'Ka' }]
    ```
- every e some:
    ```js
      car.every(function(elements) {
        return elements.brand === 'Ford';
      });

      false // Retorno da função

      car.some(function(element) {
        return element.brand === 'Ford';
      });

      true // Retorno da função
    ```
- map:
    ```js
    car.map(function(element) {
      return element.brand;
    });

    [ 'Ford', 'Chevrolet', 'Fiat', 'Volkswagem' ] // Retorno da função

    // Agora vou pedir o retorna da quantidade de string do array, referente ao modelo
    car.map(function(element) {
      return element.model.length;
    });

    [ 2, 5, 5, 10 ] // Retorno da função
    ```
- reduce:
    ```js
      var car = [];

        car[0] = {brand: 'Ford', price: 14000};
        car[1] = {brand: 'Chevrolet', price: 15000};
        car[2] = {brand: 'Fiat', price: 16000};
        car[3] = {brand: 'Volkswagem', price: 17000};
    
      var total = 0;

      car.reduce(function(prev, cur) { // prev = previous(anterior) cur = current(atual)
        return prev + cur.price;
      }, 0);

      62000 // Retorno da função
    ```
- concat:
  * concat não muda o estado inicial do array, mas gera um novo array.
  ```js
    var car = [ 'Ka', 'Corsa', 'Pálio' ];
    var motorcycle = [ 'Honda', 'Yamaha' ];

    var veicules = car.concat(motos);

    veicules.toString; 
    [ 'Ka', 'Corsa', 'Pálio', 'Honda', 'Yamaha' ]; //Retorno da função
  ```
- slice:
  * slice não altera o array original
  ```js
    var car = [ 'Ka', 'Corsa', 'Pálio', 'Gol' ];

    car.slice(0,2); // [ 'Ka', 'Corsa' ]
    car.slice(1,3); // [ 'Corsa', 'Gol' ]
    car.slice(2); // [ 'Pálio', 'Gol' ]
  ```
- reverse:
  * não altera o array original
  ```js
    var car.reverse(); // A primeira vez inverte a ordem do array

    [ 'Gol', 'Pálio', 'Corsa', 'Ka' ] // Retorno do primeiro reverse

    var car.reverse(); // A Segunda vez inverte a ordem do primeiro reverse pra o original

    [ 'Ka', 'Corsa', 'Pálio', 'Gol' ] // Retorno do segundo reverse
  ```
- sort:
  ```js
    car.sort(); // se fizermos sem nenhuma especificação ele vai mostrar o array normal
    [ 'Ka', 'Corsa', 'Pálio', 'Gol' ] // Retorno do sort normal

    var car = [];

      car[0] = {brand: 'Ford', price: 14000};
      car[1] = {brand: 'Chevrolet', price: 15000};
      car[2] = {brand: 'Fiat', price: 16000};
      car[3] = {brand: 'Volkswagem', price: 17000};

      /* 
        neste exemplo, passamos uma função de comparação que receberá 2 parâmetros 'a' e 'b', sendo a o primeiro e b o segundo, essa função deverá retornar um número negativo, zero ou um número positivo, sendo que, se for um número negativo, 'a' deverá vir em primeiro e 'b' em segundo, se for zero permanece inalterado, mas se for positivo, 'b' deverá assumir a primeira posição.
      */
      car.sort(function (a, b) {
        return a.price - b.price;
      });

      // Retorno da função em ordem acendente
      [
        { brand: 'Ford', price: 14000 },
        { brand: 'Chevrolet', price: 15000 },
        { brand: 'Fiat', price: 16000 },
        { brand: 'Volkswagem', price: 17000 }
      ]

      car.sort(function (a, b) {
        return b.price - a.price;
      });

      // Retorno da função descendente
      [
        { brand: 'Volkswagem', price: 17000 },
        { brand: 'Fiat', price: 16000 },
        { brand: 'Chevrolet', price: 15000 },
        { brand: 'Ford', price: 14000 }
      ]
  ```
- join:
  * o 'join' junta as partes do array com base num separador definido previamente. Ele sempre retornará um String separando o conteúdo pelo separador pré definido.
    ```js
      car.join(';');
      "Ka;Corsa;Pálio;Gol" // Retorno da função join