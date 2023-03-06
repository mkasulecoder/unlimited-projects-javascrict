let carModel = "Jeep";
let year = 2022;

// Classic way
// function car(args) {
//     // whatever you want to be executed
// }

function car(model, modelYear) {
  // whatever you want to be executed
  console.log("The car is " + model + " and year is " + modelYear);
}
//call the function
car(carModel, year);

let x = 3;
let y = 4;
function add(num1, num2) {
  // whatever you want to be executed
  return num1 + num2;
}
//call the function
const sum = add(x, y);

console.log("Sum is " + sum);

// Another way to write Functions
// let a = 5;
// let b = 3;

let sub = function (a, b) {
  // whatever you want to be executed
  return a - b;
};

console.log("Sub is " + sub(5, 3));

let divid = () => {
  // whatever you want to be executed
  console.log("Im an arrow function");
};

console.log(divid());

let multiply = (p, q) => {
  // whatever you want to be executed
  return p * q;
};

console.log("Result of the multiplication is " + multiply(12, 4));
