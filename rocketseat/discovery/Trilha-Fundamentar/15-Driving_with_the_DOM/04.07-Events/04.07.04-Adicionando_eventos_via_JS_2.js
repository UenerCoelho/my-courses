// Events by JS 2

const h1 = document.querySelector('h1');

h1.addEventlistener('click', print)

function print() {
  console.log('print')
}

h1.addEventlistener('click', function () {
  console.log('Outro evento')
})