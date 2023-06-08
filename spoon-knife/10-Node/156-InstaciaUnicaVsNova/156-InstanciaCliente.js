const contadorA = require('./156-InstanciaUnica')
const contadorB = require('./156-InstanciaUnica')

const contadorC = require('./156-InstanciaNova')()
const contadorD = require('./156-InstanciaNova')()

contadorA.increment()
contadorA.increment()
// Neste caso o contadorB vai saber o foi incrementado no contadorA por cauda do Cache
console.log(contadorA.valor, contadorB.valor)

contadorC.increment()
contadorC.increment()
console.log(contadorC.valor, contadorD.valor)
