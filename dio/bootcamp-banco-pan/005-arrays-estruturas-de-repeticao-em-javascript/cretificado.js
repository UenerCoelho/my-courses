const num = []

for (let i = 0; i < 10; i++) {
  const num2 = i % 2 === 0
  if (num2) {
    num.push(i)
  }
}

console.log(num)
