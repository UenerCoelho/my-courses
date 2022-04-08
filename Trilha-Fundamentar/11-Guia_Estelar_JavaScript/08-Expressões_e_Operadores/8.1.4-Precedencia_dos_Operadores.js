console.log(`Aula 8.1.4-Precedencia_dos_Operadores

`)

/*
    Operator precedence (Precedencia de Operadores
        
        01º Grouping                      ( )
        02º Negação e incremento          ! ++ --
        03º Multiplicação e Divisão       * /
        04º Adição e Subtração            + -
        05º Relacional                    < <= > .= >=c
        06º Igualdade                     == != === !==
        07º AND                           &&
        08º OR                            ||
        09º Condicional                   ?:
        10º Assignment (Atribuição)       = += -= *=
    
    A numeração é a ordem de precedencia, que será executado primeiro pelo JS
*/

console.log(2 + 5 * 10)
console.log((2 + 5) * 10)
console.log(3 > 2 > 1) // Na sequencia ele executou 3 é maior que 2? True, true é maio que 1? Falso
console.log(3 > 2 && 2 > 1) // 3 é Maior que 2? true, depois 2 é maior que 1? true, depois true and true? true