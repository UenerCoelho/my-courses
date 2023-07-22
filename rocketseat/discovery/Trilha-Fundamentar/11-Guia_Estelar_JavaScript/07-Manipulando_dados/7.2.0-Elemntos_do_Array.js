console.log(`Aula 7.2.0-Elemntos_do_Array

`)

// Contar Elementos do Array
console.log([
    "a",
    {type: "Array"},
    function() {return "Função Anonima"},
    () => {return 'Arrow Function'}
].length)
console.log([
    "a",
    {type: "Array"},
    function() {return "Função Anonima"},
    () => {return 'Arrow Function'}
][3]())