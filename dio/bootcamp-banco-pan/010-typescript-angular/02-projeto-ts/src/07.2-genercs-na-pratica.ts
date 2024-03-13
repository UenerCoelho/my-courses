function concatArray<T>(...itens: T[]): T[]{
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3])
const fusionArray = concatArray<string[]>(['Goku', '+'], ['Vegeta'])
console.log(numArray)
console.log(fusionArray)