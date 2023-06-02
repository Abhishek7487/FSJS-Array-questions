const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// 1
if (shoppingCart.includes("Meat")) {
  console.log("No need to add Meat");
} else {
  shoppingCart.unshift("Meat");
  console.log("Meat added to the cart");
}
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

// 2
if (shoppingCart.includes("Sugar")) {
  console.log("No need to add Meat");
} else {
  shoppingCart.push("Sugar");
  console.log("Sugar added to the cart");
}
console.log(shoppingCart);

// 3

let isAllergicOfHoney = true;
if (isAllergicOfHoney) {
  console.log("Honey removed from the cart");
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
console.log(shoppingCart);

// 4
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log("Tea is modified to Green Tea");
console.log(shoppingCart);
