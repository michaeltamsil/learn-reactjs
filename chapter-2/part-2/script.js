class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * 2 * this.radius;
    }
}

let circle = new Circle(10);
let circle2 = new Circle(3);
let totalArea = circle.getArea();
console.log(`this totalArea is ${totalArea}`)

const object = {
    name: 'Budi',
    gender: 'Male',
    live: 'Batam'
  }
  console.log(object);

  const { name, live, gender } = object;
  const name = object.name
  const live = object.live
  const gender = object.gender
  
  console.log(name, live) // Budi Batam

  const simpleFunction = ({name, gender}) => {
    return `hi my name is ${name} with gender ${gender}`
  }
  const greeting = simpleFunction(object)
  console.log(greeting)
