# Módulo 02: Entendendo o HTML com CSS

## Lista das Aulas:

1. O que é indentação?
2. Tags Básicas (1/2)
3. Tags Básicas (2/2)
4. O que é e como usar o CSS? (1/2)
5. O que é e como usar o CSS? (2/2)
6. A base geral do CSS
7. Cores no CSS
8. Bordas no CSS
9. Margins e Padding no CSS
10. Width/height no CSS
11. Dicas sobre Width/Height
12. Links (1/2)
13. Links (2/2)
14. Formatação de textos no HTML
15. Comentários no HTML

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

### 2. Tags Básicas

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

### 4. O que é e como usar o CSS?

- CSS é um documento no qual o usuário não tem acesso normalmente, responsável por estilizar a pagina HTML.
