// there are 3 elements in a loop
/*
    - Loop variable
    - Condition check
    - Iteration (loop variable)
   
*/

// simple loop of displaying numbers 1 - 10

// loop variable
let i = 1;
while (i < 11) {
  console.log(i);
  // increment the value of i by 1
  i++;
}

console.log("------------------------------------------");

// extract all characters from a string
let x = "hello",
  temp = "",
  idx = 0;
while (idx < x.length) {
  temp += x.charAt(idx);
  idx++;
}
console.log(temp);

// reverse of the String
idx = x.length - 1;
temp = "";
while (idx >= 0) {
  temp += x.charAt(idx);
  idx--;
}
console.log(temp);
