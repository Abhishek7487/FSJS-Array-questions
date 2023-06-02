let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven = sumEven + i;
  } else {
    sumOdd = sumOdd + i;
  }
}

console.log(`Sum of all EVEN numbers from 0 to 100 is: ${sumEven}`);
console.log(`Sum of all ODD numbers from 0 to 100 is: ${sumOdd}`);
