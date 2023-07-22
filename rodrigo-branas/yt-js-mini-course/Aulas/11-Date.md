# Date
  - Existem 4 maneiras de se criar uma data no JavaScript;

  1. Através de uma função construtora 'new Date()' sem parametros.
    ```js
        var hoje = new Date();
        // Retorno
        2022-05-09T01:48:29.683Z // Baseada na localização do node.js

        hoje.getTime();
        // Retorno
        1652060894697 // Hoje em mile segundos
    ```
  2. Através da data em mile segundos
    ```js
        var hoje = new Date(1652060894697);
        var natalPassado = new Date(1419465600000);

        hoje
        // Retorno
        2022-05-09T01:48:14.697Z

        natalPassado
        //Retorno
        2014-12-25T00:00:00.000Z
    ```
  3. Através de String, pode-se utilizar o 'Date.parse("2022/05/08)'
    ```js
        Date.parse("1984/05/24");
        new Date(454219200000);
        //Retorno
        1984-05-24T04:00:00.000Z
    ```