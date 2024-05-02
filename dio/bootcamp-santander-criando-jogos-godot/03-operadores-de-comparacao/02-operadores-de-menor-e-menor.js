let minAge = 18
let userAge = 17
let ageValid = userAge > minAge

console.log('Idade é maior que 18? ' + ageValid)

userAge = 18
ageValid = userAge >= minAge
console.log('Idade é maior ou igual a 18? ' + ageValid)

userAge = 17
ageValid = userAge < minAge

console.log('Idade é menor? que 18? ' + ageValid)
