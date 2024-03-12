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

class Person implements robot2{
  id: string | number;
  name: string;
  
  constructor(id: string | number, name: string){
    this.id = id
    this.name = name
  }

  sayHello(): string{
    return 'Hello'
  }
}

const persona =new Person(1, 'Coelho')
console.log(persona)