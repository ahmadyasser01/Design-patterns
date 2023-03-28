import { BasicCar } from "./BasicCar";
import { LuxuryCar } from "./LuxuryCar";
import { SportsCar } from "./SportsCar";

const sportsCar = new SportsCar(new BasicCar());
sportsCar.assemble();

// now assembling a sports luxury car

const superLuxry = new SportsCar(new LuxuryCar(new BasicCar()));

superLuxry.assemble();
