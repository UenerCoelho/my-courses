# Variáveis e Constantes

# O que vamos aprender?

  * Vamos aprender a escrever nossas primeiras linhas de código em _Javascript_, criando e armazenando valores em variáveis! Vamos compreender o que são variáveis, seus diferentes tipos e ainda entender e manipular dados.

## Seremos capaz de:

  * Criar variáveis;
  * Entender a estrutura de uma variável;
  * Atribuir valores às variáveis.

# Por que isso é importante?

  * O conceito de variáveis está entre os conceitos mais importantes ao escrever código para programas. Variáveis são como caixas que guardam informações na memória do computador e que podem ser utilizadas em todas as partes do programa.

  * Provavelmente interagimos com sistemas que guardam informações nessas caixas:

    * O nome do usuário, quando faz o login no computador;
    * O número da conta, quando o sistema de um banco é acessado;
    * Uma mensagem enviada, por um aplicativo, podem ser encontradas guardadas em variáveis.

  * Entre essas e outras situações, as variáveis estão presentes no nosso dia a dia e nem percebemos!


# O que são variáveis?

  * Variáveis são espaços na memória do computador, que funcionam como caixas que possuem um nome e que podemos guardar alguma coisa dentro.

  * Para compreender melhor o funcionamento de uma variável, imagine o seguinte cenário:

    - Uma loja virtual vende presentes, como roupas, canecas e chaveiros. Para fazer uma entrega, o item comprado é colocado dentro de uma caixa, que possui uma etiqueta com a descrição do que tem dentro dela:

      <p align="center">
        <img alt="exemplo de variáveis" src=".github/ex-variaveis.webp" width="100%" />
      </p>
    
    - Vamos supor que é preciso fazer uma entrega de um produto para um cliente: temos a caixa que possui uma etiqueta de nome `roupa` e o produto a ser entregue, que é uma camiseta.

    - Podemos imaginar variáveis exatamente dessa mesma forma:

      - A caixa é a variável, que possui uma etiqueta representando o nome da variável: `roupa`
      - O valor dessa variável é o que está dentro da caixa: camiseta.

        <p align="center">
          <img alt="exemplo de variáveis" src=".github/camiseta.webp" width="100%" />
        </p>
    
    - Vamos ver como essa variável `caixa` e o seu valor `'camiseta'` são escritos em código JavaScript:

      ~~~javascript
      let roupa = 'camiseta';
      ~~~
      - A caixa representa a variável e a etiqueta roupa representa o nome dessa variável;
      - A 'camiseta', representa o valor da variável.

    - Dessa maneira, é possível dizer que o valor 'camiseta' foi atribuído à variável de nome roupa.

    - E assim, a variável é declarada! 🎉

    > __Dica__: _Declarar uma variável é o mesmo que dizer “criar uma variável”. Em programação, declarar significa dizer ao computador para reservar um espaço na memória, para armazenar um dado._

    - Vamos analisar o código:

      - `let` é uma palavra-chave utilizada para declarar uma variável. Ela é colocada antes do nome da variável para informar ao computador que ela deve ser criada;
      - `roupa` se refere ao nome da variável. Nesse caso, a caixa que representa a variável tem o nome `roupa`.
      - `=`, é o operador de atribuição. Atribui o valor `'camiseta'` à variável `roupa`.
      - `camiseta` é o valor atribuído à variável, ou seja, o produto que é colocado dentro da caixa. Nesse caso, o conteúdo da caixa é uma `'camiseta'`.
      - Por fim, o ponto e vírgula `;` completa a estrutura. Esse sinal gráfico indica, na linguagem JavaScript, indica que terminamos de escrever aquela linha.

    - E se quisermos alterar o valor da variável, é possível? A resposta é: sim!

    - Voltando ao cenário da loja virtual, imaginemos que o comprador da camiseta quis fazer a troca do produto, antes mesmo do envio, e solicitou que a camiseta fosse trocada por um moletom. Sendo assim, o valor antigo `'camiseta'` foi substituído por outro valor, o `'moletom'`.

    - As variáveis guardam somente um único valor por vez, que pode ser trocado por outro. Toda vez que for preciso colocar um novo valor dentro da variável, o anterior será substituído.

        <p align="center">
          <img alt="exemplo de variáveis" src=".github/moletom.webp" width="100%" />
        </p>
    
    > __Dica__: _As variáveis guardam somente um único valor e, toda vez que a variável receber um novo valor, o antigo é substituído._

    - Veja como ficaria no código a atribuição do novo valor 'moletom' à variável 'roupa':

      ~~~javascript
        roupa = 'moletom';
      ~~~

    - Percebeu que nesse caso não utilizamos a palavra `let`?

    - A `let` palavra-chave é utilizada somente quando a variável é declarada, ou seja, quando é escrita no código pela primeira vez. Para reatribuir um valor à uma variável, a palavra-chave `let` não deve ser repetida.

    - Agora a variável `roupa` passou a ter um novo valor: `'moletom'`.

## Vamos a prática!

  - A partir daqui já podemos começar a escrever as nossas primeiras linhas de código.

  - Vamos declarar uma variável que irá receber a informação `comidaFavorita`!

  - __Primeiro passo:__ Digite o código abaixo no `console` do seu navegador:

    ~~~javascript
      let [nome] = [valor];
    ~~~
  
  - __Segundo passo:__ Substitua o `[nome]` e `[valor]` conforme essas orientações:

    - A variável está sendo declarada com a palavra-chave `let`;
    - Substitua o `[nome]` na expressão por um nome que descreva nitidamente o que vai ser guardado dentro da variável.
  
    > ⚠️ _Atenção, existem algumas regras gerais para nomear variáveis_ ⚠️:

    - Não pode haver espaço entre as palavras;
    - Não é possível começar o nome de uma variável com um número, mas é possível usar números em outras posições. Por exemplo: `1comida` não vai funcionar, mas `comida1` funciona;
    - Nomes de variáveis são sensíveis a letras maiúsculas e minúsculas. Ou seja, `Comida` é diferente de `COMIDA` que é diferente de `comida`;

  - Além dessas regras, existe uma convenção padrão para criação de nomes de variáveis em JavaScript chamada `camelCase`:

    - As palavras são agrupadas em uma;
    - O nome da variável começa com letra minúscula;
    - Cada palavra nova começa com uma letra maiúscula, como acontece no próprio `camelCase`. Por exemplo: `carroVermelho`.

  - No nosso exemplo, podemos chamar a variável de `comidaFavorita`:

    ~~~javascript
      let comidaFavorita = [valor];
    ~~~

  - __Terceiro passo:__ Atribua um valor para a variável comidaFavorita:

  - Por último, você precisa atribuir um valor para sua variável comidaFavorita. Digamos que sua comida favorita é pizza.

  - Valores que são textos, frases ou palavras devem ser sempre envolvidas por aspas.

  > __Dica:__ _Podemos utilizar tanto aspas simples `'` quanto aspas duplas `"`. Porém, aspas simples são mais utilizadas._

  - Veja como fica:

    ~~~javascript
      let comidaFavorita = 'Pizza';
    ~~~

  - Para visualizar o valor da variável, podemos utilizar o comando `console.log`, que serve para visualizar as informações no console do navegador.

  - Para isso, basta envolver a variável `comidaFavorita` dentro dos parênteses.

    ~~~javascript
      let comidaFavorita = 'Pizza';
      
      console.log(comidaFavorita);
    ~~~

  - Ao executar o código acima, veremos a palavra `Pizza` no console do navegador.

  - Imagine que agora a comida favorita é lasanha. Como faríamos para substituir o valor da variável?

  - Exemplo:

    ~~~javascript
      let comidaFavorita = 'Pizza';

      comidaFavorita = 'Lasanha';

      console.log(comidaFavorita);
    ~~~

  - Você verá escrita a palavra 'Lasanha' no console. Legal né? E você pode atribuir um novo valor para sua variável quantas vezes precisar! Mude o valor da sua variável comidaFavorita no código e execute no navegador para ver o resultado!

## Diferenças entre as palavras-chave `var`, `let` e `const`

  - Existem três palavras-chave que você pode utilizar para declarar variáveis: `var`, `let` e `const`.

  - As palavras-chave `let` e `const` foram introduzidas à linguagem JavaScript em 2015. Antes disso só era possível usar a palavra-chave `var`.

  - Como o `var` é mais antigo, mas ainda há muito código escrito com ele, é importante conhecer essa palavra-chave. O `let` possui algumas vantagens em relação ao var e hoje em dia, é uma boa prática utilizar somente `let` e `const` para declarar variáveis. 😄

  - Vamos agora descobrir a diferença entre `var`, `let` e `const`:

  - Com o `let` você consegue declarar uma variável e reatribuir valor à ela:

    ~~~javascript
      let meuNome = 'Maria';

      meuNome = 'Aline';

      console.log(meuNome);
    ~~~

  - O `var` tem praticamente as mesmas funcionalidades que o `let` e você também pode reatribuir valor à variável:

    ~~~javascript
      var meuNome = 'Maria';

      meuNome = 'Aline';

      console.log(meuNome);
    ~~~

  - A `const` tem uma diferença: uma característica dessa palavra-chave é que ela é uma constante. Isto significa que, uma vez que essa variável é declarada, o valor dela não poderá ser alterado.

  - Digite e execute o código abaixo no console do seu navegador:

    ~~~javascript
      const meuNome = 'Maria';

      meuNome = 'Aline';

      console.log(meuNome);
    ~~~

  - Você receberá um erro de execução, dizendo que não é possível reatribuir valores para constantes. Esse tipo de variável é útil para guardar valores que nunca serão alterados ao longo da execução do programa.

  > __Dica__: _Com a palavra-chave let você poderá reatribuir valores à sua variável quantas vezes quiser. Com a palavra-chave `const` você só poderá atribuir o valor uma única vez._

## Exercícios:

### Crie uma variável `cor`

  - Crie uma variável chamada `cor`, que pode ter seu valor alterado e atribua à ela o nome da cor `'verde'`. Lembre-se de colocar a cor entre aspas simples (`''`).
      ~~~javascript
        let cor = 'verde';
      ~~~

### Atribua e reatribua valores

  - Crie uma variável chamada `cidade` e atribua à ela o nome `'Parauapebas'`. Depois, mude o nome da cidade armazenada na variável `cidade` para `'Rio de Janeiro'`. Lembre-se de colocar o nome da cidade entre aspas simples (`''`).

    ~~~javascript
      let cidade = 'Parauapebas';

      cidade = 'Rio de Janeiro';

      console.log(cidade) // Rido de Janeiro
    ~~~

### Crie uma constante para armazenar o seu nome

  - Crie uma constante chamada `meuNome` e atribua à ela o seu nome entre aspas simples (`''`).

    ~~~javascript
      const meuNome = 'Uener'
    ~~~

### Crie uma variável para guardar a sua idade

  - Crie uma variável chamada `minhaIdade` e atribua à ela o número que representa a sua idade.

    ~~~javascript
    const minhaIdade = 39
    ~~~

### Corrija o código 💻
  
  - O seguinte código retorna um erro:

    ~~~javascript
      const email = email@trybe.com;
      email = outroEmail@trybe.com;
    ~~~

  - Correção.

    ~~~javascript
      function corrigeCodigo() {
        try {
          let email = 'uenercoelho2@hotmail.com'
          email = 'uenercoelhor@gmail.com'
        }catch (e) {
          return 'incorrect'
        }
        return 'correct'
      }
    ~~~