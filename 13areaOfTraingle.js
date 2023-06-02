// Bellow code will be executed only in browser console

var base = prompt("Enter the base of the triangle");
var height = prompt("Enter the height of the triangle");

var areaOfTraingle = (b, h) => {
  let area = 0.5 * b * h;
  return `Area of triangle with base ${b} & height ${h} is ${area}`;
};
console.log(areaOfTraingle(base, height));
