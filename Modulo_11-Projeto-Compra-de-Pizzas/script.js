const c = e => document.querySelector(e)
const cs = e => document.querySelectorAll(e)

pizzaJson.map((item, index) => {
  let pizzaItem = document.querySelector(".models .pizza-item").cloneNode(true)

  c(".pizza-area").append(pizzaItem)
})
