# Object Oriented Programming

## O qué OOP Object Oriented Programming

- O que é OOP ( sigla em ingles para POO em português, ques significa Programação Orientada a Objetos).
- É uma paradigma de desenvolvimento.
- Uma maneira de resolver problemas.
- Um modo de pensar.
- É um entendimento amplo e atemporal na criação de softwares.
- Objetos dentro da programação tem o mesmo significado de objetos reais físicos. Assim a forma como programamos um objeto deve ter a mesma conotação.

## Utilização no mercado de Programação

- Na maioria dos sistemas atuais
- Em várias linguagens (JavaScript, TypeScript, Java, Python, etc)
- Utilizado também por Analisa de Sistema e não somente por programadores
  * Durante a fase de Requisitos de sistema
  * Via gráficos, desenhos e texto (UML)

## Onde e quando utilizar

- Nas Linguagens
- Quando quiser na aplicação Padrões de Projetos
- Quando quiser organizar seu código
  * para melhora o entendimento do código, pensando nele como objetos
- Quando precisar fazer re-uso do código
- Para separar a complexidade do código
  * Abstrair e expor o código de maneira mais simples
- Para classificar as rotinas e trechos de códigos

## Conceito

- Precisamos entender o conceito e paradigma e não somente o código
- Uma boa Fundamentação
- É uma base de comunicação entre programadores

## O qué um objeto

- Todo objeto possui:
  * Propriedades e Funcionalidade
  * Estado e Comportamentos
  * Atributos e Métodos

## Objetos Abstratos vs Objetos Reais

### Objetos Abstratos

  - Uma maneira de representar algo do mundo real como objetos na programação
    * Pessoa
    * Aluno
    * Produto
    * Carrinho de Compras

  - Entretanto, na programação, alguns objetos são difíceis de identificar
    * Autenticação
    * Autorização

  * {'Alerta'} Nem todo Objeto real fará parte de um sistema

## Classe

- Classes funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.

  * Exemplo: Máquina de Biscoito
    + instâncias

## Classes em JavaScript

- Syntactical sugar
- Prototype

```js
// Definir Classe
class person {
  constructor (name) {
    this.id = ~~(Math.random() * 100000)
    this.name = name
  }

  talkName() {
    console.log(this.name)
  }
}
// Criar Objeto

var person = new Person('Uener')
pessoa
```
- Todo objeto criado em JavaScript é um protótipo, que receberá herança de outros objetos criados acima.

## Encapsulamento