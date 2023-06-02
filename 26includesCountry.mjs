import { countriesArray } from "./24countries.mjs";

console.log(countriesArray);

if (countriesArray.includes("Ethiopia")) {
  console.log("Ethiopia converted to ETHIOPIA");
  countriesArray[countriesArray.indexOf("Ethiopia")] =
    countriesArray[countriesArray.indexOf("Ethiopia")].toUpperCase();
} else {
  console.log("Ethiopia added to countriesArray");
  countriesArray.push("Ethiopia");
}

console.log(countriesArray);
