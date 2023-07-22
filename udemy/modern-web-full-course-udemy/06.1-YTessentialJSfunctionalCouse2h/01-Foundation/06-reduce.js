// const numbers = [1, 2, 3, 4, 5, 6]
const numbers = [4, 4, 4, 4]

const sum = (total, element) => total + element
const total = numbers.reduce(sum)

console.log(total);

const media = (accumulator, element, index, array) => {
   if(index === array.length - 1) {
    return (accumulator + element) / array.length
   } else {
    return accumulator+ element
   }
}

const result = numbers.reduce(media)
console.log(result);