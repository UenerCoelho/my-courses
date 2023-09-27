# Operadores de Comparação
  
  ## O que vamos aprender?
  - Neste conteúdo vamos aprender sobre operações de comparação.

    ### Seremos capaz de:
      - Formular expressões para comparar valores.

  ## Por que isso é importante?
  - Em muitos momentos da sua vida, será preciso comparar valores e avaliar situações para tomar decisões. Por exemplo: seu dinheiro é suficiente para comprar uma coxinha? Você tem idade permitida para ter carteira de habilitação?

  - Esse tipo de pergunta geralmente tem somente uma resposta: sim ou não. Saber comparar valores, como seu dinheiro e o preço da coxinha, por exemplo, e tomar decisões por meio do resultado, são cruciais não só para nosso dia a dia, mas também para a prática de programação. Quando escrevemos códigos, esse tipo de avaliação de valores ocorre o tempo todo, e são essas comparações que aprenderemos agora.

  ## Comparar valores
  - Quando desejamos obter o resultado da comparação entre dois valores, usamos pequenas expressões chamadas de Operadores de Comparação.

  - A estrutura de uma expressão desse tipo segue o seguinte formato ⬇️ :

  ~~~javascript
    [valor] [operador de comparação] [valor]
  ~~~

  - Quando usamos esse formato de comparação, temos a possibilidade de tomar diferentes decisões ao longo do fluxo do programa. Os Operadores de Comparação não são usados somente no contexto de programação, provavelmente você já chegou a vê-los na Educação Básica. Confira a função de cada um deles abaixo:

    * `===` para comparar estritamente a igualdade entre dois valores;
    * `!==` para comparar estritamente a diferença entre dois valores;
    * `>` para comparar se um valor é maior do que o outro;
    * `<` para comparar se um valor é menor do que o outro;
    * `>=` para comparar se um valor é maior ou igual do que o outro;
    * `<=` para comparar se um valor é menor ou igual do que o outro.

  
  - O processo de comparação ocorre com o acréscimo do Operador de Comparação entre dois valores. Sua função na estrutura é comparar o valor à esquerda com o valor à direita, assim como mostra o exemplo a seguir:

    ~~~javascript
      7 < 10 // 7 é menor que 10 (verdadeiro), então retorna true.
      7 > 10 // 7 é maior que 10 (falso), então retorna false. 
    ~~~

  - Vamos ver como funciona na prática?

  - Imagine que você precisa verificar a maioridade de uma pessoa. No Brasil, uma pessoa nessa condição tem 18 anos completos, ou seja, a pessoa que você vai verificar precisa estar dentro desse critério.

  - Talvez você tenha pensado na seguinte expressão:
    * “A idade da pessoa é maior ou igual a 18 anos?”

  - Primeiro, vamos supor que a pessoa que está sendo verificada tenha 17 anos. Convertendo simulação para código, temos:

    ~~~javascript
      const idadeDaPessoa = 17;
      const idadeMaioridade = 18;

      const verificaMaioridade = idadeDaPessoa >= idadeMaioridade; // aqui estamos verificando se idadeDaPessoa é maior ou igual que idadeMaioridade, o que retorna falso porque 17 não é maior e nem igual a 18

      const verificaIdade = idadeDaPessoa === 17; // aqui estamos comparando se idadeDaPessoa é igual a 17, o que é verdade, retornando true
    ~~~

  - Nesse caso, temos o seguinte cenário:
      * `verificaMaioridade` recebe o valor `false`, pois é o resultado da comparação entre `idadeDaPessoa` e `idadeMaioridade`, ou seja, 17 não é maior e nem igual a 18.
      * `verificaIdade` recebe o valor `true`, pois é o resultado da comparação entre `idadeDaPessoa` e o número 17, ou seja, 17 é igual a 17.

  - Agora que já vimos quais são as atividades de comparação e como formular uma expressão - ou pergunta -, vamos nos aprofundar no funcionamento dos operadores. Bora lá? 💪

  ## Operador `===` (igualdade)
  - O operador `===,` chamado de “operador de igualdade estrita”, é utilizado para comparar dois valores. Veja o exemplo abaixo:

    ~~~js
      const cidade = 'Belo Horizonte';

      const verificaCidade = cidade === 'Belo Horizonte';

      console.log(verificaCidade);
    ~~~

  - Vamos analisar o código:

    * A variável `cidade` está recebendo o valor ‘Belo Horizonte’. Esse valor é uma `string` com ordem específica de caracteres;
    * A variável `verificaCidade` está recebendo o resultado da comparação entre a variável `cidade` e a `string` ‘Belo Horizonte’, que retorna `true`, pois segue a mesma ordem de caracteres;

  - Se você executar o `console.log(verificaCidade)`, verá que o resultado no console será `true`.

  - Vamos analisar mais um exemplo:

    ~~~js
      const idade = '45';

      const verificaIdade = idade === 45;

      console.log(verificaIdade);
    ~~~

  - O que você acha que será atribuído à variável `verificaIdade`: `true` ou `false`?

  - Se você respondeu `true`, não acertou, pois o que será atribuído à variável `verificaIdade` é `false`. Esse é um ponto muito importante, mas não se preocupe! Vamos às explicações.

  - Anota aí 📣: O operador `===` só compara valores do mesmo tipo primitivo. Com isso, você deve comparar uma `string` somente com outra `string` e um `number` somente com outro `number`.

    ~~~js
      const banda = 'Iced Earth';

      const verificaBanda = banda === 'Iced Earth';

      console.log(verificaBanda); // true
    ~~~

  - Agora, veremos sobre o operador `!==.` Aperte os cintos e bora rumo a mais conhecimentos! 🚀

  - É possível considerar o operador `!==` o oposto do operador `===,` ou seja, `!==` é diferença estrita e `===` é igualdade estrita.

    > __dica__: _Você pode chamar o operador `!==` de `diferente de`. Além disso, esse operador leva em consideração o tipo primitivo dos valores, assim como o operador `===.`_

  - Veja o exemplo:

    ~~~js
      const nomeDoCachorro = 'Pipoca';

      const verificaNomeCachorro = nomeDoCachorro !== 'Pipoca'; // o valor da variável nomeDoCachorro é diferente de Pipoca?

      console.log(verificaNomeCachorro); // false
    ~~~

  - Vamos analisar:
    * A variável `verificaNomeCachorro` está recebendo o resultado da comparação entre o valor da variável `nomeDoCachorro` com o valor ‘Pipoca’. Com isso, temos a seguinte pergunta: O valor da variável `nomeDoCachorro` é diferente de ‘Pipoca’?

  - A resposta é: não, são valores iguais!

  - Portanto, o valor da variável `verificaNomeCachorro` é `false`, porque não atendeu à comparação de diferença, sacou?

  - Sendo assim, o que será impresso pelo `console.log(verificaNomeCachorro)`; é `false`, pois os dois valores são iguais.

    > __Dica__: _O operador `!==` verifica se os valores são diferentes; desse modo, se um valor for diferente do outro, ele retorna `true`, e se for igual, retornará `false`._

  ## Operador > (maior que) e < (menor que)
  - Chegou a hora de vermos sobre o operador >! Ele é utilizado quando queremos verificar se um valor é maior do que outro valor. Observe o exemplo a seguir, que compara a idade de uma pessoa com a classificação indicativa de um filme:

Copiar
const classificacaoIndicativa = 14;

const idadeDaPessoa = 15;

const verificaIdade = idadeDaPessoa > classificacaoIndicativa;

console.log(verificaIdade);
Na expressão acima, você está comparando se a idadeDaPessoa é maior do que classificacaoIndicativa, e o resultado é true, pois a classificação indicativa do filme é de 14 anos, e a idadeDaPessoa é 15 anos, ou seja, 15 é maior que 14.

Caso a idadeDaPessoa seja maior do que a classificacaoIndicativa, o resultado atribuído a verificaIdade será true.

Mas e se invertermos as variáveis na expressão de comparação? Veja o exemplo abaixo: ⬇️

Copiar
const verificaIdade = classificacaoIndicativa > idadeDaPessoa;
Agora, a comparação de valor traz a seguinte pergunta: classificacaoIndicativa é maior do que idadeDaPessoa? O valor atribuído a verificaIdade será false, pois a classificação é de 14 anos e a idade da pessoa é 15, ou seja, 14 não é maior que 15.

Relembrando 🧠 : Você vai utilizar o operador > quando desejar saber se um valor é maior que outro valor.

Vamos agora para o operador <, que significa menor que. Sua função é verificar se um valor é menor que outro valor.

Vamos usar o exemplo anterior, mas dessa vez trocando os operadores. Observe:

Copiar
const classificacaoIndicativa = 14;

const idadeDaPessoa = 15;

const verificaIdade = idadeDaPessoa < classificacaoIndicativa;

console.log(verificaIdade);
Nessa nova expressão, você está perguntando: “A idade da pessoa é menor do que a classificação indicativa?”, e a resposta impressa pelo console.log(verificaIdade); será false, pois a pessoa tem 15 anos e a classificação indicativa do filme é 14 anos, ou seja, 15 não é menor que 14.

De olho na dica 👀 : Lembre-se de que é possível construir a expressão de acordo com sua lógica, desde que siga a estrutura [valor] [operador] [valor]!

Como vou conseguir lembrar que o operador > é maior e o < é menor? 🤔

Temos uma dica pra você: Observe que o símbolo de > parece o bico de um pássaro. Com isso você pode fazer a seguinte relação:

O pássaro maior > alimenta o pássaro menor;
O pássaro menor < é alimentado pelo maior.
Legal, né? 🦅

Operador >= (maior igual que) <= (menor igual que)
Quando queremos saber se “um valor é maior ou igual a outro valor”, podemos utilizar o operador >=.

Veja o código abaixo:

Copiar
const idadeDaPessoa = 18;

const idadeMaioridade = 18;

const verificaIdadeMaior = idadeDaPessoa > idadeMaioridade;

const verificaIdadeMaiorOuIgual = idadeDaPessoa >= idadeMaioridade;

console.log(verificaIdadeMaior);
console.log(verificaIdadeMaiorOuIgual);
Nesse exemplo, foram declaradas duas variáveis - verificaIdadeMaior e verificaIdadeMaiorOuIgual -, que recebem, cada uma, o resultado de uma expressão. Vamos analisá-las:

A primeira utiliza o operador >;
A segunda utiliza o operador >=;
As idades idadeDaPessoa e idadeMaioridade possuem o mesmo valor: 18.
A diferença entre os dois resultados é a seguinte:

Na variável verificaIdadeMaior, o valor atribuído é false, porque a pergunta é “18 é maior do que 18?”
Na variável verificaIdadeMaiorOuIgual, o valor atribuído é true, porque a pergunta é “18 é maior ou igual a 18?” e neste caso é igual.
Na expressão idadeDaPessoa >= idadeMaioridade, é possível dividi-la em duas perguntas menores e considerar que, se uma delas resultar em true, toda a expressão será considerada true. Vamos ao exemplo, para melhor compreensão:

A expressão:

“18 é maior ou igual do que 18?”
Pode ser dividida nessas duas perguntas:

“18 é maior do que 18?”
“18 é igual a 18?”
Caso o resultado de alguma das perguntas seja true, a expressão inteira é avaliada como true. Caso nenhuma delas seja avaliada como true, a expressão inteira é avaliada como false.

Relembrando 🧠 : Você vai utilizar o operador >= quando desejar comparar se um valor é maior ou igual a outro valor.

Bacana, né? 🤩

O operador <=, chamado de menor que, funciona de maneira similar. Vamos aplicá-lo no mesmo exemplo e analisar o resultado:

Copiar
const idadeDaPessoa = 18;

const idadeMaioridade = 18;

const verificaIdade = idadeDaPessoa <= idadeMaioridade;

console.log(verificaIdade);
A expressão é: “A idadeDaPessoa é menor ou igual a idadeMaioridade?”. Caso uma delas seja avaliada como true, toda a expressão vai resultar em true.

Anota aí 📣:

Você vai utilizar o operador >= quando desejar comparar se um valor é maior ou igual a outro valor;
Você vai utilizar o operador <= quando desejar comparar se um valor é menor ou igual a outro valor.