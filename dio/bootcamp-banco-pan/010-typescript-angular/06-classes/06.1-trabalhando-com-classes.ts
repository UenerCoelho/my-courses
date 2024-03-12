class Character {
  name?: string;
  strength: number;
  skill: number;

  constructor(name: string, strength: number, skill: number){
    this.name = name
    this.strength = strength
    this.skill = skill
  }

  attack():void{
    console.log(`Attack with ${this.strength} points`)
  }
}

// SubClasse
class Magician extends Character {
  magicPoints: number
  constructor(name: string, strength: number, skill: number, magicPoints: number){
    super(name, strength, skill)
    this.magicPoints = magicPoints
  }
}

const player1 = new Character('Ryu', 10, 98)
const player2 = new Magician('Leona', 10, 98, 100)
console.log(player1)
console.log(player2)