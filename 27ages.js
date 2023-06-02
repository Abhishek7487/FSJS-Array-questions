const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1
ages.sort();
console.log(ages);
console.log(`The Minimun age in array is ${Math.min(...ages)}`);
console.log(`The Maximum age in array is ${Math.max(...ages)}`);

// 2.
len = ages.length;

if (len % 2 == 0) {
  let middleIndex = Math.floor(len / 2);
  let median = (ages[middleIndex] + ages[middleIndex - 1]) / 2;
  console.log(`Median of the array is ${median}`);
} else {
  let middleIndex = Math.floor(len / 2);
  let median = ages[middleIndex];
  console.log(`Median of the array is ${median}`);
}

// 3
let sumofAges = 0;
for (let i = 0; i < ages.length; i++) {
  sumofAges = sumofAges + ages[i];
}

console.log(`Sum of the array is: ${sumofAges}`);

let avgofAges = sumofAges / ages.length;
console.log(`Average of array is: ${avgofAges}`);

// 4
let min = Math.min(...ages);
let max = Math.max(...ages);
let rangeofAges = max - min;
console.log(`The range of an array is: ${rangeofAges}`);

// 5

console.log(
  `Difference between Minimum and Average age is ${Math.abs(
    min - avgofAges
  ).toFixed(2)}`
);

console.log(
  `Difference between Maximum and Average age is ${Math.abs(
    max - avgofAges
  ).toFixed(2)}`
);
