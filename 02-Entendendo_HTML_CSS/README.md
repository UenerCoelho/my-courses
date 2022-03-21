# Módulo 02: Entendendo o HTML com CSS

## Lista das Aulas:

1. [O que é indentação?](#o-que-é-indentação)
2. [Tags Básicas (1/2)](#tags-básicas)
3. [Tags Básicas (2/2)](#tags-básicas)
4. [O que é e como usar o CSS? (1/2)](#o-que-é-e-como-usar-o-css)
5. [O que é e como usar o CSS? (2/2)](#o-que-é-e-como-usar-o-css)
6. [A base geral do CSS](#a-base-geral-do-cSS)
7. [Cores no CSS](#7.-cores-no-css)]
8. [Bordas no CSS](#bordas-no-css)
9. [Margins e Padding no CSS](#margins-e-padding-no-css)
10. [Width/height no CSS](#width-e-height-no-css)
11. [Dicas sobre Width/Height](#dicas-sobre-width-e-height)
12. [Links (1/2)](#links)
13. [Links (2/2)](#links)
14. [Formatação de textos no HTML](#formatação-de-textos-no-html)
15. [Comentários no HTML](#comentários-no-html)

### 1. O que é indentação?

- Consiste em diferenciar, com a tecla tabulação, para diferenciar as linhas e os escopos do código.

- Serve para tornar o código mais legível para o programador, entretanto, para o computador, não é indiferente.

- Ex.:

```html
<html>
  <head>
    <style></style>
  </head>
  <body>
    <main>
      <section>
        <nav></nav>
        <div></div>
      </section>
    </main>
  </body>
</html>
```

[Voltar ao Início](#lista-das-aulas)

### Tags Básicas

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <!-- Tags Básicas -->
       <!-- ### Títulos -->
          <h1><h1>
          <h2><h2>
          <h3><h3>
          <h4><h4>
          <h5><h5>
          <h6><h6>
        <!-- Paragrafo -->
          <p>Esta tag é utilizada para separar o texto do seu site em paragrafos</p>
          <br /> quebra de linha dentro do paragrafo
        <!-- Tag anchor "a" -->
          <a href="https://google.com">Tag de links</a>
        <!-- Tag de imagem "img" -->
          <img src="endereço/link_da_imagem" alt="Signifacado_da_img">
        <!-- Tag de botões -->
          <button>Nome_do_botão</button>
        <!-- Quebra de linha -->
          <br />
        <!-- Listagem -->
          <!-- lista desordenada -->
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>etc</li>
          </ul>
          <!-- Lista ordenada -->
          <ol>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
  </body>
</html>
```

[Voltar ao Início](#lista-das-aulas)

### O que é e como usar o CSS?

- CSS é um documento no qual o usuário não tem acesso normalmente, responsável por estilizar a pagina HTML. Essa estilização é uma formatação do arquivo HTML, podemos trocar cores de fundo, adicionar imagens, cores das letras, tamanhos das boxes (div, section, nav, main, etc).

#### Formas de uso

- Existem 3 maneiras de inserir CSS no HTML

  1. CSS inline: é adicionado dentro da tag da boxe.

  - ex.:

        ```html
        <html>
          <head>
            <title>Título</title>
          </head>
          <!-- CSS inline no body para mudar os espaçamentos de margin e padding -->
          <body style="padding: 0, margin: auto">
            <!-- CSS inline na "div" para adicionar cor branca no fundo -->
            <div styles="background-color: #fff">
              <!-- CSS inline no "h1" para trocar a cor do texto para verde -->
              <h1 style="color: green">Título da Página</h1>
              <!-- CSS inline para aumentar o tamanho do texto -->
              <p style="font-size: 30px">Loren ipsum, lorem ipsum, etc</p>
            </div>
          </body>
        </html>
        ```

        2. CSS Interno: coloca-se o código CSS em um único local na página, normalmente utilizado dentro da tag "head".

        - ex.:

        ```html
        <html>
          <head>
            <!-- CSS interno, estilando da mesma forma que foi feito no exemplo anterior. -->
            <style>
              body {
                padding: 0;
                margin: auto;
              }
              div {
                background-color: #fff;
              }
              h1 {
                color: green;
              }
              p {
                font-size: 30px;
              }
            </style>
          </head>
          <body>
            <div>
              <h1></h1>
              <h2></h2>
              <p></p>
            </div>
          </body>
        </html>
        ```

        3. CSS Externo: quando criamos um arquivo com a extensão "\*.css" dentro da pasta do projeto, normalmente seguindo a estrutura de pasta "projeto/assets/css". Neste arquivo colocamos somente o código css.

        - ex.:
          <!-- Código CSS externo, para inserir a mesma estilização do primeiro exemplo. -->
          ```css
          body {
            padding: 0;
            margin: auto;
          }
          div {
            background-color: #fff;
          }
          h1 {
            color: green;
          }
          p {
            font-size: 30px;
          }
          ```

    [Voltar ao Início](#lista-das-aulas)

### A base geral do CSS

- Base geral do CSS é adicionar estilos a objetos e elementos HTML, mas existem algumas formas mais utilizadas de selecionar o mesmo, ou elementos e objetos diferentes. Abaixo alguns exemplos:

1. ex.:
   ```css
   h1 {
     color: blue:
   }
   ```

- para este exemplo, selecionamos o elemento "h1", entretanto se tiver mais de 1 elemento "h1", todos receberão a mesma estilização, caso não queiramos isso precisamos criar "id" para identificarmos quais elementos queremos modificar. Podemos ter vários "ids" no documento "html", mas, pelas boas práticas, só podemos criar um por elemento, entretanto, podemos criar "classes" e estas podem ser repetidas em vários elementos dentro do "html", mas pelas boas práticas, precisamos colocar em elementos do mesmo tipo. Como demonstrado no exemplo abaixo.

2. ex.:

- Para selecionarmos elementos, e estilizarmos eles de formar diferente, para elementos do mesmo tipo, precisamos criar "ids" no documento "html", como demonstrado abaixo

```html
<html>
  <head>
    <title>Título</title>
  </head>
  <body>
    <main>
      <!-- Definição da "class" -->
      <section class="article">
        <!-- Definição da "class" -->
        <div class="box">
          <!-- Aqui criamos um id com o nome de "título1" e uma classe "titulo", mas a "classe" foi repetida abaixo o "id" não -->
          <h1 class="titulo" id="título1">Título 01</h1>
          <p>Loren ipsum, lorem ipsum, etc</p>
        </div>
      </section>
      <!-- Definição da "class" -->
      <section class="article">
        <!-- Definição da "class" -->
        <div class="box">
          <h1 class="titulo" id="título2">Título 02</h1>
        </div>
      </section>
    </main>
  </body>
</html>
```

- No exemplo abaixo selecionamos o "id" e as "classes", para inserimos uma estilização para o mesmo

```css
#titulo1 {
  color: green;
}
.titulo {
  font-size: 16px;
}
.article {
  width: 100%;
  height: 300px;
  margin: auto;
  padding: 0 20px;
}
```

- Para tanto, devemos lembrar das boas práticas, e termos cuidado para não utilizarmos palavras reservadas, refente a sintaxe do "html" e "css". As boas práticas consiste em seguir uma semântica na digitação do código, para que o próximos profissional que for trabalhar numa, possível refatoração, possam entender, por isso, devemos nomear as "ids", "classes" em inglês e que faça ao menos uma referencia do que se propõe.

[Voltar ao Início](#lista-das-aulas)

### Cores no CSS

- Existem 4 formas de se inserir cor no "html" pelo "css", entretanto somente 2 são mais utilizadas. Neste documento trataremos de 3.

- Exemplos método 1:
  - Neste método nó declaramos a cor através do nome dela, porém é uma forma muito limitada, pois na memória do "html" só existe 140 "nomes" de cores:
  ```css
  #container {
    background-color: blue;
  }
  ```
- Exemplos método 2:

  - Neste método nó declaramos a cor através do código "RGB" dela, já esta maneira possui uma gama muito maior de cor, podendo ir de 0 a 255, neste caso teremos 3 cores de base Vermelho ((R)ed), Verde ((G)reen) e Azul ((B)lue), cada uma pode ir de 0 a 255, e assim inserimos uma cor de acordo com os valores q colocamos:

  ```css
  #container {
    background-color: rgb(255, 0, 0);
  }
  .titulo {
    background-color: rgb(0, 255, 0);
  }
  div {
    color: rgb(0, 0, 255);
  }
  ```

- Exemplos método 3:

  - Neste método nó declaramos a cor através do código hexadecimal dela. código hexadecimal é formado por sustenido "#" seguido de 6 caracteres. Ex.: #AF10E9, esses caracteres vão de 0 a 9 e de "A" a "F", suas conbinações formam as mais diversas cores. Esses caracteres são divididos em 3 grupos de 2 cada, sendo o primeiro seguindo tons de vermelho (Red) so segundo de Verde (Green) e o terceiro de Azul (Blue), seguindo o mesmo padrão do exemplo anterior, o padrão RGB. Também podemos simplificar utilizando apenas 3 caracteres (#1CA), mesmo ainda teremos 3 grupos, de um carácter cada, sendo o primeiro red, o segundo green e o terceiro blue. També devemos salientar que "0" é o valor mínimo e "F" o valor máximo.

  ```css
  #container {
    background-color: #ff0000;
  }
  .titulo {
    background-color: #00ff00;
  }
  div {
    color: #0000ff;
  }
  ```

[Voltar ao Início](#lista-das-aulas)

### Bordas no CSS

- As bordas podem ser inseridas tanto documento "html" como um todo, ou por elemento, e até mesmos bordas diferentes para cada elemento.

- Exemplo de bordas:

```css
/* Borda inserida na pagina "html" toda */
body {
  border: 1px solid green;
  /* Arredondamento da  borda */
  border-radius: 8px;
}
/* borda inserida apenas em uma div */
div {
  border: 2px solid #000;
}
/* borda inserida em um classe */
.container {
  border: 3px solid rgb(123, 40, 89);
}
/* borda no topo */
p {
  border-top: 1px solid black;
}
/* borda a direita */
h1 {
  border-right: 1px solid gray;
}
/* Borda no botão */
nav {
  border-bottom: 1px solid #01d2f4;
}
/* Borda a esquerda */
main {
  border-left: 1px solid rgb(201, 89, 155);
}
/* criando uma bola com bordas */
div {
  background-color: #777;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 3px solid darkgreen;
}
```

- Existem tipos de borda, "solid" como o nome diz é uma linha sólida, "dotted", que como o próprio nome também diz, é uma borda pontilhada, a "dashed" que é uma borda com traços, "double" uma muito pouco utilizada, mas é uma borda de linha dupla, "groove" que é a "solid" mais grossa, enfim, mas as mais utilizadas são a "solid" "dashed" e "dotted".

[Voltar ao Início](#lista-das-aulas:)

### Margins e Padding no CSS

[Voltar ao Início](#lista-das-aulas)

### Width e height no CSS

[Voltar ao Início](#lista-das-aulas)

### Dicas sobre Width e Height

[Voltar ao Início](#lista-das-aulas)

### Links

[Voltar ao Início](#lista-das-aulas)

### Formatação de textos no HTML

[Voltar ao Início](#lista-das-aulas)

### Comentários no HTML

[Voltar ao Início](#lista-das-aulas)
