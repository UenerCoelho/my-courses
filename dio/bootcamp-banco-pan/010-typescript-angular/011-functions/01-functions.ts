function addNumber(x: number, y: number): number{
  return x + y
}


let soma: number = addNumber(4, 7)
console.log(soma)


function  addToHello(name: string){
  return `Hello ${{name}}`
}

console.log(addToHello('Uener'))