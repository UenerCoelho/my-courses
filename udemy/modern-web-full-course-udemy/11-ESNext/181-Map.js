const technology = new Map()
technology.set('react', { framework: false })
technology.set('angular', { framework: true })

console.log(technology.get('react'));
console.log(technology.get('react').framework);
console.log(technology.get('angular'));
console.log(technology.get('angular').framework);

const variousKeys = new Map([
  [function () { }, 'função'],
  [{}, 'Objeto'],
  [123, 'Numero'],
])

variousKeys.forEach((value, key) => {
  console.log(key, value);
})

console.log(variousKeys.has(123));
variousKeys.delete(123)
console.log(variousKeys.has(123));

variousKeys.set(123, 'a')
variousKeys.set(123, 'b')
variousKeys.set(456, 'b')
console.log(variousKeys);