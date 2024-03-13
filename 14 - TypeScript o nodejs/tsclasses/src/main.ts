import { Car } from "./modules/Car.ts";

const myCar = new Car('Ferrari', '458 Spider', 1997);

console.log(myCar.make)
myCar.year = 1987;
console.log(myCar.year)

console.log(myCar)

