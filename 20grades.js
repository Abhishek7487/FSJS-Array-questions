// Q.20 Write a code which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

const calcGrade = (score) => {
  if (score >= 0 && score <= 49) {
    console.log("Your grade is: F");
  } else if (score >= 50 && score <= 59) {
    console.log("Your grade is: D");
  } else if (score >= 60 && score <= 69) {
    console.log("Your grade is: C");
  } else if (score >= 70 && score <= 89) {
    console.log("Your grade is: B");
  } else if (score >= 90 && score <= 100) {
    console.log("Your grade is: A");
  } else {
    console.log("Enter your grades between 1-100");
  }
};

calcGrade(96);
calcGrade(89);
calcGrade(65);
calcGrade(52);
calcGrade(33);
calcGrade(-12);

/*

OUTPUT: 

Your grade is: A
Your grade is: B
Your grade is: C
Your grade is: D
Your grade is: F
Enter your grades between 1-100

 */
