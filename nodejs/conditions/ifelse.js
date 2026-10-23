// if else
// execute the set of instruction based on condition (true or false)
/*
if(condition){
    // statements to be executed if condition is true
}
else{
    // statements to be executed if condition is false
}
*/

let age = 19,
  sal = 1000;

if (age >= 18) {
  console.log("Eligible for voting");
  console.log("Eligible for driving");
} else {
  console.log("Not eligible for voting");
  console.log("Not eligible for driving");
}

// ignore the else part
if (sal == 1000) console.log("Good");

// checking for a range
if (sal > 5000 && sal < 1000) console.log("Avg Salary");

// multiple conditions
if (age > 18) console.log("something");
else if (age == 10) console.log("10");
else if (age > 5) console.log("5");
else console.log("something else");
