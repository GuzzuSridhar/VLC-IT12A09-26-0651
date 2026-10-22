// hoisting means accessing the variable before its declaration
//  Variable with var and functions are hoisted

// With Let
// console.log(test);
// let test = 10;

// with const
// console.log(con);
// const con = "test";

// with var
console.log(v);
var v = "test";

// with functions
// calling the function
greet();

// declare the function greet
function greet() {
  console.log("Hello");
}
