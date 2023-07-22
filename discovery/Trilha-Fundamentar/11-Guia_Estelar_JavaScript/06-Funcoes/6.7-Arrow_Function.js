console.log(`Aula 6.7-Arrow_Function

`)


/* Arrow Function:
        const variável = () => {}
*/

const sayMyName = () => {
    console.log('Uener')
}

sayMyName()

let name = (myName) => {
    console.log(myName)
}

name('Uener Coelho')

var student = () => {
    talk = 'Uener Coelho Rodrigues'
    return talk
}

console.log(student())