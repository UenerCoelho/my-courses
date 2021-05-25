console.log("Aula 6.5-Function_Scope ")

// Function Scope
// Scope 1
let subject = 'Create Video'


// Scope 2
function createThink(subect){
    subject = 'Study'
    return subject // Toda Função que não tem "Return" retorna "undefined"
}

console.log(subject)
console.log(createThink(subject))