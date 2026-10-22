// three ways of declaring strings
// double quotes
// single quotes
// back ticks

let first_name = "John";
first_name = "John";
first_name = `John`;

// concatenation of Strings
let fname = "John";
let lname = "Doe";
let full_name = fname + " " + lname;
console.log("The full name is : " + full_name);

// template literals (Back ticks)
let message = `Hello ${full_name}`;
console.log("The message is : " + message);

// string methods
console.log("First name : " + fname.length);
console.log("First name in uppercase : " + fname.toUpperCase());
console.log("First name in lowercase : " + fname.toLowerCase());
console.log("First name after removing whitespace : " + fname.trim());
