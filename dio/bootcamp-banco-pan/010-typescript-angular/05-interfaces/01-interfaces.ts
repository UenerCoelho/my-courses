type robot1 = {
  readonly id: number | string;
  name: string;
}

interface robot2{
  readonly id: number | string,
  name: string
}

const bot1: robot1 = {
  id: 1,
  name: 'megaMan',
}

const bot2: robot2 = {
  id: '1',
  name: 'megaMan',
}

console.log(bot1)
console.log(bot2)