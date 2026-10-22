// JavaScript is a dynamically typed language
// variables are not associated with any data type
// declaration of variables can be done with let, const, var (var is discouraged in modern js)

console.log("Declare a variable using let");
let age = 20;
console.log("The value of variable age is : " + age);
console.log("The type of variable age is : " + typeof age);

// Reasign the value to the variable age
age = 60;
console.log("The value of variable age is : " + age);

// Redeclare the variable
// let age = 20;
// not allowed in the same scope

// reassign different type of value
age = "Ten";
console.log("The value of variable age is : " + age);
console.log("The type of variable age is : " + typeof age);
age = true;
console.log("The value of variable age is : " + age);
console.log("The type of variable age is : " + typeof age);

// declare a variable using const (constant)
// once declared the value cannot be changed
const company_name = "Apple";
console.log(company_name);
// reassign the value of const variable
// not allowed with the const declaration
// company_name = "Microsoft";
console.log(company_name);
// redeclare the const variable
// cannot redeclare the variable in same scope
// const company_name = "Apple";
