// Q.21 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer

let currMonth = prompt("Enter the current month: ");

if (
  currMonth == "September" ||
  currMonth == "October" ||
  currMonth == "November" ||
  currMonth == "september" ||
  currMonth == "october" ||
  currMonth == "november"
) {
  console.log("It's Autumn season");
} else if (
  currMonth == "December" ||
  currMonth == "January" ||
  currMonth == "February" ||
  currMonth == "december" ||
  currMonth == "january" ||
  currMonth == "february"
) {
  console.log("It's Winter season");
} else if (
  currMonth == "March" ||
  currMonth == "April" ||
  currMonth == "May" ||
  currMonth == "march" ||
  currMonth == "april" ||
  currMonth == "may"
) {
  console.log("It's Spring season");
} else if (
  currMonth == "June" ||
  currMonth == "July" ||
  currMonth == "August" ||
  currMonth == "june" ||
  currMonth == "july" ||
  currMonth == "august"
) {
  console.log("It's Summer season");
} else {
  console.log("Enter only Months as input");
}
