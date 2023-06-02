import { countriesArray } from "./24countries.mjs";

// 1
let includeLand = [];

countriesArray.forEach((e) => {
  if (e.includes("land")) {
    includeLand.push(e);
  }
});

console.log(`Countries that contains th word 'land' are: ${includeLand}`);

// 2
