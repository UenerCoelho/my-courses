const { gets, print } = require('./exercises-functions-01')

let highestValueFounded = 0
for (let index = 0; index < 5; index++) {
  const sortedNum = gets()
  if (sortedNum > highestValueFounded) {
    highestValueFounded = sortedNum
  }
}

print(highestValueFounded)
