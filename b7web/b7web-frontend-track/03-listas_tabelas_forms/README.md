# Módulo 3: Listas, Tabelas e Formulários

## Conteúdo do Módulo

1. [Formatação de textos no CSS 1](#formatação-de-textos-no-CSS-1)
2. [Formatação de textos no CSS 2](#formatação-de-textos-no-CSS-2)
3. [Adicionando Fontes Externas](#adicionando-fontes-externas)
4. [Listas no HTML](#listas-no-html)
5. [Tabelas no HTML](#tabelas-no-html)
6. [Tabelas no CSS](#tabelas-no-css)
7. [Formulários](#formulários)
8. [Input](#input)
9. [Inputs no HTML5](#inputs-no-html5)
10. [Select](#select)
11. [Textarea](#textarea)
12. [Button](#button)
13. [Label](#label)
14. [Formatando formulários no CSS 1](#formatando-formulários-no-css-1)
15. [Formatando formulários no CSS 2](#ormatando-formulários-no-css-1)
16. [Tags Fieldset e Legend](#tags-fieldset-e-legend)
17. [Validações Nativas 1](#validações-nativas-1)
18. [Validações Nativas 2](#validações-nativas-2)
19. [Input type hidden](#input-type-hidden)
20. [Input type file](#input-type-file)

## Formatação de textos no CSS 1

- Iremos formatar os textos do sites através do arquivo \*.css

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Modelo</title>
  </head>
  <body>
    <main>
      <h1>Formatando Texto no HTML pelo CSS</h1>
      <nav></nav>
      <section>
        <div>
          <h3>Paragrafo 01</h3>
          <p class="paragrafo1">
            <a href="loremipsum.com">Lorem ipsum</a> dolor sit amet, consectetur
            adipiscing elit. Curabitur in leo ut justo fermentum convallis.
            Nullam malesuada, orci et laoreet tempor, felis tortor tempor purus,
            eu placerat urna metus vitae eros. Nunc sollicitudin magna ut
            condimentum iaculis. Nulla et nibh ac felis accumsan mollis vitae ut
            odio. Nullam ante magna, pellentesque id bibendum ac, sagittis ac
            arcu. Cras fermentum nunc mauris, at varius dui fringilla ut. Nulla
            non turpis odio. Praesent rhoncus ut odio non accumsan.
          </p>
          <h3>Paragrafo 02</h3>
          <p class="paragrafo2">
            Nunc cursus mollis ex. Donec ac placerat diam, ac varius quam.
            Integer tortor felis, ultrices quis feugiat et, ultrices id lacus.
            In hac habitasse platea dictumst. Etiam viverra pulvinar leo, vitae
            efficitur velit scelerisque cursus. Nam consequat orci justo, a
            consectetur nisi porttitor tristique. Vivamus a maximus orci.
            Maecenas eu libero in lectus mattis venenatis. Donec fringilla
            bibendum risus et lobortis. Pellentesque congue accumsan turpis, in
            tincidunt eros finibus ut. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <h3>Paragrafo 03</h3>
          <p class="paragrafo3">
            Mauris dapibus tellus aliquet malesuada congue. Aliquam erat
            volutpat. Etiam porta fringilla rhoncus. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Donec vel accumsan odio, in porta
            diam. Donec lacus augue, accumsan ac elementum non, lobortis a
            tortor. Fusce sit amet orci vel lectus volutpat egestas. Praesent
            sed magna nisl. Nulla porta augue leo, eu feugiat arcu lacinia non.
            Mauris eleifend euismod ante at euismod. In imperdiet mi a orci
            luctus, non placerat felis vehicula.
          </p>
        </div>
      </section>
      <footer>
        <div></div>
      </footer>
    </main>
  </body>
</html>
```

```css
* {
  box-sizing: border-box;
}

body {
  margin: 50px;
  font-size: 17px;
}
/* podemos formatar desta forma, listando o elemento, mas neste caso todos os elemento "p" receberam os mesmo "styles" */
p {
  /* cor da fonte */
  color: #00f;
  /* tamanho da fonte */
  font-size: 30px;
  /* peso da font, normal, bold(negrito), etc */
  font-weight: bold;
  /* font padrão do navegor é serif, caso coloque uma que não tem no computador do usário */
  font-family: Helvetica, Arial;
}

/* também podemos inserir o "style" desta forma, assim, através de classes, desta forma podemos inserir "styles" diferentes para elementos do mesmo nome. */
.paragrafo1 {
  border: 3px solid gray;
}

.paragrafo2 {
  border: 3px solid green;
}

.paragrafo3 {
  border: 3px solid red;
}

/* aqui removemos o sublinhado do link do lorem ipsum */
a {
  text-decoration: none;
}

/* agora colocamos o sublinhado novamente, entretando, somente com o passar do mouse */
a:hover {
  text-decoration: underline;
}
```

[Voltar ao Início](#Conteúdo-do-Módulo)

## Formatação de textos no CSS 2

[Voltar ao Início](#Conteúdo-do-Módulo)

## Adicionando Fontes Externas

[Voltar ao Início](#Conteúdo-do-Módulo)

## Listas no HTML

[Voltar ao Início](#Conteúdo-do-Módulo)

## Tabelas no HTML

[Voltar ao Início](#Conteúdo-do-Módulo)

## Tabelas no CSS

[Voltar ao Início](#Conteúdo-do-Módulo)

## Formulários

[Voltar ao Início](#Conteúdo-do-Módulo)

## Input

[Voltar ao Início](#Conteúdo-do-Módulo)

## Inputs no HTML5

[Voltar ao Início](#Conteúdo-do-Módulo)

## Select

[Voltar ao Início](#Conteúdo-do-Módulo)

## Textarea

[Voltar ao Início](#Conteúdo-do-Módulo)

## Button

[Voltar ao Início](#Conteúdo-do-Módulo)

## Label

[Voltar ao Início](#Conteúdo-do-Módulo)

## Formatando formulários no CSS 1

[Voltar ao Início](#Conteúdo-do-Módulo)

## Formatando formulários no CSS 2

[Voltar ao Início](#Conteúdo-do-Módulo)

## Tags Fieldset e Legend

[Voltar ao Início](#Conteúdo-do-Módulo)

## Validações Nativas 1

[Voltar ao Início](#Conteúdo-do-Módulo)

## Validações Nativas 2

[Voltar ao Início](#Conteúdo-do-Módulo)

## Input type hidden

[Voltar ao Início](#Conteúdo-do-Módulo)

## Input type file

[Voltar ao Início](#Conteúdo-do-Módulo)
