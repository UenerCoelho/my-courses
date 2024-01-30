const entryValues = [5, 50, 10, 98, 23, 99, 44, 56, 38, 95]
let i = 0

function gets() {
  const value = entryValues[i]
  i++
  return value
}

function print(text) {
  console.log(text)
}

module.exports = { gets: gets, print: print }
