// 1. Estratégia para gerar valor padrão, antes do ES2015.
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log('Estratégia 1 -> ', soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

// 2. Estratégia para gerar valor padrão, antes do ES2015.
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = b !== undefined ? b : 1;
  c = c !== undefined ? c : 1;
  return a + b + c; 
};

console.log('Estratégia 2 -> ', soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// 3. Estratégia para gerar valor padrão, antes do ES2015.
function soma3(a, b, c) {
  a = 0 in arguments ? a : 1;
  b = 1 in arguments ? b : 1;
  c = 2 in arguments ? c : 1;
  return a + b + c; 
};

console.log('Estratégia 3 -> ', soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));

// 4. Estratégia para gerar valor padrão, antes do ES2015.
function soma4(a, b, c) {
  a = isNaN(a) ? 1 : a;
  b = isNaN(b) ? 1 : b;
  c = isNaN(c) ? 1 : c;
  return a + b + c; 
};

console.log('Estratégia 4 -> ', soma4(), soma3(3), soma4(1, 2, 3), soma4(0, 0, 0));

// Valor padrão ES2015.
function soma5(a = 1, b = 1, c = 1) {
  return a + b + c;
};

console.log('ES 2015 -> ', soma5(), soma5(3), soma5(1, 2, 3), soma5(0, 0, 0));