// Tranformando o Objeto em JSON
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } };
console.log(JSON.stringify(obj));

// Transformando JSON em Objeto, todo texto dentro do JSON precisa estar entre aspas duplas 
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))