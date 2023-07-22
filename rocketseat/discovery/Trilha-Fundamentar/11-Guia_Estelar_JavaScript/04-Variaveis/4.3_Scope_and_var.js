// Aula 4.3_Scope_and_var

/* 
    # Scope (escopo)
       * Escopo determina a visibilidade de alguma variável no JS
    
    # Block Statement (Block de Estado)

*/

// Vamos iniciar um bloco
{
    // Aqui dentro é um bloco e posso colocar qualquer código. Como abaixo;
    let x = 0
    console.log(x)
}// Aqui fechamos o Bloco
// O bloco, também criará um novo Escopo. Chamamos de `bock-scoped`

/*
    # var
       - é uma variavel global e local, poderá funcionar fora de um escopo de bloco
 */

/* 
    Hoisting (Elevação), qndo o JS pega a variavel "var"
    e coloca acima resultado, isso qndo declaramos o resultado
    acima da declaração da mesma. 
    exemplo abixo
*/
// var x 
/* 
    o conceito de hoisting, jogou o comentario acima de forma automatica,
    por isso o resutado do console.log abaixo deu como undefined, tanto
    que se descomentarmos, o resultado será o mesmo
*/
console.log("Existem a 'var x' antes do bloco?", x)

{
    var x = 0
}
/*
    O console.log abaixo, mostra o var dentro do bloco acima, mais o console.log acima
    mostra undefined, porque o JS realiza a leitura de forma vertical, de cima para baixo
*/
console.log("Existem a 'var x' antes do bloco?", x)
