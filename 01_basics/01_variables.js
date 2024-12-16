const accountId = 144553; //not changeable

let accountEmail = "varun@google.com"; // changeable

var accountPassword = "12345"; // changeable (N.P.)

accountCity = "Jaipur";

// accountId = 2; // not allowed

accountEmail = "abc@avc.com";

accountPassword = "456789";

accountCity = "Gandhinagar";

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity]);
