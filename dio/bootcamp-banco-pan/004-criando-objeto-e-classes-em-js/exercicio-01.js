/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
    Crie um método que dado a quantidade de quilômetro e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/
class Car {
  carName
  carBrand
  carColor
  carSpentPerKilometer
  routeDistance
  fuel

  constructor(name, brand, color, spent, distance, fuelPrice) {
    this.carName = name
    this.carBrand = brand
    this.carColor = color
    this.carSpentPerKilometer = spent
    this.routeDistance = distance
    this.fuel = fuelPrice
  }

  routeSpent() {
    const spentTravel =
      (this.routeDistance / this.carSpentPerKilometer) * this.fuel
    console.log(
      `O carro ${this.carName} ${this.carColor} da marca ${
        this.carBrand
      } consome ${this.carSpentPerKilometer}km/l a uma distancia de ${
        this.routeDistance
      }km gastou R$${spentTravel.toFixed(2)} com o preço do combustível à R$${
        this.fuel
      }`
    )
  }
}

const car1 = new Car('Corolla', 'Toyota', 'Black', 10, 400, 3.33)
car1.routeSpent()
const car2 = new Car('Fox', 'Volkswagen', 'Branco', 8, 400, 3.33)
car2.routeSpent()
const car3 = new Car('Agile', 'Chevrolet', 'Black', 7, 400, 3.33)
car3.routeSpent()
