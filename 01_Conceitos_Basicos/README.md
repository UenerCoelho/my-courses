# O que é HTML e para quê serve?

<p> HTML (Hyper Text Markup Language), como o próprio nome ja diz, é uma Linguagem de Marcação de Texto. Ele é responsável por tornar os códigos interpretáveis, pelo navegador, através dele, permitindo que o Navegador de internet, traduza os código em algo legível, e para isso, o HTML utiliza uma serie de processos semânticos chamados de Tags HTML.</p>

## O que são Tags HTML

- Tag é nome dos elementos de um arquivo HTML, como por exemplo a tag ~~~html<p></p>~~~ utilizado para paragrafo, ou a tag ~~~html<h1></h1>~~~ utilizada para criar títulos.

## O que são os atributos

- São tags com atributos, como link de referencias numa imagem, ou num link propriamente dito, no caso dos links, utilizamos href seguido e um sinal de igual e logo seguida do endereço do link ex: https://www.google.com. Também podemos colocar atributos de tamanho, imagens, classificações, etc.

## Qual a Estrutura básica de um HTML

```html
<!-- esta tag define o tipo do documento, como HTML -->
<!DOCTYPE html>
<html>
  <!-- Tag HEAD = Cabeçalho do HTML, não aparece, necessáriamente, na tela -->
  <head>
    <!-- Tabela de letras, símbolos e acentos, o atributo charset="UTF-8" permite que coloquemos, no corpo do site, símbolos nos textos como acentos, etc. -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <!-- Esta tag (body) define o corpo documento -->
  <body>
    <!-- tudo que vier dentro desta tag aparecerá na tela. -->
  </body>
</html>
```
