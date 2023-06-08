const fs = require('fs')

const product = {
  name: 'Celular',
  price: 1249.99,
  discount: 0.15
}

fs.writeFile(__dirname + '/Product.json', JSON.stringify(product), err => {
  console.log(err || 'File Saved!')
})