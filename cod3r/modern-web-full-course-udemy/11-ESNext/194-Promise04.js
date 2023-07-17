function generateNumberBetween(min, max, time) {
  if (min > max) [max, min] = [min, max]
  return new Promise(resolve => {
    setTimeout(() => {
      const factor = max - min + 1
      const random = parseInt(Math.random() * factor) + min
      resolve(random)
    }, time)
  })
}

function generateManyNumbers() {
  return Promise.all([
    generateNumberBetween(1, 60, 4000),
    generateNumberBetween(1, 60, 1000),
    generateNumberBetween(1, 60, 500),
    generateNumberBetween(1, 60, 3000),
    generateNumberBetween(1, 60, 100),
    generateNumberBetween(1, 60, 1500)
  ])
}

console.time('promise')
generateManyNumbers()
  .then(numbers => console.log(numbers))
  .then(() => {
    console.timeEnd('promise')
  })
