const hero = 'Thor'
const heroXp = 10001

if (heroXp < 1000) {
  console.log(`O Herói ${hero} está no nível Ferro`)
} else if (heroXp >= 1001 && heroXp <= 2000) {
  console.log(`O Herói ${hero} está no nível Bronze.`)
} else if (heroXp > 2001 && heroXp <= 5000) {
  console.log(`O Herói ${hero} está no nível Prata.`)
} else if (heroXp > 5001 && heroXp <= 7000) {
  console.log(`O Herói ${hero} está no nível Ouro.`)
} else if (heroXp > 7001 && heroXp <= 8000) {
  console.log(`O Herói ${hero} está no nível Platina.`)
} else if (heroXp > 8001 && heroXp <= 9000) {
  console.log(`O Herói ${hero} está no nível Ascendente.`)
} else if (heroXp > 9001 && heroXp <= 10000) {
  console.log(`O Herói ${hero} está no nível Imortal.`)
} else {
  console.log(`O Herói ${hero} está no nível Radiante.`)
}
