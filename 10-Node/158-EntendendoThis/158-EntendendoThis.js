console.log("#############=- OUT OF FUNCTION -=###############")

console.log('"this" é === a global?: ', this === global);
console.log('"this" é === a global?: ', this === module);


console.log('"this" é === a module.exports?: ', this === module.exports);
console.log('"this" é === a exports?: ', this === exports);

console.log("#############=- INSIDE FUNCTION -=###############")


function ThisOnFunction () {
  console.log('"this" DENTRO da FUNÇÃO é === a exports?:=> ', this === exports);
  console.log('"this" DENTRO da FUNÇÃO é === a module.exports?:=> ', this === module.exports);
  console.log('"this" DENTRO da FUNÇÃO é === a global?:=> ', this === global);
  
}

ThisOnFunction();

console.log("#############=- ARROW FUNCTION -=###############")
/*  Porém, quando falamos de ARROW FUNCTION "() => {}", a coisa muda um pouco.
Isso porque dentro de uma arrow function, o this não vai apontar mais para o objeto global, e sim para o module.export / exports. */

const thisArrowFunction = () => {
  console.log('"this" DENTRO da ARROW FUNÇÃO é === a exports?:=> ', this === exports);
  console.log('"this" DENTRO da ARROW FUNÇÃO é === a module.exports?:=> ', this === module.exports);
  console.log('"this" DENTRO da ARROW FUNÇÃO é === a global?:=> ', this === global);

}

thisArrowFunction();