// Aula 5.6_Exercicios

// 1. Declare uma variável de nome weight
// let weight = 10

// // 2. Que tipo de dado é a Variável acima
// console.log(typeof weight)

// /*
//     3. Declare uma Variável e atribua valores para cada
//     um dos dados:
//         * name: String
//         * age: Number (integer)
//         * stars: Number (float)
//         * isSubscribed: Boolean
// */

//     let name = "Uener"
//     let age = 18
//     let stars = 4.5
//     let isSubscribed = true

// console.log('O Usuário', name, ' tem ', age, ' anos, recebeu ', stars, ' Estrelas, é Inscrito? ', isSubscribed)

/*
    4. A Variável student abaixo é de que tipo de dados?
    let student = {}
    4.1 Atribua a ela as mesmas porprieades e valores do exercício 3.
    
    4.2 Mostre no console a seguinte mennsagem:
        
        <name> de idade <age> pesa <weight> kg.
        
        Atenção, substitua <name> <age> e <weight> pelos valores
        de cada propriedade do objeto.
*/
// 4.0
let student = {
    
    // 4.1
    name: "Uener",
    age: 37,
    weight: 98
}
console.log(typeof student)
// 4.2
console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`)

/*
    5. Declare uma variável do tipo Array, de nome
    students e atribua a ela nenhum valor, ou seja,
    somente o Array 
*/
// let students = []
// console.log(typeof students)

/**
    6. Reatribuir valor para a variável acima, colocando
    dentro dela o objeto student da questão 4 (Não copiar
    e colar o objeto, mas usar o objeto criado e inserir o ele no Array)
*/

let students = [
    student
]

/*
    7.0 Coloque no console.log o valor da posição zero do Array acima
*/
// console.log(students[0])

/*
    8.0 Crie um novo student e coloque na posição 1 do Array students
*/
const catia = {
    name: "Catia",
    age: 33,
    weight: 47,
}

// let students = [
//     student,
//     catia
// ]
students[1] = catia
// console.log(students[1])

/*
    9.0 Sem rodar o código responda qual é a resposta do
    código abaixo e por que? Após sua resposta, rode o 
    código e veja se você acertou.
*/

console.log(a)
var a = 1

// Resposta: undefined
/*
    Explicação: pois var é uma var global, mas no código 
    onde está declarado a variável, está abaixo do console.log
    sendo assim, o JS coloca "var a" acima do console.log, por hoisting
    sem atribuir um valor, e como o JS realiza leitura de cima
    para baixo, não consegue enchergar  value de var.
*/ 
