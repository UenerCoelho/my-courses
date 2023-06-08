/* Desafio
    Create a range function
    range(5) -> [1, 2, 3, 4, 5]
    range(6, 11) -> [6, 7, 8, 9, 10, 11]
    range(10, 19, 2) -> [10, 12, 14, 16, 18]
    range(6, 2) -> [6, 5, 4, 3, 2]
    range(8, -3, 4) - [8, 4, 0]
*/

function range(a, b, s = 1) {
  const num1 = b === undefined ? 1 : a
  const num2 = b === undefined ? a : b
  const step = num1 <= num2 ? Math.abs(s) : -Math.abs(s)

  const nums = []
  for(let i = num1; num1 <= num2 ? i <= num2 : i >= num2 ; i += step){
    nums.push(i)
  }
  return nums
}

// range(5) -> [1, 2, 3, 4, 5]
console.log(range(5));

// range(6, 11) -> [6, 7, 8, 9, 10, 11]
console.log(range(6, 11));

// range(10, 19, 2) -> [10, 12, 14, 16, 18]
console.log(range(10, 19, 2));

//range(6, 2) -> [6, 5, 4, 3, 2]
console.log(range(6, 2));

//range(8, -3, 4) - [8, 4, 0]
console.log(range(8, -3, 4));


// Function auto-executável
(function rangeAuto(a, b, s = 1) {
  const num1 = b === undefined ? 1 : a
  const num2 = b === undefined ? a : b
  const step = num1 <= num2 ? Math.abs(s) : -Math.abs(s)

  const nums = []
  for(let i = num1; num1 <= num2 ? i <= num2 : i >= num2; i += step) {
    nums.push(i)
  }
  console.log(nums)
// })(5)
// })(6, 11)
// })(10, 19, 2)
// })(6, 2)
})(8, -3, 4)