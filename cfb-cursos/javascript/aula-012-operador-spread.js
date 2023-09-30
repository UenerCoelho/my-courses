let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1, ...n2] // Os 3 pontos formam o operador spread (espalhar)

const p1 = { name: 'Uener', energy: 100, life: 3 }
const p2 = { name: 'David', energy: 100, life: 5, speed: 80 }
const p3 = { ...p2, ...p2 }

const sum = (value1, value2, value3) => {
  return value1 + value2 + value3
}

let values = [1, 5, 10]

// console.log('n1: ' + n1)
// console.log('n2: ' + n2)
console.log('n3: ' + n3)
console.log(p3)
console.log(sum(...values))
