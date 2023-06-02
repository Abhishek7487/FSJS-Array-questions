// Q.18 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Below code will be only executed in browser console

const userAge = prompt("Enter your age: ");

if (userAge > 0 && userAge >= 18) {
  console.log("You are old enough to drive.");
} else if (userAge > 0 && userAge < 18) {
  console.log(`You need to wait for ${18 - userAge} years to drive.`);
} else {
  console.log("Enter age in positive numbers.");
}
