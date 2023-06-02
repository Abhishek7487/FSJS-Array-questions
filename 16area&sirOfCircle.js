// Q.16 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Bellow code will be executed only in browser console

let radius = prompt("Enter Index of a circle");

const areaOfCircle = Math.PI * radius * radius;
const circumferenceOfCircle = 2 * Math.PI * radius;

console.log(
  `Area of circle with radius ${radius} is ${Number.parseFloat(
    areaOfCircle
  ).toFixed(2)}`
);

console.log(
  `Circumference of circle with radius ${radius} is ${Number.parseFloat(
    circumferenceOfCircle
  ).toFixed(2)}`
);
