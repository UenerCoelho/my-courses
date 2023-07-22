 console.log(`Aula 8.1.3-Falsy_&_Truthy

`)

/*
    FALSY
        Quando um valor é considerado false em contextos onde 
        um booleano é obrigatório (condicionais e loops)
        
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(true ? 'Verdadeiro' : 'falso' )
console.log(false ? 'Verdadeiro' : 'falso' )
console.log(0 ? 'Verdadeiro' : 'falso' )
console.log(-0 ? 'Verdadeiro' : 'falso' )
console.log("" ? 'Verdadeiro' : 'falso' )
console.log(null ? 'Verdadeiro' : 'falso' )
console.log(undefined ? 'Verdadeiro' : 'falso' )
console.log(NaN ? 'Verdadeiro' : 'falso' )

/*
    TRUTHY
        Quando um vakr é considetado true em contextos onde
        um boolano é obrigatório (Condicionais e loops
        
    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(true ? 'Verdadeiro' : 'falso' )
console.log({} ? 'Verdadeiro' : 'falso' )
console.log([] ? 'Verdadeiro' : 'falso' )
console.log(1 ? 'Verdadeiro' : 'falso' )
console.log(3.23 ? 'Verdadeiro' : 'falso' )
console.log("0" ? 'Verdadeiro' : 'falso' )
console.log("false" ? 'Verdadeiro' : 'falso' )
console.log(-1 ? 'Verdadeiro' : 'falso' )
console.log(Infinity ? 'Verdadeiro' : 'falso' )
console.log(-Infinity ? 'Verdadeiro' : 'falso' )
