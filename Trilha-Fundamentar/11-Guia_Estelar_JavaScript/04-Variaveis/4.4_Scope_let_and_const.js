// Aula 4.4_Scope_let_and_const

/*
    ## let e const
      - são locais, ou seja, só funcionam dentro do escopo onde foi criada
      
      Ex.: Abaixo
*/

// console.log('> Existe Y antes do Bloco?', y)

// Inicio do escopo do let
{
    let y = 0
    console.log('> Existe Y depois do Bloco?', y)
}// fim do escopo do let
// console.log('> Existe Y depois do Bloco?', y)