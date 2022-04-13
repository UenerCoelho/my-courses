# Aula de JavaScript sobre Funções Parte 02 by @rodrigobranas
  - Deve-se ter cuidado com o escopo global. Como o JavaScript não possui um "ligador" ou "linker", então, faz-se o uso de um escopo global compartilhado para estabelecer os vínculos entre diferentes partes de uma aplicação. Para evitar isso, temos as tecnicas de encapsulamento.

## Encapsulamento por Objeto
  - Objeto é um coleção de chaves e valores que pode possuir qualquer tipo de dado.
  ```js
      var counter = {
        values: 0,
        add: function() {
          return ++this.value;
        }
      };

      console.log(counter.add()); //1
      console.log(counter.add()); //1
      console.log(counter.add()); //3
  ```
  ```js
      var items = {
        value: [],
        add: function(item) {
          this.value.push(item);
          return this.value;
        }
      };

      console.log(items.add('A')); // ['A']
      console.log(items.add('B')); // ['A', 'B']
      console.log(items.add('C')); // ['A', 'B', 'C']
  ```
  - um dos problemas de se usar o objeto para fazer o encapsulamento é que o JavaScript não possui modificadores de visibilidade como "private" ou "public". Assim fica fazil acessar o conteúdo do objeto.

## Encapsulamento por meio de Funções
  - A Função, nada mias é do que um objeto que contém um bloco de código executável. Mas este bloc é isolado, e externamente fica inacessível.

  * Utilizando a Factory Function
    ```js
        var createCounter = function () {
          var value = 0;
          return {
            add: function () {
              return ++value;
            }
          };
        };

        var counter = createCounter();

        console.log(counter.value); // undefined
        console.log(counter.add()); // 1
        console.log(counter.add()); // 2
        console.log(counter.add()); // 3
    ```
  * Utilizando a Constructor Function
    ```js
        var Counter = function () {
          var value = 0;
          this.add = function () {
            return ++value;
          };
        };

        var counter = new Counter();

        console.log(counter.value); // undefined
        console.log(counter.add()); // 1
        console.log(counter.add()); // 2
        console.log(counter.add()); // 3
    ```
  * Utilizando uma IIFE - Immediately-Invoked Function Expression, é uma aplicação da factory function, mas que será invocada automaticamente, chamamos de Module Pattern.
  - Module Pattern:
  ```js
      var counter = (function() {
        var value = 0;
        return {
          add: function() {
            return ++value;
          },
          reset: function(){
            value = 0;
          }
        };
      })();

      console.log(counter.value); // undefined
      console.log(counter.add()); // 1
      console.log(counter.add()); // 2
      console.log(counter.add()); // 3
      counter.reset();
      console.log(counter.add()); // 1
  ```
