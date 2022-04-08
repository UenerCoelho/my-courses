console.log(`Aula 6.8-Callback_Function

`)

// Callback Function
function SayMyName(name) {
    console.log('Antes de executar a função callback')

    name()

    console.log('Depois de executar a função callbak')
}

SayMyName(
    () => {
        console.log('### Estou em Callback ###')
    }
)

// Como o codigo acima funciona
function dizMeuNome() {
    console.log('Antes de executar a função callback')
    
    function nome() {
        console.log('### Estou em Callback ###')
    }
    nome()

    console.log('Depois de executar a função callbak')
}

dizMeuNome()