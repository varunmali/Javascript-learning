// checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;
console.log("I am regular upper code");

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("Nope, num1 is NOT greater than num2");
}

console.log("I am regular bottom code");

// checking if a string is equal to antoher string:

let user1 = "hello";

let user2 = "hello";

if (user1 == user2) {
  console.log("Yes, both are equal");
} else {
  console.log("Both are not an equal");
}

// checking if a variable is  a number or not:

let var1 = 122;

if (typeof var1 === "number") {
  console.log("Yes, it is a number");
} else {
  console.log("Nope, Not a Number");
}

// Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log("Yes, it is");
} else {
  console.log("No,it is not");
}

// checking if an array is empty or not:

let items = [];
console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is NOT empty");
}
