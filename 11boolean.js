// - 4 > 3  - false
// - 4 >= 3 - false
// - 4 < 3 - true
// - 4 <= 3 - true
// - 4 == 4 - false
// - 4 === 4 - false
// - 4 != 4 - true
// - 4 !== 4 - true
// - 4 != '4' - true
// - 4 == '4' - false
// - 4 === '4' - false

// console.log(-4 > 3); // false
// console.log(-4 >= 3); // false
// console.log(-4 < 3); // true
// console.log(-4 <= 3); // true
// console.log(-4 == 4); // false
// console.log(-4 === 4); // false
// console.log(-4 != 4); // true
// console.log(-4 !== 4); // true
// console.log(-4 != "4"); // true
// console.log(-4 == "4"); // false
// console.log(-4 === "4"); // false

var s1 = "python";
var s2 = "jargon";

// Length of 'python' & 'jargon' -->
console.log(`Lenght of 'python' is: ${s1.length}`);
console.log(`Lenght of 'jargon' is: ${s2.length}`);

// Falsy comparision statement
console.log(s1.length !== s2.length); // false
