console.log(`Aula 7.2-Type_Conversion_Coersion

`)

/*
    Type conversion (typecasting) vs Type Coersion
        
        * Alteração de um tipo de dado para outro

*/

// Type Coersion - Qndo o JS força a transformação do tipo
console.log('9' + 5) // O Número "5" foi forçado em String, mesmo sendo Number pelo JS por Type Coersion

// Type Conversion - Qndo nós forçamos converção do tipo manualmente
console.log(Number('9') + 5) // Forçando "9" em um numero, mesmo escrito como String