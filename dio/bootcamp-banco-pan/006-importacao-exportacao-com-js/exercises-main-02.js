const { gets, print } = require('./exercises-functions-01')

const studentsQuantity = gets()
let highestValueFounded = 0
for (let index = 0; index < studentsQuantity; index++) {
  const sortedNum = gets()
  if (sortedNum > highestValueFounded) {
    highestValueFounded = sortedNum
  }
}

print(highestValueFounded)
