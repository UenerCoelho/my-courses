# Expressões Regulares
  - São estruturas formadas por uma sequência de caracteres que especificam um padrão formal que é muito util para realizarmos validações de campos, como reconhecer um determinado formato de algum dado, extração de dados, também para substituições de caracteres, etc.

## Criando uma expressão regular

  * 1ª Maneira:
    ```js
        var regExp = RegExp('<expressão regular>');
    ```

  * 2ª Maneira:
    ```js
        // Formato Literal
        var regExp = /<expressão regular>/;
    ```
## RegExp API
  - exec -> Executa a RegExp, retornando os detalhes.
  - test -> Testa a RegExp, retornando true ou false.

  * Passo 01
    ```js
        var regExp = /99801-8833/;
        var telefone = "99801-8833";

        console.log(regExp.exec(telefone)); // [ '99801-88331, index; 0, input: '99801-8833']
        console.log(regExp.test(telefone)); // true
    ```
  * Passo 02
    ```js
      var regExp = /(65) 99801-8833/;// Parenteses é um carácter especial, por precisamos escapar, com barra invertida '\', este carácter.
      var telefone = "(65) 99801-8833";
      
      console.log(regExp.test(telefone)); // false


      /*** Com as barras invertidas para escapar os parenteses ***/
      var regExp = /\(65\) 99801-8833/;
      var telefone = "(65) 99801-8833";
      console.log(regExp.test(telefone)); // true
    ```
    ### Escapando caracteres especiais
    - A barra invertida '\' é utilizada antes de caracteres especiais, com o objetivo de escapá-los, ou seja, fazer com q não seja reconhecido como parte do código, mas como parte do conteúdo desejado, a ser mostrado.
    ex.:
    ```js
        /*** No exemplo abaixo, escapamos os parenteses do DDD do número telefônico. ***/
        var regExp = /\(65\) 99801-8833/;
    ``` 
  * Passo 03
    ```js
        var regExp = /\(65\) 99801-8833/;
        var telefone = "O tele fone é: (65) 99801-8833, Tratar com João";

        console.log(regExp.test(telefone)); // true
        console.log(regExp.exec(telefone)); 
        // Retorno do regExp.exec
        [ '(65) 99801-8833', index: 13, input 'O telefone é: (65) 99801-8833, Tratar com João' ]
    ``` 
      - Iniciando e finalizando com um determinado caractere:
        * O Acento "Circunflexo" (^) Inicia com um determinado caractere
        * O Cifrão ($) Finaliza com um determinado caractere
    ```js
        var regExp = /^\(65\) 99801-8833/;
        var telefone = "O tele fone é: (65) 99801-8833, Tratar com João";

        console.log(regExp.teste(telefone));
        // Retorno
        false

        var telefone = "(65) 99801-8833, Tratar com João";
        console.log(regExp.teste(telefone));
        // Retorno
        true
        
        var regExp = /^\(65\) 99801-8833$/;
        var telefone = "(65) 99801-8833, Tratar com João";
        console.log(regExp.teste(telefone));
        // Retorno
        false
        
        var regExp = /^\(65\) 99801-8833$/;
        var telefone = "(65) 99801-8833";
        console.log(regExp.teste(telefone));
        // Retorno
        true            
    ```
## Grupos de caracteres
  - Podermos aceitas mais tipos de dados, neste caso os telefones, precisamos entender como funcionam os grupos de caracteres.
    - [abc] -> Aceita qualquer caracteres dentro do grupo, nesse caso a, b e c.
    - [^abc] -> Não aceita qualquer caracteres dentro do grupo, nessa caso a, b, e c.
    - [0-9] -> Aceita qualquer caractere entre 0 e 9.
    - [^0-9] -> Não aceita qualquer caractere entre 0 e 9.
  * Passo 04
    ```js
        var regExp = /^\([0-9][0-9]\) 99801-8833$/;
        var telefone = "(65) 99801-8833";
        console.log(regExp.teste(telefone));
        // Retorno
        true

        var regExp = /^\([0-9][0-9]\) 99999-9999$/;
        var telefone = "(65) 99801-8833";
        console.log(regExp.teste(telefone));
        // Retorno
        false

        var regExp = /^\([0-9][0-9]\) [0-9][9-0][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
        var telefone = "(65) 99801-8833";
        console.log(regExp.teste(telefone));
        // Retorno
        true
    ```
## Quantificadores Parte 1
  - Quando a quantidade de grupos fica muito grande, ou seja, o código começa a ficar muito verboso, devemos simplificá-lo com os quantificadores.
    - {n} -> Quantifica um número específico
    - {n,} -> Quantifica um número mínimo
    - {n,m} -> Quantifica um número mínimo e um número máximo

  * Passo 05
    ```js
        var regExp = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
        var telefone = "(65) 99801-8833";
        console.log(regExp.teste(telefone));
        // Retorno
        true
    ```
  * Passo 06
    - Podemos também quantificar a quantidades de dígitos, nesse caso, do número de telefone, Pode ser utilizado um quantificador para especificar um determinado intervalo.
    ```js
        // Abaixo utilizamos o quantificado {n,m} onde n = 4 caracteres mínimo e m = 5 máximo.
        var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;

        // Com 8 dígitos no telefone
        var telefone1 = "(65) 9801-8833";
        console.log(regExp.test(telefone1));

        // Retorno do console.log();
        true

        // Com 9 dígitos no telefone
        var telefone2 = "(65) 99801-8833";
        console.log(regExp.test(telefone2));
        
        // Retorno do console.log();        
        true
    ```
## Quantificadores Parte 2
  - Os quantificadores podem ser aplicados a caracteres grupos, conjuntos ou metacaracteres.
    - '?' -> Zero ou um
    - '*' -> Zero ou mais
    - '+' -> Um ou mais
  
  * Passo 07
    ```js
          // Abaixo utilizamos o quantificado ? para tornarmos o hífen opcional.
          var regExp = /^\([0-9]{2}\) [0-9]{4,5}?-[0-9]{4}$/;

          // Com com hífen no telefone
          var telefone1 = "(65) 99801-8833";
          console.log(regExp.test(telefone1));

          // Retorno do console.log();
          true

          // Com sem hífen no telefone
          var telefone2 = "(65) 998018833";
          console.log(regExp.test(telefone2));
          
          // Retorno do console.log();        
          true
    ```
  * Passo 08
    - Caso o dados necessário estiver dentro de uma estrutura de tabelas, podemos
    ```js
        var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}<\/td>)+<\/tr><\/table>/;
        var telefone1 = "<table>\
                            <tr>\
                              <td>(65) 99623-6956</td>\
                              <td>(65) 99801-8833</td>\
                              <td>(65) 99663-5084</td>\
                            </tr>\
                        </table>";
        console.log(regExp.test(telefone));
    ```
## Metacaracteres
  - . -> Representa qualquer caractere
  - \w -> Representa o conjunto [a-zA-Z0-9_]
  - \W -> Representa o conjunto [â-zA-Z0-9_]
  - \d -> Representa o conjunto [0-9]
  - \D -> Representa o conjunto [^0-9]
  - \s -> Representa um espaço em branco
  - \S -> Representa um NÃO espaço em branco
  - \n -> Representa uma quebra de linha
  - \t -> Representa um tab

  * Passo 09
    ```js
        var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-\d{4}<\/td>)+<\/tr><\/table>/;
        var telefone1 = "<table>\
                            <tr>\
                              <td>(65) 99623-6956</td>\
                              <td>(65) 99801-8833</td>\
                              <td>(65) 99663-5084</td>\
                            </tr>\
                        </table>";
        console.log(regExp.test(telefone));
    ```
## API da String
  - match -> Executa uma busca na String e retorna um array contendo os dados encontrados, ou null.
  - split -> Divide a String com base em uma outra String fixa ou expressão regular.
  - replace -> Substitui partes da String com base em uma outra String fixa ou expressão regular.

  * Passo 10
    ```js
          var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
          var telefone1 = "<table>\
                              <tr>\
                                <td>(65) 99623-6956</td>\
                                <td>(65) 99801-8833</td>\
                                <td>(65) 99663-5084</td>\
                              </tr>\
                          </table>";
          console.log(telefone.match(regExp));

          // Retorno
          [ '(65) 99623-6956',
            index: 15,
            input: '<table><tr><td>(65) 99623-6956</td><td>(65) 99801-8833</td><td>(65) 99663-5084</td>/tr></table>']
      ```

### Modificadores
  - i -> Case-insensitive matching
  - g -> Global matching
  - m -> Multiline matching

  * Passo 11
    ```js
          var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
          var telefone1 = "<table>\
                              <tr>\
                                <td>(65) 99623-6956</td>\
                                <td>(65) 99801-8833</td>\
                                <td>(65) 99663-5084</td>\
                              </tr>\
                          </table>";
          console.log(telefone.match(regExp));

          // Retorno
          [ '(65) 99623-6956', '(65) 99801-8833', '(65) 99663-5084' ]
      ```
  * Passo 12
    - Agora vamos utilizar o replace
    ```js
            var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;
            var telefone1 = "<table>\
                                <tr>\
                                  <td>(65) 99623-6956</td>\
                                  <td>(65) 99801-8833</td>\
                                  <td>(65) 99663-5084</td>\
                                </tr>\
                            </table>";
            console.log(telefone.replace(regExp, 'telefone'));

            // Retorno
            <table><tr><td>telefone</td><td>telefone</td><td>telefone</td>/tr></table>
        ```


## Fonte
  + Para mais detalhes consulte (MDN)[#https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions]