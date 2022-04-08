console.log(`Aula 7.8-Separando_strings

`)

/* 
    Separa um texto que contem espaços, em um novo Array onde
    cada texto é uma posição do array. Depois disso, transforme
    o array em um texto e onde eram espaços, coloque _
*/

let phrase = "Eu estou aprendendo a programar!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)