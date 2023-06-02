let today = new Date();

console.log(`Todays Year: ${today.getFullYear()}`);
console.log(`Todays Month as number: ${today.getMonth()}`);
console.log(`Todays date: ${today.getDate()}`);
console.log(`Todays day as number: ${today.getDay()}`);
console.log(`Hours Now: ${today.getHours()}`);
console.log(`Minutes Now: ${today.getMinutes()}`);

let oldDate = new Date("1970-01-01");

let newDate = new Date("2022-09-02");

var dif = oldDate.getTime() - newDate.getTime();

secondsElapsed = dif / 1000;

console.log(
  `Numbers of seconds elapsed from January 1, 1970 to September 2, 2022 are: ${Math.abs(
    secondsElapsed
  )}`
); // 1662076800
