let comprarComThis = function (param) {
  console.log(this === param)
}
// No nodejs global é == window no browser
comprarComThis(global)

const obj = {}
comprarComThis = comprarComThis.bind(obj)
comprarComThis(global)
comprarComThis(obj)

let comprarComThisArrow = param => console.log(this === param)
comprarComThisArrow(global)
comprarComThisArrow(module.exports)

comprarComThisArrow = comprarComThisArrow.bind(obj)
comprarComThisArrow(obj)