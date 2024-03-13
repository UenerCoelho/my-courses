"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const fusionArray = concatArray(['Goku', '+'], ['Vegeta']);
console.log(numArray);
console.log(fusionArray);
