import Car from "./modules/Car.js";

const car = new Car('volvo v70', 2006, 360);
console.log(car)
car.accelerate(100)
car.accelerate(10)

car.brake();