# Aula de JavaScript - Object by @rodrigobranas

## O que é um Objeto?
  - É uma coleção dinâmica de chaves e valores. Onde é possível adicionar ou remover propriedades a qualquer momento, apó a criação.


## Como criamos um objeto no JavaScript?
  - Basta criarmos uma variável e depois abrir e fechar chaves ja criamos um novo objeto.

    ```js
      var person = {}; // Criamos agora um Objeto Person.
    ```

  - Para sabermos se é reamente um objeto basta digitarmos "typeof pessoa".

    ```js
      typeof person; // será retorna no console do terminal 'object'
    ```
  - Ficaria assim no arquivos *.js

    ```js
      var person = {};

      console.log(typeof pessoa); //'obejct'
    ```
  - Também podemos criar e atribuir propriedades ao objeto diretamente, assim podemos criar o objeto com todas as propriedades pré definidas, para utilizarmos posteriormente.

    ```js
      var person = {
        name: 'John',
        age: '30'
        phoneNumber: null,
        address: {
          street: 'Avennue Brasil',
          number: 600,
          district: 'Center'
        }
      };
    ```
  - Entretanto também podemos acrescentar propriedades posteriormente ao objeto.

    ```js
      var person = {}; //Criação antes da atribuição das propriedades

      person.name = 'John';
      person.age = 30;
      person.phoneNumber = null;
      person.address = {}; //Aqui criarmos o Objeto 'address' pra funcionar a linha abaixo
      person.address.street = 'Avennue Brasil';
      person.address = {}; //Aqui criarmos o Objeto 'address' pra funcionar a linha abaixo
      person.address.number = 600;
      person.address = {}; //Aqui criarmos o Objeto 'address' pra funcionar a linha abaixo
      person.address.district = 'Center';

      // Também podemos fazer uma introspecção ao objeto e dinâmicamente acessar as propriedades
      person['name'] = 'John';
      person['age'] = 30;
      person['phoneNumber'] = null;
      person['address']['street'] = 'Avennue Brasil';
      person['address']['number'] = 600;
      person['address']['district'] = 'Center';
    ```

  - Também podemos apagar as propriedades

    ```js
      delete person.age; //Deleta o campo age.
    ```
  
