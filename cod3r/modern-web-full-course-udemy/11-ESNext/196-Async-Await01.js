function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), time)
  })
}

// waitFor(2000)
//   .then(() => console.log('Executando promise 01...'))
//   .then(waitFor)
//   .then(() => console.log('Executando promise 02...'))
//   .then(waitFor)
//   .then(() => console.log('Executando promise 03...'))

function returnValue() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function returnFast() {
  return 20
}

async function execute() {
  let value = await returnFast()
  // let value = await returnValue()

  await waitFor(1500)
  console.log(`async/Await ${value}...`)
  await waitFor(1500)
  console.log(`async/Await ${value + 1}...`)
  await waitFor(1500)
  console.log(`async/Await ${value + 2}...`)

  return value + 3
}

async function trueExecuting() {
  const value = await execute()
  console.log(value)
}

trueExecuting()
