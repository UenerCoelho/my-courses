console.log('"this" é estritamente igual a global?: ', this === global);
console.log('"this" é estritamente igual a global?: ', this === module);

console.log("############################################")

console.log('"this" é estritamente igual a module.exports?: ', this === module.exports);
console.log('"this" é estritamente igual a exports?: ', this === exports);

console.log("############################################")

function ThisOnFunction () {
  console.log('this dentro de uma função... ');
  console.log('"this" é estritamente igual a exports?: ', this === exports);
}

ThisOnFunction();