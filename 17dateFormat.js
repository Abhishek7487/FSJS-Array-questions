// Q.17 Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let current = new Date();

let year = current.getFullYear();
let month = current.getMonth();
let date = current.getDate();
let hour = current.getHours();
let minutes = current.getMinutes();

console.log(
  `${year}-${month.toString().split("").length > 1 ? month : "0" + month}-${
    date.toString().split("").length > 1 ? date : "0" + date
  } ${hour.toString().split("").length > 1 ? hour : "0" + hour}:${
    minutes.toString().split("").length > 1 ? minutes : "0" + minutes
  }`
);

console.log(
  `${date.toString().split("").length > 1 ? date : "0" + date}-${
    month.toString().split("").length > 1 ? month : "0" + month
  }-${year} ${hour.toString().split("").length > 1 ? hour : "0" + hour}:${
    minutes.toString().split("").length > 1 ? minutes : "0" + minutes
  }`
);

console.log(
  `${date.toString().split("").length > 1 ? date : "0" + date}/${
    month.toString().split("").length > 1 ? month : "0" + month
  }/${year} ${hour.toString().split("").length > 1 ? hour : "0" + hour}:${
    minutes.toString().split("").length > 1 ? minutes : "0" + minutes
  }`
);
