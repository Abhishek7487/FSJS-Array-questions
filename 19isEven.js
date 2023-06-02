// Q.19 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

const checkEven = (num) => {
  if (num % 2 == 0) {
    console.log(`The number ${num} is EVEN`);
  } else {
    console.log(`The number ${num} is ODD`);
  }
};

checkEven(12);
checkEven(5);
