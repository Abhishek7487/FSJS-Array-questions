let height = prompt("Enter your height:");
let weight = prompt("Enter your weight:");

function calcBMI(h, w) {
  let bmi = w / (h * h);
  return bmi;
}

let bmi = calcBMI(height, weight);

if (bmi < 18.5) {
  console.log(`Your BMI is: ${bmi.toFixed(2)} and you are Under Weighted`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log(`Your BMI is: ${bmi.toFixed(2)} and you are Normal Weighted`);
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log(`Your BMI is: ${bmi.toFixed(2)} and you are Over Weighted`);
} else if (bmi >= 30) {
  console.log(`Your BMI is: ${bmi.toFixed(2)} and you are Obese`);
}
