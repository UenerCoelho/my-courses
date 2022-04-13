# Aula de JavaScript sobre Funções Parte 01 by @rodrigobranas

## O que é uma Função?
  - Função é um objeto que contém um bloco de código executável. Esse bloco é isolado, ou seja, tudo que for definido dentro da função, como variáveis, outras funções, e não pode ser acessado externamente. Funções é um tipo de estrutura que vai conferir encpsulamento a linguagem JavaScript.

## Tipos de funções

### Funções de Primeira Classe
  - É a função que pode ser atribuída a uma variável, passada como parâmetro, ou ser retornada de uma outra função.

## Criando Funções

### Função de Declaração (Function Declaration)

  ```js
      // Esta forma mais conhecida, função nomeada
      function sum(a, b) {
        return a + b;
      }

      console.log(soma) // [Function: sum]
      console.log(soma(2, 2)) // 4
  ```
### Função de Atribuição (Function Expression)

  ```js
      var sum = (a, b) {
        return a + b;
      }

      console.log(soma) // [Function]
      console.log(soma(2, 2)) //
  ```
### Função de Atribuição Nomeada (Named Funtion Expression)
  - Uma função nomeda pode ser util pois o nome dela aparece no stack trace, listas de breackpoints e demais ferramentas de debbuging.

  ```js
      var sum = function sum(a, b) {
        return a + b;
      }

      console.log(soma) // [Function: sum]
      console.log(soma(2, 2)) // 4
  ```
#### Qual a Diferença entre Função Deaclarativa e Atribuitiva
  - A função Declarativa é declarada antes, como se fosse coipada para o topo.

    ```js
    console.log(soma(2, 2)) // 4

    function sum(a, b) {
      return a + b;
    }
    ```
  - A função Atribuitiva é carregada durante a interpretação do código. Portanto, deve seguir a ordem correta.

## Invocando funções
  - As Funções podem ser invocadas de quatro formas. Por meio do "Escopo Global", por meio de "Objetos", por meio dos Operadores "Call" e "Apply" e por meio do Operador "New".

  1. Por meio do Escopo Global
    * Invoção Direta.
      ```js
          var sum - function(a, b) {
            return a + b;
          };

          sum(2, 2); //4
      ```
    * Passado uma Função como parâmetro, conferindo ao JS Lambda.
      ```js
          var product = {name: 'Sapato', price: 150};

          var taxFormulaA = function(price) {
            return price * 0.1;
          };

          var taxFormulaB = function(price) {
            return price * 0.2;
          };

          var calculatePrice = function(product, taxFormula) {
            return product.price + taxFormula(product.price);
          };

          calculatePrice(product, taxFormulaA) // 165
          calculatePrice(product, taxFormulaA) // 180
      ```
    * Retornando uma função dentro de outra função. Invocando o retorno de uma função.
      ```js
          var helloWorld = functionn() {
            return function() {
              return "Hello World!";
            };
          };

          console.log(helloWorld); //[Function]
          console.log(helloWorld()); //[Function]
          console.log(helloWorld()()); // 'Hello World!'
      ```
  2. Por meio de Objetos.
    * Utilizando um função como método, declarada dentro do objeto. No JavaScript não existem métodos, mas podemos simular a existencia deles, um método é um objeto, objetos é uma combinação dinâmica de chaves e valores, e que podem ser invocados dando a impressão de ser um método.
    ```js
        var person = {
          name: 'João',
          age: 20,
          getAge: function() {
            return this.age; // Aqui a função nãtem 'this.', mas a passa a ter por ser executada a partir de um objeto. Este 'this.' refere-se ao escopo do qual eu estou invocando a função.
          }
        };

        console.log(pessoa); // { name: 'João', age: 20, getAge: [Function] }
        console.log(person.getAge); // [Function]
        console.log(person.getAge()); // 20
    ```
    * Externalizando a função de dentro do objeto acima.
    ```js
        var getAge = function() {
          return this.age;
        }

        var person = {
          name: 'João',
          age: 20,
          getAge: getAge
        };

        console.log(getAge();) // undefinned
        console.log(person.getAge()); // 20
    ```
  3. Por meio dos Operadores "Call" e "Apply".
    * O Operador "Call", como o nome ja diz, ele chama a função, então podemos passar o escopo para a chamada. E o "Apply" aplica.
    ```js
        var getAge = function(extra) {
          return this.age + extra;
        }

        var person = {
          name: 'João',
          idade: 20,
          getAge: getAge
        };

        console.log(person.getAge(2)); //Forma do exemplo anterior
        console.log(getAge.call(person, 2)); // 22
        console.log(getAge.apply(person, [2])); // 22, no caso de apply o parâmetro é obrigatóriamente um array.
    ```
  4. Por meio do Operador "New".
    * Criando Objetos diretamente através das funções Fábrica.
    ```js
        var createPerson = function(name, age) {
          return {
            name: name,
            age: age
          };
        };

        console.log(createPerson('Pedro', 20)) // { name: 'Pedro', age: 20 }
        console.log(createPerson('Maria', 30)) // { name: 'Pedro', age: 20 }
    ```
    * Criando Objeto através da função Construtora. Na convensão de boas práticas do JavaScript, diz-se que devemos criar nomes de variáveis inciando com letra minúscula, mas para as funções construtoras devemos criá-las iniciando com letra Maiúscula, para saber diferenciá-las.
    ```js
        var CreatePerson = function(name, age) {
          this.name = nome;
          this.age = age; // O 'this.' ele refencia o objeto que será criado por meio do operador new
        };

        console.log(new person('Pedro', 20)) // { name: 'João', age: 35 } não esquecer do operador 'new'.
    ```
