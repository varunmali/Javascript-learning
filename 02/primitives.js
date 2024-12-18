// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

//Boolean

let isActive = true;
let isReallyActive = new Boolean(true); //Not preferable

//null and undefined

let firstname;
console.log(firstname);

let lastname = null;
console.log(lastname);

//string

let myString = "Heloo!!";
console.log(myString);

let oldGreet = myString + " " + "Good Morning";
console.log(oldGreet);

let userName = "Varun";
let greetMessage = `Hello!! ${userName}`;
console.log(greetMessage);

let sm1 = Symbol("v");
let sm2 = Symbol("v");

console.log(sm1 == sm2);
