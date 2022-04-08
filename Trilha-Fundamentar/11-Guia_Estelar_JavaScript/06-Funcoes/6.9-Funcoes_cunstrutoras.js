console.log(`Aula 6.9-Funcoes_cunstrutoras

`)

/*
    Function() Constructor
      
      * Expressão new
      * Criar um novo objeto
      * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " Está Andando"
    }
}
const uener = new Person("Uener Coelho")
const catia = new Person("Catia Coelho")
console.log(uener.walk())
console.log(catia.walk())

// Function Construtor que já existem no JS
let name = new String("Uener Coelho")
console.log(name)
let date = new Date("2021-04-04")
console.log(date)