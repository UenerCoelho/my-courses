# Módulo 02: Entendendo o HTML com CSS

## Lista das Aulas:

1. [O que é indentação?](#1.-O-que-é-indentação?)
2. [Tags Básicas (1/2)](#Tags-Básicas)
3. [Tags Básicas (2/2)](#Tags-Básicas)
4. [O que é e como usar o CSS? (1/2)](#O-que-é-e-como-usar-o-CSS?)
5. [O que é e como usar o CSS? (2/2)](#O-que-é-e-como-usar-o-CSS?)
6. [A base geral do CSS](#A-base-geral-do-CSS)
7. [Cores no CSS](#7.-Cores-no-CSS)]
8. [Bordas no CSS](#Bordas-no-CSS)
9. [Margins e Padding no CSS](#Margins-e-Padding-no-CSS)
10. [Width/height no CSS](#Width/height-no-CSS)
11. [Dicas sobre Width/Height](#Dicas-sobre-Width/Height)
12. [Links (1/2)](#Links)
13. [Links (2/2)](#Links)
14. [Formatação de textos no HTML](#Formatação-de-textos-no-HTML)
15. [Comentários no HTML](#Comentários-no-HTML)

### 1. O que é indentação? ([voltar ao Início](#Lista-das-Aulas:))

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

### 2-3. Tags Básicas ([voltar ao Início](#Lista-das-Aulas:))

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

### 4-5. O que é e como usar o CSS? ([voltar ao Início](#Lista-das-Aulas:))

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

### 6. A base geral do CSS ([voltar ao Início](#Lista-das-Aulas:))

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
      <section class="article">
        <div class="box">
          <!-- Aqui criamos um id com o nome de "título1" e uma classe "titulo", mas a "classe" foi repetida abaixo o "id" não -->
          <h1 class="titulo" id="título1">Título 01</h1>
          <p>Loren ipsum, lorem ipsum, etc</p>
        </div>
      </section>
      <section class="article">
        <div class="box">
          <h1 class="titulo" id="título2">Título 02</h1>
        </div>
      </section>
    </main>
  </body>
</html>
```

- Aqui selecionamos o "id" e inserimos uma estilização para o mesmo

```css
#titulo1 {
  color: green;
}
```

- Para tanto, devemos lembrar das boas práticas, e termos cuidado para não utilizarmos palavras reservadas, refente a sintaxe do "html" e "css". As boas práticas consiste em seguir uma semântica na digitação do código, para que o próximos profissional que for trabalhar numa, possível refatoração, possam entender, por isso, devemos nomear as "ids", "classes" em inglês e que faça ao menos uma referencia do que se propõe.

### 7. Cores no CSS ([voltar ao Início](#Lista-das-Aulas:))

### 8. Bordas no CSS ([voltar ao Início](#Lista-das-Aulas:))

### 9. Margins e Padding no CSS ([voltar ao Início](#Lista-das-Aulas:))

### 10. Width/height no CSS ([voltar ao Início](#Lista-das-Aulas:))

### 11. Dicas sobre Width/Height ([voltar ao Início](#Lista-das-Aulas:))

### 12. Links ([voltar ao Início](#Lista-das-Aulas:))

### 14. Formatação de textos no HTML ([voltar ao Início](#Lista-das-Aulas:))

### 15. Comentários no HTML ([voltar ao Início](#Lista-das-Aulas:))
