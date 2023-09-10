/* Corrija o código abaixo
 *** const email = email@trybe.com;
 *** email = outroEmail@trybe.com;
 */

function corrigeCodigo() {
  try {
    let email = 'email@trybe.com'
    email = 'outroEmail@trybe.com'
  } catch (e) {
    return 'incorrect'
  }
  return 'correct'
}

console.log(corrigeCodigo())
