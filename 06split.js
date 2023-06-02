var mncs = "Facebook, Google, Microsoft, Apple, IBM, Oracle,Amazon";

var newmncs = mncs.split(",");

var arr = [];

for (let element in newmncs) {
  arr.push(newmncs[element]);
}

console.log(arr); //['Facebook',' Google',' Microsoft',' Apple',' IBM',' Oracle','Amazon']
