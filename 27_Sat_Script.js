// LOOPS

// for(initialization,condition,increment/decrement){
// code
// }

// for (let i = 1; i < 5; i++) {
//   console.log(`${i}`);
// }

// for (let i = 1; i < 5; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

// TODO: inner loop

// for (let i = 1; i <= 5; i++) {
//   console.log(`${i}`);
//   for (j = 1; j <= 5; j++) {
//     console.log(`${j} * ${j} * ${j} = ${j * j * j}`);
//   }
// }

// let con = ["India", "Sweden", "Norway", "Iceland"];
// let newcon = [];
// for (let i = 0; i < con.length; i++) {
//   newcon.push(con[i].toUpperCase());
// }

// console.log(newcon);

// TODO: Square of array number

// let num = [2, 5, 8, 3, 6];
// let newnum = [];

// for (let i = 0; i < num.length; i++) {
//   newnum.push(num[i] * num[i]);
// }

// console.log(newnum);

// let i = 0;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// TODO:

// while (i % 2 == 0) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i >= 5);

// Syntax:
// let var;
// for(let var of array)

// let num = [1, 2, 3, 4, 5];
// for (let number of num) {
//   console.log(number);
// }

// let con = ["India", "Sweden", "Norway", "Iceland"];
// for (let cont of con) {
//   console.log(cont[0]);
// }

// TODO: Repeat above method of uppercase using for of loop

// let con = ["India", "Sweden", "Norway", "Iceland"];
// let newcon = [];
// for (let cont of con) {
//   newcon.push(cont.toUpperCase());
// }

// console.log(newcon);

// break and continue

// for (let i = 1; i < 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }

// Functions

//Definition
// Function without parameter
// function Square() {
//   let x = 5;
//   let sq = x * x;
//   console.log(sq);
// }

// Square(); // Calling

// Function with parameter
// function add(x, y) {
//   let xy = x + y;
//   console.log(xy);
// }

// add(5, 2);

// // 1000 line of codes
// add(12, 55);

// function printFullName(firstName, lastName) {
//   let fullName = firstName + " " + lastName;
//   return fullName;
// }

// console.log(printFullName("Abhishek", "Patil"));

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }

// console.log(areaOfCircle("10"));

// function sumofArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// let numb = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(sumofArray(numb));

// TODO: for of
// function sumofArray(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum = sum + num;
//   }
//   return sum;
// }

// let numb = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(sumofArray(numb));

// const SumOfAll = (...args) => {
//   let sum = 0;
//   for (let element of args) {
//     sum = sum + element;
//   }
//   return sum;
// };

// console.log(SumOfAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// DATE AND TIME

// let now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now);
// console.log(now.toString());
