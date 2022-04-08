console.log(typeof Object) //function
console.log(typeof new Object) //object

const cliente = function() {}
console.log(typeof cliente) //function
console.log(typeof new cliente) //object

class produto { } // ES 2015 (ES6)
console.log(typeof produto) //function
console.log(typeof new produto) //object