function generateNumberBetween(min, max, forbiddenNumbers) {
  if (min > max) [max, min] = [min, max]
  return new Promise((resolve, reject) => {
    const factor = max - min + 1
    const random = parseInt(Math.random() * factor) + min
    if (forbiddenNumbers.includes(random)) {
      reject('Número repetido!')
    } else {
      resolve(random)
    }
  })
}

async function generateMegaSenna(numberQuantity, errorChances = 1) {
  try {
    const numbers = []
    for (let _ of Array(numberQuantity).fill()) {
      numbers.push(await generateNumberBetween(1, 60, numbers))
    }
    return numbers
  } catch (e) {
    if (errorChances > 10) {
      throw 'Erro!'
    } else {
      return generateMegaSenna(numberQuantity, errorChances + 1)
    }
  }
}

generateMegaSenna(18).then(console.log).catch(console.log)
