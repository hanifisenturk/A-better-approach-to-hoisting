console.log(a); // Expected output: undefined

var a = "Hello World";

//Function declaration

myFunction(); // Expected output: "This is a function declaration"

function myFunction() {
  console.log("This is a function declaration");
}

// Function expression

console.log(typeof yourFunction); // Expected output: undefined.

yourFunction(); // Expected output: yourFunction is not a function;

var yourFunction = function () {
  console.log("This is a function expression");
};
